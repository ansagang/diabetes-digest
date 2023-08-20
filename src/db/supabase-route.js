import { cookies } from "next/headers"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"

const supabase = createRouteHandlerClient({ cookies })

export default supabase