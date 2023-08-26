import { getUser } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"

export default async function AuthLayout({ children }) {

    const supabase = getSupabase(cookies)
    const { data: user } = await getUser({ supabase })
    const language = await getLanguage({ user })

    return (
        { children }
    )
}