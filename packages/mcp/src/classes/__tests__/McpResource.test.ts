import { describe, expect, it } from 'vitest'
import { McpResource } from '../McpResource'
import type { McpResourceItem } from '../../types/McpTypes'

describe('McpResource', () => {
  const staticResource: McpResourceItem = {
    uri: 'docs://intro',
    name: 'Introduction',
    description: 'System intro document',
    mimeType: 'text/markdown',
    text: '# Introduction\nWelcome to DXT UI.'
  }

  it('initializes with static resource item or array of items', () => {
    const resourceManager = new McpResource(staticResource)
    expect(resourceManager.getItems()).toHaveLength(1)
    expect(resourceManager.hasItem('docs://intro')).toBe(true)
    expect(resourceManager.getItem('docs://intro')?.name).toBe('Introduction')
  })

  it('initializes from raw JSON array configuration', () => {
    const rawItems = [
      {
        path: 'config://settings',
        name: 'Settings',
        description: 'App config',
        value: 123
      }
    ]

    const resourceManager = new McpResource(rawItems)
    expect(resourceManager.getItems()).toHaveLength(1)
    expect(resourceManager.hasItem('config://settings')).toBe(true)
    expect(resourceManager.getItem('config://settings')?.name).toBe('Settings')
  })

  it('reads static text resource successfully', async () => {
    const resourceManager = new McpResource(staticResource)
    const readResult = await resourceManager.read('docs://intro')

    expect(readResult.contents).toHaveLength(1)
    expect(readResult.contents[0].uri).toBe('docs://intro')
    const firstContent = readResult.contents[0]
    if ('text' in firstContent) {
      expect(firstContent.text).toContain('Welcome to DXT UI.')
    }
  })

  it('reads dynamic resource with handler', async () => {
    const dynamicResource: McpResourceItem = {
      uri: 'dynamic://time',
      name: 'Dynamic Time',
      handler: () => ({
        contents: [
          {
            uri: 'dynamic://time',
            mimeType: 'application/json',
            text: JSON.stringify({ timestamp: 1234567890 })
          }
        ]
      })
    }

    const resourceManager = new McpResource(dynamicResource)
    const result = await resourceManager.read('dynamic://time')
    const firstContent = result.contents[0]

    if ('text' in firstContent) {
      expect(firstContent.text).toContain('1234567890')
    }
  })

  it('returns informative result when resource not found', async () => {
    const resourceManager = new McpResource()
    const result = await resourceManager.read('unknown://path')
    const firstContent = result.contents[0]

    if ('text' in firstContent) {
      expect(firstContent.text).toContain('unknown://path')
    }
  })
})
