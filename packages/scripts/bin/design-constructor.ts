#!/usr/bin/env vite-node

import process from 'node:process'
import { DesignConstructor } from '../dist/library-ui.js'

const name = process.argv?.[2] ?? ''

new DesignConstructor(name).make()
