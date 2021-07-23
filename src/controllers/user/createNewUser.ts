import { Handler } from "express"
import User from "../../models/userModel"

const createNewUser: Handler = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password)
      throw Error("All field required")
    const newUser = await User.create(req.body)
    res.json(newUser)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default createNewUser
