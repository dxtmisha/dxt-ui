#!/usr/bin/env node

import { McpServer } from '@dxtmisha/mcp'
import { getDemoTools } from './src/functions/demoTools'

export * from './src/library'

/**
 * Starts the MCP demo server using tools from demoTools.
 *
 * Запускает демонстрационный MCP сервер с инструментами из demoTools.
 */
export const server = new McpServer(getDemoTools(), {
  name: 'dxt-demo-mcp',
  version: '1.0.0'
})

server.start().catch((error: unknown) => {
  console.error('Failed to start MCP server:', error)
  process.exit(1)
})
