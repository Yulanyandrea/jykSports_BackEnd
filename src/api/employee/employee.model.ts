import { Schema, Document, model } from "mongoose";


export interface EmployeeDocument extends Document{
  name:string;
  lastName:string;
  charge:string;
  startDate:Date;
  endDate:Date;

  dateRate :{
    workMonday: number;
    workTuesday: number;
    workWednesday: number;
    workThursday: number;
    workFriday: number;
    workSaturday: number;
    workSunday: number;
  };
  pay:number;

  createdAt: Date;
  updateAt:Date;

}

const EmployeeSchema= new Schema({
  name:{
    type:String,
    require:true
  },
  lastName:{
    type:String,
    require:true,
  },
  charge:{
    type:String,
    require:true,
  },
  startDate:{
    type:Date,
    require:true,
  },
  endDate:{
    type:Date,
    require:true,

  },
  dateRate:{
    workMonday:{
      type:Number,

    },
    workTuesday:{
      type:Number,

    },
    workWednesday:{
      type:Number,

    },
    workThursday:{
      type:Number,

    },
    workFriday:{
      type:Number,

    },
    workSaturday:{
      type:Number,

    },
    workSunday:{
      type:Number,
    }

  },
  pay:{
    type:Number
  },

},{
    timestamps:true,
    versionKey:false
  })

  EmployeeSchema.pre<EmployeeDocument>('save', async function save(next:Function) {
    const startDate = new Date(this.startDate);
    const endDate = new Date(this.endDate);

    let payment = 0;
    for(let i = startDate; i<= endDate; i.setDate(i.getDate()+1)){
      const week = i.getDay();

      if(week ===1 && this.dateRate.workMonday>0){
        payment += this.dateRate.workMonday;

      }else if(week ===2 && this.dateRate.workTuesday>0){
        payment += this.dateRate.workTuesday;
      }else if(week ===3 && this.dateRate.workWednesday>0){
        payment += this.dateRate.workWednesday;
      }else if(week ===4 && this.dateRate.workThursday>0){
        payment += this.dateRate.workThursday;
      }else if(week ===5 && this.dateRate.workFriday>0){
        payment += this.dateRate.workFriday;
      }else if(week ===6 && this.dateRate.workSaturday>0){
        payment += this.dateRate.workSaturday;
      }else if(week ===7 && this.dateRate.workSunday>0){
        payment += this.dateRate.workSunday;
      }

    }
    this.pay = payment;
    next();
  })

  const Employee= model<EmployeeDocument>('Employee', EmployeeSchema);
  export default Employee;
