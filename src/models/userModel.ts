import mongoose from "mongoose"
import { User } from "../types"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.pre("save", async function (next) {
  // if password is not changed
  if (!this.isModified("password")) return next()

  // if password is changed
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

type MatchPassword = (
  oldPassword: string,
  enteredPassword: string
) => Promise<boolean>

export const matchPassword: MatchPassword = async (
  oldPassword,
  enteredPassword
) => await bcrypt.compare(enteredPassword, oldPassword)

const User = mongoose.model<User>("User", userSchema)

export default User
