#!/usr/bin/env node

import process from 'node:process'
import { DesignConstructors } from '../dist/library.js'

const name = process.argv?.[2] ?? ''

new DesignConstructors(name).make()
