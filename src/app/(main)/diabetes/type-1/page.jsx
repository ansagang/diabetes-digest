import getSupabase from "@/db/supabase-server"
import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import { cookies } from "next/headers"
import InformationBlock from "@/components/ui/information-block"

export async function generateMetadata() {

    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.diabetes.pages.typeOne.meta.title,

    }
}

export default async function TypeOne() {


    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <section className="type-one">
            <div className="container">
                <div className="type-one__inner inner">
                    <InformationBlock title={language.app.sections.typeOne.overview.title} information={language.app.sections.typeOne.overview.information} />
                    <InformationBlock title={language.app.sections.typeOne.symptoms.title} information={language.app.sections.typeOne.symptoms.information} list={language.app.sections.typeOne.symptoms.list} />
                    <InformationBlock title={language.app.sections.typeOne.causes.title} information={language.app.sections.typeOne.causes.information} list={language.app.sections.typeOne.causes.list} />
                    <InformationBlock title={language.app.sections.typeOne.riskFactors.title} information={language.app.sections.typeOne.riskFactors.information} list={language.app.sections.typeOne.riskFactors.list} />
                    <InformationBlock title={language.app.sections.typeOne.complications.title} information={language.app.sections.typeOne.complications.information} list={language.app.sections.typeOne.complications.list} />
                    <InformationBlock title={language.app.sections.typeOne.prevention.title} information={language.app.sections.typeOne.prevention.information} list={language.app.sections.typeOne.prevention.list} />
                </div>
            </div>
        </section>
    )
}