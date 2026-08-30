#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignTypes } from '../dist/library.js'

const { values } = parseCliArguments(
  'Compiles package declarations and generates AI-optimized type definitions (ai-types.md).',
  'Usage: dxt-types [--prompts DIR] [--dir DIR] [--dist DIR]',
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
  .make()
  .catch((error) => {
    console.error('dxt-types failed:', error)
    process.exit(1)
  })
