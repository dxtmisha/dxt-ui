#!/usr/bin/env vite-node

import { PackageInit } from '../dist/library'
import { UI_DIR_PACKAGES } from '../dist/config'

const type: string = process.argv?.[2] ?? 'library'
const templates: string | undefined = process.argv?.[3]
const dir: string | undefined = process.argv?.[4] ?? UI_DIR_PACKAGES

new PackageInit(type, templates, dir).make()
