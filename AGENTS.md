# Repository Guidelines

## Project Structure & Module Organization
- `src/components/{layout,sections,ui}`: Reusable UI, page sections, layout shell.
- `src/hooks`: Custom hooks (e.g., `useLanguage`).
- `src/types`: Shared TypeScript types/interfaces.
- `src/data`: Copy and content (e.g., `content.ts`).
- `public`: Static assets served as-is.
- Root configs: `vite.config.ts`, `tailwind.config.js`, `eslint.config.js`, `tsconfig*.json`.

## Build, Test, and Development Commands
- `npm run dev`: Start Vite dev server with HMR.
- `npm run build`: Production build to `dist/`.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Lint all files using ESLint.

## Coding Style & Naming Conventions
- TypeScript + React 18, function components and hooks.
- ESLint rules defined in `eslint.config.js` (includes React Hooks and Refresh checks).
- Prefer PascalCase for components (`ComponentName.tsx`), camelCase for variables/functions, UPPER_SNAKE_CASE for constants.
- Hooks start with `use*` and live in `src/hooks`.
- Co-locate component-specific styles with components; prefer Tailwind utility classes.
- Suggested: run `npx eslint . --fix` before committing.

## Testing Guidelines
- Tests are not yet configured. Recommended stack: Vitest + React Testing Library.
- Place tests next to sources: `ComponentName.test.tsx` or `hookName.test.ts`.
- Aim for ~80% line coverage on critical modules; focus on hooks and rendering of sections.
- Once added, expose `npm test` (e.g., `vitest`) and `npm run test:coverage`.

## Commit & Pull Request Guidelines
- Use Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, `test:`, `chore:`.
- Branch names: `feature/short-description`, `fix/bug-id`.
- PRs must include: clear summary, linked issues (if any), before/after screenshots for UI changes, and a short testing checklist.
- Ensure `npm run lint` passes and `npm run build` succeeds; avoid `console.log` in committed code.

## Architecture Notes
- Vite + React + TypeScript + Tailwind SPA.
- Content and i18n copy live in `src/data`; language toggle via `useLanguage` sets `id`/`en` and updates meta tags in `App.tsx`.
- Sections render through `src/components/sections` within `App.tsx`.
