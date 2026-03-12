# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 static personal website** (no backend, no database, no Docker).

- **Node version**: `.nvmrc` specifies `lts/iron` (Node 20). Activate via `nvm use` before running commands.
- **Package manager**: pnpm (version pinned in `packageManager` field of `package.json`). Use `corepack enable` if pnpm is not available.
- **No ESLint config**: The project has no `.eslintrc` or `eslint.config.*`. TypeScript type-checking (`npx tsc --noEmit`) is the primary code quality check.
- **No test framework**: There are no automated tests configured in this repo.
- **Scripts**: See `package.json` — `pnpm dev` starts the dev server on port 3000, `pnpm build` produces a static export to `/out`.
- **Blog route**: The blog lives at `/blog` but is not linked in the top navigation bar. Navigate directly to `localhost:3000/blog` during testing.
- **Build warnings about redirects**: `next build` emits warnings about redirects not working with `output: 'export'` — these are expected and harmless for the static export.
