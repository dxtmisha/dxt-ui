#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { BuildPackages } from '../dist/library.js'

parseCliArguments(
  'Scans, sorts, and builds monorepo packages managing build order by priorities.',
  'Usage: dxt-build-packages'
)

new BuildPackages()
  .make()
  .catch((error) => {
    console.error('dxt-build-packages failed:', error)
    process.exit(1)
  })
