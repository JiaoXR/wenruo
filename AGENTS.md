# Repository Guidelines

## Project Structure & Module Organization
- `src/` — React app code: `src/App.jsx`, `src/main.jsx`, `src/components/*`, `src/index.css`, `src/assets/`.
- `public/` — static assets served as‑is (e.g., `public/avatar.png`, `public/vite.svg`).
- Config: `tailwind.config.js`, `postcss.config.js`, `vite.config.js`, `eslint.config.js`.
- Entry HTML: `index.html` loads `src/main.jsx`.

## Build, Test, and Development Commands
- `npm ci` — clean install using `package-lock.json`.
- `npm run dev` — start Vite dev server.
- `npm run build` — production build to `dist/`.
- `npm run preview` — preview the production build locally.
- `npm run lint` — run ESLint with project rules.

## Coding Style & Naming Conventions
- Language: JavaScript + JSX (React 19). Indentation: 2 spaces.
- Components: PascalCase filenames (e.g., `Hero.jsx`), default‑export functional components.
- Variables/functions: camelCase; constants UPPER_SNAKE_CASE when truly constant.
- Styling: Tailwind CSS utilities; extend theme in `tailwind.config.js` (e.g., `neon-blue`, `neon-purple`).
- Linting: `eslint.config.js` uses recommended + React Hooks/Refresh. `no-unused-vars` is an error; the rule ignores names matching `^[A-Z_]`—prefer deleting unused code instead of relying on this.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests under `src/__tests__/` and name files `*.test.jsx`.
- Focus on component behavior (render, props, basic interactions); add smoke tests for new views.

## Commit & Pull Request Guidelines
- Commits: concise, imperative; Chinese or English OK (e.g., `feat: add Projects section`, `完善粒子动画`).
- Before PR: ensure `npm run lint` and `npm run build` pass; include screenshots/GIFs for UI changes.
- PR description: what/why, linked issue (if any), manual test notes.

## Security & Configuration Tips
- Frontend only—do not commit secrets. If later using env vars, read via `import.meta.env` and document them.
- For GitHub Pages under a subpath, set Vite `base` in `vite.config.js`.

## Agent-Specific Notes
- Add new UI in `src/components/` and wire via `src/App.jsx`; follow existing animation patterns (Framer Motion) and canvas usage.
- Keep changes scoped and incremental; avoid large refactors without discussion.

