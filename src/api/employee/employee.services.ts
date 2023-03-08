import { DocumentDefinition, FilterQuery } from "mongoose";
import Employee, {EmployeeDocument} from "./employee.model";

export function getAllEmployee(){
  return Employee.find()
}

export function getEmployeeId(id:string){
  const employee = Employee.findById(id);
  return employee
}

export function getEmployee(filter:FilterQuery<EmployeeDocument>){
  const employee = Employee.findOne(filter);
  return employee
}

export function createEmployee(employee:DocumentDefinition<Omit<EmployeeDocument, 'createAt'|'updateAt'>>){
  return Employee.create(employee)
}

export function updateEmployee(id:string, employee:DocumentDefinition<Omit<EmployeeDocument, 'createAt'|'updateAt'>>){
  const updateEmployee = Employee.findByIdAndUpdate(id,employee,{new:true})
  return updateEmployee
}

export function deteleEmployee(id:string){
  const deleteEmployee = Employee.findByIdAndDelete(id);
  return deleteEmployee
}
