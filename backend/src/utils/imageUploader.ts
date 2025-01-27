import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../uploads"));
    },
    filename: (req, file, cb) =>{
        const timestamp = Date.now();
        const uniqueName = `${timestamp}-${file.originalname}`;
        cb(null, uniqueName)
    },
});

const fileFilter = (req: any, file: any, cb: any) =>{
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];

    if(!allowedTypes.includes(file.mimetype)){
        cb(new Error("Tipo de archivo no permitido"), false);
    }else{
        cb(null, true)
    }
};

export const upload = multer({
    storage,
    fileFilter,
    limits:{fileSize: 5 * 1024 * 1024}
});