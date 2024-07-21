import { cookies } from 'next/headers'

import { env } from '@/env'
import { createServerClient } from '@supabase/ssr'

export function createClient() {
    const cookieStore = cookies()

    return createServerClient(
        env.NEXT_PUBLIC_SUPABASE_URL,
        env.SUPABASE_SERVICE_ROLE_KEY,
        {
            global: {
                headers: {
                    Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
                },
            },
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) =>
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                        cookieStore.set(name, value, options),
                    )
                },
            },
        },
    )
}
