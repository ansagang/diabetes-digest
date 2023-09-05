"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, exact, className, ...props }) {
    const pathname = usePathname()
    const state = exact ? (pathname === `${href}` ? `active ${className}` : `${className}`) : (pathname.startsWith(href) ? `active ${className}` : `${className}`)
    return (
        <Link exact={exact} href={href} className={`link ${state}`} {...props}>
            {children}
        </Link>
    )
}