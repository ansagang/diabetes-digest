"use client"

import Image from "next/image"
import Link from "next/link"

export default function Background({ image }) {

    return (
        <section className="background">
            <div className="background__image">
                <Image loading='lazy' height={1} width={1} unoptimized={true} src={image} alt={'background'} />
            </div>
            <Link href="/" className="background__logo">
                <Image loading='lazy' height={1} width={1} unoptimized={true} src={'logo.png'} alt={'logo'} />
            </Link>
        </section>
    )
}