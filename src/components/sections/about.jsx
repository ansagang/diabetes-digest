import Image from "next/image"

export default function About({ language }) {
    return (
        <section className="about">
            <div className="container">
                <div className="about__inner inner__big">
                    <div className="about__content">
                        <div className="about__title title">
                            <h1>{language.app.pages.about.sections.about.title}</h1>
                        </div>
                        <div className="about__info info">
                            <p>{language.app.pages.about.sections.about.info}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}