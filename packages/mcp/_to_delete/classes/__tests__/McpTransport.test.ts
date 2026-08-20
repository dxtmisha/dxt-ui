import { describe, expect, it } from 'vitest'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio'
import { McpTransport } from '../McpTransport'

describe('McpTransport', () => {
  it('creates an instance with initial transport', () => {
    const custom = new StdioServerTransport()
    const transport = new McpTransport(custom)
    expect(transport.get()).toBe(custom)
  })

  it('lazily initializes default transport via get()', () => {
    const transport = new McpTransport()
    const result = transport.get()
    expect(result).toBeInstanceOf(StdioServerTransport)
    expect(transport.get()).toBe(result)
  })

  it('sets and uses custom transport', () => {
    const transport = new McpTransport()
    const custom = new StdioServerTransport()
    transport.set(custom)
    expect(transport.get()).toBe(custom)
  })
})
