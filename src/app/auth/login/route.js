import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import { loginValidation } from '@/lib/validation'
import { getLanguage } from '@/lib/get-language';
import supabaseErrors from '@/db/supabase-errors';

export async function GET(request) {
    try {
        const supabase = createRouteHandlerClient({ cookies: () => cookies() });
        const requestUrl = new URL(request.url)
        const locale = requestUrl.searchParams.get('lang')
        const language = await getLanguage({ locale: locale })
        const provider = requestUrl.searchParams.get('provider')
        // `http://localhost:3000/auth/callback`
        const { error } = await supabase.auth.signInWithOAuth({ provider: provider, options: { redirectTo: 'http://localhost:3000/auth/callback' } });
        if (!error) {
            return NextResponse.json({
                success: true,
                message: language.res.loginResult
            })
        } else {
            const res = supabaseErrors({ error, language })
            return NextResponse.json(res)
        }
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.toString()
        })
    }
}

export async function POST(request) {
    try {
        const supabase = createRouteHandlerClient({ cookies });
        const requestUrl = new URL(request.url)
        const locale = requestUrl.searchParams.get('lang')
        const language = await getLanguage({ locale: locale })
        // const provider = requestUrl.searchParams.get('provider')
        const { email, password, provider } = await request.json()
        if (provider) {
            // console.log(provider);
            // `http://localhost:3000/auth/callback`
            const { error } = await supabase.auth.signInWithOAuth({ provider: provider, options: { redirectTo: 'http://localhost:3000/auth/callback' } });
            if (!error) {
                return NextResponse.json({
                    success: true,
                    message: language.res.loginResult
                })
            } else {
                const res = supabaseErrors({ error, language })
                return NextResponse.json(res)
            }
        } else {
            const errors = loginValidation({ email, password, language })
            if (errors.length === 0) {
                const { error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                })
                if (!error) {
                    return NextResponse.json({
                        success: true,
                        message: language.res.loginResult
                    })
                } else {
                    const res = supabaseErrors({ error, language })
                    console.log(res);
                    return NextResponse.json(res)
                }
            } else {
                return NextResponse.json({
                    success: false,
                    message: errors
                })
            }
        }
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.toString()
        })
    }
}