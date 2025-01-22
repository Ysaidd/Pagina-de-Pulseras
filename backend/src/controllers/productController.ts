import { Request, Response } from "express";
import { createProductService} from "../services/productService"

export const createProduct = async (req: Request, res: Response) =>{
    try{
        const {name, cantidad, precio, descripcion } = req.body

        const newProduct = await createProductService(name, cantidad, precio, descripcion);

        res.status(201).json({
            message: "Producto creado correctamente",
            product: newProduct
        })
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error message";
        res.status(500).json({message: errorMessage});
    }
}