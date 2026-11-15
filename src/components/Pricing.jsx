function Pricing() {

  const plans = [
    {
      name: "Free",
      price: "₹0",
      description: "For individuals getting started.",
      features: [
        "Basic task management",
        "Deadline tracking",
        "Progress overview"
      ]
    },
    {
      name: "Pro",
      price: "₹199",
      description: "For people who need more flexibility.",
      features: [
        "Everything in Free",
        "Unlimited tasks",
        "Priority support"
      ]
    }
  ]

  return (
    <section id="pricing" className="bg-white px-6 py-16 md:py-20">
    <div className="mx-auto max-w-5xl">
    <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-gray-900">
      Simple Pricing
    </h2>
    <p className="mt-4 text-gray-600">
     Choose a plan that works for you.
    </p>
   </div>

    <div className="grid gap-8 md:grid-cols-2">
    {plans.map((plan) => (
    <div
    key={plan.name}
    className="rounded-lg border border-gray-200 p-8">
    <h3 className="text-xl font-semibold text-gray-900">
    {plan.name}
    </h3>

    <p className="mt-3 text-3xl font-bold text-gray-900">
    {plan.price}
     <span className="text-sm font-normal text-gray-500">
     /month
    </span>
    </p>

    <p className="mt-3 text-gray-600">
    {plan.description}
    </p>

    <ul className="mt-6 space-y-3">
    {plan.features.map((feature) => (
    <li key={feature} className="text-gray-700">
    {feature}
    </li>
    ))}
    </ul>

    <a
    href="#contact"
    className="mt-8 block rounded-lg bg-blue-600 px-5 
    py-3 text-center font-medium text-white hover:bg-blue-700">
    Get Started
    </a>
    </div>
    ))}
    </div>
      </div>
    </section>
  )
}

export default Pricing