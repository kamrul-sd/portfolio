'use client'

import { motion } from 'framer-motion'

const experiences = [
    {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'EvidentBD',
        period: 'January 2025 -- Present',
        description:
            'Optimized microservices architecture improving system performance by 30-60%. Developed backend for multi-channel e-commerce with OAuth-based authentication. Built HR modules for onboarding, biometric attendance, and payroll with Celery pipelines.',
        technologies: ['Django', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS', 'Kubernetes', 'RabbitMQ'],
    },
    {
        id: 2,
        title: 'Software Engineer (Contract)',
        company: 'Intelectra',
        period: 'February 2024 -- December 2024',
        description:
            'Architected full-stack job search and matching platform with ML-powered recommendation engine using cosine similarity and TF-IDF vectorization. Built automated scrapers for job listing aggregation and optimized REST APIs.',
        technologies: ['Django', 'ReactJS', 'PostgreSQL', 'Scikit-learn', 'Pandas'],
    },
    {
        id: 3,
        title: 'Junior Software Engineer',
        company: 'HealthOS Limited',
        period: 'February 2023 -- January 2024',
        description:
            'Developed Django REST APIs with PostgreSQL. Implemented Celery async tasks and Selenium automation. Enhanced analytics with Pandas/NumPy following Agile and TDD practices.',
        technologies: ['Django', 'DRF', 'PostgreSQL', 'Celery', 'Selenium', 'Pandas'],
    },
]

export default function Experience() {
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    return (
        <section
            id="experience"
            className="w-full py-20 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold mb-12 text-white"
                >
                    Experience
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="space-y-8"
                >
                    {experiences.map((exp) => (
                        <motion.div
                            key={exp.id}
                            variants={itemVariants}
                            className="relative pl-8 pb-8 border-l-2 border-accent/50 hover:border-accent transition-colors"
                        >
                            {/* Timeline dot */}
                            <div className="absolute w-4 h-4 bg-accent rounded-full -left-2.5 top-0"></div>

                            <div className="bg-secondary/30 rounded-lg p-6 border border-secondary/50 hover:border-accent/50 transition-colors">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-accent">{exp.company}</p>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-2 sm:mt-0">
                                        {exp.period}
                                    </p>
                                </div>

                                <p className="text-gray-300 mb-4">{exp.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded bg-accent/20 text-accent border border-accent/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
