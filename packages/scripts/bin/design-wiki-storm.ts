#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignWikiStorm } from '../dist/library-ui.js'

parseCliArguments(
  'Generates web-types.json with component metadata for JetBrains IDE IntelliSense support.',
  'Usage: dxt-wiki-storm'
)

new DesignWikiStorm()
  .make()
  .catch((error) => {
    console.error('dxt-wiki-storm failed:', error)
    process.exit(1)
  })
