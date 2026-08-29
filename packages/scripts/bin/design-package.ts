#!/usr/bin/env vite-node

import process from 'node:process'
import { PackageInit } from '../dist/library-ui.js'
import { UI_DIR_PACKAGES } from '../dist/config.js'

const type = process.argv?.[2] ?? 'library'
const templates = process.argv?.[3]
const dir = process.argv?.[4] ?? UI_DIR_PACKAGES

new PackageInit(type, templates, dir).make()
