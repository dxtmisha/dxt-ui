#!/usr/bin/env vite-node

import { DesignConstructors } from '../src/classes/Design/DesignConstructors'

const name: string = process.argv?.[2] ?? ''

new DesignConstructors(name).make()
