import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import NotFound from "@/components/sections/not-found"
import supabase from "@/db/supabase-server"

export async function generateMetadata() {

    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    return {
        title: language.app.pages.notFound.meta.title,

    }
}

export default async function NotFoundPage() {

    const { data: user } = await auth.getUser({ supabase })

    const language = await getLanguage({ user, supabase })

    return (
        <NotFound language={language} />
    )
}