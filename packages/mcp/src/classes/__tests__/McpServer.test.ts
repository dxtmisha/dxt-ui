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

  it('adds and removes tools dynamically', () => {
    const server = new McpServer()
    expect(server.getTools()).toHaveLength(0)

    server.addTool(dummyTool)
    expect(server.getTools()).toHaveLength(1)

    server.removeTool('test-tool')
    expect(server.getTools()).toHaveLength(0)
  })

  it('creates an underlying SDK Server object via make()', () => {
    const server = new McpServer([dummyTool])
    expect(server.getServer()).toBeUndefined()

    const sdkServer = server.make()
    expect(sdkServer).toBeDefined()
    expect(server.getServer()).toBe(sdkServer)
  })

  it('creates and initializes via static make()', () => {
    const server = McpServer.make([dummyTool], { name: 'static-server' })
    expect(server).toBeInstanceOf(McpServer)
    expect(server.getServer()).toBeDefined()
  })
})
