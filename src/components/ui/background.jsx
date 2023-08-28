"use client"

import Image from "next/image"

export default function Background({image}) {

    return (
        <section className="background">
            <div className="background__image">
                <Image loading='lazy' height={1} width={1} unoptimized={true} src={image} alt={'background'} />
            </div>
        </section>
    )
}