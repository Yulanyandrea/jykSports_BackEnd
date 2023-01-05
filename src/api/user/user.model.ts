import { Schema, Document, model } from "mongoose";
import { userProfileData } from './user.type';

export interface UserDocument extends Document{
  firstName:string;
  lastName:string;
  password:string;
  userName:string;
  email:string;
  role: 'USER'|'ADMIN';

  createdAt: Date;
  updateAt:Date;
  userProfile:userProfileData;
}

const UserSchema= new Schema({
  firstName:{
    type:String,
    require:true,
  },
  lastName:{
    type:String,
    require:true,
  },
  password:{
    type:String,
    require:true,
    min:6,
  },
  email:{
    type:String,
    require:true
  },
  username:{
    type:String
  },
  role:{
    type:String,
    require:true,
    enum:['USER','ADMIN']
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
},
  {
    timestamps:true,
    versionKey:false

  }
)

UserSchema.virtual('userProfile').get(function dataUser(){
  const { firstName, lastName, password, email, username, role}=this
  return {
    firstName,
    lastName,
    password,
    email,
    username,
    role
  }
})

const User=model<UserDocument>('User',UserSchema);
export default User;
