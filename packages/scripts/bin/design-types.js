#!/usr/bin/env node

import process from 'node:process'
import { DesignTypes } from '../dist/library.js'

const isRaw = process.argv?.[2] === 'raw' || process.argv?.[2] === '1' || process.argv?.[2] === 'true'
const dir = process.argv?.[3]
const resourcesDir = process.argv?.[4]

new DesignTypes(dir, resourcesDir, isRaw)
  .make()
  .then()
