import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { isArray, isFilled, isFunction, isObject, isString } from '@dxtmisha/functional-basic'
import type {
  McpGetResourcesOptions,
  McpResourceItem,
  McpResourceRawItem,
  McpResourceReadHandler
} from '../types/McpTypes'

/**
 * Class for loading, resolving, and transforming raw MCP resource configuration data or JSON files into standard McpResourceItem entries with dynamic filesystem loaders.
 *
 * Класс для загрузки, разрешения и преобразования сырых данных конфигурации ресурсов MCP или JSON-файлов в стандартные элементы McpResourceItem с динамическими загрузчиками файловой системы.
 */
export class McpResourcesLoader {
  /** Cached transformed resource items / Кэшированные преобразованные элементы ресурсов */
  protected items?: McpResourceItem[]

  /**
   * Constructor for McpResourcesLoader.
   *
   * Конструктор для McpResourcesLoader.
   * @param source Data array, raw JSON string, or file path to resources JSON / Массив данных, строка JSON или путь к JSON-файлу ресурсов
   * @param options Options including base search path / Параметры, включая базовый путь поиска
   */
  constructor(
    protected readonly source: string | McpResourceRawItem[] | Record<string, unknown>[],
    protected readonly options?: McpGetResourcesOptions
  ) {}

  /**
   * Returns transformed array of McpResourceItem entries.
   *
   * Возвращает преобразованный массив элементов McpResourceItem.
   * @returns array of initialized McpResourceItem elements / массив инициализированных элементов McpResourceItem
   */
  get(): McpResourceItem[] {
    if (this.items === undefined) {
      this.items = this.makeItems()
    }

    return this.items
  }

  /**
   * Checks whether the given MIME type represents binary data.
   *
   * Проверяет, представляет ли указанный MIME-тип бинарные данные.
   * @param mimeType MIME type string to evaluate / Строка MIME-типа для проверки
   * @returns true if MIME type is binary / true, если MIME-тип бинарный
   * @protected
   */
  protected isBinary(mimeType?: string): boolean {
    if (!mimeType) {
      return false
    }

    const binaryPrefixes = ['image/', 'audio/', 'video/', 'font/']
    if (binaryPrefixes.some(prefix => mimeType.startsWith(prefix))) {
      return !mimeType.includes('svg')
    }

    const binaryTypes = [
      'application/octet-stream',
      'application/pdf',
      'application/zip',
      'application/gzip',
      'application/wasm'
    ]

    return binaryTypes.includes(mimeType)
  }

  /**
   * Detects MIME type based on file extension.
   *
   * Определяет MIME-тип на основе расширения файла.
   * @param filePath Path or filename to inspect / Путь или имя файла для проверки
   * @returns detected MIME type string / определенная строка MIME-типа
   * @protected
   */
  protected getMimeType(filePath: string): string {
    const extension = path.extname(filePath).toLowerCase()

    switch (extension) {
      case '.md':
      case '.markdown':
        return 'text/markdown'
      case '.json':
        return 'application/json'
      case '.html':
      case '.htm':
        return 'text/html'
      case '.css':
      case '.scss':
        return 'text/css'
      case '.js':
      case '.mjs':
      case '.cjs':
        return 'application/javascript'
      case '.ts':
      case '.mts':
      case '.cts':
        return 'text/typescript'
      case '.svg':
        return 'image/svg+xml'
      case '.png':
        return 'image/png'
      case '.jpg':
      case '.jpeg':
        return 'image/jpeg'
      case '.webp':
        return 'image/webp'
      case '.gif':
        return 'image/gif'
      case '.pdf':
        return 'application/pdf'
      case '.zip':
        return 'application/zip'
      default:
        return 'text/plain'
    }
  }

  /**
   * Creates a dynamic read handler for a resource URI.
   *
   * Создает динамический обработчик чтения для URI ресурса.
   * @param uri Resource URI or package path / URI ресурса или путь к пакету
   * @param mimeType Optional explicit MIME type / Опциональный явный MIME-тип
   * @returns resource read handler callback / функция обратного вызова обработчика чтения ресурса
   * @protected
   */
  protected getReadHandler(uri: string, mimeType?: string): McpResourceReadHandler {
    return async () => {
      const resolvedPath = this.resolvePath(uri)

      if (!resolvedPath) {
        return {
          contents: [
            {
              uri,
              mimeType: mimeType ?? 'text/plain',
              text: `File not found for resource "${uri}".`
            }
          ]
        }
      }

      try {
        const effectiveMimeType = mimeType || this.getMimeType(resolvedPath)
        const isBinaryFile = this.isBinary(effectiveMimeType)

        if (isBinaryFile) {
          const buffer = await fs.promises.readFile(resolvedPath)
          return {
            contents: [
              {
                uri,
                mimeType: effectiveMimeType,
                blob: buffer.toString('base64')
              }
            ]
          }
        }

        const text = await fs.promises.readFile(resolvedPath, 'utf-8')
        return {
          contents: [
            {
              uri,
              mimeType: effectiveMimeType,
              text
            }
          ]
        }
      } catch (error: unknown) {
        return {
          contents: [
            {
              uri,
              mimeType: 'text/plain',
              text: `Error reading resource "${uri}": ${String(error)}`
            }
          ]
        }
      }
    }
  }

  /**
   * Resolves raw configuration list from source (file, JSON string, or array).
   *
   * Разрешает сырой список конфигураций из источника (файл, JSON-строка или массив).
   * @returns list of raw configuration objects / список сырых объектов конфигурации
   * @protected
   */
  protected getRawList(): Record<string, unknown>[] {
    if (isString(this.source)) {
      let resolvedFilePath: string | undefined = undefined

      if (fs.existsSync(this.source)) {
        resolvedFilePath = this.source
      } else if (this.options?.basePath && fs.existsSync(path.resolve(this.options.basePath, this.source))) {
        resolvedFilePath = path.resolve(this.options.basePath, this.source)
      }

      if (resolvedFilePath) {
        try {
          const fileContent = fs.readFileSync(resolvedFilePath, 'utf-8')
          const parsed = JSON.parse(fileContent)
          return isArray(parsed) ? parsed : [parsed]
        } catch {
          return []
        }
      }

      try {
        const parsed = JSON.parse(this.source)
        return isArray(parsed) ? parsed : [parsed]
      } catch {
        return []
      }
    }

    if (isArray(this.source)) {
      return this.source as Record<string, unknown>[]
    }

    if (isObject(this.source)) {
      return [this.source as Record<string, unknown>]
    }

    return []
  }

  /**
   * Generates and transforms raw resource records into McpResourceItem array.
   *
   * Генерирует и преобразует сырые записи ресурсов в массив McpResourceItem.
   * @returns array of McpResourceItem items / массив элементов McpResourceItem
   * @protected
   */
  protected makeItems(): McpResourceItem[] {
    const rawList = this.getRawList()
    const result: McpResourceItem[] = []

    for (const rawItem of rawList) {
      if (!isObject(rawItem)) {
        continue
      }

      const uri = isString(rawItem.uri) && isFilled(rawItem.uri)
        ? rawItem.uri
        : isString(rawItem.path) && isFilled(rawItem.path)
          ? rawItem.path
          : isString(rawItem.name) && isFilled(rawItem.name)
            ? rawItem.name
            : `mcp://resource/${result.length}`

      const name = isString(rawItem.name) && isFilled(rawItem.name)
        ? rawItem.name
        : isString(rawItem.title) && isFilled(rawItem.title)
          ? rawItem.title
          : uri

      const description = isString(rawItem.description) ? rawItem.description : undefined
      const mimeType = isString(rawItem.mimeType) ? rawItem.mimeType : undefined

      if (isFunction(rawItem.handler)) {
        result.push({
          uri,
          name,
          description,
          mimeType,
          handler: rawItem.handler as McpResourceItem['handler']
        })
        continue
      }

      if (isFilled(rawItem.text) || isFilled(rawItem.blob)) {
        result.push({
          uri,
          name,
          description,
          mimeType,
          text: isString(rawItem.text) ? rawItem.text : undefined,
          blob: isString(rawItem.blob) ? rawItem.blob : undefined
        })
        continue
      }

      result.push({
        uri,
        name,
        description,
        mimeType,
        handler: this.getReadHandler(uri, mimeType)
      })
    }

    return result
  }

  /**
   * Resolves the filesystem path for a given resource URI using import.meta.resolve.
   *
   * Разрешает путь в файловой системе для указанного URI ресурса с помощью import.meta.resolve.
   * @param uri Resource URI or package path / URI ресурса или путь к пакету
   * @returns absolute resolved file path or undefined / абсолютный разрешенный путь к файлу или undefined
   * @protected
   */
  protected resolvePath(uri: string): string | undefined {
    try {
      const resolved = import.meta.resolve(uri)
      const filePath = fileURLToPath(resolved)

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return filePath
      }
    } catch {
      // Fallback
    }

    if (path.isAbsolute(uri) && fs.existsSync(uri) && fs.statSync(uri).isFile()) {
      return uri
    }

    if (this.options?.basePath) {
      const candidate = path.resolve(this.options.basePath, uri)
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        return candidate
      }
    }

    return undefined
  }
}
