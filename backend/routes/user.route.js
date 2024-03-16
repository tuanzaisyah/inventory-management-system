import express from "express";
import { getUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);

router.get("/:id", getUser);

export default router;
