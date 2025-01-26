import { Request, Response } from "express";
import {createProduct, getProducts, getProductById, updateProduct, deleteProduct, getProcutsFiltered} from "../services/productService"

export const createProductController = async (req: Request, res: Response) =>{
    try{
        const {name, stock, price, description, category, descuento } = req.body

        const newProduct = await createProduct(name, stock, price, description, category, descuento);
        res.status(201).json({
            message: "Producto creado correctamente",
            product: newProduct
        })
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error al crear el producto";
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
        const errorMessage = error instanceof Error ? error.message : "Error al obtener los productos";
        res.status(500).json({message: errorMessage});
    }
}
 
export const getProductByIdController = async (req: Request, res: Response) =>{
    try{
        const product = await getProductById(req.params.id);

        res.status(200).json({
            product: product
        })
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error al obtener el producto";
        res.status(500).json({message: errorMessage});
    }
}

export const updateProductController = async (req: Request, res: Response) =>{
    try{
        const product = await updateProduct(req.params.id, req.body)
        
        res.status(200).json(
            product
        )
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error al actualizar el producto";
        res.status(500).json({message: errorMessage});
    }
}

export const deleteProductController = async(req: Request, res: Response) =>{
    try{
        const product = await deleteProduct(req.params.id);

        res.status(200).json({
            message: `Producto eliminado correctamente`
        })
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error al eliminar el producto";
        res.status(500).json({message: errorMessage});
    }
}

export const getProductsFilteredControllers = async(req: Request, res: Response) =>{
    try {
        const {category, minPrice, maxPrice, keyword, sortBy, order, page, limit} = req.query;

        const filters = {
            category: category as string,
            minPrice: minPrice ? parseFloat(minPrice as string) : undefined,
            maxPrice: maxPrice ? parseFloat(maxPrice as string) : undefined,
            keyword: keyword as string,
            sortBy: sortBy as "price" | "createdAt",
            order: order as "asc" | "desc",
            page: page ? parseInt(page as string) : 1,
            limit: limit ? parseInt(limit as string) : 10,
        };

        const data = await getProcutsFiltered(filters);

        res.status(200).json(data);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error al tirar la query";
        res.status(400).json({message: errorMessage});
    }
}