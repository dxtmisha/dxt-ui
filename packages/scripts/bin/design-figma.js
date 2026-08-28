#!/usr/bin/env node

import { DesignFigma } from '../dist/library.js'

const fileKey = process.argv?.[2] ?? 'fileKey'
const nodeId = process.argv?.[3] ?? 'nodeId'

new DesignFigma(fileKey, nodeId)
  .make()
  .then()
