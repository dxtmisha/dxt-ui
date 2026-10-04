#!/usr/bin/env vite-node

import { parseCliArguments } from './arguments'
import { ComponentCreator } from '../dist/library-ui.js'

const { values } = parseCliArguments(
  'Discovers empty component directories and scaffolds their initial structure from templates.',
  'Usage: dxt-component [--library]',
  {
    library: {
      type: 'boolean',
      short: 'l',
      default: false,
      description: 'Generate library entry files for components'
    }
  }
)

new ComponentCreator(Boolean(values.library)).make()
