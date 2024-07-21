import { NextRequest, NextResponse } from 'next/server'

import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
    const { response, user } = await updateSession(request)

    const protectedRoutes: string[] = []

    if (
        !user &&
        protectedRoutes.some((route) =>
            request.nextUrl.pathname.startsWith(route),
        )
    ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return response
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - ttf, woff, woff2 (font files)
         */
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ttf|woff|woff2)$).*)',
    ],
}
