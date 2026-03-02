#!/usr/bin/env vite-node

import { DesignWikiStorm } from '../src/classes/Design/DesignWikiStorm'

// const name: string | undefined = process.argv?.[2] ?? undefined

new DesignWikiStorm()
  .make()
  .then()
