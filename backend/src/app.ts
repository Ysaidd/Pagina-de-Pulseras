import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import productoRouter from "./routes/productos"
import userRoutes from "./routes/userRoutes"

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use("/api", productoRouter);
app.use(userRoutes);

export default app;