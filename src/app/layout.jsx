import '@/styles/adaptive.scss'
import '@/styles/style.scss'

import { cookies, headers } from 'next/headers'
import { Montserrat } from 'next/font/google'

import { getLanguage } from '@/lib/get-language'
import { getUser } from '@/lib/auth'

import NotificationProvider from '@/context/notification-provider'
import LoadingProvider from '@/context/loading-provider'

import getSupabase from '@/db/supabase-server'

const font = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'] })
export const revalidate = 0;

export async function generateMetadata() {

  const supabase = getSupabase(cookies)
  const { data: user } = await getUser({ supabase })

  const language = await getLanguage({ user, supabase })

  return {
    title: {
      default: language.app.meta.title,
      template: `%s - ${language.app.meta.title}`
    },
    description: language.app.meta.description,
    keywords: language.app.meta.keywords,
    authors: [
      {
        name: "ansagang",
        url: "https://github.com/ansagang",
      },
    ],
    creator: "ansagang",
    // themeColor: [
    //   { media: "(prefers-color-scheme: light)", color: "white" },
    //   { media: "(prefers-color-scheme: dark)", color: "black" },
    // ],
    // openGraph: {
    //   type: "website",
    //   locale: "en_US",
    //   url: siteConfig.url,
    //   title: siteConfig.name,
    //   description: siteConfig.description,
    //   siteName: siteConfig.name,
    // },
    // twitter: {
    //   card: "summary_large_image",
    //   title: language.app.meta.title,
    //   description: language.app.meta.description,
    //   // images: [`${siteConfig.url}/og.jpg`],
    //   creator: "@ansagang",
    // },
    // icons: {
    //   icon: "/favicon.ico",
    //   shortcut: "/favicon.ico",
    //   apple: "/apple-touch-icon.png",
    // },

  }
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={font.className}>
        <LoadingProvider>
          <NotificationProvider>
            {children}
          </NotificationProvider>
        </LoadingProvider>
      </body>
    </html>
  )
}

