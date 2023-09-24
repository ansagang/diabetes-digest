
import Footer from "@/components/navigation/footer"
import Header from "@/components/navigation/header"

import { getUser } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

import supabase from "@/db/supabase-server"


export default async function MainLayout({ children }) {

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