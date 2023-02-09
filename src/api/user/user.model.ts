import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

import { userProfileData } from './user.type';

export interface UserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string; // 1234 -> hash - SHA256 -> 64 chars -> 32 bytes ->
  role: 'USER' | 'ADMIN';
  userName:string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  createdAt: Date;
  updatedAt: Date;


  profile: userProfileData;
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema= new Schema({
  profilePicture:{
    type:String
  },
  firstName:{
    type:String,
    require:true,
  },
  lastName:{
    type:String,
    require:true,
  },
  email:{
    type:String,
    require:true,
    unique:true,
  },
  userName:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
    require:true,
    min:6,
  },
  role:{
    type:String,
    enum:['USER','ADMIN'],
    default: 'USER',
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
},
  {
    timestamps:true,
    versionKey:false

  });

// Virtuals
UserSchema.virtual('profile').get(function profile() {
  const { email, userName, role, profilePicture } = this;

  return {
    email,
    userName,
    role,
    profilePicture,
  };

});
// Middlewares
UserSchema.pre('save', async function save(next: Function) {
  const user = this as UserDocument;

  try {
    if(!user.isModified('password')) {
      return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);

    user.password = hash;
  } catch (error: any) {
    next(error);
  }
});


// Methods
async function comparePassword(this: UserDocument, candidatePassword: string, next: Function): Promise<boolean> {
  const user = this;

  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password)

    return isMatch;
  } catch (error: any) {
    next(error);
    return false;
  }
};

UserSchema.methods.comparePassword = comparePassword;

const User = model<UserDocument>('User', UserSchema);

export default User;
