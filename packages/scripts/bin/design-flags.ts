#!/usr/bin/env vite-node

// Generates a combined flag sprite image (webp) and CSS background-position utility classes.
// Генерирует объединенный спрайт флагов (webp) и CSS-классы утилит background-position.

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
