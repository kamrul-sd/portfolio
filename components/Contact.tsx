'use client'

import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
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

    const socialLinks = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/kamrulh4',
            color: 'hover:text-gray-400',
        },
        {
            name: 'LinkedIn',
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/kamrulh4/',
            color: 'hover:text-blue-600',
        },
    ]

    return (
        <section
            id="contact"
            className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
        >
            <div className="max-w-4xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Get In Touch
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto"
                    >
                        I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to get in touch!
                    </motion.p>

                    <motion.div
                        variants={containerVariants}
                        className="space-y-6 mb-12"
                    >
                        {/* Email */}
                        <motion.a
                            variants={itemVariants}
                            href="mailto:kamrul.h456@gmail.com"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary/50 border border-secondary hover:border-accent transition-colors group"
                        >
                            <FaEnvelope className="text-2xl text-accent group-hover:scale-110 transition-transform" />
                            <span className="text-lg text-slate-700">kamrul.h456@gmail.com</span>
                        </motion.a>

                        {/* Phone */}
                        <motion.a
                            variants={itemVariants}
                            href="https://wa.me/8801778849808"
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary/50 border border-secondary hover:border-accent transition-colors group"
                        >
                            <FaPhone className="text-2xl text-accent group-hover:scale-110 transition-transform" />
                            <span className="text-lg text-slate-700">+880 1778849808 (WhatsApp)</span>
                        </motion.a>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} className="mb-12">
                        <a
                            href="mailto:kamrul.h456@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-blue-700 transition-all text-lg"
                        >
                            Send Me an Email
                        </a>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={containerVariants}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon
                            return (
                                <motion.a
                                    key={social.name}
                                    variants={itemVariants}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-3xl text-gray-400 transition-all ${social.color} hover:scale-125`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IconComponent />
                                </motion.a>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
