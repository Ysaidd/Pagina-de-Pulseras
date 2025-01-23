import express, { Router } from "express";
import { createProductController, getProductsController, getProductByIdController } from "../controllers/productController";

const router = express.Router();

router.post("/products/create", createProductController);
router.get("/products", getProductsController);
router.get("/products/:id", getProductByIdController);

export default router;