#!/usr/bin/env vite-node

import { AiDoc } from '../src/classes/Ai/AiDoc'

const name: string = process.argv?.[2] ?? ''

new AiDoc(name).make()
