# @dxtmisha/cms-demo

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/cms-demo` is a local development and demonstration application for testing `@dxtmisha/cms-api`. It runs on Vite, Vue 3, and [Nitro](https://nitro.unjs.io) with Server-Side Rendering (SSR), backed by a containerized PostgreSQL database and Drizzle ORM.

## What does it include?

- **Database Runtime (`docker-compose.yml`)** — pre-configured PostgreSQL 17 Alpine container (`cms_db`) with persistent Docker volume storage (`pgdata`).
- **Schema & Migrations (`drizzle.config.ts`)** — Drizzle Kit configuration linked to the `@dxtmisha/cms-api` schema (`permissions`, `roles`, `role_permissions`, `users`, `user_roles`).
- **Environment Configuration (`.env`)** — pre-configured local `DATABASE_URL` pointing to the Docker PostgreSQL instance (local overrides can be placed in `.env.local`).
- **Nitro Server (`server/`)** — backend API routes and plugins for testing CMS server logic.
- **Vue 3 Frontend (`src/`)** — client application and SSR entry point.

## Prerequisites & Setup

1. Ensure **Docker** (OrbStack or Docker Desktop) is running on your machine.
2. Start the PostgreSQL container from `packages/cms-demo`:
   ```bash
   docker compose up -d
   ```
3. Push the database schema to PostgreSQL:
   ```bash
   npm run db:push -w @dxtmisha/cms-demo
   ```
4. Start the development server:
   ```bash
   npm run dev -w @dxtmisha/cms-demo
   ```

## Available Scripts

You can run these scripts directly inside `packages/cms-demo` (`npm run <script>`) or from the monorepo root (`npm run <script> -w @dxtmisha/cms-demo`):

### Application & Build

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `vite dev` | Starts the local development server with Vite, Vue 3, and Nitro server routes. |
| `build` | `vite build` | Builds the client and Nitro server output bundles for production. |
| `preview` | `vite preview` | Locally serves and previews the production build. |
| `component` | `dxt-component` | Scaffolds new UI component templates via `@dxtmisha/scripts`. |

### Database (`Drizzle Kit`)

| Script | Command | Description |
| --- | --- | --- |
| `db:generate` | `drizzle-kit generate` | Compares the current Drizzle schema with previous snapshots and generates versioned `.sql` migration files in `./drizzle`. |
| `db:migrate` | `drizzle-kit migrate` | Applies all pending `.sql` migrations from `./drizzle` to the PostgreSQL database specified by `DATABASE_URL`. |
| `db:push` | `drizzle-kit push` | Synchronizes the Drizzle schema directly with PostgreSQL without creating migration files. Ideal for fast local prototyping. |
| `db:studio` | `drizzle-kit studio` | Opens Drizzle Studio in the browser for visual inspection and editing of PostgreSQL tables and rows. |

## Docker Commands

Run inside `packages/cms-demo`:

```bash
# Start PostgreSQL in the background
docker compose up -d

# Stop the container (database data is preserved in the pgdata volume)
docker compose down

# Stop the container and completely wipe the database volume
docker compose down -v
```
