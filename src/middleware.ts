import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const HOST: Record<string, string> = {
  "naukrisetu.in": "/naukri",
  "www.naukrisetu.in": "/naukri",
  "yojanapath.in": "/yojana",
  "www.yojanapath.in": "/yojana",
  "hisabbox.in": "/hisab",
  "www.hisabbox.in": "/hisab",
  "parikshadaily.in": "/pariksha",
  "www.parikshadaily.in": "/pariksha",
  "formkit.in": "/formkit",
  "www.formkit.in": "/formkit",
};

export function middleware(req: NextRequest) {
  const prefix = HOST[req.headers.get("host") || ""];
  if (!prefix) return NextResponse.next();
  const { pathname } = req.nextUrl;
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = prefix;
    return NextResponse.rewrite(url);
  }
  if (!pathname.startsWith(prefix) && !pathname.startsWith("/_next") && !pathname.includes(".")) {
    const url = req.nextUrl.clone();
    url.pathname = prefix + pathname;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|ads.txt|robots.txt).*)"],
};
