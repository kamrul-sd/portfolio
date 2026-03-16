'use client'

import { motion } from 'framer-motion'

export default function About() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
            id="about"
            className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold mb-12 text-slate-900"
                    >
                        About Me
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div variants={itemVariants}>
                            <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                I&apos;m a Software Engineer with over 3 years of professional experience building scalable backends and microservices. Currently at EvidentBD, I optimize microservices architectures and lead multi-marketplace e-commerce integrations, achieving 30-60% performance improvements.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                My expertise spans full-stack development with Django, FastAPI, and modern DevOps practices. I specialize in designing microservices, optimizing databases, implementing ML algorithms, and automating complex workflows using Celery and RabbitMQ.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className="text-slate-700 text-lg leading-relaxed mb-6">
                                I&apos;m passionate about solving complex engineering challenges and mentoring junior developers. My academic background from Presidency University (CSE, 3.99 CGPA) combined with hands-on experience gives me a strong foundation in algorithms, system design, and data structures.
                            </p>
                            <p className="text-slate-700 text-lg leading-relaxed">
                                I was honored at ICPC Asia Dhaka Regional Contest 2022 and continuously contribute to open-source projects. Always excited to collaborate on challenging problems and push the boundaries of what&apos;s technically possible.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
