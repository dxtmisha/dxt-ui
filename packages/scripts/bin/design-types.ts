#!/usr/bin/env vite-node

import { DesignTypes } from '../src/classes/Design/DesignTypes'

const dir: string = process.argv?.[2] ?? 'dist'

new DesignTypes(dir).make()
