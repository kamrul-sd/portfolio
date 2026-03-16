'use client'

import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import Link from 'next/link'

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        element?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
    }

    const navLinks = [
        { label: 'Home', id: 'hero' },
        { label: 'About', id: 'about' },
        { label: 'Skills', id: 'skills' },
        { label: 'Projects', id: 'projects' },
        { label: 'Experience', id: 'experience' },
        { label: 'Contact', id: 'contact' },
    ]

    return (
        <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-accent">
                        KH
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-slate-600 hover:text-accent transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            className="text-slate-900"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden pb-4 border-t border-slate-200 bg-white">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="block w-full text-left px-4 py-2 text-slate-600 hover:text-accent hover:bg-slate-100 transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
