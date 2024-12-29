// import type { NextRequest } from "next/server";
import { NextRequest, NextResponse } from 'next/server';

export function middleware(req:NextRequest) {

  const { pathname } = req.nextUrl.clone();

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }
 

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
