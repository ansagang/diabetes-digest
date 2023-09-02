import Link from "next/link"

export default function Suggestion({ language }) {

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
        <section className="suggestion">
            <div className="container">
                <div className="suggestion__inner">
                    <div className="suggestion__title title">
                        <h2>{language.app.sections.suggestion.title}</h2>
                    </div>
                    <div className="suggestion__links">
                        {
                            links ?
                                (
                                    links.length > 0 ?
                                        (
                                            links.map((link) => (
                                                <Link href={link.href} className="suggestion-link link">
                                                    <div className="suggestion-link_title">
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
                </div>
            </div>
        </section>
    )
}