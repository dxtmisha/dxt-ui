#!/usr/bin/env vite-node

import { DesignConstructors } from '../dist/library'

const name: string = process.argv?.[2] ?? ''

new DesignConstructors(name).make()
