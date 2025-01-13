import React, { useEffect } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import AOS from 'aos'
import 'aos/dist/aos.css'
const inter = Inter({ subsets: ['latin'] })

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
        })
    }, [])
    return (
        <>
            <main
                className={inter.className}
            >
                <Header />

                {children}
                <Footer />
            </main>
        </>
    )
}

export default MainLayout