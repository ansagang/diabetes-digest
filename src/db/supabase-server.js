import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default function getSupabase(cookies) {
    return createServerComponentClient({
        cookies
    });
}