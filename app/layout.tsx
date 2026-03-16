import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MD. Kamrul Hasan - Software Engineer',
    description: 'Portfolio of MD. Kamrul Hasan, Software Engineer specializing in Django, Python, FastAPI, and scalable microservices architecture.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-white text-slate-900`}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    )
}
