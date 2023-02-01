import { Schema, Document, model } from "mongoose";

export interface ProductDocument extends Document{
  image:string;
  reference:string;
  brand:string;
  color:string;
  size:number;
  amount:number;

  createdAt: Date;
  updateAt:Date;

}

const ProductSchema= new Schema({
  image:{
    type:String
  },
  reference:{
    type:String,
    require:true,
  },
  brand:{
    type:String,
    require:true,
  },
  color:{
    type:String,
    require:true,
  },
  size:{
    type:Number,
    require:true,
  },
  amount:{
    type:Number,
    require:true,
  }
},{
    timestamps:true,
    versionKey:false
  })

 const Product= model<ProductDocument>('Product', ProductSchema);
 export default Product;
