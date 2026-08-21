# @dxtmisha/mcp

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fmcp.svg)](https://www.npmjs.com/package/@dxtmisha/mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/mcp` is an ergonomic, object-oriented, and modular TypeScript framework for building **Model Context Protocol (MCP)** servers. Built on top of the official `@modelcontextprotocol/sdk`, it provides structured classes to register, manage, and serve MCP **Tools**, **Resources**, and **Prompts** to AI coding assistants and LLM agents.

## Why this library?

The standard Model Context Protocol SDK provides the essential low-level protocol building blocks, but implementing comprehensive MCP servers for large projects often results in tangled handler code, manual schema boilerplate, and difficulties with dynamic asset loading.

`@dxtmisha/mcp` solves this by decoupling server capabilities into specialized, self-contained classes (`McpTool`, `McpResource`, `McpPrompt`, and `Mcp`). It handles protocol lifecycle management, parameter schema binding, URI routing, and on-demand dynamic resource streaming out of the box, allowing you to build clean, maintainable, and type-safe MCP servers with minimal code.

## What does it do?

For **server orchestration (`Mcp`)** — manages the entire lifecycle of an MCP server. It coordinates registered tools, resources, and prompts, automatically establishes transport connections (defaulting to standard I/O via `StdioServerTransport` or supporting custom transports), and handles graceful startup and shutdown.

For **tools & actions (`McpTool`)** — a modular abstraction for defining executable capabilities that AI models can call. It encapsulates tool metadata, parameter schemas (supporting Zod and JSON Schema definitions), and type-safe asynchronous execution handlers.

For **dynamic & static resources (`McpResource`)** — provides a powerful mechanism for serving documentation, design tokens, source code, and visual screenshots to AI assistants. It supports URI pattern routing, MIME type inference, static text/blobs, and dynamic lazy-loading handlers (`handler: async () => ...`) that only load heavy assets or documents when requested by the client.

For **interactive prompts (`McpPrompt`)** — structured prompt templates with configurable arguments and message generators, enabling AI assistants to request predefined workflows and contextual prompt templates.

## Installation

```bash
npm install @dxtmisha/mcp
```

## Quick Start

```typescript
import { Mcp, McpTool, McpResource, McpPrompt } from '@dxtmisha/mcp'
import { z } from 'zod'

// 1. Define executable tools
const calculatorTool = new McpTool({
  name: 'calculate_sum',
  description: 'Calculates the sum of two numbers',
  parameters: {
    a: z.number().describe('First number'),
    b: z.number().describe('Second number')
  },
  handler: async ({ a, b }) => {
    return {
      content: [{ type: 'text', text: `Result: ${a + b}` }]
    }
  }
})

// 2. Define dynamic resources
const docsResource = new McpResource([
  {
    uri: 'project/guidelines.md',
    name: 'Development Guidelines',
    description: 'Core project architectural rules and standards',
    mimeType: 'text/markdown',
    handler: async () => (await import('./guidelines.md?raw')).default
  }
])

// 3. Define prompt templates
const reviewPrompt = new McpPrompt({
  name: 'code_review',
  description: 'Template for automated code review',
  arguments: [
    { name: 'code', description: 'Source code snippet to review', required: true }
  ],
  handler: async ({ code }) => ({
    messages: [
      {
        role: 'user',
        content: { type: 'text', text: `Please review this code for best practices:\n\n${code}` }
      }
    ]
  })
})

// 4. Initialize and start the MCP server
const server = new Mcp(
  [calculatorTool],
  [docsResource],
  [reviewPrompt],
  {
    name: 'my-mcp-server',
    version: '1.0.0'
  }
)

// Start stdio transport
server.start().catch((error) => {
  console.error('Failed to start MCP server:', error)
  process.exit(1)
})
```

## Principles

- **Modularity** — tools, resources, and prompts are defined independently and can be composed dynamically into any server instance.
- **On-Demand Loading** — heavy markdown files, documentation, and visual assets are loaded lazily via asynchronous import handlers, conserving memory.
- **TypeScript-First** — 100% type coverage for tools, schemas, handlers, and resource descriptors.
- **Official Protocol Compatibility** — fully compliant with `@modelcontextprotocol/sdk` and compatible with all MCP clients (Antigravity IDE, Claude Desktop, Cursor, etc.).

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

## License

[MIT](LICENSE)
