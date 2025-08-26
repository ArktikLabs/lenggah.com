# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router entry points (`layout.tsx`, `page.tsx`) and global styles (`globals.css`).
- `src/components/`: Reusable UI split into `ui/`, `sections/`, and `layout/` (files use PascalCase, e.g., `Header.tsx`).
- `src/hooks/`: Reusable React hooks (camelCase with `use` prefix, e.g., `useScrollSpy.ts`).
- `src/data/`: Static content and configuration used by sections.
- `src/types/`: Shared TypeScript types/interfaces.
- `public/`: Static assets served at the site root.
- Config: `next.config.js`, `tailwind.config.js`, `eslint.config.js`, `tsconfig.json`. Build output lives in `.next/`.

## Build, Test, and Development Commands
- `npm run dev`: Start the Next.js dev server at `http://localhost:3000` with HMR.
- `npm run build`: Create an optimized production build in `.next/`.
- `npm start`: Run the production build locally.
- `npm run lint`: Lint TypeScript/JavaScript sources with ESLint.
Tip: Node 18+ is recommended. Yarn/PNPM equivalents work if preferred.

## Coding Style & Naming Conventions
- **Language**: TypeScript with `strict` mode; prefer explicit types for public utilities and component props.
- **Components**: PascalCase filenames in `src/components/**` and function components with hooks.
- **Hooks**: `useCamelCase` in `src/hooks/`.
- **Routes**: Follow Next.js App Router conventions inside `app/`.
- **Styling**: Tailwind CSS utilities; keep global resets in `app/globals.css`.
- **Linting**: ESLint (`typescript-eslint`, React Hooks rules). Run `npm run lint` before pushing.

## Testing Guidelines
- No test framework is configured yet. When adding tests, colocate as `*.test.ts(x)` or under `__tests__/` near the code.
- Target: unit tests for hooks and components (e.g., React Testing Library + Vitest/Jest).
- Aim for meaningful coverage on shared utilities and critical UI logic.

## Commit & Pull Request Guidelines
- **Commits**: Use clear, imperative subjects (optionally Conventional Commits: `feat:`, `fix:`, `chore:`). Keep to ≤72 chars where possible.
- **PRs**: Provide a concise summary, linked issues, test plan/steps, and screenshots/gifs for UI changes. Keep diffs focused; update docs when behavior changes.

## Security & Configuration Tips
- Use `.env.local` for secrets; never commit secrets. Expose client-safe vars with `NEXT_PUBLIC_*`.
- Don’t edit `.next/` manually. Prefer configuration via the files in repo.
