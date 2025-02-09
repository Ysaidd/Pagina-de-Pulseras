import multer from "multer";
import path from "path";
import fs from "fs";

const uploadPath = path.join(__dirname, "..", "..", "uploads"); // Sube un nivel más para evitar guardarlo en "src/uploads"

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath); // Guardamos en "backend/uploads"
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage });

export default upload;
