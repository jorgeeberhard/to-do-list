import type { NextAuthConfig } from "next-auth";

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
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/list", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
