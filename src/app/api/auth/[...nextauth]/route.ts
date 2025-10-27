import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { readFile } from "node:fs/promises";
import path from "path";

type UserRecord = {
  id: string;
  email: string;
  password: string; // either bcrypt hash or plaintext for dev
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

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("البريد الإلكتروني وكلمة المرور مطلوبان");
        }

        const users = await readUsers();
        const user = users.find((u) => u.email === credentials.email);

        if (!user) {
          throw new Error("المستخدم غير موجود");
        }

        // Support both hashed and plaintext passwords for dev convenience:
        const stored = user.password ?? "";
        let isValid = false;
        if (stored.startsWith("$2a$") || stored.startsWith("$2b$") || stored.startsWith("$2y$")) {
          isValid = await bcrypt.compare(credentials.password, stored);
        } else {
          // plaintext fallback (NOT for production)
          isValid = credentials.password === stored;
        }

        if (!isValid) {
          throw new Error("كلمة المرور غير صحيحة");
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
    async redirect({ url, baseUrl }) {
      // Redirect to dashboard after sign in
      if (url.startsWith(baseUrl)) return url;
      return `${baseUrl}/dashboard`;
    },
  },
  pages: { signIn: "/login" },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
