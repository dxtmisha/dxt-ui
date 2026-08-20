import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { McpResource } from '../../classes/McpResource'
import { McpResourcesLoader } from '../../classes/McpResourcesLoader'
import { getMcpResources } from '../getMcpResources'

describe('getMcpResources and McpResourcesLoader', () => {
  const rootDir = path.resolve(__dirname, '../../../../..')

  it('converts raw array descriptor into McpResource items via McpResourcesLoader', async () => {
    const rawItems = [
      {
        uri: '@dxtmisha/constructor/ai-types.md',
        name: 'Constructor Types',
        mimeType: 'text/markdown',
        description: 'Constructor type definitions'
      },
      {
        uri: '@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp',
        name: 'Screenshot 1',
        mimeType: 'image/webp',
        description: 'Visual reference screenshot'
      }
    ]

    const loader = new McpResourcesLoader(rawItems, { basePath: rootDir })
    const resources = loader.get()
    expect(resources).toHaveLength(2)

    const resourceManager = new McpResource(resources)
    expect(resourceManager.getItems()).toHaveLength(2)

    // Read text resource
    const textResult = await resourceManager.read('@dxtmisha/constructor/ai-types.md')
    expect(textResult.contents).toHaveLength(1)
    const firstText = textResult.contents[0]
    if ('text' in firstText) {
      expect(firstText.mimeType).toBe('text/markdown')
      expect(firstText.text).toBeDefined()
      expect(firstText.text.length).toBeGreaterThan(0)
    }

    // Read binary screenshot resource
    const binaryResult = await resourceManager.read('@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp')
    expect(binaryResult.contents).toHaveLength(1)
    const firstBinary = binaryResult.contents[0]
    if ('blob' in firstBinary) {
      expect(firstBinary.mimeType).toBe('image/webp')
      expect(firstBinary.blob).toBeDefined()
      expect(firstBinary.blob.length).toBeGreaterThan(0)
    }
  })

  it('converts from file path directly via getMcpResources function', async () => {
    const allResourcesPath = path.resolve(rootDir, 'ai-mcp-all-resources.json')
    const resources = getMcpResources(allResourcesPath, { basePath: rootDir })

    expect(resources.length).toBeGreaterThan(0)

    const resourceManager = new McpResource(resources)
    const readResult = await resourceManager.read('@dxtmisha/constructor/ai-types.md')
    expect(readResult.contents).toHaveLength(1)
  })
})
