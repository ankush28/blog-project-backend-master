import express from "express"
import createNewUser from "../../controllers/user/createNewUser"
import getUserDetails from "../../controllers/user/getUserDetails"
import loginUser from "../../controllers/user/loginUser"
import updateUser from "../../controllers/user/updateUser"
import auth from "../../middleware/auth"
const router = express.Router()

// /user
router
  .route("/")
  // create new user
  // POST /user
  .post(createNewUser)

router
  .route("/login")
  // /user/login
  // POST
  // logs in user
  .post(loginUser)

router
  .route("/:id")
  // /user/:id
  // GET
  // gets user details
  .get(auth, getUserDetails)
  // update user
  // PUT /user
  .put(auth,updateUser)

export default router
