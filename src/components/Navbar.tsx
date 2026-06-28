// Tells Next.js that this component must run in the browser. Is a necessity since usePathname() is a client-side hook.
"use client"

// React state to track whether the mobile menu is open
import { useState } from 'react';
// Link is a Next.js component for navigating between pages without doing a full page reload
import Link from 'next/link'
// usePathname() gets the current URL path
import { usePathname } from 'next/navigation';

// An array of objects representing one navbar link. This allows storing the data and looping over it later. 
const navLinks = [
    { name: "Home" , href: "/"},
    { name: "Projects" , href: "/projects"},
    { name: "Experience" , href: "/experience"},
    { name: "Resume" , href: "/resume"},
    { name: "Contact" , href: "/contact"},
];

export default function Navbar() {
    // pathname stores the current page URL path
    const pathname = usePathname();
    
    const [isOpen, setIsOpen] = useState(false);

    function isLinkActive(href: string) {
        if (href === "/") {
        return pathname === "/";
        }

        // All subdirectories within navLinks item will be active (e.g. /projects/mars, /projects, /projects/chess).
        return pathname.startsWith(href);
    }

    return (
        <nav className="fixed left-0 top-0 z-[9999] w-full border-b border-gray-700 bg-black">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                <Link href="/" className="px-6 text-2xl font-bold text-white">
                    Ian Lingo
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden gap-10 text-xl md:flex">
                    {navLinks.map((link) => {       // Loops through every item in the navLinks array.
                        const isActive = isLinkActive(link.href);

                        return (
                            // Each generated item needs a unique key, so React can track it efficiently. link.href works because each URL is unique.
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`transition-colors ${        // Ternary operator checks if URL path is active, if so then text sky 400 color and semibold, else then keep gray.
                                    isActive
                                        ? "text-sky-400 font-semibold"
                                        : "text-gray-400 hover:text-sky-400"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile Hamburger Button */}
                <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="relative z-[10000] flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-gray-700 md:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
                >
                    <div className="flex flex-col gap-1.5">
                        <span className="h-0.5 w-7 bg-white"></span>
                        <span className="h-0.5 w-7 bg-white"></span>
                        <span className="h-0.5 w-7 bg-white"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="flex flex-col gap-4 border-t border-gray-700 bg-black px-6 py-6 text-xl md:hidden">
                    {navLinks.map((link) => {
                        const isActive = isLinkActive(link.href);

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`transition-colors ${        // Ternary operator checks if URL path is active, if so then text sky 400 color and semibold, else then keep gray.
                                    isActive
                                        ? "text-sky-400 font-semibold"
                                        : "text-gray-400 hover:text-sky-400"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>                            
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}