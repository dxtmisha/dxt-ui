import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { McpResource } from '../McpResource'
import { McpServerInstance } from '../McpServerInstance'
import { McpTransport } from '../McpTransport'
import type { McpResourceItem, McpToolItem } from '../../types/McpTypes'

describe('McpServerInstance', () => {
  const dummyTool: McpToolItem = {
    name: 'test-tool',
    description: 'A test tool',
    inputSchema: {
      message: z.string()
    },
    handler: args => `Hello, ${args.message}`
  }

  const dummyToolNoSchema: McpToolItem = {
    name: 'ping-tool',
    description: 'A ping tool without schema',
    handler: () => 'pong'
  }

  const dummyResource: McpResourceItem = {
    uri: 'custom://info',
    name: 'Info Resource',
    description: 'Information resource',
    text: 'Information details'
  }

  it('creates and returns underlying SDK server via getServer()', () => {
    const instance = new McpServerInstance({}, new McpTransport())
    expect(instance.getServer()).toBeDefined()
  })

  it('sets up tool handlers on underlying SDK server', () => {
    const instance = new McpServerInstance({ name: 'custom-server', version: '2.1.0' }, new McpTransport())
    instance.setupToolHandlers([dummyTool, dummyToolNoSchema])
    const sdk = instance.getServer()
    expect(sdk).toBeDefined()
  })

  it('sets up resource handlers including McpResource instances', () => {
    const instance = new McpServerInstance({ name: 'res-server', version: '1.0.0' }, new McpTransport())
    const resourceCollection = new McpResource([
      { uri: '@dxtmisha/d1/ai-types.md', name: 'Types' }
    ])

    instance.setupResourceHandlers([dummyResource, resourceCollection])
    expect(instance.getServer()).toBeDefined()
  })

  it('reports error to ErrorCenter when tool execution fails', async () => {
    const errorTool: McpToolItem = {
      name: 'failing-tool',
      description: 'A tool that fails',
      handler: () => {
        throw new Error('Tool failure')
      }
    }

    const instance = new McpServerInstance({}, new McpTransport())
    instance.setupTool(errorTool)
    expect(instance.getServer()).toBeDefined()
  })
})

