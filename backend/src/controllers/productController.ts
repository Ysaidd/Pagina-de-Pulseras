import { Request, Response } from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct} from "../services/productService"

export const createProductController = async (req: Request, res: Response) =>{
    try{
        const {name, stock, price, description, category} = req.body

        const newProduct = await createProduct(name, stock, price, description, category);
        res.status(201).json({
            message: "Producto creado correctamente",
            product: newProduct
        })
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error message";
        res.status(500).json({message: errorMessage});
    }
};

export const getProductsController = async (req: Request, res: Response) =>{
    try{
        const listProducts = await getProducts()
        res.status(200).json({
            listProducts
        })
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error message";
        res.status(500).json({message: errorMessage});
    }
}