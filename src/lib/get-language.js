import 'server-only'
import { headers } from "next/headers"

const languages = {
  en: () => import('../config/lang/en.json').then((module) => module.default),
  ru: () => import('../config/lang/ru.json').then((module) => module.default),
  kz: () => import('../config/lang/kz.json').then((module) => module.default)
}

export async function getLanguage({ locale, user, supabase }) {
  const headersList = headers()

  async function languageGet() {
    const headerLanguage = headersList.get("accept-language").split(",")[0].split("-")[0]
    if (locale) {
      return locale
    } else if (user) {
      if (user.lang) {
        return user.lang
      } else {
        await supabase.from("profiles").update({lang: headerLanguage}).eq("email", user.email)
        return headerLanguage
      }
    } else {
      return headerLanguage
    }
  }
  const language = await languageGet()

  return languages[language]()
}