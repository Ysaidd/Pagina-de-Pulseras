import express, { Router } from "express";
import upload from "../utils/imageUploader"
import { ProductController } from "../controllers/productController";
import { ProductService } from "../services/productService";

const productService = new ProductService();
const productController = new ProductController(productService);

const router = express.Router();

router.post("/products/create", upload.array("images", 5), (req, res) => productController.createProduct(req, res));
router.get("/products", (req, res) => productController.getProducts(req, res));
router.get("/products/:id", (req, res) => productController.getProductById(req, res));
router.patch("/products/:id", (req, res) => productController.updateProduct(req, res));
router.delete("/products/:id", (req, res) => productController.deleteProduct(req, res));
router.get("/productsa", (req, res) => productController.getProductsFiltered(req, res));


export default router;