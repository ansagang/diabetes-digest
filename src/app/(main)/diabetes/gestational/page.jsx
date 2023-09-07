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
        title: language.app.pages.diabetes.pages.gestational.meta.title,

    }
}

export default async function Gestational() {


    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <section className="gestational">
            <div className="container">
                <div className="type-one__inner inner">
                    <InformationBlock title={language.app.sections.gestational.overview.title} information={language.app.sections.gestational.overview.information} />
                    <InformationBlock title={language.app.sections.gestational.symptoms.title} information={language.app.sections.gestational.symptoms.information} list={language.app.sections.gestational.symptoms.list} />
                    <InformationBlock title={language.app.sections.gestational.causes.title} information={language.app.sections.gestational.causes.information} list={language.app.sections.gestational.causes.list} />
                    <InformationBlock title={language.app.sections.gestational.riskFactors.title} information={language.app.sections.gestational.riskFactors.information} list={language.app.sections.gestational.riskFactors.list} />
                    <InformationBlock title={language.app.sections.gestational.complications.title} information={language.app.sections.gestational.complications.information} list={language.app.sections.gestational.complications.list} />
                    <InformationBlock title={language.app.sections.gestational.prevention.title} information={language.app.sections.gestational.prevention.information} list={language.app.sections.gestational.prevention.list} />
                </div>
            </div>
        </section>
    )
}