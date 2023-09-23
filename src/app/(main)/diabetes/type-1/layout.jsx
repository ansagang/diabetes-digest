import { cookies } from "next/headers"

import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

import getSupabase from "@/db/supabase-server"

import DiabetesHeader from "@/components/sections/diabetes-header.diabetes"

export default async function DiabetesLayout({ children }) {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    const routes = [
        {
            title: language.app.pages.diabetes.pages.typeOne.pages.symptomsCauses.meta.title,
            url: '/diabetes/type-1',
            exact: true
        },
        // {
        //     title: language.app.pages.diabetes.pages.typeOne.pages.diagnosisTreatment.meta.title,
        //     url: '/diabetes/type-1/diagnosis-treatment',
        //     exact: false
        // }
    ]

    return (
        <div className="wrapper__diabetes">
            <DiabetesHeader routes={routes} language={language} title={language.app.pages.diabetes.pages.typeOne.meta.title} />
            {children}
        </div>
    )
}