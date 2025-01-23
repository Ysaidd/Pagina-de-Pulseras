import express, { Router } from "express";
import { createProductController, getProductsController } from "../controllers/productController";

const router = express.Router();

router.post("/product/create", createProductController);
router.get("/products", getProductsController);

export default router;