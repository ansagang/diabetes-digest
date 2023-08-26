"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, exact, className, ...props }) {
    const pathname = usePathname()
    const state = exact ? pathname === `${href}` ? `active ${className}` : `${className}` : pathname.split('?')[0].split('/')[1] === `${href.split('?')[0].split('/')[1]}` ? `active ${className}` : `${className}`
    return (
        <Link href={href} className={`link ${state}`} {...props}>
            {children}
        </Link>
    )
}