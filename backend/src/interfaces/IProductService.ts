import { IProduct, IProductFilters } from "../models/productModel";

export interface IProductService {
    createProduct(name: string, price: number, stock: number, description: string, category: string, descuento: number, images: string[]): Promise<IProduct>;
    getProducts(): Promise<IProduct[]>;
    getProductById(id: string): Promise<IProduct | null>;
    updateProduct(id: string, updateData: Partial<IProduct>): Promise<IProduct | null>;
    deleteProduct(id: string): Promise<IProduct | null>;
    getProductsFiltered(filters: IProductFilters): Promise<{
        products: IProduct[],
        total: number,
        currentPage: number,
        totalPages: number,
    }>;
}