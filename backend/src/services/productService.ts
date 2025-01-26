import Product, { IProduct, IProductFilters } from "../models/productModel";

export const createProduct = async (name: string,price: number,stock:number, description:string,category: string, descuento: number): Promise<IProduct> => {

    const newProduct = new Product({ name, price, stock, description, category, descuento });

    return await newProduct.save();
};

export const getProducts = async (): Promise<IProduct[]> =>{
    return await Product.find().lean();
}

export const getProductById = async (id: string): Promise<IProduct | null> =>{
    return await Product.findById(id).lean();
};

export const updateProduct = async (id: string,updateData: Partial<IProduct>): Promise<IProduct | null> => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true, runValidators: true }).lean();
};


export const deleteProduct = async (id: string): Promise<IProduct | null> =>{
    return await Product.findByIdAndDelete(id).lean();
}


export const getProcutsFiltered = async (filters: IProductFilters): Promise<{
    products: IProduct[],
    total: number,
    currentPage: number,
    totalPages: number,
}> =>{
    
    const { category, minPrice, maxPrice, keyword, sortBy = "createAt", order = "desc", page = 1, limit = 10} = filters;

    const query: any = {};

    if (category) query.category = category;
    if (minPrice || maxPrice){
        query.price = {}

        if(minPrice) query.price$gte = minPrice
        if(maxPrice) query.price$lte = maxPrice
    }

    if(keyword){
        query.$or = [
            { name: { $regex: keyword, $options: "i"}},
            { description: {$regex: keyword, $options: "i"}},
        ];
    }

    const sort: Record<string, 1 | -1> = {};

    if (sortBy === "price" || sortBy === "createdAt") {
        sort[sortBy] = order === "asc" ? 1 : -1;
    } else {
        throw new Error(`El campo para ordenar (${sortBy}) no es válido.`);
    }

    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
        Product.find(query).sort(sort).skip(skip).limit(limit).lean(), Product.countDocuments(query),
    ]) 

    const totalPages = Math.ceil(total / limit);

    return{
        products,
        total,
        currentPage: page,
        totalPages,
    };
};