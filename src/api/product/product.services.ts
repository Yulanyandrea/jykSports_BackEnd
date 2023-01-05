import { DocumentDefinition, FilterQuery } from "mongoose";
import Product, {ProductDocument} from "./product.model";

export function getAllProducts(){
  return Product.find();
}

export function getProductById(id:string){
  const product=Product.findById(id);
  return product
}

export function getProduct(filter:FilterQuery<ProductDocument>){
  const product=Product.findOne(filter);
  return product
}

export function createProduct(product:DocumentDefinition<Omit<ProductDocument, 'createAt'|'updateAt'>>){
  return Product.create(product)
}

export function updateProduct(id:string,product:DocumentDefinition<Omit<ProductDocument, 'createAt'|'updateAt'>>){
  const updateProduct=Product.findByIdAndUpdate(id,product,{new:true})
  return updateProduct
}

export function deleteProduct(id:string){
  const deleteProduct=Product.findByIdAndDelete(id);
  return deleteProduct
}
