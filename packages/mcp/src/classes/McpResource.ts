import { isArray, isFilled, isFunction, isObject, isString } from '@dxtmisha/functional-basic'
import type { ReadResourceResult } from '@modelcontextprotocol/sdk/types.js'
import { McpItemAbstract } from './McpItemAbstract'
import type {
  McpResourceInput,
  McpResourceItem,
  SdkMcpServer
} from '../types/McpTypes'

/**
 * Class for managing and reading MCP resources.
 *
 * Класс для управления и чтения ресурсов MCP.
 */
export class McpResource extends McpItemAbstract<
  McpResourceItem,
  McpResourceInput | McpResource | (McpResourceItem | McpResource)[]
> {
  /**
   * Adds resource items, an array of items, or merges another McpResource instance.
   *
   * Добавляет элементы ресурсов, массив элементов или объединяет другой экземпляр McpResource.
   * @param resource Resource item, input data or McpResource instance / Элемент ресурса, входные данные или экземпляр McpResource
   * @returns current instance / текущий экземпляр
   */
  override add(
    resource: McpResourceInput | McpResource | (McpResourceItem | McpResource)[]
  ): this {
    if (resource instanceof McpResource) {
      this.addItems(resource.getItems())
    } else if (isArray(resource)) {
      resource.forEach(resourceItem => {
        if (resourceItem instanceof McpResource) {
          this.addItems(resourceItem.getItems())
        } else {
          this.addItem(resourceItem as McpResourceItem)
        }
      })
    } else if (isObject(resource)) {
      this.addItem(resource as McpResourceItem)
    }

    return this
  }

  /**
   * Adds a single resource item or raw configuration to the registry.
   *
   * Добавляет один элемент ресурса или конфигурацию в реестр.
   * @param item Resource item or raw configuration to add / Элемент ресурса или конфигурация для добавления
   * @returns current instance / текущий экземпляр
   */
  override addItem(item: McpResourceItem | Record<string, unknown>): this {
    const normalizedItem = this.normalizeItem(item)
    return super.addItem(normalizedItem)
  }

  /**
   * Reads a resource by its URI and returns standard ReadResourceResult.
   *
   * Читает ресурс по его URI и возвращает стандартный ReadResourceResult.
   * @param uri Resource URI or URL object / URI ресурса или объект URL
   * @param extra Optional execution context metadata / Опциональные метаданные контекста выполнения
   * @returns standard MCP resource read result / стандартный результат чтения ресурса MCP
   */
  async read(
    uri: string | URL,
    extra?: Record<string, unknown>
  ): Promise<ReadResourceResult> {
    const uriString = String(uri)
    const resourceItem = this.getItem(uriString)

    if (!resourceItem) {
      return {
        contents: [
          {
            uri: uriString,
            mimeType: 'text/plain',
            text: `Resource "${uriString}" not found.`
          }
        ]
      }
    }

    if (isFunction(resourceItem.handler)) {
      const urlInstance = typeof uri === 'string'
        ? new URL(uri.startsWith('http') || uri.startsWith('file') ? uri : `mcp://${uri}`)
        : uri

      const rawResult = await resourceItem.handler(urlInstance, extra)
      return this.formatResult(rawResult, resourceItem.uri, resourceItem.mimeType)
    }

    if (isFilled(resourceItem.text)) {
      return {
        contents: [
          {
            uri: resourceItem.uri,
            mimeType: resourceItem.mimeType ?? 'text/plain',
            text: resourceItem.text
          }
        ]
      }
    }

    if (isFilled(resourceItem.blob)) {
      return {
        contents: [
          {
            uri: resourceItem.uri,
            mimeType: resourceItem.mimeType ?? 'application/octet-stream',
            blob: resourceItem.blob
          }
        ]
      }
    }

    return {
      contents: [
        {
          uri: resourceItem.uri,
          mimeType: resourceItem.mimeType ?? 'text/plain',
          text: ''
        }
      ]
    }
  }

  /**
   * Registers all managed resources into an SDK McpServer instance.
   *
   * Регистрирует все управляемые ресурсы в экземпляре SDK McpServer.
   * @param sdkServer SDK McpServer instance / Экземпляр SDK McpServer
   */
  override register(sdkServer: SdkMcpServer): void {
    this.items.forEach(resourceItem => {
      const resourceMetadata: Record<string, unknown> = {}

      if (isFilled(resourceItem.description)) {
        resourceMetadata.description = resourceItem.description
      }

      if (isFilled(resourceItem.mimeType)) {
        resourceMetadata.mimeType = resourceItem.mimeType
      }

      sdkServer.registerResource(
        resourceItem.name,
        resourceItem.uri,
        resourceMetadata,
        async (uri: URL, extra: unknown) => {
          return this.read(uri, extra as Record<string, unknown>)
        }
      )
    })
  }

  /**
   * Extracts the unique key from a resource item.
   *
   * Извлекает уникальный ключ из элемента ресурса.
   * @param item Target resource item / Целевой элемент ресурса
   * @returns unique resource URI / уникальный URI ресурса
   * @protected
   */
  protected override getKey(item: McpResourceItem): string {
    return item.uri
  }

  /**
   * Checks if a resource item matches the given URI or name.
   *
   * Проверяет, соответствует ли элемент ресурса указанному URI или имени.
   * @param item Target resource item / Целевой элемент ресурса
   * @param key Key to match against / Ключ для проверки
   * @returns true if matches URI or name / true, если соответствует URI или имени
   * @protected
   */
  protected override isMatch(item: McpResourceItem, key: string): boolean {
    return item.uri === key || item.name === key
  }

  /**
   * Normalizes raw object or input into a standard McpResourceItem.
   *
   * Нормализует сырой объект или входные данные в стандартный McpResourceItem.
   * @param rawItem Raw item object / Сырой объект элемента
   * @returns normalized resource item / нормализованный элемент ресурса
   * @protected
   */
  protected normalizeItem(rawItem: unknown): McpResourceItem {
    if (!isObject(rawItem)) {
      const stringValue = String(rawItem ?? '')
      return {
        uri: stringValue,
        name: stringValue,
        mimeType: 'text/plain',
        text: stringValue
      }
    }

    const candidate = rawItem as Record<string, unknown>
    const resolvedUri = isString(candidate.uri) && isFilled(candidate.uri)
      ? candidate.uri
      : isString(candidate.path) && isFilled(candidate.path)
        ? candidate.path
        : isString(candidate.name) && isFilled(candidate.name)
          ? candidate.name
          : `mcp://resource/${this.items.length}`

    const resolvedName = isString(candidate.name) && isFilled(candidate.name)
      ? candidate.name
      : isString(candidate.title) && isFilled(candidate.title)
        ? candidate.title
        : resolvedUri

    const resolvedDescription = isString(candidate.description)
      ? candidate.description
      : undefined

    let resolvedMimeType: string | undefined = isString(candidate.mimeType)
      ? candidate.mimeType
      : undefined

    if (!resolvedMimeType) {
      if (resolvedUri.endsWith('.json')) {
        resolvedMimeType = 'application/json'
      } else if (resolvedUri.endsWith('.md')) {
        resolvedMimeType = 'text/markdown'
      } else if (resolvedUri.endsWith('.html')) {
        resolvedMimeType = 'text/html'
      }
    }

    const resolvedHandler = isFunction(candidate.handler)
      ? (candidate.handler as McpResourceItem['handler'])
      : undefined

    let resolvedText: string | undefined = isString(candidate.text)
      ? candidate.text
      : isString(candidate.content)
        ? candidate.content
        : undefined

    if (!resolvedHandler && !resolvedText && !isFilled(candidate.blob)) {
      resolvedText = JSON.stringify(rawItem, null, 2)
    }

    return {
      uri: resolvedUri,
      name: resolvedName,
      description: resolvedDescription,
      mimeType: resolvedMimeType,
      text: resolvedText,
      blob: isString(candidate.blob) ? candidate.blob : undefined,
      handler: resolvedHandler
    }
  }

  /**
   * Formats dynamic read output into ReadResourceResult format.
   *
   * Форматирует динамический вывод чтения в формат ReadResourceResult.
   * @param result Raw handler result / Сырой результат обработчика
   * @param uriString Fallback URI string / Запасная строка URI
   * @param mimeType Optional MIME type / Опциональный MIME-тип
   * @returns standard ReadResourceResult / стандартный ReadResourceResult
   * @protected
   */
  protected formatResult(
    result: unknown,
    uriString: string,
    mimeType?: string
  ): ReadResourceResult {
    if (isObject(result)) {
      const candidate = result as Record<string, unknown>

      if (isArray(candidate.contents)) {
        return candidate as unknown as ReadResourceResult
      }

      if (isString(candidate.blob)) {
        const itemUri = isString(candidate.uri) ? candidate.uri : uriString

        return {
          contents: [
            {
              uri: itemUri,
              mimeType: isString(candidate.mimeType) ? candidate.mimeType : (mimeType ?? 'application/octet-stream'),
              blob: candidate.blob
            }
          ]
        }
      }

      if (isString(candidate.text)) {
        const itemUri = isString(candidate.uri) ? candidate.uri : uriString

        return {
          contents: [
            {
              uri: itemUri,
              mimeType: isString(candidate.mimeType) ? candidate.mimeType : (mimeType ?? 'text/plain'),
              text: candidate.text
            }
          ]
        }
      }

      return {
        contents: [
          {
            uri: uriString,
            mimeType: mimeType ?? 'application/json',
            text: JSON.stringify(result, null, 2)
          }
        ]
      }
    }

    return {
      contents: [
        {
          uri: uriString,
          mimeType: mimeType ?? 'text/plain',
          text: String(result ?? '')
        }
      ]
    }
  }
}
