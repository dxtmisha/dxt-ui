#!/usr/bin/env vite-node

import { parseCliArguments } from './arguments'
import { DesignUi } from '../dist/library-ui.js'

const { values } = parseCliArguments(
  'Orchestrates design system generation: styles, documentation, component structures, and library exports.',
  'Usage: dxt-ui [--name NAME]',
  {
    name: {
      type: 'string',
      short: 'n',
      description: 'Design system name'
    }
  }
)

const name = typeof values.name === 'string' ? values.name : undefined

new DesignUi(name).make()
