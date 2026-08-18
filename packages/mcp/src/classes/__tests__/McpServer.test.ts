import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { McpServer } from '../McpServer'
import type { McpToolItem } from '../../types/McpTypes'

describe('McpServer', () => {
  const dummyTool: McpToolItem = {
    name: 'test-tool',
    description: 'A test tool',
    inputSchema: {
      message: z.string()
    },
    handler: args => `Hello, ${args.message}`
  }

  it('creates an instance with tools and options', () => {
    const server = new McpServer([dummyTool], { name: 'my-test-server', version: '2.0.0' })
    expect(server.getTools()).toHaveLength(1)
    expect(server.getTools()[0].name).toBe('test-tool')
  })

  it('adds tools dynamically', () => {
    const server = new McpServer()
    expect(server.getTools()).toHaveLength(0)

    server.addTool(dummyTool)
    expect(server.getTools()).toHaveLength(1)
  })

  it('initializes and starts the underlying SDK Server object via start()', async () => {
    const server = new McpServer([dummyTool])
    expect(server.isStart()).toBe(false)
    expect(server.getServer()).toBeUndefined()

    const sdkServer = await server.start()
    expect(server.isStart()).toBe(true)
    expect(sdkServer).toBeDefined()
    expect(server.getServer()).toBe(sdkServer)
  })
})
