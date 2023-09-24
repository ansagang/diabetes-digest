import { cookies } from "next/headers"

import supabase from "@/db/supabase-server"

import { getLanguage } from "@/lib/get-language"
import { auth } from "@/lib/auth"
import { api } from "@/lib/api"

import About from "@/components/sections/about.about"
import Team from "@/components/sections/team.about"

export async function generateMetadata() {

    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.about.meta.title,

    }
}

export default async function AboutPage() {

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