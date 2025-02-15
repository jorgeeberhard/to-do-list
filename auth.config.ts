import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnList = nextUrl.pathname.startsWith("/list");
      if (isOnList) {
        if (isLoggedIn) return true;
        return NextResponse.redirect(new URL("/", nextUrl));
      } else if (isLoggedIn) {
        return true;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
