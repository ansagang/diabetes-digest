export default function InformationBlock({ title, information, list }) {
    return (
        <div className="information-block">
            <div className="information-block__title title">
                <h1>{title}</h1>
            </div>
            <div className="information-block__content">
                {
                    information ?
                        (
                            information.length > 0 ?
                                (
                                    information.map((item, key) => (
                                        <div key={key} className="information-block__content-info info">
                                            <p>{item}</p>
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
            <div className="information-block__list">
                {
                    list ?
                        (
                            list.length > 0 ?
                                (
                                    list.map((item, key) => (
                                        <div key={key} className="information-block__list-info info">
                                            <p><strong>{item.main}</strong>&nbsp;{item.info}</p>
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
    )
}