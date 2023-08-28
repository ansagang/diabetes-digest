import { getLanguage } from "@/lib/get-language";
import RegisterForm from "@/components/sections/register-form";

export async function generateMetadata() {

  const language = await getLanguage({})

  return {
    title: language.app.pages.register.meta.title,
  }
}

export default async function Register() {
  const language = await getLanguage({})

  return (
    <RegisterForm language={language} />
  )
}
