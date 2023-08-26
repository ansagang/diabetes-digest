import Login from "@/components/Login"
import { getUser } from "@/lib/auth";
import { getLanguage } from "@/lib/get-language";
import getSupabase from "@/db/supabase-server";
import { cookies } from "next/headers";
import Hero from "@/components/sections/Hero";

export async function generateMetadata() {

  const supabase = getSupabase(cookies)
  const user = await getUser({ supabase })
  const language = await getLanguage({ user: user.data })

  return {
    title: language.app.pages.main.meta.title,

  }
}

export default async function Home() {

  const supabase = getSupabase(cookies)
  const user = await getUser({ supabase })
  const language = await getLanguage({ user: user.data })

  console.log(user, language);

  return (
    <>
      <Hero language={language} />
      <h1>DIabetes</h1>
      <Login language={language} />
    </>
  )
}
