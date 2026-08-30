#!/usr/bin/env vite-node

import process from 'node:process'
import { parseCliArguments } from './arguments'
import { DesignFigma } from '../dist/library-figma.js'

const { values } = parseCliArguments(
  'Downloads and processes design assets (SVG graphics, frames) from the Figma API.',
  'Usage: dxt-figma-layout [--file KEY] [--node ID]',
  {
    file: {
      type: 'string',
      short: 'f',
      description: 'Figma file key'
    },
    node: {
      type: 'string',
      short: 'n',
      description: 'Figma node identifier'
    }
  }
)

const fileKey = (typeof values.file === 'string' ? values.file : undefined) ?? 'fileKey'
const nodeId = (typeof values.node === 'string' ? values.node : undefined) ?? 'nodeId'

new DesignFigma(fileKey, nodeId)
  .make()
  .catch((error) => {
    console.error('dxt-figma-layout failed:', error)
    process.exit(1)
  })
