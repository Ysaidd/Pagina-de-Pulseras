import mongoose, {Schema, Document} from "mongoose";

export interface IProduct extends Document{
    name: string,
    cantidad: number,
    precio: number | 0,
    descripcion: string
};

const ProductSchema: Schema = new Schema({
    name: {type: String, required: true},
    cantidad: {type: Number, required: true},
    precio: {type: Number, default: 0},
    descripcion: {type: String, required: true}
})

export default mongoose.model<IProduct>("Producto", ProductSchema);