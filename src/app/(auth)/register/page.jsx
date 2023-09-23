import { getLanguage } from "@/lib/get-language";

import Register from "@/components/sections/register";

export async function generateMetadata() {

  const language = await getLanguage({})

  return {
    title: language.app.pages.register.meta.title,
  }
}

export default async function RegisterPage() {
  const language = await getLanguage({})

  return (
    <Register language={language} />
  )
}
