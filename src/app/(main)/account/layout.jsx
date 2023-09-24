import supabase from "@/db/supabase-server"

import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

import Sidebar from "@/components/navigation/side-bar"

import { Icons } from "@/config/icons"

export default async function AccountLayout({ children }) {

    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    const routes = [
        {
            title: language.app.pages.account.meta.title,
            url: '/account',
            exact: true,
            icon: <Icons.settings />
        }
    ]

    return (
        <div className="wrapper__account">
            <Sidebar language={language} routes={routes} />
            {children}
        </div>
    )
}