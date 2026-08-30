#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { BuildPublishPackages } from '../dist/library.js'

parseCliArguments(
  'Scans changed packages, compares versions with the npm registry, builds and publishes updates.',
  'Usage: dxt-build-publish-packages'
)

new BuildPublishPackages()
  .make()
  .catch((error) => {
    console.error('dxt-build-publish-packages failed:', error)
    process.exit(1)
  })
