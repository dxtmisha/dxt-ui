import {
  isArray,
  isFilled,
  isObject,
  isString,
  toCamelCaseFirst
} from '@dxtmisha/functional-basic'

import { PropertiesFile, type PropertiesFilePath } from '../Properties/PropertiesFile'

import {
  UI_FILE_AI_MCP_ALL,
  UI_FILE_AI_MCP_ALL_TS,
  UI_FILE_AI_PROMPT_PROMPT
} from '../../config'

/**
 * Class for generating a TypeScript file with structured and formatted MCP resources from `ai-mcp-all-resources.json`.
 * Formats resource lists by package with dynamic import handlers for direct consumption by `McpResource`.
 *
 * Класс для генерации TypeScript файла со структурированными и отформатированными ресурсами MCP из `ai-mcp-all-resources.json`.
 * Форматирует списки ресурсов по пакетам с обработчиками динамического импорта для прямого использования в `McpResource`.
 */
export class LibraryAiMcp {
  /** Source data array or path to JSON file. / Массив исходных данных или путь к JSON файлу. */
  protected readonly source: PropertiesFilePath | Record<string, unknown>[]
  /** Path to the target TypeScript file. / Путь к целевому TypeScript файлу. */
  protected readonly fileTs: PropertiesFilePath

  /**
   * Constructor for LibraryAiMcp.
   *
   * Конструктор для LibraryAiMcp.
   * @param source Path to JSON resources file or resource records array / Путь к JSON файлу ресурсов или массив записей ресурсов
   * @param fileTs Path to output TypeScript file / Путь к выходному TypeScript файлу
   */
  constructor(
    source: PropertiesFilePath | Record<string, unknown>[] = UI_FILE_AI_MCP_ALL,
    fileTs: PropertiesFilePath = UI_FILE_AI_MCP_ALL_TS
  ) {
    this.source = source
    this.fileTs = fileTs
  }

  /**
   * Checks if the main AI prompt file exists.
   *
   * Проверяет, существует ли главный файл промпта ИИ.
   * @returns true if ai-prompt.md exists / true, если ai-prompt.md существует
   */
  isPrompt(): boolean {
    return PropertiesFile.is(UI_FILE_AI_PROMPT_PROMPT)
  }

  /**
   * Reads and parses resources from the source JSON file or returns provided data array,
   * automatically including the root `ai-prompt.md` if it exists.
   *
   * Читает и парсит ресурсы из исходного JSON файла или возвращает переданный массив данных,
   * автоматически включая корневой `ai-prompt.md`, если он существует.
   * @returns list of raw resource records / список сырых записей ресурсов
   */
  getResources(): Record<string, unknown>[] {
    const list: Record<string, unknown>[] = []

    if (this.isPrompt()) {
      list.push(this.getPromptResource())
    }

    if (isArray(this.source) && this.source.length > 0 && isObject(this.source[0])) {
      list.push(...(this.source as Record<string, unknown>[]))
      return list
    }

    const filePath = this.source as PropertiesFilePath

    if (PropertiesFile.is(filePath)) {
      const data = PropertiesFile.readFile<Record<string, unknown>[]>(filePath)

      if (isArray(data) && data.length > 0) {
        list.push(...data)
      }
    }

    return list
  }

  /**
   * Generates the TypeScript file with formatted MCP resources for McpResource.
   *
   * Генерирует TypeScript файл с отформатированными ресурсами MCP для McpResource.
   * @returns current instance / текущий экземпляр
   */
  make(): this {
    console.log('Generating AI MCP TypeScript resources...')

    const resources = this.getResources()

    if (resources.length > 0) {
      const content = this.initFile(resources)
      this.write(content)
      console.log(`Generated ${resources.length} MCP resources in ${PropertiesFile.joinPath(this.fileTs)}`)
    } else {
      console.log('No MCP resources found to generate.')
    }

    return this
  }

  /**
   * Generates the import path and query parameters for dynamic resource import.
   *
   * Генерирует путь импорта и параметры запроса для динамического импорта ресурса.
   * @param uri Resource URI / URI ресурса
   * @returns formatted import path with raw query when appropriate / отформатированный путь импорта с raw-запросом при необходимости
   * @protected
   */
  protected getImportPath(uri: string): string {
    const isLocal = !uri.startsWith('@') && !uri.startsWith('./') && !uri.startsWith('/')
    const normalizedPath = isLocal ? `./${uri}` : uri
    const rawExtensions = ['.md', '.html', '.css', '.scss', '.txt', '.json', '.svg']

    if (rawExtensions.some(extension => normalizedPath.endsWith(extension))) {
      return `${normalizedPath}?raw`
    }

    return normalizedPath
  }

  /**
   * Generates a unique camelCase constant name for a package.
   *
   * Генерирует уникальное имя константы в camelCase для пакета.
   * @param packageName Target package name / Целевое имя пакета
   * @param existingNames Set of already used constant names / Набор уже использованных имен констант
   * @returns constant name string / строка имени константы
   * @protected
   */
  protected getPackageConstName(packageName: string, existingNames: Set<string>): string {
    const shortName = packageName.replace(/^@[^/]+\//, '')
    let candidate = `mcp${toCamelCaseFirst(shortName)}Resources`

    if (existingNames.has(candidate)) {
      const fullName = packageName.replace(/^@/, '').replace('/', '-')
      candidate = `mcp${toCamelCaseFirst(fullName)}Resources`
    }

    existingNames.add(candidate)
    return candidate
  }

  /**
   * Groups raw resource items by package name.
   *
   * Группирует сырые элементы ресурсов по имени пакета.
   * @param resources List of raw resource records / Список сырых записей ресурсов
   * @returns map of package names to resource items / карта имен пакетов к элементам ресурсов
   * @protected
   */
  protected getPackages(resources: Record<string, unknown>[]): Map<string, Record<string, unknown>[]> {
    const packagesMap = new Map<string, Record<string, unknown>[]>()

    resources.forEach((item) => {
      const uri = isString(item.uri) ? item.uri : ''
      const packageName = this.extractPackageName(uri)

      if (!packagesMap.has(packageName)) {
        packagesMap.set(packageName, [])
      }

      packagesMap.get(packageName)?.push(item)
    })

    return packagesMap
  }

  /**
   * Returns the resource descriptor for the main AI prompt file.
   *
   * Возвращает дескриптор ресурса для главного файла промпта ИИ.
   * @returns resource item descriptor / дескриптор элемента ресурса
   * @protected
   */
  protected getPromptResource(): Record<string, unknown> {
    return {
      uri: UI_FILE_AI_PROMPT_PROMPT,
      name: 'System Prompt (dxt-ui)',
      mimeType: 'text/markdown',
      description: 'Consolidated system instructions, coding guidelines, and prompt rules for AI coding assistant.'
    }
  }

  /**
   * Escapes a string for safe inclusion in a single-quoted TypeScript literal.
   *
   * Экранирует строку для безопасного включения в одинарные кавычки литерала TypeScript.
   * @param value Raw string value / Сырое строковое значение
   * @returns escaped single-quoted string / экранированная строка в одинарных кавычках
   * @protected
   */
  protected escapeString(value: string): string {
    return `'${value
      .replace(/\\/g, '\\\\')
      .replace(/'/g, '\\\'')
      .replace(/\r/g, '\\r')
      .replace(/\n/g, '\\n')}'`
  }

  /**
   * Extracts the package name from a resource URI.
   *
   * Извлекает имя пакета из URI ресурса.
   * @param uri Resource URI / URI ресурса
   * @returns extracted package name / извлеченное имя пакета
   * @protected
   */
  protected extractPackageName(uri: string): string {
    if (uri.startsWith('@')) {
      const parts = uri.split('/')
      if (parts.length >= 2) {
        return `${parts[0]}/${parts[1]}`
      }
    }

    const slashIndex = uri.indexOf('/')
    if (slashIndex > 0) {
      return uri.substring(0, slashIndex)
    }

    return 'system'
  }

  /**
   * Formats a single resource item into a clean TypeScript object literal string with dynamic import handler.
   *
   * Форматирует один элемент ресурса в чистую строку литерала объекта TypeScript с обработчиком динамического импорта.
   * @param item Raw resource item / Сырой элемент ресурса
   * @returns formatted TS object string / отформатированная строка TS объекта
   * @protected
   */
  protected formatItem(item: Record<string, unknown>): string {
    const fields: string[] = []

    if (isString(item.uri)) {
      fields.push(`    uri: ${this.escapeString(item.uri)}`)
    }

    if (isString(item.name)) {
      fields.push(`    name: ${this.escapeString(item.name)}`)
    }

    if (isString(item.description) && isFilled(item.description)) {
      fields.push(`    description: ${this.escapeString(item.description)}`)
    }

    if (isString(item.mimeType) && isFilled(item.mimeType)) {
      fields.push(`    mimeType: ${this.escapeString(item.mimeType)}`)
    }

    if (isString(item.text) && isFilled(item.text)) {
      fields.push(`    text: ${this.escapeString(item.text)}`)
    }

    if (isString(item.blob) && isFilled(item.blob)) {
      fields.push(`    blob: ${this.escapeString(item.blob)}`)
    }

    if (isString(item.uri) && isFilled(item.uri) && !item.text && !item.blob) {
      const importPath = this.getImportPath(item.uri)
      fields.push(`    handler: async () => (await import('${importPath}'))?.default`)
    }

    return `  {\n${fields.join(',\n')}\n  }`
  }

  /**
   * Builds the entire TypeScript file code for MCP resources grouped by package.
   *
   * Создает полный код TypeScript файла для ресурсов MCP, сгруппированных по пакетам.
   * @param resources List of all raw resource items / Список всех сырых элементов ресурсов
   * @returns complete TypeScript code string / полная строка TypeScript кода
   * @protected
   */
  protected initFile(resources: Record<string, unknown>[]): string {
    const packagesMap = this.getPackages(resources)
    const usedConstNames = new Set<string>()
    const packageConstMap = new Map<string, string>()

    const sections: string[] = [
      '// This file is generated by a script, do not edit.',
      '',
      'import type { McpResourceItem } from \'@dxtmisha/mcp\''
    ]

    const packageEntries: string[] = []
    const allConstNames: string[] = []

    packagesMap.forEach((items, packageName) => {
      const constName = this.getPackageConstName(packageName, usedConstNames)
      packageConstMap.set(packageName, constName)
      allConstNames.push(constName)

      const formattedItems = items.map(item => this.formatItem(item)).join(',\n')

      sections.push('')
      sections.push('/**')
      sections.push(` * MCP resources for ${packageName}.`)
      sections.push(' */')
      sections.push(`export const ${constName}: McpResourceItem[] = [`)
      sections.push(formattedItems)
      sections.push(']')

      packageEntries.push(`  '${packageName}': ${constName}`)
    })

    sections.push('')
    sections.push('/**')
    sections.push(' * MCP resources grouped by package name.')
    sections.push(' */')
    sections.push('export const mcpPackageResources: Record<string, McpResourceItem[]> = {')
    sections.push(packageEntries.join(',\n'))
    sections.push('}')

    sections.push('')
    sections.push('/**')
    sections.push(' * All aggregated MCP resources for McpResource.')
    sections.push(' */')
    sections.push('export const mcpAllResources: McpResourceItem[] = [')
    sections.push(allConstNames.map(name => `  ...${name}`).join(',\n'))
    sections.push(']')
    sections.push('')
    sections.push('export default mcpAllResources')
    sections.push('')

    return sections.join('\n')
  }

  /**
   * Writes the generated content to the target file.
   *
   * Записывает сгенерированное содержимое в целевой файл.
   * @param content Generated TypeScript code / Сгенерированный TypeScript код
   * @returns current instance / текущий экземпляр
   * @protected
   */
  protected write(content: string): this {
    PropertiesFile.writeByPath(
      this.fileTs,
      content,
      false
    )

    return this
  }
}
