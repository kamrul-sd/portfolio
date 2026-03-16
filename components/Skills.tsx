'use client'

import { motion } from 'framer-motion'
import {
    SiPython,
    SiJavascript,
    SiDjango,
    SiReact,
    SiPostgresql,
    SiMongodb,
    SiDocker,
    SiKubernetes,
    SiRedis,
    SiGit,
    SiLinux,
    SiRabbitmq,
    SiElasticsearch,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

const skills = [
    {
        category: 'Languages',
        items: [
            { name: 'Python', icon: SiPython, color: 'text-blue-500' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
            { name: 'SQL', icon: SiPostgresql, color: 'text-blue-600' },
        ],
    },
    {
        category: 'Backend & Frameworks',
        items: [
            { name: 'Django', icon: SiDjango, color: 'text-green-700' },
            { name: 'FastAPI', icon: SiPython, color: 'text-blue-500' },
            { name: 'DRF', icon: SiReact, color: 'text-cyan-400' },
            { name: 'Celery', icon: SiRabbitmq, color: 'text-red-600' },
            { name: 'RabbitMQ', icon: SiRabbitmq, color: 'text-red-600' },
        ],
    },
    {
        category: 'Databases & Caching',
        items: [
            { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
            { name: 'Redis', icon: SiRedis, color: 'text-red-600' },
            { name: 'Elasticsearch', icon: SiElasticsearch, color: 'text-yellow-500' },
        ],
    },
    {
        category: 'DevOps & Cloud',
        items: [
            { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
            { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
            { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
            { name: 'Git', icon: SiGit, color: 'text-orange-600' },
            { name: 'Linux', icon: SiLinux, color: 'text-yellow-500' },
        ],
    },
]

export default function Skills() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    }

    return (
        <section
            id="skills"
            className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl font-bold mb-12 text-slate-900"
                >
                    Skills & Technologies
                </motion.h2>

                <div className="space-y-12">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-100px' }}
                        >
                            <motion.h3
                                variants={itemVariants}
                                className="text-2xl font-bold text-accent mb-6"
                            >
                                {skillGroup.category}
                            </motion.h3>

                            <motion.div
                                variants={containerVariants}
                                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
                            >
                                {skillGroup.items.map((skill) => {
                                    const IconComponent = skill.icon
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.1 }}
                                            className="p-4 rounded-lg bg-slate-100 border border-slate-200 hover:border-accent transition-colors text-center"
                                        >
                                            <IconComponent className={`text-4xl mx-auto mb-2 ${skill.color}`} />
                                            <p className="text-sm font-medium text-slate-700">{skill.name}</p>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
