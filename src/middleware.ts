import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SITES = ['naukri', 'yojana', 'hisab', 'pariksha', 'formkit'] as const

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  // Basic path-based multi-tenant routing helper
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
