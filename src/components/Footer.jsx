function Footer() {

  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-8">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
    <div>
    <a href="#home" className="text-xl font-bold text-blue-600">
    TaskFlow
    </a>
    <p className="mt-2 text-sm text-gray-500">
     Organize your work. Make time for what matters.
    </p>
    </div>

    <div className="flex flex-wrap justify-center gap-5
     text-sm text-gray-600">
    <a href="#features" className="hover:text-blue-600">
    Features</a>
    <a href="#how-it-works" className="hover:text-blue-600">
    How It Works</a>
    <a href="#pricing" className="hover:text-blue-600">
    Pricing</a>
    <a href="#contact" className="hover:text-blue-600">
    Contact</a>
    </div>
      </div>

    <p className="mt-8 text-center text-sm text-gray-500">
     {new Date().getFullYear()} TaskFlow. All rights reserved.
    </p>
    </footer>
  )
}

export default Footer
