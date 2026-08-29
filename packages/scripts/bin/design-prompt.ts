#!/usr/bin/env vite-node

import process from 'node:process'
import { LibraryAiPrompt } from '../dist/library.js'

const isMcp = process.argv?.[2] === 'true' || process.argv?.[2] === '1'

new LibraryAiPrompt([], isMcp).make()
