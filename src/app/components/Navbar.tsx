import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black">
        <ul className="flex gap-10 text-lg">
            <Link href="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                Home
            </Link>

            <Link href="/projects" className="text-gray-300 hover:text-sky-400 transition-colors">
                Projects
            </Link>

            <Link href="/experience" className="text-gray-300 hover:text-sky-400 transition-colors">
                Experience
            </Link>

            <Link href="/resume" className="text-gray-300 hover:text-sky-400 transition-colors">
                Resume
            </Link>

            <Link href="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                Contact
            </Link>
        </ul>
    </nav>
  );
}