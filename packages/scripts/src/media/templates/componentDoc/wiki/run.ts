#!/usr/bin/env vite-node
/// <reference types="node" />

import { spawn } from 'node:child_process'
import { readFileSync } from 'node:fs'

;(async () => {
  try {
    // You can add prompt generation logic here
    const prompt = readFileSync(new URL('./prompt.md', import.meta.url), 'utf-8')

    const child = spawn(
      'npx',
      ['dxt-component-wiki', '[path]', prompt],
      { stdio: 'inherit' }
    )

    child.on('exit', code => console.log('End:', code))
  } catch (error) {
    console.error('Error:', error)
  }
})()
