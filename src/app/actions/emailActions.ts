"use server"
import UserSubs from "../model/userSubs"
import { connectDB } from "@/config/db"
interface FormDATA {
  fullname: string
  email: string
}
export async function sendEmail(formDate: FormDATA) {
  const fullname = formDate["fullname"]
  const email = formDate["email"]
  await connectDB()
  try {
    if (!email) return null

    const foundUser = await UserSubs.findOne({ email }).lean()

    console.log(foundUser)

    if (!foundUser) {
      const createUser = new UserSubs({
        fullname,
        email,
      })
      await createUser.save()

      return
    }
    return
  } catch (error) {
    console.log(error)
  }
}
