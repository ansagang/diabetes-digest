"use client"

import Button from "@/components/ui/button"
import Link from "next/link"
import useInView from "@/hooks/use-in-view"
import Image from "next/image"

export default function Hero({ language }) {
    const { ref, inView } = useInView({ repeat: false })

    const links = [
        {
            title: language.app.pages.diabetes.meta.title,
            href: '/diabetes'
        },
        {
            title: language.app.pages.diabetes.pages.typeOne.meta.title,
            href: '/diabetes/type-one'
        },
        {
            title: language.app.pages.diabetes.pages.typeTwo.meta.title,
            href: '/diabetes/type-two'
        },
        {
            title: language.app.pages.diabetes.pages.gestational.meta.title,
            href: '/diabetes/gestational'
        }
    ]

    return (
        <section className="hero">
            <div className="container">
                <div className="hero__inner inner__big">
                    <div className="hero__content" ref={ref}>
                        <div className={inView ? "hero__title title active" : "hero__title title"} >
                            <h1>{language.app.sections.hero.title}</h1>
                        </div>
                        <div className="hero__info info">
                            <p>{language.app.sections.hero.info}</p>
                        </div>
                        <Link className="hero__link" href={'/donation'}><Button type='primary'>{language.app.buttons.donate}</Button></Link>
                    </div>
                </div>
                {/* <div className="hero__background">
                    <Image loading='lazy' height={1} width={1} title={'logo'} unoptimized={true} src={'/community_background.jpg'} alt={'logo'} />
                </div> */}
                {/* <div className="hero__bottom">
                    <div className="hero__bottom-title title">
                        <h3>{language.app.sections.suggestion.title}</h3>
                    </div>
                    <div className="hero__bottom-links">
                        {
                            links ?
                            (
                                links.length > 0 ?
                                (
                                    links.map((link) => (
                                        <Link href={link.href} className="hero__bottom-link link">
                                            <div className="hero__bottom-link_title">
                                                <p>{link.title}</p>
                                            </div>
                                        </Link>
                                    ))
                                )
                                :
                                null
                            )
                            :
                            null
                        }
                    </div>
                </div> */}
            </div>
        </section>
    )
}