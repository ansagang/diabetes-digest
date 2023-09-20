import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"
import { getLanguage } from "@/lib/get-language"
import { auth } from "@/lib/auth"
import _Account from "@/components/sections/account"

export default async function Account() {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    return (
        <_Account language={language} user={user} />
    )
}