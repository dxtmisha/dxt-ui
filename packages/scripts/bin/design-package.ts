#!/usr/bin/env vite-node

import { PackageInit } from '../src/classes/Package/PackageInit'

const type: string = process.argv?.[2] ?? 'library'
const templates: string | undefined = process.argv?.[3]

new PackageInit(type, templates).make()
