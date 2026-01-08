'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Blog', href: '/blog' },
]

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const pathName = usePathname(); 

    const isActive = (href: string) => {
        return pathName === href;
    }

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="text-lg font-bold text-gray-900">
                    TravelExplorer
                </div>

                {/* Desktop Navigation */} 
                <nav className="hidden md:flex items-center gap-4">
                    <ul className="flex items-center gap-4">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (<li key={item.label}>
                                <a
                                    href={item.href}
                                    className={`text-gray-700 px-3 py-2 rounded-md hover:bg-gray-100 transition ${active ? 'bg-gray-100' : ''}`}
                                >
                                    {item.label}
                                </a>
                            </li>)
                        })}
                        <li>
                            <a
                                href="#book"
                                className="bg-sky-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-sky-600 transition"
                            >
                                Book Now
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setOpen((s) => !s)}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                    >
                        <path
                            d="M4 6h16M4 12h16M4 18h16"
                            stroke="#111827"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {open && (
                <div
                    role="menu"
                    aria-label="Mobile menu"
                    className="md:hidden absolute right-4 top-14 bg-white border border-gray-200 rounded-lg shadow-lg p-2 w-40"
                >
                    <div className="flex flex-col gap-1">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                role="menuitem"
                                onClick={() => setOpen(false)}
                                className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a
                            href="#book"
                            role="menuitem"
                            onClick={() => setOpen(false)}
                            className="mt-1 bg-sky-500 text-white px-3 py-2 rounded-md font-semibold text-center hover:bg-sky-600 transition"
                        >
                            Book Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
