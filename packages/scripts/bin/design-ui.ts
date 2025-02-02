#!/usr/bin/env vite-node

import { DesignUi } from '../src/classes/design/DesignUi'

const name: string = process.argv?.[2] ?? ''

new DesignUi(name).make()
