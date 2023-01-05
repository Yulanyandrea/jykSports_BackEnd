import { Request,Response, NextFunction} from 'express';
import { createProduct,getAllProducts,getProductById, updateProduct } from './product.services';

export async function handleGetAllProduct(req:Request, res:Response, next:NextFunction) {
  try {
    const products= await getAllProducts();
    return res.status(200)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export async function handleCreateProduct(req:Request, res:Response, next:NextFunction) {
  const data=req.body;
  try {
    const product=await createProduct(data)
    return res.status(200).json(product)
  } catch (error:any) {
    return res.status(500).json(error.message)
  }

}

export async function handleGetProduct(req:Request, res:Response, next:NextFunction) {
  const { id }=req.params;
  try {
    const getProduct=await getProductById(id);
    if(!getProduct){
      return res.status(404).json({message:"Product not found"})
    }
    return res.status(200).json(getProduct)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export async function handleUpdateProduct(req:Request, res:Response, next:NextFunction) {
  const data=req.body;
  const { id }=req.params;
  try {
    const update= await updateProduct(id,data);
    return res.status(201).json(update)
  } catch (error) {
    return res.status(500).json(error)

  }

}

export async function handleDeleteProduct(req:Request, res:Response, next:NextFunction) {
  const { id }=req.params;
  try {
    const product=await getProductById(id);
    if(!product){
      return res.status(404).json({message:"product not found"})
    }
    return res.status(201).json({message:"product deleted"})
  } catch (error) {
    return res.status(500).json(error)
  }
}
