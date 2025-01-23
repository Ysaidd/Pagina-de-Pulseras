import Product, { IProduct } from "../models/productModel";

export const createProduct = async (name: string,price: number,stock:number, description:string,category: string): Promise<IProduct> => {

    const newProduct = new Product({ name, price, stock, description, category });

    return await newProduct.save();
};

export const getProducts = async (): Promise<IProduct[]> =>{
    return await Product.find().lean();
}

export const getProductById = async (id: string): Promise<IProduct | null> =>{
    return await Product.findById(id).lean();
}

export const updateProduct = async (id:string, updateData: Partial<IProduct>): Promise<IProduct | null> =>{
    return await Product.findByIdAndUpdate(id, updateData, {new: true, runValidators: true }).lean();
}

export const deleteProduct = async (id: string): Promise<IProduct | null> =>{
    return await Product.findByIdAndDelete(id).lean();
}