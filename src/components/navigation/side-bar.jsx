"use client"

import NavLink from "@/components/ui/nav-link"
import { auth } from "@/lib/auth"
import supabase from "@/db/supabase-client"
import { useRouter } from "next/navigation"
import { Icons } from "@/config/icons"

export default function Sidebar({ language, routes }) {

    const router = useRouter()

    async function signOut() {
        try {
            const res = await auth.signOut({ supabase, language })
            if (res.success) {
                router.refresh()
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__inner">
                <nav className="sidebar__nav">
                    <ol className="sidebar__ol">
                        {
                            routes ?
                                (
                                    routes.length > 0 ?
                                        (
                                            routes.map((route) => (
                                                <li className="sidebar__li">
                                                    <NavLink exact={route.exact} href={route.url}>{route.icon}<p>{route.title}</p></NavLink>
                                                </li>
                                            ))
                                        )
                                        :
                                        null
                                )
                                :
                                null
                        }
                        <li className="sidebar__li">
                            <NavLink exact={true} href={'/'} onClick={() => signOut()}><Icons.signOut />{language.app.buttons.signOut}</NavLink>
                        </li>
                    </ol>
                </nav>
            </div>
        </aside>
    )
}