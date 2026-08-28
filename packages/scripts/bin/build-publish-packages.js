#!/usr/bin/env node

import { BuildPublishPackages } from '../dist/library.js'

new BuildPublishPackages()
  .make()
  .then()
