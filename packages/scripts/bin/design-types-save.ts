#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignTypes } from '../dist/library.js'

const { values } = parseCliArguments(
  'Rebuilds ai-types.md from the cached ai-types-list directory without running AI.',
  'Usage: dxt-types-save [--prompts DIR] [--dir DIR] [--dist DIR]',
  {
    prompts: {
      type: 'string',
      short: 'p',
      description: 'Input directory containing prompt files'
    },
    dir: {
      type: 'string',
      short: 'd',
      description: 'Input directory containing declaration files'
    },
    dist: {
      type: 'string',
      description: 'Output directory containing compiled JavaScript files'
    }
  }
)

const promptsDir = typeof values.prompts === 'string' ? values.prompts : undefined
const dir = typeof values.dir === 'string' ? values.dir : undefined
const dirDist = typeof values.dist === 'string' ? values.dist : undefined

new DesignTypes(promptsDir, dir, dirDist)
  .makeSave()
  .catch((error) => {
    console.error('dxt-types-save failed:', error)
    process.exit(1)
  })
