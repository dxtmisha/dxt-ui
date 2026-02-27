import { viteFigma } from '@dxtmisha/configuration/viteFigma'
import { uiD1VitePlugin } from '@dxtmisha/d1/plugin'

// https://vite.dev/config/
export default viteFigma(
  process.argv.includes('--watch'),
  __dirname,
  [uiD1VitePlugin]
)
