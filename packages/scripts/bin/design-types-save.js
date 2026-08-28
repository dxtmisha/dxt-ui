#!/usr/bin/env node

import { DesignTypes } from '../dist/library.js'

const dir = process.argv?.[2]
const resourcesDir = process.argv?.[3]

new DesignTypes(dir, resourcesDir)
  .makeSave()
  .then()
