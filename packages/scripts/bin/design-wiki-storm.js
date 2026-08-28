#!/usr/bin/env node

import { DesignWikiStorm } from '../dist/library.js'

// const name | undefined = process.argv?.[2] ?? undefined

new DesignWikiStorm()
  .make()
  .then()
