#!/usr/bin/env vite-node

import { DesignUi } from '../src/classes/Design/DesignUi'

const name: string | undefined = process.argv?.[2] ?? undefined

new DesignUi(name).make()
