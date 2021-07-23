import { Handler } from "express-serve-static-core"
import genToken from "../../config/genToken"
import User, { matchPassword } from "../../models/userModel"

// /user/login
// POST

const loginUser: Handler = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
      // increases performance .lean()
      .lean()
    if (!user) throw Error("username does not exist!")
    const passwordMatches = await matchPassword(
      user.password,
      req.body.password
    )
    if (!passwordMatches) throw Error("Wrong password")
    const [token, error] = genToken(user._id)
    if (error) throw Error("Error generating token for user.")

    // send the data to the user with the generated token
    // for subsequent requests
    const sendData = {
      _id: user._id,
      username: user.username,
      token,
    }
    res.json(sendData)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export default loginUser
