import { viteFigma } from '@dxtmisha/configuration/viteFigma'

// https://vite.dev/config/
export default viteFigma(
  process.argv.includes('--watch'),
  import.meta.dirname
)
