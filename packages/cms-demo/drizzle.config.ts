import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: '../cms-api/src/media/schema/cmsSchema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!
  }
})
