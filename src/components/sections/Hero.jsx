"use client"

import Button from "@/components/ui/button"
import Link from "next/link"
import useInView from "@/hooks/use-in-view"

export default function Hero({ language }) {
    const { ref, inView } = useInView({ repeat: false })
    
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
            </div>
        </section>
    )
}