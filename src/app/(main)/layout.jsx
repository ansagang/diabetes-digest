import Footer from "@/components/navigation/footer"
import Header from "@/components/navigation/header"
import { getUser } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"

export default async function MainLayout({ children }) {

    const supabase = getSupabase(cookies)
    const { data: user } = await getUser({ supabase })
    const language = await getLanguage({ user })

    return (
        <div className="wrapper">
            <Header language={language} user={user} />
            {children}
            <Footer language={language} user={user} />
            <Header language={language} user={user} />
            <Header language={language} user={user} />
            <Header language={language} user={user} />
        </div>
    )
}