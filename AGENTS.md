# Repository Guidelines

## Project Structure & Module Organization
This repository is a Next.js App Router site for a gym landing page. Route files live in `app/`, with the main entry at `app/page.tsx` and the plans page at `app/plans/page.tsx`. Reusable UI sections are grouped in `app/Components/` and use PascalCase filenames such as `Hero.tsx` and `PricingSection.tsx`.

Shared helpers and configuration wrappers live in `lib/` (`api.ts`, `constants.ts`, `whatsapp.ts`). Static assets are split between `public/assets/img/` for images served directly and `app/assets/` for legacy CSS, JS, SCSS, and fonts.

## Build, Test, and Development Commands
Use `npm` because `package-lock.json` is committed.

- `npm install`: install dependencies.
- `npm run dev`: start the local development server on `http://localhost:3000`.
- `npm run build`: create the production build; use this as the main validation step before opening a PR.
- `npm run start`: serve the production build locally.
- `npm run setup`: run the Contentful bootstrap script in `lib/setup.js` when CMS content model setup is needed.

## Coding Style & Naming Conventions
Write TypeScript and React components with strict typing enabled by `tsconfig.json`. Follow the existing codebase style: PascalCase for components, camelCase for variables/functions, and `@/` imports for root-based paths.

Match the surrounding file’s formatting when editing. Most components currently use 2 to 4 spaces and double quotes in JSX props/classes. Keep components focused on a single section of the page and place shared constants in `lib/` instead of duplicating strings.

## Testing Guidelines
There is no automated test framework configured yet. Until one is added, treat `npm run build` as the required verification step for every change and manually smoke-test the affected page in `npm run dev`.

If you add tests later, place them next to the feature or under a dedicated `tests/` directory and use names ending in `.test.ts` or `.test.tsx`.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries such as `Add plan sections...` and `Refactor service section layout...`. Keep commit subjects concise, present tense, and scoped to one change.

PRs should include a brief description, note any environment or content changes, and attach screenshots for UI updates. Link the relevant issue or task when one exists, and confirm that `npm run build` completed successfully.

## Security & Configuration Tips
Do not commit `.env.local`. Use `.env.local.example` as the template for required Contentful values, and document any new environment variables there when adding them.
