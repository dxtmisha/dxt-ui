#!/usr/bin/env vite-node

import { ComponentWiki } from '../dist/library'

const path: string = process.argv?.[2] ?? ''
const prompt: string = process.argv?.[3] ?? ''

new ComponentWiki(
  path,
  prompt
).make()
