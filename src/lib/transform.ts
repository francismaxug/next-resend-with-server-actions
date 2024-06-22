interface Items {
  fullname: string
  email: string
  unsubscribe: boolean
  _id: string
  createdAt: Date
}
export const replaceMongoIdInArray = (array: any) => {
  const mappedArray = array
    .map((item: Items) => {
      return {
        id: item._id.toString(),
        ...item,
      }
    })
    .map(({ _id, ...rest }: { _id: string }) => rest)

  return mappedArray
}
