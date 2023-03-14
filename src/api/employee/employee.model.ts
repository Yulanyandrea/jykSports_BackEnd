import { Schema, Document, model } from "mongoose";

export interface EmployeeDocument extends Document {
  name: string;
  lastName: string;
  charge: string;
  startDate: Date;
  endDate: Date;

  dateRate: {
    workMonday: number;
    workTuesday: number;
    workWednesday: number;
    workThursday: number;
    workFriday: number;
    workSaturday: number;
    workSunday: number;
  };
  pay: number;

  createdAt: Date;
  updateAt: Date;
}

const EmployeeSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      require: true,
    },

    dateRate: {
      workMonday: {
        type: Number,
      },
      workTuesday: {
        type: Number,
      },
      workWednesday: {
        type: Number,
      },
      workThursday: {
        type: Number,
      },
      workFriday: {
        type: Number,
      },
      workSaturday: {
        type: Number,
      },
      workSunday: {
        type: Number,
      },
    },
    pay: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

EmployeeSchema.pre<EmployeeDocument>(
  "save",
  async function save(next: Function) {


    let payment = 0;
    if (
      this.dateRate.workMonday ||
      this.dateRate.workTuesday ||
      this.dateRate.workWednesday ||
      this.dateRate.workThursday ||
      this.dateRate.workFriday ||
      this.dateRate.workSaturday ||
      this.dateRate.workSunday
    ) {
      payment +=
        this.dateRate.workMonday +
        this.dateRate.workTuesday +
        this.dateRate.workWednesday +
        this.dateRate.workThursday +
        this.dateRate.workFriday +
        this.dateRate.workSaturday +
        this.dateRate.workSunday;
    }
    this.pay = payment;
    next();
  }
);

const Employee = model<EmployeeDocument>("Employee", EmployeeSchema);
export default Employee;
