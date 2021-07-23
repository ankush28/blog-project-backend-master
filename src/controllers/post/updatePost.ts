import { Handler } from "express"
import Post from "../../models/postModel"

const updatePost: Handler = async (req, res) => {
  try {
    const id = req.params.id
    if (!id) throw Error("No Id provided")
    const post = await Post.findById(id)
    if (!post) throw Error("Post does not exist")
    Object.assign(post, req.body)
    await post.save()
    res.json({ message: "success" })
  } catch (error) {
    res.json({ message: error.message })
  }
}

export default updatePost
