#!/usr/bin/env node

import { LibraryAiPrompt } from '../dist/library.js'

const isMcp = process.argv?.[2] === 'true' || process.argv?.[2] === '1'

new LibraryAiPrompt([], isMcp).make()
