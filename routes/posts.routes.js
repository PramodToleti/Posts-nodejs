import { Router } from "express";
import multer from "multer";
import * as postsController from "../controllers/posts.controller.js";

const router = Router();
const upload = multer({
  dest: "uploads/",
});

router.get("/", postsController.getPosts);
router.get("/:id", postsController.getPost);
router.post("/", upload.single("image"), postsController.createPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);

export default router;
