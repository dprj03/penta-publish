import { NextRequest, NextResponse } from "next/server";

const HOST_MAP: Record<string, string> = {
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
  const host = req.headers.get("host")?.split(":")[0]?.toLowerCase() || "";
  const prefix = HOST_MAP[host];
  if (!prefix) return NextResponse.next();

  const { pathname } = req.nextUrl;
  // Already rewritten or static
  if (
    pathname.startsWith(prefix) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const url = req.nextUrl.clone();
  url.pathname = prefix + (pathname === "/" ? "" : pathname);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
