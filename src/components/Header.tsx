'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
    const pathname = usePathname();
    const router = useRouter();
    const shouldShowProductLink = !pathname.startsWith('/product');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authUser'); 
        router.push('/auth/login');
    };

    const userData = JSON.parse(localStorage.getItem('authUser') || 'null');
    
    return (
        <header className="navbar bg-base-100 shadow shadow-indigo-500/50 fixed z-40 w-full">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    ProStock
                </Link>
            </div>
            <div className="flex-none">
                <button
                    onClick={toggleMobileMenu}
                    className="btn btn-ghost btn-circle lg:hidden"
                    aria-label="Menu Options Navigate"
                    name="menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7"
                        />
                    </svg>
                </button>
                <ul className={`menu max-lg:absolute max-lg:right-2 max-lg:top-14 max-lg:mt-3 max-lg:z-[10] max-lg:p-2 lg:menu-horizontal lg:px-1 max-lg:shadow max-lg:bg-base-100 max-lg:rounded-box max-lg:w-52 ${mobileMenuOpen ? ' ' : 'hidden'}`}>
                    <li>
                        <Link href="/" className={`${pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                    </li>
                    {shouldShowProductLink && (
                        <li>
                            <Link href="/product">
                                Product
                            </Link>
                        </li>
                    )}
                    {pathname !== '/auth/login' && !userData && (
                        <li>
                            <Link href="/auth/login">
                                Login
                            </Link>
                        </li>
                    )}
                    {pathname !== '/auth/register' && !userData && (
                        <li>
                            <Link href="/auth/register">
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
                                {userData && (
                                    <li><button onClick={handleLogout}>Logout</button></li>
                                )}
                                <li>lang</li>
                                <li><ThemeToggle /></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
