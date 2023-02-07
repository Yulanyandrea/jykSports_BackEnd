import { Router } from "express";
import {
  handleCreateProduct,
  handleDeleteProduct,
  handleGetAllProduct,
handleGetProduct,
handleUpdateProduct,
handleFilterProduct} from './product.controller';
import { Auth } from '../../auth/auth.services';

const router=Router();
router.get('/', handleGetAllProduct);
router.get('/filter',handleFilterProduct);
router.get('/:id',handleGetProduct);
router.post('/',Auth, handleCreateProduct);
router.patch('/:id',Auth, handleUpdateProduct);
router.delete('/:id', Auth, handleDeleteProduct);
export default router;
