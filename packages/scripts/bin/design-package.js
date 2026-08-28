#!/usr/bin/env node

import { PackageInit } from '../dist/library.js'
import { UI_DIR_PACKAGES } from '../dist/library.js'

const type = process.argv?.[2] ?? 'library'
const templates | undefined = process.argv?.[3]
const dir | undefined = process.argv?.[4] ?? UI_DIR_PACKAGES

new PackageInit(type, templates, dir).make()
