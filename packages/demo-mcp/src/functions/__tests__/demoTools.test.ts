import { describe, expect, it } from 'vitest'
import { McpServer } from '@dxtmisha/mcp'

import { calculateTool, dxtComponentsTool, echoTool, getDemoTools, systemInfoTool } from '../demoTools'
import type {
  McpDemoCalculateResult,
  McpDemoDxtComponentsResult,
  McpDemoEchoResult,
  McpDemoSystemInfoResult
} from '../../types/McpDemoTypes'

describe('Demo Tools & McpServer Integration', () => {
  it('returns all pre-configured demo tools via getDemoTools()', () => {
    const tools = getDemoTools()
    expect(tools).toHaveLength(4)
    expect(tools.map(tool => tool.name)).toEqual([
      'calculate',
      'echo',
      'system_info',
      'dxt_components'
    ])
  })

  it('initializes and runs McpServer from @dxtmisha/mcp with demo tools', async () => {
    const server = new McpServer(getDemoTools(), {
      name: 'test-mcp-demo',
      version: '1.0.0'
    })

    expect(server.isStart()).toBe(false)
    expect(server.getTools()).toHaveLength(4)

    const sdkServer = await server.start()

    expect(server.isStart()).toBe(true)
    expect(sdkServer).toBeDefined()
    expect(server.getServer()).toBe(sdkServer)
  })

  describe('Tool Handlers', () => {
    it('executes calculateTool for all arithmetic operations', async () => {
      const addResult = await calculateTool.handler({
        firstNumber: 10,
        secondNumber: 5,
        operation: 'add'
      }) as McpDemoCalculateResult
      expect(addResult.result).toBe(15)

      const subtractResult = await calculateTool.handler({
        firstNumber: 10,
        secondNumber: 5,
        operation: 'subtract'
      }) as McpDemoCalculateResult
      expect(subtractResult.result).toBe(5)

      const multiplyResult = await calculateTool.handler({
        firstNumber: 10,
        secondNumber: 5,
        operation: 'multiply'
      }) as McpDemoCalculateResult
      expect(multiplyResult.result).toBe(50)

      const divideResult = await calculateTool.handler({
        firstNumber: 10,
        secondNumber: 5,
        operation: 'divide'
      }) as McpDemoCalculateResult
      expect(divideResult.result).toBe(2)
    })

    it('throws error when dividing by zero in calculateTool', () => {
      expect(() => {
        calculateTool.handler({
          firstNumber: 10,
          secondNumber: 0,
          operation: 'divide'
        })
      }).toThrow('Division by zero is not allowed')
    })

    it('executes echoTool and returns message with timestamp', async () => {
      const result = await echoTool.handler({
        message: 'Hello MCP'
      }) as McpDemoEchoResult

      expect(result.message).toBe('Hello MCP')
      expect(result.timestamp).toBeDefined()
    })

    it('executes systemInfoTool and returns environment information', async () => {
      const result = await systemInfoTool.handler({}) as McpDemoSystemInfoResult

      expect(result.packageName).toBe('@dxtmisha/demo-mcp')
      expect(result.timestamp).toBeDefined()
    })

    it('executes dxtComponentsTool and filters packages correctly', async () => {
      const allResult = await dxtComponentsTool.handler({}) as McpDemoDxtComponentsResult
      expect(allResult.total).toBeGreaterThan(0)

      const filteredResult = await dxtComponentsTool.handler({
        filter: 'figma'
      }) as McpDemoDxtComponentsResult

      expect(filteredResult.total).toBeGreaterThan(0)
      expect(filteredResult.items.every(item => item.name.includes('figma') || item.description.includes('figma'))).toBe(true)
    })
  })
})
