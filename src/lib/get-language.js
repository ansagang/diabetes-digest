import 'server-only'
import { headers } from "next/headers"
import { cookies } from 'next/headers'
import { auth } from '@/lib/auth'

const languages = {
  en: () => import('../config/lang/en.json').then((module) => module.default),
  ru: () => import('../config/lang/ru.json').then((module) => module.default),
  kz: () => import('../config/lang/kz.json').then((module) => module.default)
}

export async function getLanguage({ locale, user }) {
  const headersList = headers()
  const cookiesList = cookies()

  async function languageGet() {
    if (locale) {
      return locale
    } else if (user) {
      if (user.lang) {
        return user.lang
      } else {
        await auth.update({ email: user.email, data: { lang: headersList.get("accept-language").split(",")[0].split("-")[0] } })
        return headersList.get("accept-language").split(",")[0].split("-")[0]
      }
    } else {
      if (cookiesList.has('lang')) {
        return cookiesList.get('lang')
      } else {
        return headersList.get("accept-language").split(",")[0].split("-")[0]
      }
    }
  }
  const language = await languageGet()

  return languages[language]()
}