import Login from "@/components/Login"
import { getUser } from "@/lib/auth";
import { getLanguage } from "@/lib/get-language";
import supabase from "@/db/supabase-server";

export default async function Home() {

  const user = await getUser({ supabase })
  const language = await getLanguage({ user: user.data })

  console.log(user, language);

  return (
    <>
      <h1>DIabetes</h1>
      <Login language={language} />
    </>
  )
}
