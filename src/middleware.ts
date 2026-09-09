import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const hostMap: Record<string, string> = {
  'naukrisetu.in': '/naukri',
  'www.naukrisetu.in': '/naukri',
  'yojanapath.in': '/yojana',
  'www.yojanapath.in': '/yojana',
  'hisabbox.in': '/hisab',
  'www.hisabbox.in': '/hisab',
  'parikshadaily.in': '/pariksha',
  'www.parikshadaily.in': '/pariksha',
  'formkit.in': '/formkit',
  'www.formkit.in': '/formkit',
};

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')?.split(':')[0] ?? '';
  const prefix = hostMap[host];
  if (!prefix) return NextResponse.next();

  const url = request.nextUrl.clone();
  if (!url.pathname.startsWith(prefix)) {
    url.pathname = prefix + (url.pathname === '/' ? '' : url.pathname);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|ads.txt|robots.txt).*)'],
};
