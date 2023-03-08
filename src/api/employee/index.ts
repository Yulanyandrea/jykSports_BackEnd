import { Router } from "express";
import { handleCreateEmployee,
handleDeleteEmployee,
handleGetAllEmployee,
handleGetEmployee,
handleUpdateEmployee} from './employee.controller';

const router = Router();
router.get('/', handleGetAllEmployee);
router.get('/:id', handleGetEmployee);
router.post('/', handleCreateEmployee);
router.patch('/:id', handleUpdateEmployee);
router.delete('/:id', handleDeleteEmployee);
export default router;
