import 'server-only'
import { headers } from "next/headers"

const languages = {
  en: () => import('../config/lang/en.json').then((module) => module.default),
  ru: () => import('../config/lang/ru.json').then((module) => module.default),
  kz: () => import('../config/lang/kz.json').then((module) => module.default)
}

export async function getLanguage({ locale, user }) {
  const headersList = headers()
  const language = locale ? locale : user ? user.lang : headersList.get("accept-language").split(",")[0].split("-")[0]


  return languages[language]()
}