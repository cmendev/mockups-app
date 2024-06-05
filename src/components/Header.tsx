'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    return (
        <header className="navbar bg-base-100 fixed z-40">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">ProStock</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    {pathname !== '/login' && (
                        <li>
                            <Link href="/login">
                                Login
                            </Link>
                        </li>
                    )}
                    {pathname !== '/register' && (
                        <li>
                            <Link href="/register">
                                Register
                            </Link>
                        </li>
                    )}
                    <li>
                        <details className="z-40">
                            <summary>
                                ⚙️
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><a>lang</a></li>
                                <li><a>☀️/🌒</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
