import { Handler } from "express"
import JWT from "jsonwebtoken"
import User from "../models/userModel"

const auth: Handler = async (req, res, next) => {
  try {
    let token
    // the token must start with bearer
    if (!req.headers.authorization?.startsWith("Bearer "))
      throw Error("Token is not provided")
    // remove bearer and get token alone
    token = req.headers.authorization.split(" ")[1]
    // checks if the token is valid
    if (
      !token ||
      typeof process.env.JWT_SECRET !== "string" ||
      typeof token !== "string"
    )
      throw Error("Token must be provided")

    const decoded: any = JWT.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded.id).select("-password")
    if (!user || !user.isAdmin) throw Error("Not Authorized!")
    req.user = user
    next()
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message })
  }
}

export default auth
