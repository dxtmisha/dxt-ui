#!/usr/bin/env vite-node

import { DesignUi } from '../dist/library'

const name: string | undefined = process.argv?.[2] ?? undefined

new DesignUi(name).make()
