import { getLanguage } from "@/lib/get-language";
import LoginForm from "@/components/sections/login-form";

export async function generateMetadata() {

  const language = await getLanguage({})

  return {
    title: language.app.pages.login.meta.title,
  }
}

export default async function Login() {
  const language = await getLanguage({})

  return (
    <LoginForm language={language} />
  )
}
