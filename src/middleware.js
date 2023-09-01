import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { routes } from '@/config/routes'
// import { headers } from 'next/headers'


export async function middleware(req) {

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()

  const { data: user } = await getUser({ supabase })



  // if (req.nextUrl.pathname.startsWith('/')) {
  //   const headerLanguage = req.headers.get("accept-language").split(",")[0].split("-")[0]
  //   console.log(`/${headerLanguage}/${req.url.pathname}`);
  //   if (user) {
  //     if (user.lang) {
  //       return NextResponse.redirect(
  //         new URL(`/${user.lang}/${req.url.pathname}`, req.url)
  //       )
  //     } else {
  //       await supabase.from("profiles").update({ lang: headerLanguage }).eq("email", user.email)
  //       return NextResponse.redirect(
  //         new URL(`/${headerLanguage}/${req.url.pathname}`, req.url)
  //       )
  //     }
  //   } else {
  //     console.log(`/${headerLanguage}/${req.url.pathname}`);
  //     return NextResponse.redirect(
  //       new URL(`/${headerLanguage}/${req.url.pathname}`, req.url)
  //     )
  //   }
  // }

  for (let route of routes) {
    if (route.routes.includes(req.nextUrl.pathname)) {
      if (user) {
        if (user.role !== route.access) {
          return NextResponse.redirect(
            new URL(`/`, req.url)
          )
        }
      } else {
        if (route.access) {
          return NextResponse.redirect(
            new URL('/', req.url)
          )
        }
      }
    }
  }

  if (req.nextUrl.pathname.startsWith('/api')) {
    const api_key = req.headers.get('x-api-key')
    if (api_key !== process.env.API_KEY) {
      return NextResponse.json({
        success: false,
        message: "Invalid api key"
      })
    } else {
      return NextResponse.next()
    }
  }

  return res
}

export const config = {
  matcher: ["/"],
}