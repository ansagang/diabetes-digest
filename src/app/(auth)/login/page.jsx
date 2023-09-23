import { getLanguage } from "@/lib/get-language";

import Login from "@/components/sections/login";

export async function generateMetadata() {

  const language = await getLanguage({})

  return {
    title: language.app.pages.login.meta.title,
  }
}

export default async function LoginPage() {
  const language = await getLanguage({})

  return (
    <Login language={language} />
  )
}
