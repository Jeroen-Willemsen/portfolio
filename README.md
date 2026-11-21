# Jeroen Willemsen — Portfolio

Personal portfolio of a linguist-turned-developer, built as a single-page application in **Angular 20** with
standalone components and Angular Material.

## What's in it

- **About me** — a short introduction.
- **Linguistics**
  - *Academic publications* — pre-prints and links to the published versions, including the PhD dissertation
    *A Grammar of Reta*.
  - *Popular science and blogs* — articles in English, Dutch and Danish, filterable by language.
  - *The Reta language* — a photo carousel from fieldwork on the slopes of Mount Maru.
- **Programming**
  - *Professional programming experience* — front-end, back-end, databases, projects and certifications.
  - *Side projects* — six small browser games written in Angular (hangman, memory, snake, tic-tac-toe,
    typing test, whack-a-mole) and the source of three Python desktop apps, with downloadable `.exe` builds.

## Project structure

```
src/app/
  components/      One folder per page/tab (linguistics, programming, games, ...)
  models/          TypeScript interfaces for the content
  services/        The content itself (publications, articles, experience, photos)
  shared/          Shared helpers, e.g. the fade-in animation used by every view
  app.routes.ts    Routes; every page except the landing page is lazy-loaded
src/assets/        PDFs, photos, certifications and Python executables
```

Content lives in the services under `src/app/services/`, so adding a publication or article is a matter of adding
an entry to the relevant array.

## Running locally

```bash
npm install
npm start            # dev server on http://localhost:4200
```

## Building and deploying

```bash
npm run build        # production build into dist/portfolio
npm run deploy       # build and publish to GitHub Pages via angular-cli-ghpages
```

The base href is set in `angular.json` (`/jwillemsendev/`) and overridden by the `build` script (`/portfolio/`);
make sure the one that's used matches the repository name on GitHub Pages.

## Tests

```bash
npm test             # Karma + Jasmine
```
