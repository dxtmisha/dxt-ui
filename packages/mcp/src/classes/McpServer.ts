import { forEach, isArray } from '@dxtmisha/functional-basic'

import { McpServerInstance } from './McpServerInstance'
import { McpTransport } from './McpTransport'

import type { McpServer as McpServerSdk } from '@modelcontextprotocol/sdk/server/mcp'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'
import type { McpResourceItem, McpServerOptions, McpToolItem } from '../types/McpTypes'
import type { McpResourceAbstract } from './McpResourceAbstract'

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
   * @param resources List of initial resources or resource collections / Список начальных ресурсов или коллекций ресурсов
   */
  constructor(
    protected tools: McpToolItem[] = [],
    protected options: McpServerOptions = {},
    protected resources: (McpResourceItem | McpResourceAbstract)[] = []
  ) {
    this.transport = new McpTransport(this.options.transport)

    if (this.options.resources) {
      this.addResources(this.options.resources)
    }

    if (this.resources.length > 0) {
      const initialResources = [...this.resources]
      this.resources = []
      this.addResources(initialResources)
    }
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
   * Returns the list of registered resources.
   *
   * Возвращает список зарегистрированных ресурсов.
   * @returns (McpResourceItem | McpResourceAbstract)[]
   */
  getResources(): (McpResourceItem | McpResourceAbstract)[] {
    return this.resources
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
   * Adds a resource or resource collection to the list.
   *
   * Добавляет ресурс или коллекцию ресурсов в список.
   * @param resource Resource item or collection / Элемент или коллекция ресурсов
   * @returns this
   */
  addResource(resource: McpResourceItem | McpResourceAbstract): this {
    this.resources.push(resource)

    if (this.serverInstance) {
      this.serverInstance.setupResource(resource)
    }

    return this
  }

  /**
   * Adds multiple resources or resource collections to the list.
   *
   * Добавляет несколько ресурсов или коллекций ресурсов в список.
   * @param resources List of resources or collections / Список ресурсов или коллекций
   * @returns this
   */
  addResources(resources: (McpResourceItem | McpResourceAbstract)[]): this {
    if (isArray(resources)) {
      forEach(resources, (resource: McpResourceItem | McpResourceAbstract) => {
        this.addResource(resource)
      })
    }

    return this
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
   * Adds multiple tools to the list.
   *
   * Добавляет множество инструментов в список.
   * @param tools List of tool items / Список объектов инструментов
   * @returns this
   */
  addTools(tools: McpToolItem[]): this {
    if (isArray(tools)) {
      forEach(tools, (tool: McpToolItem) => {
        this.addTool(tool)
      })
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
      this.serverInstance.setupResourceHandlers(this.resources)
    }

    return this.serverInstance.start()
  }
}

