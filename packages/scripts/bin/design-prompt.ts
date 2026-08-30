#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { LibraryAiPrompt } from '../dist/library.js'

const { values } = parseCliArguments(
  'Generates the consolidated AI prompt file ai-prompt.md for the project.',
  'Usage: dxt-prompt [--mcp]',
  {
    mcp: {
      type: 'boolean',
      short: 'm',
      default: false,
      description: 'Also generate the MCP configuration files'
    }
  }
)

try {
  new LibraryAiPrompt([], values.mcp === true).make()
  process.exit(0)
} catch (error) {
  console.error('dxt-prompt failed:', error)
  process.exit(1)
}
