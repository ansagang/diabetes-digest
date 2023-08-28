export default function LoginForm({language}) {
    return (
        <section className="auth">
            <div className="container">
                <div className="auth__inner inner__block">
                    <div className="auth__title title">
                        <h2>{language.app.pages.login.meta.title}</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}