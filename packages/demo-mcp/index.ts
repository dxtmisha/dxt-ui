#!/usr/bin/env node

import { Mcp, McpResource, getMcpResources } from '@dxtmisha/mcp'
import allResources from '../../ai-mcp-all-resources.json'
import { getDemoTools } from './src/functions/demoTools'

export * from './src/library'

/**
 * Starts the MCP demo server using tools from demoTools and resources from ai-mcp-all-resources.json.
 *
 * Запускает демонстрационный MCP сервер с инструментами из demoTools и ресурсами из ai-mcp-all-resources.json.
 */
export const server = new Mcp(
  getDemoTools(),
  {
    name: 'dxt-demo-mcp',
    version: '1.0.0'
  },
  [new McpResource(getMcpResources(allResources))]
)

server.start().catch((error: unknown) => {
  console.error('Failed to start MCP server:', error)
  process.exit(1)
})
