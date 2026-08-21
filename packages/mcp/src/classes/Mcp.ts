import { McpServer as SdkMcpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js'

import { McpPrompt } from './McpPrompt'
import { McpResource } from './McpResource'
import { McpTool } from './McpTool'

import type {
  McpPromptItem,
  McpPromptList,
  McpResourceInput,
  McpResourceItem,
  McpResourceList,
  McpServerOptions,
  McpToolItem,
  McpToolList
} from '../types/McpTypes'

/**
 * Main orchestrator class for running Model Context Protocol (MCP) server.
 *
 * Главный координирующий класс для запуска сервера Model Context Protocol (MCP).
 */
export class Mcp {
  /** Server options and metadata / Параметры и метаданные сервера */
  protected options: McpServerOptions

  /** Tool manager instance / Экземпляр менеджера инструментов */
  protected toolManager: McpTool = new McpTool()

  /** Resource manager instance / Экземпляр менеджера ресурсов */
  protected resourceManager: McpResource = new McpResource()

  /** Prompt manager instance / Экземпляр менеджера промптов */
  protected promptManager: McpPrompt = new McpPrompt()

  /** Underlying SDK McpServer instance / Базовый экземпляр SDK McpServer */
  protected serverInstance?: SdkMcpServer

  /** Server running state indicator / Индикатор состояния работы сервера */
  protected started: boolean = false

  /**
   * Constructor for Mcp.
   *
   * Конструктор для Mcp.
   * @param tools Initial tools or tool manager / Начальные инструменты или менеджер инструментов
   * @param resources Initial resources or resource manager / Начальные ресурсы или менеджер ресурсов
   * @param prompts Initial prompts or prompt manager / Начальные промпты или менеджер промптов
   * @param options Server metadata and configuration options / Метаданные и параметры конфигурации сервера
   */
  constructor(
    tools?: McpToolItem[] | McpTool,
    resources?: McpResourceInput | McpResource | (McpResourceItem | McpResource)[],
    prompts?: McpPromptItem | McpPromptItem[] | McpPrompt,
    options?: McpServerOptions
  ) {
    this.options = options ?? {
      name: 'mcp-server',
      version: '1.0.0'
    }

    if (tools) {
      this.addTool(tools)
    }

    if (resources) {
      this.addResource(resources)
    }

    if (prompts) {
      this.addPrompt(prompts)
    }
  }

  /**
   * Checks whether the MCP server is currently running.
   *
   * Проверяет, запущен ли сервер MCP в данный момент.
   * @returns true if server is running / true, если сервер запущен
   */
  isStart(): boolean {
    return this.started
  }

  /**
   * Returns current server metadata options.
   *
   * Возвращает текущие параметры метаданных сервера.
   * @returns server options / параметры сервера
   */
  getOptions(): McpServerOptions {
    return this.options
  }

  /**
   * Returns the prompt manager instance.
   *
   * Возвращает экземпляр менеджера промптов.
   * @returns prompt manager instance / экземпляр менеджера промптов
   */
  getPromptManager(): McpPrompt {
    return this.promptManager
  }

  /**
   * Returns all registered prompt items.
   *
   * Возвращает все зарегистрированные элементы промптов.
   * @returns array of prompt items / массив элементов промптов
   */
  getPrompts(): McpPromptList {
    return this.promptManager.getItems()
  }

  /**
   * Returns the resource manager instance.
   *
   * Возвращает экземпляр менеджера ресурсов.
   * @returns resource manager instance / экземпляр менеджера ресурсов
   */
  getResourceManager(): McpResource {
    return this.resourceManager
  }

  /**
   * Returns all registered resource items.
   *
   * Возвращает все зарегистрированные элементы ресурсов.
   * @returns array of resource items / массив элементов ресурсов
   */
  getResources(): McpResourceList {
    return this.resourceManager.getItems()
  }

  /**
   * Returns the active underlying SDK McpServer instance if started.
   *
   * Возвращает активный экземпляр SDK McpServer, если сервер запущен.
   * @returns SDK McpServer instance or undefined / экземпляр SDK McpServer или undefined
   */
  getServer(): SdkMcpServer | undefined {
    return this.serverInstance
  }

  /**
   * Returns the tool manager instance.
   *
   * Возвращает экземпляр менеджера инструментов.
   * @returns tool manager instance / экземпляр менеджера инструментов
   */
  getToolManager(): McpTool {
    return this.toolManager
  }

  /**
   * Returns all registered tool items.
   *
   * Возвращает все зарегистрированные элементы инструментов.
   * @returns array of tool items / массив элементов инструментов
   */
  getTools(): McpToolList {
    return this.toolManager.getItems()
  }

  /**
   * Adds prompt definitions or merges another prompt manager into this server.
   *
   * Добавляет определения промптов или объединяет другой менеджер промптов с этим сервером.
   * @param prompt Prompt item, array of items or prompt manager / Элемент промпта, массив элементов или менеджер промптов
   * @returns current instance / текущий экземпляр
   */
  addPrompt(prompt: McpPromptItem | McpPromptItem[] | McpPrompt): this {
    this.promptManager.add(prompt)
    return this
  }

  /**
   * Adds resource definitions or merges another resource manager into this server.
   *
   * Добавляет определения ресурсов или объединяет другой менеджер ресурсов с этим сервером.
   * @param resource Resource input, resource item, array or manager / Входные данные ресурса, элемент, массив или менеджер
   * @returns current instance / текущий экземпляр
   */
  addResource(
    resource: McpResourceInput | McpResource | (McpResourceItem | McpResource)[]
  ): this {
    this.resourceManager.add(resource)
    return this
  }

  /**
   * Adds tool definitions or merges another tool manager into this server.
   *
   * Добавляет определения инструментов или объединяет другой менеджер инструментов с этим сервером.
   * @param tool Tool item, array of items or tool manager / Элемент инструмента, массив элементов или менеджер инструментов
   * @returns current instance / текущий экземпляр
   */
  addTool(tool: McpToolItem | McpToolItem[] | McpTool): this {
    this.toolManager.add(tool)
    return this
  }

  /**
   * Starts the MCP server, registers all components and binds the transport.
   *
   * Запускает сервер MCP, регистрирует все компоненты и привязывает транспорт.
   * @param transport Optional custom transport instance / Опциональный пользовательский экземпляр транспорта
   * @returns active SDK McpServer instance / активный экземпляр SDK McpServer
   */
  async start(transport?: Transport): Promise<SdkMcpServer> {
    if (
      this.started
      && this.serverInstance
    ) {
      return this.serverInstance
    }

    const sdkServer = this.createSdkServer()
    this.serverInstance = sdkServer

    this.toolManager.register(sdkServer)
    this.resourceManager.register(sdkServer)
    this.promptManager.register(sdkServer)

    const activeTransport = transport ?? this.createDefaultTransport()
    await sdkServer.connect(activeTransport)

    this.started = true
    return sdkServer
  }

  /**
   * Stops the server and closes active connections.
   *
   * Останавливает сервер и закрывает активные соединения.
   * @returns promise resolving when server is stopped / промис, завершающийся при остановке сервера
   */
  async stop(): Promise<void> {
    if (this.serverInstance) {
      await this.serverInstance.close()
      this.serverInstance = undefined
    }

    this.started = false
  }

  /**
   * Creates a default transport for the current execution environment.
   *
   * Создает стандартный транспорт для текущей среды выполнения.
   * @returns transport instance / экземпляр транспорта
   * @protected
   */
  protected createDefaultTransport(): Transport {
    return new StdioServerTransport()
  }

  /**
   * Creates a new SDK McpServer instance.
   *
   * Создает новый экземпляр SDK McpServer.
   * @returns SDK McpServer instance / экземпляр SDK McpServer
   * @protected
   */
  protected createSdkServer(): SdkMcpServer {
    return new SdkMcpServer(
      {
        name: this.options.name,
        version: this.options.version
      },
      this.options.options
    )
  }
}
