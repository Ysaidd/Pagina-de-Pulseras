import mongoose, {Schema, Document} from "mongoose";

export interface IProduct extends Document{
    name: string,
    stock: number,
    price: number | 0,
    description: string,
    category: string,
    createAT: Date,
};

const ProductSchema: Schema = new Schema({
    name: {type: String, required: true},
    stock: {type: Number, required: true},
    price: {type: Number, default: 0},
    description: {type: String, required: true},
    category: {type: String, required: true},
},{
    timestamps: true,
})

export default mongoose.model<IProduct>("Product", ProductSchema);