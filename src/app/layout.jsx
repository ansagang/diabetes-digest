import '../styles/style.scss'
import { Montserrat } from 'next/font/google'
import { getLanguage } from '@/lib/get-language'
import { getUser } from '@/lib/auth'
import NotificationProvider from '@/context/notification-provider'
import { cookies } from 'next/headers'
import getSupabase from '@/db/supabase-server'

const font = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })
export const revalidate = 0;

export async function generateMetadata() {

  const supabase = getSupabase(cookies)
  const { data: user } = await getUser({ supabase })
  const language = await getLanguage({ user })

  return {
    title: {
      default: language.app.meta.title,
      template: `%s || ${language.app.meta.title}`
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
    //   shortcut: "/favicon-16x16.png",
    //   apple: "/apple-touch-icon.png",
    // },
  }
}

export default async function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={font.className}>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </body>
    </html>
  )
}

