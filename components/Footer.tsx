'use client'

import { motion } from 'framer-motion'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-slate-600 mb-2">
                        © {currentYear} Kamrul Hasan. All rights reserved.
                    </p>
                    <p className="text-slate-500 text-sm">
                        Built with{' '}
                        <span className="text-accent">Next.js</span> and{' '}
                        <span className="text-accent">Tailwind CSS</span>
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}
