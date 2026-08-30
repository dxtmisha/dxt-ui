#!/usr/bin/env vite-node

import { parseCliArguments } from './arguments'
import { ComponentCreator } from '../dist/library-ui.js'

parseCliArguments(
  'Discovers empty component directories and scaffolds their initial structure from templates.',
  'Usage: dxt-component'
)

new ComponentCreator().make()
