import { cookies } from "next/headers"
import getSupabase from "@/db/supabase-server"
import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"

export default async function NotFound() {

    const supabase = getSupabase(cookies)
    const { data: user } = await auth.getUser({ supabase })
  
    const language = await getLanguage({ user, supabase })
  
    return (
        <section className="not-found">
            <div className="container">
                <div className="not-found__inner inner">
                    <div className="not-found__content">
                        <div className="not-found__title title">
                            <h1>{language.app.pages.notFound.meta.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}