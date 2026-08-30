#!/usr/bin/env vite-node

import { parseCliArguments } from './arguments'
import { LibraryExport } from '../dist/library.js'

parseCliArguments(
  'Generates exportable data and aggregate module entries for the library.',
  'Usage: dxt-library'
)

new LibraryExport().make()
