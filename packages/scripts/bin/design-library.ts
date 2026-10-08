#!/usr/bin/env vite-node

// Generates exportable data and aggregate module entries for the library.
// Генерирует экспортируемые данные и агрегирующие точки входа модулей для библиотеки.

import { parseCliArguments } from './arguments'
import { LibraryExport } from '../dist/library.js'

const { values } = parseCliArguments(
  'Generates exportable data and aggregate module entries for the library.',
  'Usage: dxt-library [--no-style] [--sub]',
  {
    'no-style': {
      type: 'boolean',
      description: 'Exclude styles from the exported library'
    },
    'sub': {
      type: 'boolean',
      description: 'Generate additional _library.ts without components in the library folder'
    }
  }
)

const style = !values['no-style']
const sub = Boolean(values.sub)

new LibraryExport(style, sub).make()
