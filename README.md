# Compta.Pilot

## Prerequisites

- Node.js 20 (see `.nvmrc`)
- pnpm

## Installation

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Scripts

- `pnpm build` – type-check and build the app
- `pnpm lint` – run ESLint
- `pnpm format` – run Prettier
- `pnpm test` – run unit tests
- `pnpm test:e2e` – run Playwright e2e tests

## Environment

Copy `.env.example` to `.env` and adjust the values.

## CI

GitHub Actions runs lint, build, and tests on pull requests.

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/).
