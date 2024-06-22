import Subscribers from "@/components/Subscribers"
import SubscriptionForm from "@/components/SubscriptionForm"

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4">
      <SubscriptionForm />
      <Subscribers />
    </div>
  )
}

export default Home
