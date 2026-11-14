# @dxtmisha/cms-nitro

Nitro plugins and server integration utilities for DXT CMS.

## Overview

- `initPluginCms(nitroApp, options)` — Initializes CMS database seeding (`seedCmsDatabase`) on Nitro server startup using a provided Drizzle `CmsDb` instance or PostgreSQL `connectionString`.
- `runCmsSeed(options)` — Runs standalone CMS database seeding (`seedCmsDatabase`) with error handling, `process.exitCode` reporting, and automatic connection cleanup (`onClose` or PostgreSQL client `.end()`).
- `CmsNitroOptions` / `CmsNitroSeedOptions` / `CmsNitroInitResult` — Configuration and result interfaces for `initPluginCms` and `runCmsSeed`.
