"use client"

import Button from "@/components/ui/button"
import Link from "next/link"

export default function NotFound({ language }) {

    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found__inner inner">
                    <div className="not-found__content">
                        <div className="not-found__404 title">
                            <h1>404</h1>
                        </div>
                        <div className="not-found__title title">
                            <h2>{language.app.pages.notFound.sections.notFound.title}</h2>
                        </div>
                        <div className="not-found__info info">
                            <p>{language.app.pages.notFound.sections.notFound.info}</p>
                        </div>
                    </div>
                    <Link href={'/'}><Button className='not-found__button' type={'primary'}>{language.app.pages.main.meta.title}</Button></Link>
                </div>
            </div>
        </section>
    )
}