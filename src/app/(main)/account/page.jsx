import supabase from "@/db/supabase-server"

import { getLanguage } from "@/lib/get-language"
import { auth } from "@/lib/auth"

import Account from "@/components/sections/account.account"

export async function generateMetadata() {

    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.account.meta.title,

    }
}

export default async function AccountPage() {

    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    return (
        <Account language={language} user={user} />
    )
}