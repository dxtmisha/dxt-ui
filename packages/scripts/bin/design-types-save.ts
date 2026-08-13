#!/usr/bin/env vite-node

import { DesignTypes } from '../src/classes/Design/DesignTypes'

const dir: string = process.argv?.[2]
const resourcesDir: string = process.argv?.[3]

new DesignTypes(dir, resourcesDir)
  .makeSave()
