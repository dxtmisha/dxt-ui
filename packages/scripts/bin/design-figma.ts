#!/usr/bin/env vite-node

import process from 'node:process'
import { DesignFigma } from '../dist/library-figma.js'

const fileKey = process.argv?.[2] ?? 'fileKey'
const nodeId = process.argv?.[3] ?? 'nodeId'

new DesignFigma(fileKey, nodeId)
  .make()
  .then()
