#!/usr/bin/env vite-node
/// <reference types="node" />

import { spawn } from 'node:child_process'

;(async () => {
  try {
    // Figma file key. Can be found in the URL of your Figma file:
    // figma.com/design/FILE_KEY/...
    const fileKey = ''

    // Node ID in Figma file. Select an element and find 'node-id=...' in the URL
    // or use "Copy link to selection" to see it in the URL.
    const nodeId = ''

    const child = spawn(
      'npx',
      ['dxt-figma-layout', fileKey, nodeId],
      { stdio: 'inherit' }
    )

    child.on('exit', code => console.log('End:', code))
  } catch (error) {
    console.error('Error:', error)
  }
})()
