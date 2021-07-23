import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDb from "./config/connectDb"
import methodOverrride from "method-override"
import cors from "cors"

connectDb()

// routes
import postRouter from "./routers/post/postRouter"
import userRouter from "./routers/user/userRouter"

const app = express()
app.use(express.json())
// TODO: CHANGE THIS TO YOUR FRONTEND ORIGIN
app.use(cors())
app.use(express.static("views"))
app.use(methodOverrride("_method"))
app.set("view engine", "ejs")

app.use("/api/post", postRouter)
app.use("/api/user", userRouter)

const PORT = process.env.PORT ?? 5000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
