export default function Tip({ tip, language }) {

    return (
        <section className="tip">
            <div className="container">
                <div className="tip__inner inner">
                    {/* <div className="tip__title title">
                        <h2>{language.app.sections.tip.title}</h2>
                    </div> */}
                    <div className="tip__card">
                        <div className="tip__card-title title">
                            <h2>{tip.category.title}</h2>
                        </div>
                        <div className="tip__card-description info">
                            <p>{tip.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}