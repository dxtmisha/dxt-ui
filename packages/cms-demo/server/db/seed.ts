import { runCmsSeed } from '@dxtmisha/cms-nitro'

await runCmsSeed({
  connectionString: process.env.DATABASE_URL
})
