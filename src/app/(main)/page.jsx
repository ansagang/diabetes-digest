import Login from "@/components/Login"
import { getUser } from "@/lib/auth";
import { getLanguage } from "@/lib/get-language";
import getSupabase from "@/db/supabase-server";
import { cookies } from "next/headers";
import Hero from "@/components/sections/hero";
import Suggestion from "@/components/sections/suggestion";
import { api } from "@/lib/api";
import Tip from "@/components/sections/tip";
import Events from "@/components/sections/events";

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
  const { data: users } = await api.getAllUsers({ language: language, revalidate: 3600 })
  const { data: tip } = await api.getTip({ language: language, revalidate: 86400 })
  const { data: events } = await api.getEvents({ language: language, revalidate: 0, sort: 'asc' })

  console.log(user, language);
  console.log(users);
  console.log(tip);

  return (
    <>
      <Hero language={language} />
      <Suggestion language={language} />
      <Tip language={language} tip={tip} />
      {/* <Login language={language} /> */}
      <Events language={language} events={events} />
    </>
  )
}
