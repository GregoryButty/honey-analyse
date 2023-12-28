import "./global.style.css"
import "./component.style.css"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Analityc honey',
  description: 'Welcome page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="blur">
        {children}
      </div>

      <div className="block"/>

      </body>
    </html>
  )
}
