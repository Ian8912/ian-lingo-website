// Tells Next.js that this component must run in the browser. Is a necessity since usePathname() is a client-side hook.
"use client"

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

    return (
        <nav className="fixed top-0 z-50 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black">
            <ul className="flex gap-10 text-2xl">
                {navLinks.map((link) => {       // Loops through every item in the navLinks array.
                    const isActive =        // Checks where the current link should be highlighter (if it's active).
                        link.href === "/"
                        ? pathname === "/"
                        : pathname.startsWith(link.href);       // All subdirectories within navLinks item will be active (e.g. /projects/mars, /projects, /projects/chess).

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
        </nav>
    );
}