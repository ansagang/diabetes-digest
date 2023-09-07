import Footer from "@/components/navigation/footer"
import Header from "@/components/navigation/header"
import { getUser } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import getSupabase from "@/db/supabase-server"
import { cookies } from "next/headers"

export default async function MainLayout({ children }) {

    const supabase = getSupabase(cookies)
    const { data: user } = await getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    return (
        <div className="wrapper__main">
            <Header language={language} user={user} />
            <main>
                {children}
            </main>
            <Footer language={language} user={user} />
        </div>
    )
}