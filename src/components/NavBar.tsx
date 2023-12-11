"use client"
import Link from "next/link";
import {usePathname} from 'next/navigation'

export function NavBar(){
    const path = usePathname()
    console.log(path)
    return (
        <div className="bg-blend-color-burn py-4 px-3">
            <ul className='flex justify-between items-center gap-6'>
                <li className={`py-2 px-4 rounded-xl hover:bg-slate-700 text-indigo-600 bg-blue-950 ${path === '/' && 'bg-slate-400'}`}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={`py-2 px-4 rounded-xl hover:bg-slate-700 text-indigo-600 bg-blue-950 ${path === '/products' && 'bg-slate-400'}`}>
                    <Link href="/products">
                        Products
                    </Link>
                </li>
                <li className={`py-2 px-4 rounded-xl hover:bg-slate-700 text-indigo-600 bg-blue-950 ${path === '/about' && 'bg-slate-400'}`}>
                    <Link href="/about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    )
}