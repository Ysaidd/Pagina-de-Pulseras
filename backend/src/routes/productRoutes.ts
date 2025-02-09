import express, { Router } from "express";
import { createProductController, getProductsController, getProductByIdController, updateProductController, deleteProductController, getProductsFilteredControllers} from "../controllers/productController";
import upload from "../utils/imageUploader"


const router = express.Router();

router.post("/products/create", upload.array("images", 5), createProductController);
router.get("/products", getProductsController);
router.get("/products/:id", getProductByIdController);
router.patch("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);
router.get("/productsa", getProductsFilteredControllers);


export default router;