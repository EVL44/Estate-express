import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/", verifyToken, updatePost);
router.delete("/", verifyToken, deletePost);

export default router;