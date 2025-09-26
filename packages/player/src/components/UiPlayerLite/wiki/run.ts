#!/usr/bin/env vite-node

import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

;(async () => {
  try {
    const { stdout, stderr } = await execAsync('npx dxt-component-wiki UiPlayerLite')
    console.log(stderr ? stderr : stdout)
  } catch (error) {
    console.error('Error:', error)
  }
})()
