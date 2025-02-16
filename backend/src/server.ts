import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/miapp';

const uploadDir = path.join(__dirname, "..", "uploads");

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log('Error al conectar a la base de datos:', error));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});