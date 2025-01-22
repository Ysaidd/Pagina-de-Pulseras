import Product from "../models/productModel";

export const createProductService = async (name: string, cantidad: number, precio: number, descripcion: number) => {
    try{
        const newProduct = new Product({
            name,
            cantidad,
            precio, 
            descripcion,
        })

        await newProduct.save()

        return newProduct
    } catch (error:unknown) {
        if(error instanceof Error){
            throw new Error('Error al crear el producto: waza' + error.message);
        }else{
            throw new Error("Ocurrió un error inesperado")
        }
    }
}