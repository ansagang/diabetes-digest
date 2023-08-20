import { NextResponse } from 'next/server'
import supabase from '@/db/supabase-route'
import { loginValidation } from '@/lib/validation'
import { getLanguage } from '@/lib/get-language'

export async function POST(request) {
    try {
        const requestUrl = new URL(request.url)
        const language = await getLanguage(requestUrl.searchParams.get('lang'))
        const { email, password, provider } = await request.json()
        const errors = loginValidation({ email, password, language })
        if (provider) {
            const { error } = await supabase.auth.signInWithOAuth({ provider: provider, options: { redirectTo: `${requestUrl.origin}/api/auth/callback` } });
            if (!error) {
                return NextResponse.json({
                    success: true,
                    message: language.res.loginResult
                })
            } else {
                return NextResponse.json({
                    success: false,
                    message: error.toString()
                })
            }
        } else {
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
                    return NextResponse.json({
                        success: false,
                        message: error.toString()
                    })
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