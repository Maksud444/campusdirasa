## Repository overview

- Stack: Next.js (App Router, Next 16) + React 19 + TypeScript.
- Styling: Tailwind CSS (v4) and `@tailwindcss/postcss`.
- Auth: `next-auth` configured under `src/app/api/auth/[...nextauth]/`.
- Data: `@prisma/client` is installed but `prisma/schema.prisma` currently contains a TODO (empty). There is also Mongo-related code/deps in `pdf-upload/` — treat that folder as a separate microservice.
- Media: Cloudinary integration exists (`cloudinary`, `next-cloudinary`) and API upload endpoints under `src/app/api/upload` and `src/app/api/files`.

## Quick dev commands

- Start dev server: `npm run dev` (reads `package.json` scripts).
- Build: `npm run build` and run with `npm start`.
- Lint: `npm run lint` (project uses `eslint` + `eslint-config-next`).
- Notes: `pdf-upload/` is a separate Node/Express package — `cd pdf-upload && npm install` then run its own scripts if you need to work on GridFS/mongoose logic.

## High-level architecture & conventions (what to know first)

- App Router (file-system routing): pages and endpoints live in `src/app`.
  - UI routes use `page.tsx` and nested `layout.tsx` files for layout composition.
  - API routes use the App Router Route Handlers pattern: `route.ts` files under `src/app/api/<name>/route.ts`.
- Component layout:
  - Reusable UI atoms are in `src/components/ui` (Button, Card, Input).
  - Feature components are grouped under `src/components/features` and `src/components/forms`.
  - App-level layout and navigation live in `src/components/layout` and `src/app/layout.tsx`.
- Server/client boundaries:
  - Files under `src/app/api/*/route.ts` are server-only request handlers.
  - Components in `src/components` are mostly client-rendered UI; check for "use client" at the top of a file to confirm client components.

## Data & persistence notes

- Prisma appears installed, but `prisma/schema.prisma` is a TODO. Avoid changing Prisma migrations unless you run `prisma migrate` locally and confirm the database connection.
- There is evidence of multiple persistence strategies:
  - `@prisma/client` (SQL) — present but not wired in the schema.
  - `mongodb` driver and an Express + Mongoose service inside `pdf-upload/` for GridFS uploads.
  - Cloudinary is used for image/file storage for media uploads.

If you need to modify the data model, state which DB you intend to target and update the relevant service (Prisma vs Mongoose) — they're not interchangeable.

## Authentication & authorization

- NextAuth is mounted at `src/app/api/auth/[...nextauth]/` — inspect that route for providers and callbacks.
- Role-based UI: `src/components/shared/RoleGuard.tsx` provides role gating — follow this pattern when adding role checks in UI.

## Notable files & patterns (quick references)

- `package.json` — show dev scripts and core deps (next, next-auth, prisma, cloudinary).
- `src/app` — primary place to add routes, pages, layouts, and API route handlers.
- `src/components/layout/Sidebar.tsx` and `src/components/layout/TopNav.tsx` — examples of app-level UI that uses Tailwind classes and React state.
- `src/app/api/upload/route.ts` and `src/app/api/files/[filename]/` — look here for upload/download semantics and any filename sanitization.
- `src/lib` — helper utilities (e.g., `cloudinary.ts`, `prisma.ts`, `utils.ts`) used across server and client code.

## How to make safe edits (practical rules for an AI coder)

1. Preserve API route semantics: update `route.ts` handlers in place and keep response shapes stable.
2. When changing database schema or Prisma usage, notify a human: the repo's Prisma schema is incomplete and DB config isn't obvious.
3. For file uploads, keep Cloudinary / GridFS behaviors intact: reference `src/app/api/upload/route.ts` and `pdf-upload/` for existing logic before changing storage backends.
4. Respect client/server boundaries: add `"use client"` in components that use browser hooks; avoid importing browser-only modules into server files.

## Examples (how to find/edit typical things)

- Add an API route: create `src/app/api/myfeature/route.ts` with exported handlers (GET, POST). See `src/app/api/feedback/route.ts` for a working example.
- Add a page and nested layout: create `src/app/(dashboard)/newpage/layout.tsx` and `page.tsx` to get an isolated dashboard section.
- Update auth: edit `src/app/api/auth/[...nextauth]/route.ts` and check `src/components/shared/RoleGuard.tsx` for UI-level checks.

## What's not present / TODOs discovered

- `prisma/schema.prisma` contains a TODO. No migrations or prisma client code are reliable until schema is defined.
- There are no test scripts configured in `package.json` (no Jest/Vitest). Linting is configured via `eslint` only.

---
If any section is unclear or you want me to expand a part (examples for a specific API route, or a PR-ready change to RoleGuard/auth), tell me which area to flesh out and I will update the instructions.
