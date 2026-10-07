#!/usr/bin/env vite-node

// Scans, sorts, and builds monorepo packages managing build order by priorities.
// Сканирует, сортирует и собирает пакеты монорепозитория с учетом приоритетов сборки.

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { BuildPackages } from '../dist/library.js'

const { values } = parseCliArguments(
  'Scans, sorts, and builds monorepo packages managing build order by priorities.',
  'Usage: dxt-build-packages [--code CODE] [--date] [--dir DIR] [--log LOG]',
  {
    code: {
      type: 'string',
      short: 'c',
      description: 'Custom build command or script name to execute'
    },
    date: {
      type: 'boolean',
      short: 't',
      description: 'Compare package modification date in addition to version'
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
const date = typeof values.date === 'boolean' ? values.date : undefined

new BuildPackages({
  path: dir,
  code,
  logFile: log,
  date
})
  .make()
  .catch((error) => {
    console.error('dxt-build-packages failed:', error)
    process.exit(1)
  })
