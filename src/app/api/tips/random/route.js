import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import { getLanguage } from '@/lib/get-language';

export async function GET(request) {
    try {
        const supabase = createRouteHandlerClient({ cookies });
        const requestUrl = new URL(request.url)
        const locale = requestUrl.searchParams.get('lang')
        const language = await getLanguage({ locale: locale })
        const { data, error } = await supabase.from("tips").select().eq("lang", locale)
        const index = Math.floor(Math.random() * data.length);
        const _data = data[index]
        if (!error) {
            return NextResponse.json({
                success: true,
                message: language.res.getResult,
                data: _data
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