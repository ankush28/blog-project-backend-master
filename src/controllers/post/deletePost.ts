import { Handler } from "express"
import Post from "../../models/postModel"

const deletePost: Handler = async (req, res) => {
  try {
    const id = req.params.id
    await Post.findByIdAndDelete(id)
    res.json({ message: "success" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default deletePost
