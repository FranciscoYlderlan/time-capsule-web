import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree }  from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({ 
  subsets: ['latin'], 
  weight:'700', 
  variable: '--font-bai-jamjuree'
})

export const metadata: Metadata = {
  title: 'CapsuleTime',
  description: 'Cápsula do tempo construída com React, NextJS, TailwindCSS e Typescript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${roboto.variable} ${baiJamjuree.variable} font-sans
      text-gray-100 bg-gray-900`}>
          {children}
        </body>
    </html>
  )
}
