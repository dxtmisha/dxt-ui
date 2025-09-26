#!/usr/bin/env vite-node

import { ComponentWiki } from '../src/classes/Component/ComponentWiki'

const path: string = process.argv?.[2] ?? ''

new ComponentWiki(path).make()
