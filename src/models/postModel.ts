import mongoose from "mongoose"
import { Post } from "../types"

const postSchema = new mongoose.Schema<Post>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model<Post>("Post", postSchema)

export default Post
