import Post from "../models/posts.model.js";
import { cloudinary } from "../config/admin.js";

//Get Posts
export const getPosts = async (req, res, next) => {
  try {
    const { tag, sort } = req.query;
    let queryOptions = {};

    if (tag) {
      queryOptions.where = { tag };
    }

    if (sort) {
      queryOptions.order = [[sort, "ASC"]];
    }

    const posts = await Post.findAll(queryOptions);
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    next(error);
  }
};

//Get Post by ID
export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

//Create Post
export const createPost = async (req, res, next) => {
  try {
    const { title, description, tag } = req.body;
    const image = req.file;

    //Uploading image to Cloudinary via cloudinary.uploader.upload. Docs: https://cloudinary.com/documentation/image_upload_api_reference
    cloudinary.uploader.upload(image.path, async (error, result) => {
      if (error) {
        return next(error);
      }

      const post = await Post.create({
        title,
        description,
        tag,
        image: result.url,
      });

      res.status(201).json({ success: true, data: post });
    });
  } catch (error) {
    next(error);
  }
};

/* //Update Post
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    await post.update(req.body);
    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error) {
    next(error);
  }
};

//Delete Post
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (!post) {
      res.status(404).json({
        success: false,
        message: "Post not found",
      });
    }
    await post.destroy();
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};
 */
