import getSupabase from "@/db/supabase-server"
import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import { cookies } from "next/headers"
import Sidebar from "@/components/navigation/side-bar"
import { Icons } from "@/config/icons"

export default async function AccountLayout({ children }) {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })
    const language = await getLanguage({ user, supabase })

    const routes = [
        {
            title: language.app.pages.account.meta.title,
            url: '/account',
            exact: true,
            icon: <Icons.settings />
        },
        // {
        //     title: language.app.pages.account.meta.title,
        //     url: '/diabetes/type-2/risk-test',
        //     exact: false
        // }
        // my events
        // appearence
        // liked blogs
    ]

    return (
        <div className="wrapper__account">
            {/* <div className="container__fluid"> */}
                <Sidebar language={language} routes={routes} />
                {children}
            {/* </div> */}
        </div>
    )
}