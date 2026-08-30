#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignFlags } from '../dist/library-ui.js'

parseCliArguments(
  'Generates a combined flag sprite image (webp) and CSS background-position utility classes.',
  'Usage: dxt-flags'
)

new DesignFlags()
  .make()
  .catch((error) => {
    console.error('dxt-flags failed:', error)
    process.exit(1)
  })
