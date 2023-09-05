import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"
import DiabetesHeader from "@/components/sections/diabetes-header"

export default async function DiabetesLayout({ children }) {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    const routes = [
        {
            title: language.app.pages.diabetes.pages.gestational.pages.symptomsCauses.meta.title,
            url: '/diabetes/gestational',
            exact: true
        },
        {
            title: language.app.pages.diabetes.pages.gestational.pages.diagnosisTreatment.meta.title,
            url: '/diabetes/gestational/diagnosis-treatment',
            exact: false
        }
    ]

    return (
        <div className="wrapper__diabetes">
            <DiabetesHeader routes={routes} language={language} title={language.app.pages.diabetes.pages.gestational.meta.title} />
            {children}
        </div>
    )
}