import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { readFile } from "node:fs/promises";
import path from "path";

declare module "next-auth" {
  interface User {
    role?: string;
  }
}

type UserRecord = {
  id: string;
  email: string;
  password: string;
  name?: string;
  role?: "admin" | "teacher" | "user";
};

const USERS_FILE = path.join(process.cwd(), "src", "lib", "users.json");

async function readUsers(): Promise<UserRecord[]> {
  try {
    const raw = await readFile(USERS_FILE, "utf8");
    return JSON.parse(raw || "[]");
  } catch (e) {
    return [];
  }
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const users = await readUsers();
        const user = users.find((u) => u.email === credentials.email);

        if (!user) {
          return null;
        }

        const stored = user.password ?? "";

        // Only accept bcrypt hashed passwords for security
        if (!stored.startsWith("$2a$") && !stored.startsWith("$2b$") && !stored.startsWith("$2y$")) {
          console.error("Security: Plaintext password detected for user:", user.email);
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password as string, stored);

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name ?? user.email,
          role: user.role ?? "user",
        } as any;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token as any).role = (user as any).role;
        (token as any).id = (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = (token as any).role;
        (session.user as any).id = (token as any).id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };