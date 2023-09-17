import { cookies } from "next/headers"
import getSupabase from "@/db/supabase-server"
import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import NotFound from "@/components/sections/not-found"

export async function generateMetadata() {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    return {
        title: language.app.pages.notFound.meta.title,

    }
}

export default async function NotFoundPage() {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })

    const language = await getLanguage({ user, supabase })

    return (
        <NotFound language={language} />
    )
}