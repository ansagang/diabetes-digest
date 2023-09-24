import supabase from "@/db/supabase-server"

import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

import InformationBlock from "@/components/ui/information-block"

export async function generateMetadata() {

    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.diabetes.pages.gestational.meta.title,

    }
}

export default async function Gestational() {


    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <section className="gestational">
            <div className="container">
                <div className="type-one__inner inner">
                    <InformationBlock title={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.overview.title} information={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.overview.information} />
                    <InformationBlock title={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.symptoms.title} information={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.symptoms.information} list={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.symptoms.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.causes.title} information={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.causes.information} list={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.causes.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.riskFactors.title} information={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.riskFactors.information} list={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.riskFactors.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.complications.title} information={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.complications.information} list={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.complications.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.prevention.title} information={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.prevention.information} list={language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.sections.gestational.prevention.list} />
                </div>
            </div>
        </section>
    )
}