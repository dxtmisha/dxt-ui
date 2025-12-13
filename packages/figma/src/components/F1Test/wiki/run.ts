#!/usr/bin/env vite-node

import { spawn } from 'node:child_process'

;(async () => {
  try {
    // You can add prompt generation logic here
    const prompt = ''

    const child = spawn(
      'npx',
      ['dxt-component-wiki', 'F1Test', prompt],
      { stdio: 'inherit' }
    )

    child.on('exit', code => console.log('End:', code))
  } catch (error) {
    console.error('Error:', error)
  }
})()
