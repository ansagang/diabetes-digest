import supabase from "@/db/supabase-server"

import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

import InformationBlock from "@/components/ui/information-block"

export async function generateMetadata() {

    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.diabetes.pages.typeOne.meta.title,

    }
}

export default async function TypeOne() {


    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <section className="type-one">
            <div className="container">
                <div className="type-one__inner inner">
                    <InformationBlock title={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.overview.title} information={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.overview.information} />
                    <InformationBlock title={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.symptoms.title} information={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.symptoms.information} list={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.symptoms.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.causes.title} information={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.causes.information} list={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.causes.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.riskFactors.title} information={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.riskFactors.information} list={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.riskFactors.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.complications.title} information={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.complications.information} list={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.complications.list} />
                    <InformationBlock title={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.prevention.title} information={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.prevention.information} list={language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.sections.typeOne.prevention.list} />
                </div>
            </div>
        </section>
    )
}