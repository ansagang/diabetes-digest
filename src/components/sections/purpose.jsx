export default function Purpose({language}) {
    return (
        <section className="puspose">
            <div className="container">
                <div className="purpose__inner inner">
                    <div className="purpose__title title">
                        <h1>{language.app.sections.purpose.title}</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}