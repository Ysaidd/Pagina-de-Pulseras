import express, { Router } from "express";
import { createProductController, getProductsController, getProductByIdController, updateProductController, deleteProductController, getProductsFilteredControllers, uploadProductImageController} from "../controllers/productController";
import {upload} from "../utils/imageUploader"


const router = express.Router();

router.post("/products/create", createProductController);
router.get("/products", getProductsController);
router.get("/products/:id", getProductByIdController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);

router.get("/productsa", getProductsFilteredControllers);
router.post("/products/:id/images", upload.array("images", 5), uploadProductImageController); // Máximo 5 imágenes


export default router;