export default function _Account({language}) {
    return (
        <section className="account">
            <div className="container">
                <div className="account__inner">
                    <div className="account__title title">
                        <h1>{language.app.pages.account.meta.title}</h1>
                    </div>
                    <div className="account__settings">
                        <div className="account__setting">
                            <div className="account__setting-title title">
                                <h2>FUllname</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}