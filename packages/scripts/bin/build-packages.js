#!/usr/bin/env node

import { BuildPackages } from '../dist/library.js'

new BuildPackages()
  .make()
  .then()
