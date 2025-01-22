import express, { Router } from "express";
import { createProduct } from "../controllers/productController";

const router = express.Router();

router.post("/product/create", createProduct);

export default router;