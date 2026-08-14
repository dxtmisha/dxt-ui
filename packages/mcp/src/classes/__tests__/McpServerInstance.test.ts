import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { McpServerInstance } from '../McpServerInstance'
import type { McpToolItem } from '../../types/McpTypes'

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

  it('creates an instance with default options', () => {
    const instance = new McpServerInstance()
    expect(instance.getServer()).toBeUndefined()
  })

  it('initializes underlying SDK server via make()', () => {
    const instance = new McpServerInstance({ name: 'custom-server', version: '2.1.0' })
    const sdk = instance.make([dummyTool, dummyToolNoSchema])
    expect(sdk).toBeDefined()
    expect(instance.getServer()).toBe(sdk)
  })
})
