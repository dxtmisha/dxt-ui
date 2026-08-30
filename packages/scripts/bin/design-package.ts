#!/usr/bin/env vite-node

import { parseCliArguments } from './arguments'
import { PackageInit } from '../dist/library-ui.js'
import { UI_DIR_PACKAGES } from '../dist/config.js'

const { values } = parseCliArguments(
  'Initializes the package structure and development environment from templates.',
  'Usage: dxt-package [--type TYPE] [--templates DIR] [--dir DIR]',
  {
    type: {
      type: 'string',
      short: 't',
      default: 'library',
      description: 'Package template type'
    },
    templates: {
      type: 'string',
      description: 'Directory containing package templates'
    },
    dir: {
      type: 'string',
      short: 'd',
      default: UI_DIR_PACKAGES,
      description: 'Target packages directory'
    }
  }
)

const type = (typeof values.type === 'string' ? values.type : undefined) ?? 'library'
const templates = typeof values.templates === 'string' ? values.templates : undefined
const dir = (typeof values.dir === 'string' ? values.dir : undefined) ?? UI_DIR_PACKAGES

new PackageInit(type, templates, dir).make()
