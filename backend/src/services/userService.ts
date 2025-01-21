import User from "../models/userModel";

export const createUserService = async (name: string, email:string, password: string) =>{
    try{
        const newUser = new User({
            name,
            email,
            password, 
            role: "customer",
        });
    
        await newUser.save()

        return newUser
    } catch (error:unknown) {
        if(error instanceof Error){
            throw new Error('Error al crear el usuario: ' + error.message);
        }else{
            throw new Error("Ocurrió un error inesperado")
        }
    }
};