import express from "express";
import Product from "../models/products.js";
import { createProduct, deleteProduct, fetchProduct, fetchProducts, updateProduct } from "../controllers/products.js";

const router = express.Router();

router.get("/", fetchProducts);

router.get("/:id", fetchProduct);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
