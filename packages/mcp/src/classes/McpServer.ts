import { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'
import type { McpServerOptions, McpToolItem } from '../types/McpTypes'

/**
 * Class for creating and running an MCP server using @modelcontextprotocol/sdk.
 *
 * Класс для создания и запуска MCP сервера с использованием @modelcontextprotocol/sdk.
 */
export class McpServer {
  protected tools: McpToolItem[] = []
  protected options: McpServerOptions = {}
  protected serverInstance?: McpServerSdk
  protected transportInstance?: Transport

  /**
   * Constructor
   *
   * Конструктор
   * @param tools List of tools / Список инструментов
   * @param options Server options / Настройки сервера
   */
  constructor(
    tools: McpToolItem[] = [],
    options: McpServerOptions = {}
  ) {
    this.tools = [...tools]
    this.options = { ...options }
  }

  /**
   * Creates an McpServer instance and initializes the SDK McpServer object.
   *
   * Создает экземпляр McpServer и инициализирует объект SDK McpServer.
   * @param tools List of tools / Список инструментов
   * @param options Server options / Настройки сервера
   * @returns McpServer
   */
  static make(
    tools: McpToolItem[] = [],
    options: McpServerOptions = {}
  ): McpServer {
    const instance = new McpServer(tools, options)
    instance.make()
    return instance
  }

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
   * Returns the connected transport instance.
   *
   * Возвращает подключенный экземпляр транспорта.
   * @returns Transport | undefined
   */
  getTransport(): Transport | undefined {
    return this.transportInstance
  }

  /**
   * Returns the list of registered tools.
   *
   * Возвращает список зарегистрированных инструментов.
   * @returns McpToolItem[]
   */
  getTools(): McpToolItem[] {
    return this.tools
  }

  /**
   * Adds a tool to the list.
   *
   * Добавляет инструмент в список.
   * @param tool Tool item / Объект инструмента
   * @returns this
   */
  addTool(tool: McpToolItem): this {
    this.tools.push(tool)
    if (this.serverInstance) {
      this.setupToolHandlers()
    }
    return this
  }

  /**
   * Removes a tool by name.
   *
   * Удаляет инструмент по имени.
   * @param name Tool name / Имя инструмента
   * @returns this
   */
  removeTool(name: string): this {
    const index = this.tools.findIndex(item => item.name === name)
    if (index !== -1) {
      this.tools.splice(index, 1)
      if (this.serverInstance) {
        this.setupToolHandlers()
      }
    }
    return this
  }

  /**
   * Creates and initializes the underlying SDK McpServer instance.
   *
   * Создает и инициализирует базовый экземпляр SDK McpServer.
   * @returns McpServerSdk
   */
  make(): McpServerSdk {
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

    this.setupToolHandlers()

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

    const selectedTransport = transport || this.options.transport || new StdioServerTransport()
    this.transportInstance = selectedTransport

    await this.serverInstance!.connect(selectedTransport)

    return this.serverInstance!
  }

  /**
   * Registers tools on the SDK McpServer instance.
   *
   * Регистрирует инструменты на экземпляре SDK McpServer.
   * @returns void
   */
  protected setupToolHandlers(): void {
    if (!this.serverInstance) {
      return
    }

    for (const tool of this.tools) {
      if (tool.inputSchema) {
        this.serverInstance.registerTool(
          tool.name,
          {
            description: tool.description,
            inputSchema: tool.inputSchema as any
          },
          async (args: Record<string, any>, extra: unknown) => {
            try {
              const rawResult = await tool.handler(args || {}, extra)
              return this.formatToolResult(rawResult) as any
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
              } as any
            }
          }
        )
      } else {
        this.serverInstance.registerTool(
          tool.name,
          {
            description: tool.description
          },
          async (extra: unknown) => {
            try {
              const rawResult = await tool.handler({}, extra)
              return this.formatToolResult(rawResult) as any
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
              } as any
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
   * @returns Record<string, unknown>
   */
  protected formatToolResult(result: unknown): Record<string, unknown> {
    if (
      result
      && typeof result === 'object'
      && 'content' in (result as Record<string, unknown>)
      && Array.isArray((result as Record<string, unknown>).content)
    ) {
      return result as Record<string, unknown>
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
