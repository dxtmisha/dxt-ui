#!/usr/bin/env node

import { DesignUi } from '../dist/library.js'

const name | undefined = process.argv?.[2] ?? undefined

new DesignUi(name).make()
