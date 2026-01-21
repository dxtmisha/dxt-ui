#!/usr/bin/env vite-node

import { DesignTypes } from '../dist/library'

const dir: string = process.argv?.[2] ?? 'dist'

new DesignTypes(dir).make()
