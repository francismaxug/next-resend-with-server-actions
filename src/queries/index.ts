import UserSubs from "@/app/model/userSubs";
import { replaceMongoIdInArray } from "@/lib/transform";

export async function getSubscribers() {
  try {
    const subscribers = await UserSubs.find({}).lean();
    return replaceMongoIdInArray(subscribers);
  } catch (e) {
    throw new Error((e as Error).message);
  }
}