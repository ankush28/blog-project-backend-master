import { Handler } from "express"
import Post from "../../models/postModel"
import marked from "marked"

const getOnePost: Handler = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) throw Error("Id is required")
    const post = await Post.findById(id).lean()
    if (!post) throw Error("Post does not exist!")
    res.json(post)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getOnePost
