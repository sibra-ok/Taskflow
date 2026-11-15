import React from 'react'

import Dashboard from "./Dashboard"

function Hero() {
  return (
    <section
    id="home"
    className="bg-gray-50 px-6 py-16 md:py-24">
    <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">


    <div>
    <p className="mb-4 font-medium text-blue-600">
     A simpler way to stay organized
    </p>

    <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
    Manage your tasks.
    <span className="text-blue-600">
    {" "}Make time for what matters.
    </span>
    </h1>

    <p className="mt-6 max-w-lg text-base leading-7 text-gray-600">
    TaskFlow helps you organize your daily work, keep track
    of deadlines, and manage your tasks without the hassle.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
    <a
    href="#pricing"
    className="rounded-lg bg-blue-600 px-6 py-3 font-medium
     text-white hover:bg-blue-700">
    Get Started
    </a>

    <a
    href="#features"
    className="rounded-lg border border-gray-300 
    px-6 py-3 font-medium text-gray-700 hover:bg-gray-100">
    Explore Features
    </a>
    </div>

    <p className="mt-6 text-sm text-gray-500">
    Stay focused, manage better, and get more done.
    </p>
    </div>

    
    <div className="flex justify-center">
    <Dashboard />
    </div>

    </div>
    </section>
  )
}

export default Hero
