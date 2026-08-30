#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignConstructor } from '../dist/library-ui.js'

const { values } = parseCliArguments(
  'Generates constructor files: property definitions, types, styles, and integration logic.',
  'Usage: dxt-constructor [--name NAME]',
  {
    name: {
      type: 'string',
      short: 'n',
      description: 'Constructor name'
    }
  }
)

const name = (typeof values.name === 'string' ? values.name : undefined) ?? ''

new DesignConstructor(name)
  .make()
  .catch((error) => {
    console.error('dxt-constructor failed:', error)
    process.exit(1)
  })
