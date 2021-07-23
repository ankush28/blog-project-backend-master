import { Handler } from "express"
import Post from "../../models/postModel"

const getAllPosts: Handler = async (req, res) => {
  try {
    const posts = await Post.find().lean().sort({ createdAt: "desc" })
    res.json(posts)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getAllPosts
