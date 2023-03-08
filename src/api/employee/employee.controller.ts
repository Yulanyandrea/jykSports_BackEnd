import { Request,Response, NextFunction} from 'express';
import Employee, {EmployeeDocument} from './employee.model';
import { createEmployee,
  deteleEmployee,
getAllEmployee,
getEmployee,
getEmployeeId,
updateEmployee} from './employee.services';

export async function handleGetAllEmployee(req:Request, res:Response, next:NextFunction) {
  try {
    const employee = await getAllEmployee();
    return res.status(200).json(employee)
  } catch (error) {
    return res.status(500).json(error)

  }

}

export async function handleCreateEmployee(req:Request, res:Response, next:NextFunction) {
  const data = req.body;
  try {
    const employee = await createEmployee(data)
    return res.status(200).json(employee)
  } catch (error:any) {
    return res.status(500).json(error.message)

  }
}

export async function handleGetEmployee(req:Request, res:Response, next:NextFunction) {
  const { id } = req.params;
  try {
    const getEmployee = await getEmployeeId(id);
    if(!getEmployee){
      return res.status(404).json({message:"Employee not found"})
    }
    return res.status(200).json(getEmployee)
  } catch (error) {
    return res.status(500).json(error)
  }

}

export async function handleUpdateEmployee(req:Request, res:Response, next:NextFunction) {
  const data = req.body;
  const { id } = req.params;
  try {
    const update = await updateEmployee(id, data)
    return res.status(201).json(update)
  } catch (error) {
    return res.status(500).json(error)

  }
}

export async function handleDeleteEmployee(req:Request, res:Response, next:NextFunction) {
  const { id } = req.params;
  try {
    const employee = await getEmployeeId(id);
    if(!employee){
      return res.status(404).json({message:"Employee not found"})
    }

    await employee.remove();
    return res.status(201).json({message:"Employee deleted"})

  } catch (error) {
    return res.status(500).json(error)
  }

}
