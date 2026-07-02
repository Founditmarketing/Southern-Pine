import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

const crimson = Crimson_Text({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-crimson',
})

export const metadata: Metadata = {
    title: 'Southern Pine Depot | High-Quality Pine Lumber',
    description: 'Request a quote for premium southern pine lumber, nickel gap shiplap, flooring, and more.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                {/* Found It Lead Capture */}
                <Script src="https://found-it-crm-flax.vercel.app/embed/lead-capture.js" data-account="830eac12-9190-4f7a-b80c-b6ef0820df86" strategy="afterInteractive" />
            </head>
            <body className={`${inter.variable} ${crimson.variable} font-sans`}>
                {children}
            </body>
        </html>
    )
}
