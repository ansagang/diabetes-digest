import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import { getLanguage } from '@/lib/get-language';
import supabaseErrors from '@/db/supabase-errors';

export async function GET(request) {
    try {
        const supabase = createRouteHandlerClient({ cookies });
        const requestUrl = new URL(request.url)
        const locale = requestUrl.searchParams.get('lang')
        const language = await getLanguage({ locale: locale })
        const { data, error } = await supabase.from("team").select().eq("lang", locale)
        if (!error) {
            return NextResponse.json({
                success: true,
                message: language.res.getResult,
                data: data
            })
        } else {
            const res = supabaseErrors({ error, language })
            return NextResponse.json(res)
        }
    } catch (err) {
        return NextResponse.json({
            success: false,
            message: err.message
        })
    }
}