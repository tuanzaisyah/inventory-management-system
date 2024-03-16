import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/add-inventory", verifyToken, addProduct);

router.put("/update-inventory/:id", verifyToken, updateProduct);

router.get("/:id", getProduct);

router.get("/", getProducts);

router.delete("/delete-inventory/:id", verifyToken, deleteProduct);

export default router;
