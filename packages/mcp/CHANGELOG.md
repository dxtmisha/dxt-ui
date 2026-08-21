# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-08-21

### Added
- **`Mcp`**: Core MCP server orchestrator class built on top of `@modelcontextprotocol/sdk`. Manages the full server lifecycle, coordinates tools, resources, and prompts, and supports stdio and custom transports.
- **`McpTool`**: Class for registering and executing modular MCP tools with structured parameter schemas, descriptions, and asynchronous execution handlers.
- **`McpResource`**: Class for registering and serving MCP resources. Supports URI routing, static text/binary blobs, and dynamic asynchronous import handlers with automatic `ReadResourceResult` formatting.
- **`McpPrompt`**: Class for defining and generating structured MCP prompts with configurable argument definitions and message handlers.
- **`McpItemAbstract`**: Abstract base class providing common foundations for MCP items.
- **Types (`McpTypes.ts`)**: Complete TypeScript definitions for MCP items, handlers, options, prompts, and resources.
- **Unit Tests**: Full Vitest test suite covering `Mcp`, `McpTool`, `McpResource`, and `McpPrompt`.
- **Documentation**: Comprehensive `README.md` with architecture principles, installation instructions, and Quick Start examples.
