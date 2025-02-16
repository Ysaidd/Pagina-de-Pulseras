// controllers/ProductController.ts
import { Request, Response } from "express";
import { IProductService } from "../interfaces/IProductService";

export class ProductController {
    constructor(private productService: IProductService) {}

    async createProduct(req: Request, res: Response) {
        try {
            const { name, stock, price, description, category, descuento } = req.body;
            let images: string[] = [];

            if (req.files && (req.files as Express.Multer.File[]).length) {
                images = (req.files as Express.Multer.File[]).map((file) => `/uploads/${file.filename}`);
            }

            const newProduct = await this.productService.createProduct(name, price, stock, description, category, descuento, images);
            res.status(201).json({ message: "Producto creado correctamente", product: newProduct });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al crear el producto";
            res.status(500).json({ message: errorMessage });
        }
    }

    async getProducts(req: Request, res: Response) {
        try {
            const listProducts = await this.productService.getProducts();
            res.status(200).json({ listProducts });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al obtener los productos";
            res.status(500).json({ message: errorMessage });
        }
    }

    async getProductById(req: Request, res: Response) {
        try {
            const product = await this.productService.getProductById(req.params.id);
            res.status(200).json({ product });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al obtener el producto";
            res.status(500).json({ message: errorMessage });
        }
    }

    async updateProduct(req: Request, res: Response) {
        try {
            const product = await this.productService.updateProduct(req.params.id, req.body);
            res.status(200).json(product);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al actualizar el producto";
            res.status(500).json({ message: errorMessage });
        }
    }

    async deleteProduct(req: Request, res: Response) {
        try {
            await this.productService.deleteProduct(req.params.id);
            res.status(200).json({ message: "Producto eliminado correctamente" });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al eliminar el producto";
            res.status(500).json({ message: errorMessage });
        }
    }

    async getProductsFiltered(req: Request, res: Response) {
        try {
            const { category, minPrice, maxPrice, keyword, sortBy, order, page, limit } = req.query;
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
            const data = await this.productService.getProductsFiltered(filters);
            res.status(200).json(data);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "Error al filtrar los productos";
            res.status(400).json({ message: errorMessage });
        }
    }
}