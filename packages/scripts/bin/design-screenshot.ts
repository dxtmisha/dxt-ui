#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignScreenshot } from '../dist/library.js'

parseCliArguments(
  'Captures full-page component screenshots and extracts DOM/CSS artifacts via a headless browser.',
  'Usage: dxt-screenshot'
)

new DesignScreenshot()
  .make()
  .catch((error) => {
    console.error('dxt-screenshot failed:', error)
    process.exit(1)
  })
