import { withAuth } from "next-auth/middleware";

export default withAuth(
  function middleware(request) {
    // This will only run if token is valid
    return null;
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: "/login",
    },
  }
);

export const config = {
  matcher: [
    "/admin/:path*",
    "/teacher/:path*",
    "/dashboard/:path*",
  ],
};








