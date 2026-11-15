import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      message: ""
    })
  }

  return (
    <section id="contact" className="bg-gray-50 px-6 py-16 md:py-20">
    <div className="mx-auto max-w-3xl">
    <div className="mb-10 text-center">
    <h2 className="text-3xl font-bold text-gray-900">
     Get in Touch
    </h2>
    <p className="mt-4 text-gray-600">
    Have a question? Send us a message.
    </p>
   </div>

   <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-gray-200 bg-white p-6">
    <div>
    <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
    Name
    </label>
    <input
    type="text"
    id="name"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
    placeholder="Enter your name"/>
    </div>

    <div>
    <label htmlFor="email" className="mb-2 block font-medium
     text-gray-700">
    Email
    </label>
    <input
     type="email"
    id="email"
     name="email"
    value={formData.email}
    onChange={handleChange}
    required
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
     placeholder="Enter your email" />
    </div>

    <div>
    <label htmlFor="message" className="mb-2 block font-medium text-gray-700">
    Message
    </label>
    <textarea
    id="message"
    name="message"
    value={formData.message}
    onChange={handleChange}
    required
    rows="4"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-600"
    placeholder="Write your message"/>
    </div>

     <button
    type="submit"
    className="w-full rounded-lg bg-blue-600 px-5 py-3 font-medium
   text-white hover:bg-blue-700">
     Send Message
    </button>

    {submitted && (
    <p className="text-center text-green-600">
    Thank you! Your message has been submitted successfully.
    </p>
    )}
  </form>
    </div>
    </section>
  )
}

export default Contact