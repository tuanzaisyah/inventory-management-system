import express from "express";
import {
  addSupplier,
  deleteSupplier,
  getSupplier,
  getSuppliers,
  updateSupplier,
} from "../controllers/supplier.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/add-supplier", verifyToken, addSupplier);

router.put("/update-supplier/:id", verifyToken, updateSupplier);

router.get("/:id", getSupplier);

router.get("/", getSuppliers);

router.delete("/delete-supplier/:id", verifyToken, deleteSupplier);

export default router;
