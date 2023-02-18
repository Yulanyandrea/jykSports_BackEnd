import { Router } from "express";
import {
  handleCreateProduct,
  handleDeleteProduct,
  handleGetAllProduct,
handleGetProduct,
handleUpdateProduct,
handleFilterProduct} from './product.controller';
import { Auth } from '../../auth/auth.services';
import { handleRole } from '../../auth/auth.services';

const router=Router();
router.get('/', handleGetAllProduct);
router.get('/filter',handleFilterProduct);
router.get('/:id',handleGetProduct);
router.post('/',Auth, handleCreateProduct);
router.patch('/:id',Auth, handleRole(['ADMIN']), handleUpdateProduct);
router.delete('/:id', Auth, handleRole(['ADMIN']), handleDeleteProduct);
export default router;
