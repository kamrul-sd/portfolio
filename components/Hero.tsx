'use client'

import { motion } from 'framer-motion'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Image from 'next/image'

export default function Hero() {
    const handleScroll = (targetId: string) => {
        const element = document.getElementById(targetId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section
            id="hero"
            className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white"
        >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent"></div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between gap-8"
            >
                {/* Text Content */}
                <motion.div variants={itemVariants} className="flex-1">
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-slate-900"
                    >
                        Hello, I&apos;m{' '}
                        <span className="text-accent">MD. Kamrul Hasan</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg sm:text-xl text-slate-700 mb-6 max-w-lg"
                    >
                        Software Engineer specializing in building scalable microservices, distributed systems, and e-commerce platforms.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg"
                    >
                        Expert in Django, FastAPI, Python, PostgreSQL, and DevOps. I optimize system performance, architect complex backends, and lead teams to deliver high-impact solutions.
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex gap-4"
                    >
                        <button
                            type="button"
                            onClick={() => handleScroll('projects')}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-all hover:gap-3 cursor-pointer pointer-events-auto"
                        >
                            View My Work <HiArrowNarrowRight />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScroll('contact')}
                            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all cursor-pointer pointer-events-auto"
                        >
                            Get In Touch
                        </button>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    variants={itemVariants}
                    className="hidden lg:flex flex-1 justify-center"
                >
                    <motion.div
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                        className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl"
                    >
                        <Image
                            src="/me.jpeg"
                            alt="Kamrul Hasan"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
