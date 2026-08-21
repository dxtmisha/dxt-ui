#!/usr/bin/env node

import { Mcp } from '@dxtmisha/mcp'
import mcpAllResources from '../../ai-mcp-all-resources'
import { getDemoTools } from './src/functions/demoTools'

export * from './src/library'

/**
 * Starts the MCP demo server using tools from demoTools and resources from ai-mcp-all-resources.ts.
 *
 * Запускает демонстрационный MCP сервер с инструментами из demoTools и ресурсами из ai-mcp-all-resources.ts.
 */
export const server = new Mcp(
  getDemoTools(),
  mcpAllResources,
  undefined,
  {
    name: 'dxt-demo-mcp',
    version: '1.0.0'
  }
)

server.start().catch((error: unknown) => {
  console.error('Failed to start MCP server:', error)
  process.exit(1)
})
