function HowItWorks() {

  const steps = [
    {
      number: "01",
      title: "Create Your Tasks",
      description: "Add the tasks you need to complete and organize your work."
    },
    {
      number: "02",
      title: "Set Your Priorities",
      description: "Keep track of deadlines and decide which tasks need attention first."
    },
    {
      number: "03",
      title: "Track Your Progress",
      description: "Mark tasks as completed and see how much you've achieved."
    }
  ]

  return (
 <section id="how-it-works" className="bg-gray-50 px-6 py-16 md:py-20">
 <div className="mx-auto max-w-6xl">
 <div className="mb-12 text-center">
 <h2 className="text-3xl font-bold text-gray-900">
 How TaskFlow Works
</h2>
<p className="mt-4 text-gray-600">
 Get started in three simple steps.
</p>
</div>

<div className="grid gap-8 md:grid-cols-3">
{steps.map((step) => (
<div key={step.number} className="text-center">
<div className="mx-auto mb-4 flex h-12 w-12 items-center
 justify-center rounded-full bg-blue-600 font-semibold text-white">
{step.number}
</div>
<h3 className="mb-2 text-lg font-semibold text-gray-900">
 {step.title}
</h3>
<p className="leading-7 text-gray-600">
 {step.description}
</p>
</div>
))}
</div>
</div>
</section>
  )
}

export default HowItWorks