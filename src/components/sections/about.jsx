export default function About({language}) {
    return (
        <section className="about">
            <div className="container">
                <div className="about__inner inner">
                    <div className="about__title title">
                        <h1>{language.app.pages.about.meta.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}