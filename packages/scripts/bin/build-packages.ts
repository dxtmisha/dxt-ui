#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { BuildPackages } from '../dist/library.js'

const { values } = parseCliArguments(
  'Scans, sorts, and builds monorepo packages managing build order by priorities.',
  'Usage: dxt-build-packages [--code CODE] [--dir DIR] [--log LOG]',
  {
    code: {
      type: 'string',
      short: 'c',
      description: 'Custom build command or script name to execute'
    },
    dir: {
      type: 'string',
      short: 'd',
      description: 'Packages directory path'
    },
    log: {
      type: 'string',
      short: 'l',
      description: 'Custom build log file name or path'
    }
  }
)

const dir = typeof values.dir === 'string' ? values.dir : undefined
const code = typeof values.code === 'string' ? values.code : undefined
const log = typeof values.log === 'string' ? values.log : undefined

new BuildPackages(dir, code, log)
  .make()
  .catch((error) => {
    console.error('dxt-build-packages failed:', error)
    process.exit(1)
  })
