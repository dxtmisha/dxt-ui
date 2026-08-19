import { describe, expect, it } from 'vitest'
import { McpResource } from '../McpResource'
import { McpResourceAbstract } from '../McpResourceAbstract'

describe('McpResource and McpResourceAbstract', () => {
  const sampleResources = [
    {
      uri: '@dxtmisha/constructor/ai-types.md',
      name: 'Type Definitions (@dxtmisha/constructor)',
      mimeType: 'text/markdown',
      description: 'TypeScript type definitions and signatures for AI coding assistant.'
    },
    {
      uri: '@dxtmisha/constructor/ai-description.md',
      name: 'Project Overview (@dxtmisha/constructor)',
      mimeType: 'text/markdown',
      description: 'Project overview, usage guidelines, and mandatory prompt rules for AI coding assistant.'
    },
    {
      uri: 'custom://inline',
      name: 'Inline Text Resource',
      mimeType: 'text/plain',
      text: 'Hello from inline content!'
    }
  ]

  it('initializes with resource records', () => {
    const resourceManager = new McpResource(sampleResources)

    expect(resourceManager.getItems()).toHaveLength(3)
    expect(resourceManager.hasItem('@dxtmisha/constructor/ai-types.md')).toBe(true)
    expect(resourceManager.hasItem('@dxtmisha/not-found')).toBe(false)
  })

  it('gets item by URI and by name', () => {
    const resourceManager = new McpResource(sampleResources)

    const itemByUri = resourceManager.getItem('@dxtmisha/constructor/ai-types.md')
    expect(itemByUri).toBeDefined()
    expect(itemByUri?.name).toBe('Type Definitions (@dxtmisha/constructor)')

    const itemByName = resourceManager.getItemByName('Project Overview (@dxtmisha/constructor)')
    expect(itemByName).toBeDefined()
    expect(itemByName?.uri).toBe('dxt:///@dxtmisha/constructor/ai-description.md')
  })

  it('adds and removes items dynamically', () => {
    const resourceManager = new McpResource()
    expect(resourceManager.getItems()).toHaveLength(0)

    resourceManager.addItem({
      uri: 'custom://item-1',
      name: 'Item 1',
      description: 'First custom item'
    })
    expect(resourceManager.getItems()).toHaveLength(1)

    resourceManager.addItems([
      {
        uri: 'custom://item-2',
        name: 'Item 2'
      },
      {
        uri: 'custom://item-3',
        name: 'Item 3'
      }
    ])
    expect(resourceManager.getItems()).toHaveLength(3)

    resourceManager.removeItem('custom://item-2')
    expect(resourceManager.getItems()).toHaveLength(2)
    expect(resourceManager.hasItem('custom://item-2')).toBe(false)

    resourceManager.resetItems()
    expect(resourceManager.getItems()).toHaveLength(0)
  })

  it('reads resource with static text content', async () => {
    const resourceManager = new McpResource(sampleResources)
    const item = resourceManager.getItem('custom://inline')!

    const result = await resourceManager.read(item, new URL('custom://inline'))
    expect(result).toEqual({
      uri: 'custom://inline',
      mimeType: 'text/plain',
      text: 'Hello from inline content!',
      blob: undefined
    })
  })

  it('reads existing file content from disk when resource points to a file', async () => {
    const resourceManager = new McpResource(sampleResources)
    const item = resourceManager.getItem('@dxtmisha/constructor/ai-types.md')!

    const result = await resourceManager.read(item, new URL('dxt:///@dxtmisha/constructor/ai-types.md'))
    expect(result).toHaveProperty('text')
    expect((result as any).text).toContain('@dxtmisha/constructor')
    expect((result as any).uri).toBe('dxt:///@dxtmisha/constructor/ai-types.md')
  })

  it('reads resource fallback with description when file is not found on disk', async () => {
    const resourceManager = new McpResource([
      {
        uri: '@dxtmisha/constructor/non-existent-file.md',
        name: 'Non Existent',
        mimeType: 'text/markdown',
        description: 'Fallback description for non-existent file.'
      }
    ])
    const item = resourceManager.getItem('@dxtmisha/constructor/non-existent-file.md')!

    const result = await resourceManager.read(item, new URL('dxt:///@dxtmisha/constructor/non-existent-file.md'))
    expect(result).toEqual({
      uri: 'dxt:///@dxtmisha/constructor/non-existent-file.md',
      mimeType: 'text/markdown',
      text: 'Fallback description for non-existent file.'
    })
  })

  it('uses custom loader from options when provided', async () => {
    const resourceManager = new McpResource(sampleResources, {
      loader: (resource, uri) => {
        return `Custom loaded content for ${resource.name} at ${uri.toString()}`
      }
    })

    const item = resourceManager.getItem('@dxtmisha/constructor/ai-types.md')!
    const result = await resourceManager.read(item, new URL('http://localhost/@dxtmisha/constructor/ai-types.md'))
    expect(result).toBe('Custom loaded content for Type Definitions (@dxtmisha/constructor) at http://localhost/@dxtmisha/constructor/ai-types.md')
  })

  it('transforms items to MCP resources format with toMcpResources()', async () => {
    const resourceManager = new McpResource(sampleResources)
    const mcpResources = resourceManager.toMcpResources()

    expect(mcpResources).toHaveLength(3)
    expect(typeof mcpResources[0].handler).toBe('function')

    const readResult = await mcpResources[2].handler!(new URL('custom://inline'))
    expect(readResult).toEqual({
      uri: 'custom://inline',
      mimeType: 'text/plain',
      text: 'Hello from inline content!',
      blob: undefined
    })
  })

  it('allows customizing and changing the URI scheme protocol', () => {
    const resourceManager = new McpResource([
      { uri: 'docs/guide.md', name: 'Guide' }
    ], { scheme: 'my-custom-scheme' })

    expect(resourceManager.getScheme()).toBe('my-custom-scheme')
    expect(resourceManager.getItems()[0].uri).toBe('my-custom-scheme:///docs/guide.md')
    expect(resourceManager.hasItem('docs/guide.md')).toBe(true)
    expect(resourceManager.hasItem('my-custom-scheme:///docs/guide.md')).toBe(true)

    resourceManager.setScheme('new-scheme')
    expect(resourceManager.getScheme()).toBe('new-scheme')
    expect(resourceManager.normalizeUri('another/file.md')).toBe('new-scheme:///another/file.md')
  })

  it('can be extended via custom subclass of McpResourceAbstract', async () => {
    class CustomMcpResource extends McpResourceAbstract {
      read(resource: any) {
        return `Generated: ${resource.name}`
      }
    }

    const customInstance = new CustomMcpResource([
      { uri: 'test://1', name: 'Test 1' }
    ])

    const mcpList = customInstance.toMcpResources()
    const result = await mcpList[0].handler!(new URL('test://1'))
    expect(result).toBe('Generated: Test 1')
  })
})
