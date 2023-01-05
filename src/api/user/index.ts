import { Router } from "express";
import { handleCreateUser,
  handleDeleteUser,
handleGetAllUsers,
handleGetUser,
handleUpdateUser
} from './user.controller';

const router= Router()

router.get('/',handleGetAllUsers);
router.get('/:id', handleGetUser);
router.post('/',handleCreateUser);
router.patch('/:id',handleUpdateUser);
router.delete('/:id',handleDeleteUser);
export default router;
