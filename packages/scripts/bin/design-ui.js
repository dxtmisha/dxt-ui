#!/usr/bin/env node

import process from 'node:process'
import { DesignUi } from '../dist/library.js'

const name = process.argv?.[2] ?? undefined

new DesignUi(name).make()
