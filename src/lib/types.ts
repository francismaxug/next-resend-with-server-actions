import { Document, Types, Model } from "mongoose"
export interface IUserSubscribe {
  fullname: string
  email: string
  unsubscribe: boolean
}

export interface IUserSchema extends IUserSubscribe, Document {
  _id: Types.ObjectId
  createdAt: Date
}

export interface IUserModel extends Model<IUserSchema> {}
