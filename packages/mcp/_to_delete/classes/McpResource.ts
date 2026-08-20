import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
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
    super(data, options.scheme || 'dxt')
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
    if (options.scheme) {
      this.setScheme(options.scheme)
    }
    return this
  }

  /**
   * Reads the content of a resource using custom handler, loader, static definition, or file system loading.
   *
   * Читает содержимое ресурса с использованием пользовательского обработчика, загрузчика, статического определения или загрузки из файловой системы.
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
        blob: resource.blob,
        _meta: resource._meta
      }
    }

    const fileContent = this.readFileContent(resource)
    if (fileContent) {
      return fileContent
    }

    return {
      uri: resource.uri,
      mimeType: resource.mimeType || 'text/plain',
      text: resource.description || resource.name
    }
  }

  /**
   * Determines if a MIME type represents binary content.
   *
   * Определяет, представляет ли MIME-тип бинарное содержимое.
   * @param mimeType MIME type string / Строка MIME-типа
   * @returns boolean
   */
  protected isBinaryMimeType(mimeType?: string): boolean {
    if (!mimeType) {
      return false
    }

    const binaryPrefixes = ['image/', 'audio/', 'video/']
    const isPrefixBinary = binaryPrefixes.some(prefix => mimeType.startsWith(prefix))

    if (isPrefixBinary) {
      return true
    }

    const binaryTypes = [
      'application/octet-stream',
      'application/pdf',
      'application/zip',
      'application/gzip',
      'application/x-tar'
    ]

    return binaryTypes.includes(mimeType)
  }

  /**
   * Checks if the given path exists and is a regular file.
   *
   * Проверяет, существует ли указанный путь и является ли он обычным файлом.
   * @param targetPath Path to inspect / Путь для проверки
   * @returns boolean
   */
  protected isFile(targetPath: string): boolean {
    try {
      return fs.existsSync(targetPath) && fs.statSync(targetPath).isFile()
    } catch {
      return false
    }
  }

  /**
   * Detects the MIME type based on file extension.
   *
   * Определяет MIME-тип по расширению файла.
   * @param filePath File path / Путь к файлу
   * @returns string
   */
  protected detectMimeType(filePath: string): string {
    const extension = path.extname(filePath).toLowerCase()

    switch (extension) {
      case '.md':
      case '.markdown':
        return 'text/markdown'
      case '.json':
        return 'application/json'
      case '.ts':
      case '.tsx':
        return 'text/typescript'
      case '.js':
      case '.jsx':
      case '.mjs':
      case '.cjs':
        return 'text/javascript'
      case '.html':
      case '.htm':
        return 'text/html'
      case '.css':
      case '.scss':
        return 'text/css'
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
   * Reads the content of a resource from the local filesystem.
   *
   * Читает содержимое ресурса из локальной файловой системы.
   * @param resource Resource item definition / Определение элемента ресурса
   * @returns McpResourceContent | undefined
   */
  protected readFileContent(resource: McpResourceItem): McpResourceContent | undefined {
    const resolvedPath = this.resolveFilePath(resource.uri)
    if (!resolvedPath) {
      return undefined
    }

    try {
      const mimeType = resource.mimeType || this.detectMimeType(resolvedPath)
      const isBinary = this.isBinaryMimeType(mimeType)

      if (isBinary) {
        const buffer = fs.readFileSync(resolvedPath)
        return {
          uri: resource.uri,
          mimeType,
          blob: buffer.toString('base64'),
          _meta: resource._meta
        }
      }

      const text = fs.readFileSync(resolvedPath, 'utf-8')
      return {
        uri: resource.uri,
        mimeType,
        text,
        _meta: resource._meta
      }
    } catch {
      return undefined
    }
  }

  /**
   * Returns list of base directories to search for resource files.
   *
   * Возвращает список базовых директорий для поиска файлов ресурсов.
   * @returns string[]
   */
  protected getSearchBases(): string[] {
    const bases: string[] = []

    if (this.options.basePath) {
      bases.push(this.options.basePath)
    }

    if (typeof process !== 'undefined' && typeof process.cwd === 'function') {
      let currentDirectory = process.cwd()
      bases.push(currentDirectory)

      for (let iteration = 0; iteration < 5; iteration++) {
        const parentDirectory = path.dirname(currentDirectory)
        if (parentDirectory === currentDirectory) {
          break
        }
        if (!bases.includes(parentDirectory)) {
          bases.push(parentDirectory)
        }
        currentDirectory = parentDirectory
      }
    }

    return bases
  }

  /**
   * Resolves the absolute path on the filesystem for the given resource URI.
   *
   * Разрешает абсолютный путь в файловой системе для указанного URI ресурса.
   * @param uri Resource URI string / Строка URI ресурса
   * @returns string | undefined
   */
  protected resolveFilePath(uri: string): string | undefined {
    let targetPath = uri

    if (targetPath.startsWith('file://')) {
      try {
        targetPath = fileURLToPath(targetPath)
      } catch {
        targetPath = targetPath.replace(/^file:\/\/\/?/, '')
      }
    } else if (targetPath.includes('://')) {
      targetPath = targetPath.replace(/^[a-z0-9+.-]+:\/\/\/?/i, '')
    }

    if (path.isAbsolute(targetPath) && this.isFile(targetPath)) {
      return targetPath
    }

    const searchBases = this.getSearchBases()

    for (const baseDirectory of searchBases) {
      const candidatePaths: string[] = [
        path.resolve(baseDirectory, targetPath),
        path.resolve(baseDirectory, 'node_modules', targetPath)
      ]

      if (targetPath.startsWith('@')) {
        const pathSegments = targetPath.split('/')
        if (pathSegments.length >= 3) {
          const packageName = pathSegments[1]
          const subPath = pathSegments.slice(2).join('/')
          candidatePaths.push(path.resolve(baseDirectory, 'packages', packageName, subPath))
          candidatePaths.push(path.resolve(baseDirectory, 'packages', `${pathSegments[0]}/${pathSegments[1]}`, subPath))
        }
      }

      for (const candidatePath of candidatePaths) {
        if (this.isFile(candidatePath)) {
          return candidatePath
        }
      }
    }

    return undefined
  }
}
