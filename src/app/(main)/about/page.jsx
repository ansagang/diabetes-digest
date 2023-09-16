import About from "@/components/sections/about"
import { getLanguage } from "@/lib/get-language"
import { auth } from "@/lib/auth"
import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"
import { api } from "@/lib/api"
import Team from "@/components/sections/team"
import Purpose from "@/components/sections/purpose"
import { Suspense } from "react"

export async function generateMetadata() {

    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.about.meta.title,

    }
}

export default async function AboutPage() {

    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })
    const { data: team } = await api.getTeam({ language: language, revalidate: 0 })
    const storageUrl = process.env.STORAGE

    return (
        <>
            <About language={language} />
            <Team language={language} team={team} storageUrl={storageUrl} />
        </>
    )
}