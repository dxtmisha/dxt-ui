import { executeFunction, isFilled } from '@dxtmisha/functional-basic'
import { McpResourceAbstract } from './McpResourceAbstract'

import type {
  McpResourceContent,
  McpResourceItem,
  McpResourceOptions,
  McpResourceRecord,
  McpResourceResult
} from '../types/McpTypes'

/**
 * Concrete class for managing and serving MCP resources from structured data (such as JSON configuration files).
 *
 * Конкретный класс для управления и предоставления ресурсов MCP из структурированных данных (таких как файлы конфигурации JSON).
 */
export class McpResource extends McpResourceAbstract {
  /**
   * Constructor
   *
   * Конструктор
   * @param data List of resource records or items (e.g. from ai-mcp-all-resources.json) / Список записей или элементов ресурсов (например, из ai-mcp-all-resources.json)
   * @param options Resource options including custom loader / Настройки ресурса, включая пользовательский загрузчик
   */
  constructor(
    data: (McpResourceItem | McpResourceRecord)[] = [],
    protected options: McpResourceOptions = {}
  ) {
    super(data)
  }

  /**
   * Returns current resource options.
   *
   * Возвращает текущие настройки ресурсов.
   * @returns McpResourceOptions
   */
  getOptions(): McpResourceOptions {
    return this.options
  }

  /**
   * Sets new resource options.
   *
   * Устанавливает новые настройки ресурсов.
   * @param options New resource options / Новые настройки ресурсов
   * @returns this
   */
  setOptions(options: McpResourceOptions): this {
    this.options = options
    return this
  }

  /**
   * Reads the content of a resource using custom handler, loader, or static definition.
   *
   * Читает содержимое ресурса с использованием пользовательского обработчика, загрузчика или статического определения.
   * @param resource Resource item definition / Определение элемента ресурса
   * @param uri Requested resource URI / Запрошенный URI ресурса
   * @param extra Extra context / Дополнительный контекст
   * @returns Promise<McpResourceResult | McpResourceContent | McpResourceContent[] | string> | McpResourceResult | McpResourceContent | McpResourceContent[] | string
   */
  async read(
    resource: McpResourceItem,
    uri: URL,
    extra?: unknown
  ): Promise<McpResourceResult | McpResourceContent | McpResourceContent[] | string> {
    if (resource.handler) {
      return executeFunction(resource.handler, uri, extra)
    }

    if (this.options.loader) {
      return executeFunction(this.options.loader, resource, uri, extra)
    }

    if (isFilled(resource.text) || isFilled(resource.blob)) {
      return {
        uri: resource.uri,
        mimeType: resource.mimeType,
        text: resource.text,
        blob: resource.blob
      }
    }

    return {
      uri: resource.uri,
      mimeType: resource.mimeType || 'text/plain',
      text: resource.description || resource.name
    }
  }
}
