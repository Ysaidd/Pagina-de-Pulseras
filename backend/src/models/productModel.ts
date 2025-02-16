import mongoose, { Schema, Document } from "mongoose";

export type ProductCategory = "anillo" | "pulsera" | "collar" | "zarcillo";

export interface IProductFilters {
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    keyword?: string;
    sortBy?: "price" | "createAt";
    order?: "asc" | "desc";
    page?: number;
    limit?: number;
}

export interface IProduct extends Document {
    name: string;
    stock: number;
    price: number;
    description: string;
    category: ProductCategory;
    descuento: number;
    images: string[];
    createAT: Date;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    stock: { type: Number, required: true },
    price: { type: Number, default: 0 },
    description: { type: String, required: true },
    category: { type: String, required: true, enum: ["pulsera", "collar", "anillo", "zarcillo"] },
    descuento: { type: Number, default: 0 },
    images: { type: [String], default: [] },
}, {
    timestamps: true,
});

export default mongoose.model<IProduct>("Product", ProductSchema);