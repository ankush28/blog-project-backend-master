import { Handler } from "express"
import User, { matchPassword } from "../../models/userModel"

const updateUser: Handler = async (req, res) => {
  try {
    const { username, oldPassword, newPassword, _id } = req.body
    if (!username || !oldPassword || !newPassword || !_id)
      throw Error("All Fields required!")
    const user = await User.findById(_id)
    if (!user) throw Error("User does not exist")
    // check if old password is correct
    const passwordMatches = await matchPassword(user.password, oldPassword)
    if (!passwordMatches) throw Error("Password is incorrect")
    Object.assign(user, { username, password: newPassword })
    await user.save()
    res.json(user)
  } catch (error) {
    console.log(error.message)
    res.status(400).json({ message: error.message })
  }
}

export default updateUser
