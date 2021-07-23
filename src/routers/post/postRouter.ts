import express from "express"
import createPost from "../../controllers/post/createPost"
import deletePost from "../../controllers/post/deletePost"
import getAllposts from "../../controllers/post/getAllPosts"
import getOnePost from "../../controllers/post/getOnePost"
import updatePost from "../../controllers/post/updatePost"
import auth from "../../middleware/auth"
const router = express.Router()

router
  // /post/
  .route("/")
  // GET
  //all posts
  .get(getAllposts)
  // POST
  // create post
  .post(auth, createPost)

// /post/:id
router
  .route("/:id")
  // GET /post/:id
  // get one post
  .get(getOnePost)
  // Update one post
  // PUT
  .put(auth, updatePost)
  // delete post
  // DELETE /post/:id
  .delete(auth, deletePost)

export default router
