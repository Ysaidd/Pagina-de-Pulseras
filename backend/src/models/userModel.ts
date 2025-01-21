import mongoose, {Schema, Document} from "mongoose";

export interface IUser extends Document{
    name: string, 
    email: string, 
    password: string,
    role: "admin" | "customer",
    createAt: Date;
};

const Userchema: Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, enum:["admin", "customer"], default: "customer"},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model<IUser>("User", Userchema);