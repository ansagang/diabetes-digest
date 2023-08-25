import { getUser } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import supabase from "@/db/supabase-server"

export default async function AuthLayout({ children }) {

    const { data: user } = await getUser({ supabase })
    const language = await getLanguage({ user })

    return (
        { children }
    )
}