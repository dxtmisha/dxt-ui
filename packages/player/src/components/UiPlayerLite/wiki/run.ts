#!/usr/bin/env vite-node

import { exec } from 'node:child_process'
import { promisify } from 'node:util'

const execAsync = promisify(exec)

;(async () => {
  try {
    const { stdout, stderr } = await execAsync('npx dxt-component-wiki UiPlayerLite')

    console.log(stdout)

    if (stderr) {
      console.error(stderr)
    }
  } catch (error) {
    console.error('Error:', error)
  }
})()
