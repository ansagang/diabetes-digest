import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { getUser } from '@/lib/auth'
import { routes } from '@/config/routes'

export async function middleware(req) {

  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })
  await supabase.auth.getSession()

  const { data: user } = await getUser({ supabase })

  for (let route of routes) {
    if (route.routes.includes(req.nextUrl.pathname)) {
      if (user) {
        if (user.role !== route.access) {
          return NextResponse.redirect(
            new URL(`/`, req.url)
          )
        }
      } else {
        return NextResponse.redirect(
          new URL('/', req.url)
        )
      }
    }
  }

  return res
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api)(.*)"],
}