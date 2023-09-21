export default function Events({language, events}) {
    return (
        <section className="events">
            <div className="container__fluid">
                <div className="events__inner inner">
                    <div className="events__title title">
                        <h2>{language.app.pages.main.sections.events.title}</h2>   
                    </div>
                    <div className="events__list">
                        {
                            events ?
                            (
                                events.length > 0 ?
                                (
                                    events.map((event) => (
                                        <div className="events__item">
                                            <div className="events__left">

                                            </div>
                                            <div className="events__right">
                                                
                                            </div>
                                        </div>
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