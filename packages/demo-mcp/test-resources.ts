#!/usr/bin/env vite-node

import { getMcpResources } from '@dxtmisha/mcp'

const resources = getMcpResources('../../ai-mcp-all-resources.json')

// Test 1: @dxtmisha/constructor/ai-types.md
resources[0].handler()
  .then(data => console.log('Constructor types length:', data.contents[0].text?.length))

// Test 2: @dxtmisha/d1/ai-screenshot/screenshot-8_1.webp
const screenshot = resources.find(item => item.uri.includes('screenshot-8_1.webp'))
screenshot?.handler()
  .then(data => console.log('D1 screenshot blob length:', data.contents[0].blob?.length))
