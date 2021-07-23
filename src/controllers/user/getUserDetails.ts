import { Handler } from "express"
import User from "../../models/userModel"

const getUserDetails: Handler = async (req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id).lean().select("-password")
    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default getUserDetails
