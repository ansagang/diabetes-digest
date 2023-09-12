import getSupabase from "@/db/supabase-server"
import { auth } from "@/lib/auth"
import { getLanguage } from "@/lib/get-language"
import { cookies } from "next/headers"
import DiabetesTypes from "@/components/sections/diabetes-types"

export async function generateMetadata() {

    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return {
        title: language.app.pages.diabetes.meta.title,

    }
}

export default async function Diabetes() {


    const supabase = getSupabase(cookies)
    const user = await auth.getUser({ supabase })
    const language = await getLanguage({ user: user.data })

    return (
        // <section className="diabetes">
        //     <div className="container">
        //         <div className="diabetes__inner inner">
        //             <div className="diabetes__content">
        //                 <div className="diabetes__title title">
        //                     <h1>{language.app.pages.diabetes.meta.title}</h1>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <DiabetesTypes language={language} />
    )
}