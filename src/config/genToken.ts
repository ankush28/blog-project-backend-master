import JWT from "jsonwebtoken"

type GenToken = (id: string) => [string | null, any]

const genToken: GenToken = (id) => {
  try {
    if (typeof process.env.JWT_SECRET !== "string")
      throw Error("JWT secret must be provided")
    const token = JWT.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: 604800,
    }) // 7 days
    return [token, null]
  } catch (error) {
    return [null, error.message]
  }
}

export default genToken
