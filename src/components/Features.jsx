import { FiCheckCircle, FiCalendar, FiTrendingUp 
} from "react-icons/fi"

function Features() {

  const features = [
    {
      icon: <FiCheckCircle size={24} />,
      title: "Task Management",
      description: "Create, organize, and manage all your tasks in one place."
    },
    {
      icon: <FiCalendar size={24} />,
      title: "Deadline Tracking",
      description: "Keep track of important deadlines and never miss a task."
    },
    {
      icon: <FiTrendingUp size={24} />,
      title: "Track Your Progress",
      description: "See how much work you've completed and stay motivated."
    }
  ]

  return (
    <section id="features" className="bg-white px-6 py-16 md:py-20">
    <div className="mx-auto max-w-6xl">
    <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-gray-900">
     Everything You Need to Stay Organized
    </h2>
    <p className="mt-4 text-gray-600">
    Simple tools to help you manage your work and stay productive.
    </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
    {features.map((feature, index) => (
    <div
    key={index}
    className="rounded-lg border border-gray-200 p-6">
    <div className="mb-4 text-blue-600">
    {feature.icon}
     </div>
    <h3 className="mb-2 text-lg font-semibold text-gray-900">
    {feature.title}
    </h3>
    <p className="leading-7 text-gray-600">
    {feature.description}
    </p>
    </div>
    ))}
   </div>
    </div>
    </section>
  )
}

export default Features