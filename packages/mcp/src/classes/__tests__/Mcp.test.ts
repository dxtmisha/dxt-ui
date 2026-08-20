import { describe, expect, it } from 'vitest'
import { Mcp } from '../Mcp'
import { McpPrompt } from '../McpPrompt'
import { McpResource } from '../McpResource'
import { McpTool } from '../McpTool'
import type { McpPromptItem, McpResourceItem, McpToolItem } from '../../types/McpTypes'

describe('Mcp', () => {
  const sampleTool: McpToolItem = {
    name: 'test_tool',
    handler: () => ({ status: 'ok' })
  }

  const sampleResource: McpResourceItem = {
    uri: 'test://res',
    name: 'Test Resource',
    text: 'Content'
  }

  const samplePrompt: McpPromptItem = {
    name: 'test_prompt',
    handler: () => 'Test Prompt'
  }

  it('initializes with default options when no arguments provided', () => {
    const server = new Mcp()
    expect(server.getOptions()).toEqual({
      name: 'mcp-server',
      version: '1.0.0'
    })
    expect(server.isStart()).toBe(false)
    expect(server.getTools()).toHaveLength(0)
    expect(server.getResources()).toHaveLength(0)
    expect(server.getPrompts()).toHaveLength(0)
  })

  it('initializes with tools, options, resources and prompts', () => {
    const server = new Mcp(
      [sampleTool],
      { name: 'custom-server', version: '2.0.0' },
      [sampleResource],
      [samplePrompt]
    )

    expect(server.getOptions().name).toBe('custom-server')
    expect(server.getTools()).toHaveLength(1)
    expect(server.getResources()).toHaveLength(1)
    expect(server.getPrompts()).toHaveLength(1)
  })

  it('merges managers and items using addTool, addResource, addPrompt', () => {
    const server = new Mcp()

    server.addTool(new McpTool(sampleTool))
    server.addResource(new McpResource(sampleResource))
    server.addPrompt(new McpPrompt(samplePrompt))

    expect(server.getTools()).toHaveLength(1)
    expect(server.getResources()).toHaveLength(1)
    expect(server.getPrompts()).toHaveLength(1)
  })

  it('starts and stops server with lifecycle state updates', async () => {
    const server = new Mcp([sampleTool], {
      name: 'test-lifecycle-server',
      version: '1.0.0'
    })

    expect(server.isStart()).toBe(false)

    const sdkServer = await server.start()
    expect(server.isStart()).toBe(true)
    expect(server.getServer()).toBe(sdkServer)

    await server.stop()
    expect(server.isStart()).toBe(false)
    expect(server.getServer()).toBeUndefined()
  })
})
