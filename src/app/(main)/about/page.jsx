import About from "@/components/sections/about"
import { getLanguage } from "@/lib/get-language"
import { auth } from "@/lib/auth"
import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"

export async function generateMetadata() {

    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.diabetes.meta.title,

    }
}

export default async function AboutPage() {
    
    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        <>
            <About language={language} />
        </>
    )
}