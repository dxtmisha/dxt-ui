import { McpServerInstance } from './McpServerInstance'
import { McpTransport } from './McpTransport'

import type { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'
import type { McpServerOptions, McpToolItem } from '../types/McpTypes'

/**
 * Class for creating and running an MCP server.
 *
 * Класс для создания и запуска MCP сервера.
 */
export class McpServer {
  protected transport: McpTransport
  protected serverInstance?: McpServerInstance

  /**
   * Constructor
   *
   * Конструктор
   * @param tools List of tools / Список инструментов
   * @param options Server options / Настройки сервера
   */
  constructor(
    protected tools: McpToolItem[] = [],
    protected options: McpServerOptions = {}
  ) {
    this.transport = new McpTransport(this.options.transport)
  }

  /**
   * Checks if the server instance is initialized.
   *
   * Проверяет, инициализирован ли экземпляр сервера.
   * @returns boolean
   */
  isStart(): boolean {
    return Boolean(this.serverInstance)
  }

  /**
   * Returns the server instance manager.
   *
   * Возвращает менеджер экземпляра сервера.
   * @returns McpServerInstance | undefined
   */
  getInstance(): McpServerInstance | undefined {
    return this.serverInstance
  }

  /**
   * Returns the underlying SDK McpServer instance.
   *
   * Возвращает базовый экземпляр SDK McpServer.
   * @returns McpServerSdk | undefined
   */
  getServer(): McpServerSdk | undefined {
    return this.serverInstance?.getServer()
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
   * Returns the transport manager instance.
   *
   * Возвращает экземпляр менеджера транспорта.
   * @returns McpTransport
   */
  getTransport(): McpTransport {
    return this.transport
  }

  /**
   * Returns the connected transport instance.
   *
   * Возвращает подключенный экземпляр транспорта.
   * @returns Transport
   */
  getTransportInstance(): Transport {
    return this.transport.get()
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
      this.serverInstance.setupTool(tool)
    }

    return this
  }

  /**
   * Starts the MCP server using the configured transport.
   *
   * Запускает MCP сервер с использованием настроенного транспорта.
   * @returns Promise<McpServerSdk>
   */
  async start(): Promise<McpServerSdk> {
    if (!this.serverInstance) {
      this.serverInstance = new McpServerInstance(this.options, this.transport)
      this.serverInstance.setupToolHandlers(this.tools)
    }

    return this.serverInstance.start()
  }
}
