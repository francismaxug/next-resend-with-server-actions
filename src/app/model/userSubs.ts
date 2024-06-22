import { Schema, model, models } from "mongoose"
import { IUserSchema, IUserModel } from "@/lib/types"

const userSubsSchema = new Schema<IUserSchema>({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  unsubscribe: { type: Boolean, required: true, default: false},
})

const UserSubs =
  models.UserSubs || model<IUserSchema, IUserModel>("UserSubs", userSubsSchema)

  export default UserSubs
