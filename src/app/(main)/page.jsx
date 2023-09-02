import Login from "@/components/Login"
import { getUser } from "@/lib/auth";
import { getLanguage } from "@/lib/get-language";
import getSupabase from "@/db/supabase-server";
import { cookies } from "next/headers";
import Hero from "@/components/sections/hero";
import Suggestion from "@/components/sections/suggestion";
import { api } from "@/lib/api";

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
  const users = await api.getAllUsers({language: language, revalidate: 3600})

  console.log(user, language);
  console.log(users);

  return (
    <>
      <Hero language={language} />
      <Suggestion language={language} />
      <Login language={language} />
    </>
  )
}
