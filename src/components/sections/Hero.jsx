"use client"

import Button from "@/components/ui/button"
import Link from "next/link"
import useScrollView from "@/hooks/use-scroll-view"
import { useEffect, useRef } from "react"

export default function Hero({ language }) {
    const title = useRef(null)
    console.log(title);
    const element = title.current
    const visible = useScrollView(element, true)
    console.log(visible);
    useEffect(() => {
        title.current = element
    }, [])

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner inner__big">
                    <div className="hero__content">
                        <div className="hero__title title" id="title" ref={title}>
                            <h1>{language.app.sections.hero.title}</h1>
                        </div>
                        <div className="hero__info info">
                            <p>{language.app.sections.hero.info}</p>
                        </div>
                        <Link href={'/login'}><Button type='primary'>{language.app.buttons.signin}</Button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}