#!/usr/bin/env vite-node

import { DesignFigma } from '../src/classes/Design/DesignFigma'

const fileKey: string = process.argv?.[2] ?? 'fileKey'
const nodeId: string = process.argv?.[3] ?? 'nodeId'

new DesignFigma(fileKey, nodeId)
  .make()
  .then()
