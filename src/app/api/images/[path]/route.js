import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import { getLanguage } from '@/lib/get-language';
import supabaseErrors from '@/db/supabase-errors';

export async function GET(request, { params }) {
    try {
        const supabase = createRouteHandlerClient({ cookies });
        const requestUrl = new URL(request.url)
        const locale = requestUrl.searchParams.get('lang')
        const width = requestUrl.searchParams.get('width')
        const height = requestUrl.searchParams.get('height')
        const bucket = requestUrl.searchParams.get('bucket')
        const language = await getLanguage({ locale: locale })
        const path = params.path
        const { data, error } = supabase.storage.from(bucket).getPublicUrl(path, {
            transform: {
                width: width,
                height: height
            }
        })
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