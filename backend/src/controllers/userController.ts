import { Request, Response} from "express";
import { createUserService } from "../services/userService";

export const createUser = async (req: Request, res: Response) =>{

    try{
        const { name, email, password} = req.body;

        const newUser = await createUserService(name, email, password);

        res.status(201).json({
            message:"Usuario creado correctamente",
            user: newUser,
        });
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : "Error message";
        res.status(500).json({message: errorMessage});
    }
};