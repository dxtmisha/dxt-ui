import type { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'
import { McpServerInstance } from './McpServerInstance'
import { McpTransport } from './McpTransport'
import type { McpServerOptions, McpToolItem } from '../types/McpTypes'

/**
 * Class for creating and running an MCP server.
 *
 * Класс для создания и запуска MCP сервера.
 */
export class McpServer {
  protected tools: McpToolItem[] = []
  protected options: McpServerOptions = {}
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
    tools: McpToolItem[] = [],
    options: McpServerOptions = {}
  ) {
    this.tools = [...tools]
    this.options = { ...options }
    this.transport = new McpTransport(this.options.transport)
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
    if (this.serverInstance?.getServer()) {
      this.serverInstance.setupToolHandlers(this.tools)
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
      if (this.serverInstance?.getServer()) {
        this.serverInstance.setupToolHandlers(this.tools)
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
    this.serverInstance = new McpServerInstance(this.options, this.transport)
    return this.serverInstance.make(this.tools)
  }

  /**
   * Starts the MCP server using the configured transport.
   *
   * Запускает MCP сервер с использованием настроенного транспорта.
   * @param transport Optional transport instance / Опциональный экземпляр транспорта
   * @returns Promise<McpServerSdk>
   */
  async start(transport?: Transport): Promise<McpServerSdk> {
    if (transport) {
      this.transport.set(transport)
    }

    if (!this.serverInstance) {
      this.make()
    }

    return this.serverInstance!.start(transport)
  }
}
