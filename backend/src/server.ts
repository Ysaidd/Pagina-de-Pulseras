import app from "./app"
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/miapp')
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log('Error al conectar a la base de datos:', error));


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});