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
        title: language.app.pages.diabetes.pages.typeTwo.meta.title,

    }
}

export default async function TypeTwo() {


    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <section className="type-two">
            <div className="container">
                <div className="type-two__inner inner">
                    <InformationBlock title={language.app.sections.typeTwo.overview.title} information={language.app.sections.typeTwo.overview.information} />
                    <InformationBlock title={language.app.sections.typeTwo.symptoms.title} information={language.app.sections.typeTwo.symptoms.information} list={language.app.sections.typeTwo.symptoms.list} />
                    <InformationBlock title={language.app.sections.typeTwo.causes.title} information={language.app.sections.typeTwo.causes.information} list={language.app.sections.typeTwo.causes.list} />
                    <InformationBlock title={language.app.sections.typeTwo.riskFactors.title} information={language.app.sections.typeTwo.riskFactors.information} list={language.app.sections.typeTwo.riskFactors.list} />
                    <InformationBlock title={language.app.sections.typeTwo.complications.title} information={language.app.sections.typeTwo.complications.information} list={language.app.sections.typeTwo.complications.list} />
                    <InformationBlock title={language.app.sections.typeTwo.prevention.title} information={language.app.sections.typeTwo.prevention.information} list={language.app.sections.typeTwo.prevention.list} />
                </div>
            </div>
        </section>
    )
}