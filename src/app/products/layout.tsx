import { Inter } from 'next/font/google'
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <div className={`${inter.className} flex justify-center items-center`}>
            {children}
        </div>
    )
}