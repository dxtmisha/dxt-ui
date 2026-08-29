#!/usr/bin/env vite-node

import process from 'node:process'
import { DesignTypes } from '../dist/library.js'

const resourcesDir = process.argv?.[2]
const dir = process.argv?.[3]
const dirDist = process.argv?.[4]

new DesignTypes(resourcesDir, dir, dirDist)
  .makeSave()
  .then()
