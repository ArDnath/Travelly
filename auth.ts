import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.Auth_Github_ID,
      clientSecret: process.env.Auth_Github_Secret,
    }),
  ],
  adapter: PrismaAdapter(prisma),
});
