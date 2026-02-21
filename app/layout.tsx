import type { Metadata } from 'next'
import { Inter, Crimson_Text } from 'next/font/google'
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
    description: 'Request a quote for premium southern pine lumber, nickel gap, flooring, and more.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${crimson.variable} font-sans`}>
                {children}
            </body>
        </html>
    )
}
