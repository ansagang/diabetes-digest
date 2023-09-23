"use client"

import { useRouter } from "next/navigation"

import Button from "@/components/ui/button"

export default function NotFound({ language }) {

    const router = useRouter()

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
                    <Button onClick={() => router.back()} type={'primary'}>{language.app.buttons.goBack}</Button>
                </div>
            </div>
        </section>
    )
}