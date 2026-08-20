import { describe, expect, it } from 'vitest'
import { McpTool } from '../McpTool'
import type { McpToolItem } from '../../types/McpTypes'

describe('McpTool', () => {
  const sampleTool: McpToolItem = {
    name: 'test_add',
    description: 'Adds two numbers',
    handler: (args: Record<string, unknown>) => {
      const a = Number(args.a ?? 0)
      const b = Number(args.b ?? 0)
      return { sum: a + b }
    }
  }

  it('initializes with tool items or empty array', () => {
    const emptyToolManager = new McpTool()
    expect(emptyToolManager.getItems()).toEqual([])

    const toolManagerWithItem = new McpTool(sampleTool)
    expect(toolManagerWithItem.getItems()).toHaveLength(1)
    expect(toolManagerWithItem.hasItem('test_add')).toBe(true)
    expect(toolManagerWithItem.getItem('test_add')?.name).toBe('test_add')
  })

  it('adds and removes tool items dynamically', () => {
    const toolManager = new McpTool()

    toolManager.addItem(sampleTool)
    expect(toolManager.hasItem('test_add')).toBe(true)

    toolManager.addItem({
      name: 'test_subtract',
      description: 'Subtracts two numbers',
      handler: () => 'subtract'
    })
    expect(toolManager.getItems()).toHaveLength(2)

    toolManager.removeItem('test_add')
    expect(toolManager.hasItem('test_add')).toBe(false)
    expect(toolManager.getItems()).toHaveLength(1)
  })

  it('executes tool handler and returns CallToolResult', async () => {
    const toolManager = new McpTool([sampleTool])

    const executionResult = await toolManager.execute('test_add', { a: 15, b: 25 })
    expect(executionResult.isError).toBeUndefined()
    expect(executionResult.content).toHaveLength(1)
    const firstContent = executionResult.content[0]
    expect(firstContent.type).toBe('text')
    if (firstContent.type === 'text') {
      expect(JSON.parse(firstContent.text)).toEqual({ sum: 40 })
    }
  })

  it('handles execution error gracefully with isError flag', async () => {
    const errorTool: McpToolItem = {
      name: 'error_tool',
      handler: () => {
        throw new Error('Test error message')
      }
    }

    const toolManager = new McpTool(errorTool)
    const result = await toolManager.execute('error_tool')

    expect(result.isError).toBe(true)
    const firstContent = result.content[0]
    if (firstContent.type === 'text') {
      expect(firstContent.text).toBe('Test error message')
    }
  })

  it('returns error when executing unknown tool', async () => {
    const toolManager = new McpTool()
    const result = await toolManager.execute('unknown_tool')

    expect(result.isError).toBe(true)
    const firstContent = result.content[0]
    if (firstContent.type === 'text') {
      expect(firstContent.text).toContain('unknown_tool')
    }
  })
})
