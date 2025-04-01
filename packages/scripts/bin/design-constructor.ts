#!/usr/bin/env vite-node

import { DesignConstructor } from '../src/classes/Design/DesignConstructor'

const name: string = process.argv?.[2] ?? ''

new DesignConstructor(name).make()
