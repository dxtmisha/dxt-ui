#!/usr/bin/env vite-node

import { DesignTypes } from '../src/classes/Design/DesignTypes'

const isRaw: boolean = process.argv?.[2] === 'raw' || process.argv?.[2] === '1' || process.argv?.[2] === 'true'
const dir: string = process.argv?.[3]
const resourcesDir: string = process.argv?.[4]

new DesignTypes(dir, resourcesDir, isRaw)
  .make()
  .then()
