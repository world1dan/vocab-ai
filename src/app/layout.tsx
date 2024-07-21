import { ReactNode } from 'react'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { TooltipProvider } from '@/components/ui/tooltip'

import '@/styles/globals.css'

import Footer from './Footer'

export const metadata: Metadata = {
    title: '',
    description: '',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export default async function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
            <TooltipProvider delayDuration={360}>
                <body
                    className={`flex flex-col gap-28 overflow-x-hidden ${inter.className}`}
                >
                    <div className="min-h-screen px-8 py-4">{children}</div>
                    <Footer />
                </body>
            </TooltipProvider>
        </html>
    )
}
