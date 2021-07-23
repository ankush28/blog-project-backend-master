import { Handler } from "express"
import marked from "marked"
import Post from "../../models/postModel"

const dashboard: Handler = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: "desc" })

    const user = req.user

    posts.forEach((post) => {
      post.content = marked(post.content)
    })

    res.render("dashboard", {
      posts,
      user,
    })
  } catch (error) {
    res.status(400).redirect("/")
  }
}

export default dashboard
