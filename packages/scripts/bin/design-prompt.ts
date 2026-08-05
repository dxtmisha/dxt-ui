#!/usr/bin/env vite-node

import { LibraryAiPrompt } from '../src/classes/Library/LibraryAiPrompt'

const isMcp = process.argv?.[2] === 'true' || process.argv?.[2] === '1'

new LibraryAiPrompt([], isMcp).make()
