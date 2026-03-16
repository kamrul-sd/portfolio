'use client'

import { motion } from 'framer-motion'
import { HiExternalLink, HiCode } from 'react-icons/hi'

const projects = [
    {
        id: 1,
        title: 'ManageYourEcommerce',
        description:
            'Unified e-commerce operations platform integrating multiple marketplaces (Amazon, eBay, Shopify, WooCommerce, Temu, TikTok). Real-time order/inventory/shipping sync with automated SKU mapping reducing manual reconciliation by 40%.',
        technologies: ['Django', 'FastAPI', 'PostgreSQL', 'Socket.IO', 'Docker', 'AWS', 'RabbitMQ'],
        image: '/mye.png',
        liveUrl: 'https://manageyourecommerce.com',
        codeUrl: '#',
    },
    {
        id: 2,
        title: 'BillSheba',
        description:
            'SaaS platform for ISP billing and MikroTik router management. Automated subscriber provisioning, bandwidth control, and invoice generation with real-time synchronization between billing engine and network devices.',
        technologies: ['Django', 'DRF', 'PostgreSQL', 'MikroTik API', 'Celery', 'Docker', 'NextJS'],
        image: '/billsheba.png',
        liveUrl: 'https://billsheba.com',
        codeUrl: '#',
    },
    {
        id: 3,
        title: 'AttendanceKeeper',
        description:
            'Cloud-based HR system with GPS & biometric verification. Automated payroll, leave management, overtime computation, and real-time monitoring dashboards for enterprise HR operations.',
        technologies: ['Django', 'PostgreSQL', 'Celery', 'AWS', 'Biometric Integration'],
        image: '/ak.png',
        liveUrl: 'https://attendancekeeper.net',
        codeUrl: '#',
    },
    {
        id: 4,
        title: 'Supplers',
        description:
            'B2B supplier marketplace with Elasticsearch-powered search, Redis caching, and Celery async pipelines for data processing and external service integration.',
        technologies: ['Python', 'DRF', 'Selenium', 'Elasticsearch', 'Docker', 'AWS'],
        image: '/supplers.png',
        liveUrl: 'https://supplers.com',
        codeUrl: '#',
    },
]

export default function Projects() {
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
            id="projects"
            className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold mb-12 text-slate-900"
                >
                    Featured Projects
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            className="group relative rounded-lg overflow-hidden bg-white border border-slate-200 hover:border-accent transition-all"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden bg-secondary">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-slate-700 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-2 py-1 rounded bg-accent/20 text-accent border border-accent/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 bg-accent text-white text-sm font-semibold rounded hover:bg-blue-700 transition-colors"
                                    >
                                        <HiExternalLink /> Live
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 border border-accent text-accent text-sm font-semibold rounded hover:bg-accent/10 transition-colors"
                                    >
                                        <HiCode /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
