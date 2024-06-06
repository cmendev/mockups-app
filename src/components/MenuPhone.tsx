'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MenuPhone = () => {

    const pathname = usePathname();
    return (
        <div className="mx-3 fixed top-[92%] md:hidden">
            <ul className="menu flex-row bg-base-200 lg:menu-horizontal rounded-box">
                <li>
                    <Link href="/product" className={`${pathname === '/product' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 2048 2048">
                            <g
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2">
                                <path d="M896 1537V936L256 616v880l544 273l-31 127l-641-320V472L960 57l832 415v270q-70 11-128 45V616l-640 320v473zM754 302l584 334l247-124l-625-313zm206 523l240-120l-584-334l-281 141zm888 71q42 0 78 15t64 41t42 63t16 79q0 39-15 76t-43 65l-717 717l-377 94l94-377l717-716q29-29 65-43t76-14m51 249q21-21 21-51q0-31-20-50t-52-20q-14 0-27 4t-23 15l-692 692l-34 135l135-34z" />
                            </g>
                        </svg>
                        Products
                        <span className="badge badge-sm">10+</span>
                    </Link>
                </li>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        U
                    </a>
                </li>
                <li>
                    <Link href="/profile" className={`${pathname === '/profile' ? 'active' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 24 24">
                            <g
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2">
                                <path d="M17.796 20.706c-.342-1.063-1.096-2.003-2.143-2.673C14.605 17.363 13.32 17 12 17c-1.32 0-2.605.363-3.653 1.033c-1.047.67-1.8 1.61-2.143 2.673" />
                                <circle cx="12" cy="10" r="3" strokeLinecap="round" />
                                <rect width="18" height="18" x="3" y="3" rx="3" />
                            </g>
                        </svg>
                        Profile
                    </Link>
                </li>
            </ul>
        </div>
    )
}
