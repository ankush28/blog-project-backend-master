import { Document, SchemaTimestampsConfig } from "mongoose"

export interface Post extends Document, SchemaTimestampsConfig {
  title: string
  content: string
  description: string
  img: string
}

export interface User extends Document, SchemaTimestampsConfig {
  username: string
  password: string
  isAdmin: boolean
}
