#!/usr/bin/env vite-node

import process from 'node:process'
import { DesignUi } from '../dist/library-ui.js'

const name = process.argv?.[2] ?? undefined

new DesignUi(name).make()
