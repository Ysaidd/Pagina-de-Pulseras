import app from "./app"
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT || 3000;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/miapp'

mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log('Error al conectar a la base de datos:', error));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});