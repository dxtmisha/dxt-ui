import { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import type { CallToolResult } from '@modelcontextprotocol/sdk/types'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'
import { McpTransport } from './McpTransport'
import type { McpServerOptions, McpToolItem } from '../types/McpTypes'

/**
 * Class representing an instance of the MCP server.
 *
 * Класс, представляющий экземпляр MCP сервера.
 */
export class McpServerInstance {
  protected serverInstance?: McpServerSdk

  /**
   * Constructor
   *
   * Конструктор
   * @param options Server options / Настройки сервера
   * @param transport Transport manager instance / Экземпляр менеджера транспорта
   */
  constructor(
    protected options: McpServerOptions = {},
    protected transport: McpTransport = new McpTransport(options.transport)
  ) { }

  /**
   * Returns the underlying SDK McpServer instance.
   *
   * Возвращает базовый экземпляр SDK McpServer.
   * @returns McpServerSdk | undefined
   */
  getServer(): McpServerSdk | undefined {
    return this.serverInstance
  }

  /**
   * Creates and initializes the underlying SDK McpServer instance.
   *
   * Создает и инициализирует базовый экземпляр SDK McpServer.
   * @param tools List of tools / Список инструментов
   * @returns McpServerSdk
   */
  make(tools: McpToolItem[] = []): McpServerSdk {
    const name = this.options.name || 'mcp-server'
    const version = this.options.version || '1.0.0'

    const serverOptions = {
      capabilities: {
        tools: {},
        ...this.options.capabilities
      },
      ...this.options.options
    }

    this.serverInstance = new McpServerSdk(
      { name, version },
      serverOptions
    )

    this.setupToolHandlers(tools)

    return this.serverInstance
  }

  /**
   * Starts the MCP server using the configured transport.
   *
   * Запускает MCP сервер с использованием настроенного транспорта.
   * @param transport Optional transport instance / Опциональный экземпляр транспорта
   * @returns Promise<McpServerSdk>
   */
  async start(transport?: Transport): Promise<McpServerSdk> {
    if (!this.serverInstance) {
      this.make()
    }

    if (transport) {
      this.transport.set(transport)
    }

    const selectedTransport = this.transport.get()
    await this.serverInstance!.connect(selectedTransport)

    return this.serverInstance!
  }

  /**
   * Registers tools on the SDK McpServer instance.
   *
   * Регистрирует инструменты на экземпляре SDK McpServer.
   * @param tools List of tools / Список инструментов
   * @returns void
   */
  setupToolHandlers(tools: McpToolItem[] = []): void {
    if (!this.serverInstance) {
      return
    }

    for (const tool of tools) {
      if (tool.inputSchema) {
        this.serverInstance.registerTool(
          tool.name,
          {
            description: tool.description,
            inputSchema: tool.inputSchema as any
          },
          async (args: Record<string, unknown>, extra: unknown): Promise<CallToolResult> => {
            try {
              const rawResult = await tool.handler(args || {}, extra)
              return this.formatToolResult(rawResult)
            } catch (error) {
              const errorMessage = error instanceof Error ? error.message : String(error)
              return {
                isError: true,
                content: [
                  {
                    type: 'text',
                    text: `Error executing tool "${tool.name}": ${errorMessage}`
                  }
                ]
              }
            }
          }
        )
      } else {
        this.serverInstance.registerTool(
          tool.name,
          {
            description: tool.description
          },
          async (extra: unknown): Promise<CallToolResult> => {
            try {
              const rawResult = await tool.handler({}, extra)
              return this.formatToolResult(rawResult)
            } catch (error) {
              const errorMessage = error instanceof Error ? error.message : String(error)
              return {
                isError: true,
                content: [
                  {
                    type: 'text',
                    text: `Error executing tool "${tool.name}": ${errorMessage}`
                  }
                ]
              }
            }
          }
        )
      }
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
}
