import { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import { ErrorCenter } from '@dxtmisha/functional-basic'

import { McpTransport } from './McpTransport'

import type { CallToolResult } from '@modelcontextprotocol/sdk/types'
import type { McpServerOptions, McpToolItem } from '../types/McpTypes'

/**
 * Class representing an instance of the MCP server.
 *
 * Класс, представляющий экземпляр MCP сервера.
 */
export class McpServerInstance {
  protected serverInstance: McpServerSdk

  /**
   * Constructor
   *
   * Конструктор
   * @param options Server options / Настройки сервера
   * @param transport Transport manager instance / Экземпляр менеджера транспорта
   */
  constructor(
    protected options: McpServerOptions,
    protected transport: McpTransport
  ) {
    this.serverInstance = this.init()
  }

  /**
   * Returns the underlying SDK McpServer instance.
   *
   * Возвращает базовый экземпляр SDK McpServer.
   * @returns McpServerSdk
   */
  getServer(): McpServerSdk {
    return this.serverInstance
  }

  /**
   * Starts the MCP server using the configured transport.
   *
   * Запускает MCP сервер с использованием настроенного транспорта.
   * @returns Promise<McpServerSdk>
   */
  async start(): Promise<McpServerSdk> {
    const server = this.getServer()
    await server.connect(this.transport.get())

    return server
  }

  /**
   * Registers a single tool on the SDK McpServer instance.
   *
   * Регистрирует один инструмент на экземпляре SDK McpServer.
   * @param tool Tool item / Объект инструмента
   * @returns void
   */
  setupTool(tool: McpToolItem): void {
    const server = this.getServer()

    if (tool.inputSchema) {
      server.registerTool(
        tool.name,
        {
          description: tool.description,
          inputSchema: tool.inputSchema as any
        },
        async (args: Record<string, unknown>, extra: unknown): Promise<CallToolResult> => {
          return this.executeTool(tool, args || {}, extra)
        }
      )
    } else {
      server.registerTool(
        tool.name,
        {
          description: tool.description
        },
        async (extra: unknown): Promise<CallToolResult> => {
          return this.executeTool(tool, {}, extra)
        }
      )
    }
  }

  /**
   * Registers tools on the SDK McpServer instance.
   *
   * Регистрирует инструменты на экземпляре SDK McpServer.
   * @param tools List of tools / Список инструментов
   * @returns void
   */
  setupToolHandlers(tools: McpToolItem[] = []): void {
    tools.forEach(tool => this.setupTool(tool))
  }

  /**
   * Executes a tool handler safely and formats the result.
   *
   * Безопасно выполняет обработчик инструмента и форматирует результат.
   * @param tool Tool item / Объект инструмента
   * @param args Tool arguments / Аргументы инструмента
   * @param extra Extra context / Дополнительный контекст
   * @returns Promise<CallToolResult>
   */
  protected async executeTool(
    tool: McpToolItem,
    args: Record<string, unknown>,
    extra: unknown
  ): Promise<CallToolResult> {
    try {
      const rawResult = await tool.handler(args, extra)
      return this.formatToolResult(rawResult)
    } catch (error) {
      ErrorCenter.on({
        group: 'mcp',
        code: 'tool',
        message: `Error executing tool "${tool.name}"`,
        details: {
          tool: tool.name,
          args,
          error
        }
      })

      throw error
    }
  }

  /**
   * Formats the result returned by a tool handler into standard CallTool response structure.
   *
   * Форматирует результат выполнения обработчика инструмента в стандартную структуру ответа CallTool.
   * @param result Raw tool result / Сырой результат инструмента
   * @returns CallToolResult
   */
  protected formatToolResult(result: any): CallToolResult {
    if (
      result
      && typeof result === 'object'
      && Array.isArray(result?.content)
    ) {
      return result as CallToolResult
    }

    const textContent = typeof result === 'string'
      ? result
      : JSON.stringify(result, null, 2)

    return {
      content: [
        {
          type: 'text',
          text: textContent
        }
      ]
    }
  }

  /**
   * Initializes and creates the underlying SDK McpServer instance.
   *
   * Инициализирует и создает базовый экземпляр SDK McpServer.
   * @returns McpServerSdk
   */
  protected init(): McpServerSdk {
    const name = this.options.name || 'mcp-server'
    const version = this.options.version || '1.0.0'

    const serverOptions = {
      capabilities: {
        tools: {},
        ...this.options.capabilities
      },
      ...this.options.options
    }

    return new McpServerSdk(
      { name, version },
      serverOptions
    )
  }
}
