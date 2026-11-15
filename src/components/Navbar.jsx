import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

const closeMenu = () => setMenuOpen(false)

 return (
<header className="border-b border-gray-200 bg-white">
<nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<a href="#home" className="text-2xl font-bold text-blue-600">
 TaskFlow
</a>

<div className="hidden items-center gap-8 md:flex">
<a href="#home" className="text-gray-600
 hover:text-blue-600">Home</a>
<a href="#features" className="text-gray-600
 hover:text-blue-600">Features</a>
<a href="#how-it-works" className="text-gray-600
 hover:text-blue-600">How It Works</a>
<a href="#pricing" className="text-gray-600
 hover:text-blue-600">Pricing</a>
<a href="#contact" className="text-gray-600
 hover:text-blue-600">Contact</a>
</div>

<a
href="#pricing"
 className="hidden rounded-lg bg-blue-600 px-5
 py-2.5 font-medium text-white hover:bg-blue-700 md:block">
Get Started
</a>

<button
type="button"
onClick={() => setMenuOpen(!menuOpen)}
className="text-gray-700 md:hidden"
aria-label="Toggle navigation menu"
aria-expanded={menuOpen} >
{menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
</button>
</nav>

{menuOpen && (
<div className="flex flex-col gap-4 border-t border-gray-200 px-6 py-5 md:hidden">
<a href="#home" onClick={closeMenu}>Home</a>
<a href="#features" onClick={closeMenu}>Features</a>
<a href="#how-it-works" onClick={closeMenu}>How It Works</a>
<a href="#pricing" onClick={closeMenu}>Pricing</a>
<a href="#contact" onClick={closeMenu}>Contact</a>
<a
href="#pricing"
onClick={closeMenu}
className="w-fit rounded-lg bg-blue-600 
px-5 py-2.5 font-medium text-white">
Get Started
</a>
</div>
)}
</header>
  )
}

export default Navbar