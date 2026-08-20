import { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import { ErrorCenter, forEach, isArray, isFilled } from '@dxtmisha/functional-basic'

import { McpResourceAbstract } from './McpResourceAbstract'
import { McpTransport } from './McpTransport'

import type { CallToolResult, ReadResourceResult } from '@modelcontextprotocol/sdk/types'
import type { McpResourceItem, McpServerOptions, McpToolItem } from '../types/McpTypes'

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
   * Registers a single resource or resource collection on the SDK McpServer instance.
   *
   * Регистрирует один ресурс или коллекцию ресурсов на экземпляре SDK McpServer.
   * @param resource Resource item or resource collection / Элемент ресурса или коллекция ресурсов
   * @returns void
   */
  setupResource(resource: McpResourceItem | McpResourceAbstract): void {
    if (resource instanceof McpResourceAbstract) {
      const items = resource.toMcpResources()
      forEach(items, (item: McpResourceItem) => this.setupResource(item))
      return
    }

    const server = this.getServer()
    const metadata = {
      description: resource.description,
      mimeType: resource.mimeType,
      _meta: resource._meta
    }

    const resourceUri = resource.uri.includes('://')
      ? resource.uri
      : `dxt:///${resource.uri.replace(/^\/+/, '')}`

    server.registerResource(
      resource.name,
      resourceUri,
      metadata,
      async (uri: URL, extra: unknown): Promise<ReadResourceResult> => {
        return this.executeResource(resource, uri, extra)
      }
    )
  }

  /**
   * Registers resources on the SDK McpServer instance.
   *
   * Регистрирует ресурсы на экземпляре SDK McpServer.
   * @param resources List of resources / Список ресурсов
   * @returns void
   */
  setupResourceHandlers(resources: (McpResourceItem | McpResourceAbstract)[] = []): void {
    if (isArray(resources)) {
      forEach(resources, (resource: McpResourceItem | McpResourceAbstract) => {
        this.setupResource(resource)
      })
    }
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
    if (isArray(tools)) {
      forEach(tools, (tool: McpToolItem) => this.setupTool(tool))
    }
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
   * Executes a resource read handler safely and formats the result.
   *
   * Безопасно выполняет обработчик чтения ресурса и форматирует результат.
   * @param resource Resource item / Объект ресурса
   * @param uri Requested resource URI / Запрошенный URI ресурса
   * @param extra Extra context / Дополнительный контекст
   * @returns Promise<ReadResourceResult>
   */
  protected async executeResource(
    resource: McpResourceItem,
    uri: URL,
    extra: unknown
  ): Promise<ReadResourceResult> {
    try {
      let rawResult: unknown

      if (resource.handler) {
        rawResult = await resource.handler(uri, extra)
      } else if (isFilled(resource.text) || isFilled(resource.blob)) {
        rawResult = {
          uri: resource.uri,
          mimeType: resource.mimeType,
          text: resource.text,
          blob: resource.blob
        }
      } else {
        rawResult = resource.description || resource.name
      }

      return this.formatResourceResult(resource, rawResult, uri)
    } catch (error) {
      ErrorCenter.on({
        group: 'mcp',
        code: 'resource',
        message: `Error executing resource "${resource.name}" (${resource.uri})`,
        details: {
          resource: resource.name,
          uri: resource.uri,
          error
        }
      })

      throw error
    }
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
   * Formats the result returned by a resource handler into standard ReadResourceResult structure.
   *
   * Форматирует результат выполнения обработчика ресурса в стандартную структуру ответа ReadResourceResult.
   * @param resource Resource item / Объект ресурса
   * @param result Raw resource result / Сырой результат ресурса
   * @param uri Requested URI / Запрошенный URI
   * @returns ReadResourceResult
   */
  protected formatResourceResult(
    resource: McpResourceItem,
    result: unknown,
    uri: URL
  ): ReadResourceResult {
    if (
      result
      && typeof result === 'object'
      && Array.isArray((result as any).contents)
    ) {
      return result as ReadResourceResult
    }

    if (Array.isArray(result)) {
      return {
        contents: result.map((item: unknown) => {
          if (typeof item === 'string') {
            return {
              uri: uri.toString() || resource.uri,
              mimeType: resource.mimeType || 'text/plain',
              text: item
            }
          }

          if (item && typeof item === 'object') {
            const itemObj = item as Record<string, unknown>
            if (typeof itemObj.blob === 'string') {
              return {
                uri: (itemObj.uri as string) || uri.toString() || resource.uri,
                mimeType: (itemObj.mimeType as string) || resource.mimeType || 'application/octet-stream',
                blob: itemObj.blob,
                _meta: itemObj._meta as Record<string, unknown> | undefined
              }
            }

            return {
              uri: (itemObj.uri as string) || uri.toString() || resource.uri,
              mimeType: (itemObj.mimeType as string) || resource.mimeType || 'text/plain',
              text: typeof itemObj.text === 'string' ? itemObj.text : JSON.stringify(item, null, 2),
              _meta: itemObj._meta as Record<string, unknown> | undefined
            }
          }

          return {
            uri: uri.toString() || resource.uri,
            mimeType: resource.mimeType || 'text/plain',
            text: String(item ?? '')
          }
        })
      }
    }

    if (result && typeof result === 'object') {
      const contentObj = result as Record<string, unknown>
      if (typeof contentObj.blob === 'string') {
        return {
          contents: [
            {
              uri: (contentObj.uri as string) || uri.toString() || resource.uri,
              mimeType: (contentObj.mimeType as string) || resource.mimeType || 'application/octet-stream',
              blob: contentObj.blob,
              _meta: contentObj._meta as Record<string, unknown> | undefined
            }
          ]
        }
      }

      if (typeof contentObj.text === 'string') {
        return {
          contents: [
            {
              uri: (contentObj.uri as string) || uri.toString() || resource.uri,
              mimeType: (contentObj.mimeType as string) || resource.mimeType || 'text/plain',
              text: contentObj.text,
              _meta: contentObj._meta as Record<string, unknown> | undefined
            }
          ]
        }
      }

      return {
        contents: [
          {
            uri: uri.toString() || resource.uri,
            mimeType: resource.mimeType || 'application/json',
            text: JSON.stringify(result, null, 2)
          }
        ]
      }
    }

    const textContent = typeof result === 'string'
      ? result
      : String(result ?? '')

    return {
      contents: [
        {
          uri: uri.toString() || resource.uri,
          mimeType: resource.mimeType || 'text/plain',
          text: textContent
        }
      ]
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
        resources: {},
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

