# Naman Thakur — Portfolio

[![Deploy](https://github.com/devnamanthakur/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/devnamanthakur/portfolio/actions/workflows/deploy.yml)

Personal portfolio website showcasing my skills, projects, and contact information.

**Live site:** https://devnamanthakur.github.io/portfolio/

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- react-icons

## Sections

- About Me
- Skills
- Projects
- Contact

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs the production site to `dist/`.

## Deployment

Hosted on GitHub Pages. Every push to `main` triggers the
[`deploy.yml`](.github/workflows/deploy.yml) GitHub Actions workflow, which builds
the site and publishes the `dist/` artifact to Pages.
