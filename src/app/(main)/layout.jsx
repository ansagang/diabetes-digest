import Footer from "@/components/navigation/footer"
import Header from "@/components/navigation/header"
import { getUser } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import supabase from "@/db/supabase-server"

export default async function MainLayout({ children }) {

    const { data: user } = await getUser({ supabase })
    const language = await getLanguage({ user })

    return (
        <>
            <Header language={language} user={user} />
            {children}
            <Footer language={language} user={user} />
        </>
    )
}