import { Router } from "express";
import {
  handleCreateProduct,
  handleDeleteProduct,
  handleGetAllProduct,
handleGetProduct,
handleUpdateProduct} from './product.controller';

const router=Router();
router.get('/',handleGetAllProduct);
router.get('/:id',handleGetProduct);
router.post('/',handleCreateProduct);
router.patch('/:id',handleUpdateProduct);
router.delete('/:id',handleDeleteProduct);
