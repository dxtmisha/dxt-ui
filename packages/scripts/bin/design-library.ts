#!/usr/bin/env vite-node

import { parseCliArguments } from './arguments'
import { LibraryExport } from '../dist/library.js'

const { values } = parseCliArguments(
  'Generates exportable data and aggregate module entries for the library.',
  'Usage: dxt-library [--no-style]',
  {
    'no-style': {
      type: 'boolean',
      description: 'Exclude styles from the exported library'
    }
  }
)

const style = !values['no-style']

new LibraryExport(style).make()
