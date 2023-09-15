import InformationBlock from "@/components/ui/information-block"

export default function DiabetesTypes({ language }) {
    return (
        <section className="diabetes-types">
            <div className="container">
                <div className="diabetes-types__inner inner">
                    <div className="diabetes-types__list">
                        <InformationBlock language={language} link={'/diabetes/type-1'} title={language.app.pages.diabetes.pages.typeOne.meta.title} information={language.app.sections.typeOne.overview.information[0]} />
                        <InformationBlock language={language} link={'/diabetes/type-2'} title={language.app.pages.diabetes.pages.typeTwo.meta.title} information={language.app.sections.typeTwo.overview.information[0]} />
                        <InformationBlock language={language} link={'/diabetes/gestational'} title={language.app.pages.diabetes.pages.gestational.meta.title} information={language.app.sections.gestational.overview.information[0]} />
                        {/* .diabetes-types */}
                    </div>
                </div>
            </div>
        </section>
    )
}