import supabase from "@/db/supabase-server"

import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

import DiabetesTypes from "@/components/sections/diabetes-types.diabetes"
import DiabetesHeader from "@/components/sections/diabetes-header.diabetes"

export async function generateMetadata() {

    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.diabetes.meta.title,

    }
}

export default async function DiabetesPage() {


    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <div className="wrapper__diabetes">
            <DiabetesHeader language={language} title={language.app.pages.diabetes.meta.title} />
            <DiabetesTypes language={language} />
        </div>
    )
}