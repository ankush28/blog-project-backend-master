import { Handler } from "express"
import Post from "../../models/postModel"

const createPost: Handler = async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.content ||
      !req.body.description ||
      !req.body.img
    )
      throw Error("All fields required")
    const newPost = await Post.create({
      title: req.body.title,
      ...req.body,
    })
    res.json(newPost)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createPost
