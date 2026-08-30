// export:none

import { toPathStandardSep } from '../../functions/toPathStandardSep'

import { PropertiesFile } from './PropertiesFile'

import type { AiType, DesignUiConfig } from '../../types/configTypes'

import {
  UI_CONFIG_FILE,
  UI_DIR_AI_TYPES_TEMPORARY,
  UI_DIR_DIST
} from '../../config'

/**
 * Static configuration orchestrator for the design system.
 * Responsible for locating, loading, and merging the `design-ui.json` configuration file, handling recursive extensions, and providing a centralized interface for accessing project-wide settings including naming, separators, and AI integration parameters.
 *
 * Статический оркестратор конфигурации для дизайн-системы.
 * Отвечает за поиск, загрузку и слияние файла конфигурации `design-ui.json`, обработку рекурсивных расширений и предоставление централизованного интерфейса для доступа к общепроектным настройкам, включая именование, разделители и параметры интеграции ИИ.
 */
export class PropertiesConfig {
  /** Loaded design-ui.json configuration object / Загруженный объект конфигурации design-ui.json */
  protected static config: DesignUiConfig

  // Project / Основные параметры проекта

  /**
   * Retrieves the global project identifier.
   *
   * Получает глобальный идентификатор проекта.
   * @returns project name string / строка имени проекта
   */
  static getProjectName(): string {
    return this.config?.project ?? 'ui'
  }

  /**
   * Retrieves the primary design system name.
   *
   * Получает основное название дизайн-системы.
   * @returns design system name string / строка названия дизайн-системы
   */
  static getDesignName(): string {
    return this.config?.name ?? 'ui'
  }

  /**
   * Returns alternative design system aliases.
   *
   * Возвращает альтернативные алиасы дизайн-системы.
   * @returns array of alternative design names or undefined / массив альтернативных названий дизайна или undefined
   */
  static getDesignAlternativeName(): string[] | undefined {
    return this.config?.alternativeName
  }

  /**
   * Returns the prefix for generated npm packages.
   *
   * Возвращает префикс для генерируемых npm-пакетов.
   * @returns package prefix or undefined / префикс пакета или undefined
   */
  static getPackagePrefix(): string | undefined {
    return this.config?.packagePrefix ?? undefined
  }

  // Types & Compilation / Типизация и компиляция

  /**
   * Returns the directory path for temporary type compilation.
   *
   * Возвращает путь к временной директории компиляции типов.
   * @returns temporary compilation directory path string / строка пути к временной директории компиляции
   */
  static getTypesTemporaryDirectory(): string {
    return this.config?.typesDir ?? UI_DIR_AI_TYPES_TEMPORARY
  }

  /**
   * Returns specific directory paths to scan for types.
   *
   * Возвращает определенные пути к директориям для сканирования типов.
   * @returns array of directory paths or undefined / массив путей к директориям или undefined
   */
  static getTypesPaths(): string[] | undefined {
    return this.config?.typesPaths
  }

  /**
   * Returns inclusion match pattern or patterns for types scanning.
   *
   * Возвращает шаблон или шаблоны соответствия на включение для сканирования типов.
   * @returns match pattern string, array of patterns, or undefined / строка шаблона соответствия, массив шаблонов или undefined
   */
  static getTypesMatch(): string | string[] | undefined {
    return this.config?.typesMatch
  }

  /**
   * Returns exclusion match pattern or patterns for types scanning.
   *
   * Возвращает шаблон или шаблоны исключения для сканирования типов.
   * @returns exclusion pattern string, array of patterns, or undefined / строка шаблона исключения, массив шаблонов или undefined
   */
  static getTypesExclude(): string | string[] | undefined {
    return this.config?.typesExclude
  }

  /**
   * Returns whether Vue components should be excluded from types scanning.
   *
   * Возвращает, следует ли исключать компоненты Vue при сканировании типов.
   * @returns true if Vue processing is disabled, false if enabled, or undefined / true, если обработка Vue отключена, false если включена, или undefined
   */
  static getTypesWithoutVue(): boolean | undefined {
    return this.config?.typesWithoutVue
  }

  /**
   * Checks whether Vue components should be excluded from types scanning.
   *
   * Проверяет, следует ли исключать компоненты Vue при сканировании типов.
   * @returns true if Vue processing should be skipped / true, если обработку Vue следует пропустить
   */
  static isTypesWithoutVue(): boolean {
    return Boolean(this.config?.typesWithoutVue)
  }

  /**
   * Returns the directory path for compiled distribution files.
   *
   * Возвращает путь к директории собранных файлов.
   * @returns distribution directory path string / строка пути к директории сборки
   */
  static getDistDir(): string {
    return this.config?.distDir ?? UI_DIR_DIST
  }

  // Separators & Tokens / Разделители и токены

  /**
   * Returns the token path separator character.
   *
   * Возвращает символ-разделитель пути токена.
   * @returns separator character string / строка символа-разделителя
   */
  static getSeparator(): string {
    return this.config?.separator ?? '/'
  }

  /**
   * Returns the identifier for the base level separator.
   *
   * Возвращает идентификатор для базового разделителя.
   * @returns basic separator name string / строка базового имени разделителя
   */
  static getSeparatorBasicName(): string {
    return this.config?.separatorBasicName ?? 'basic'
  }

  /**
   * Returns the maximum depth for token path segments.
   *
   * Возвращает максимальную глубину сегментов пути токена.
   * @returns separator depth limit number / число лимита глубины разделителя
   */
  static getSeparatorLimit(): number {
    return this.config?.separatorLimit ?? 6
  }

  // Wiki & Documentation / Вики и документация

  /**
   * Returns the primary language for documentation generation.
   *
   * Возвращает основной язык для генерации документации.
   * @returns wiki language code / код языка вики
   */
  static getWikiLanguage(): string {
    return this.config?.wikiLanguage ?? 'en'
  }

  /**
   * Returns the directory path containing AI resources and prompts.
   *
   * Возвращает путь к директории ресурсов и промптов ИИ.
   * @returns AI resources directory path string / строка пути к директории ресурсов ИИ
   */
  static getAiResourcesDir(): string {
    return this.config?.aiResourcesDir ?? 'ai-resources'
  }

  /**
   * Returns the maximum directory scan depth for collecting AI prompt packages.
   *
   * Возвращает максимальную глубину сканирования директорий для сбора пакетов промпта ИИ.
   * @returns scan depth limit number / число лимита глубины сканирования
   */
  static getPromptScanDepth(): number {
    return this.config?.promptScanDepth ?? 6
  }

  // AI Configuration / Конфигурация ИИ

  /**
   * Returns the configured AI provider type.
   *
   * Возвращает настроенный тип ИИ-провайдера.
   * @returns AI provider type / тип ИИ-провайдера
   */
  static getAiType(): AiType {
    return this.config?.aiType ?? 'gemini'
  }

  /**
   * Returns the specific AI model identifier.
   *
   * Возвращает конкретный идентификатор модели ИИ.
   * @returns AI model name string / строка названия модели ИИ
   */
  static getAiModel(): string {
    return this.config?.aiModel ?? ''
  }

  /**
   * Returns the secure API key for AI authentication.
   *
   * Возвращает безопасный API-ключ для аутентификации ИИ.
   * @returns AI API key string / строка API-ключа ИИ
   */
  static getAiKey(): string {
    return this.config?.aiKey ?? ''
  }

  /**
   * Returns the AI configuration object.
   *
   * Возвращает объект конфигурации ИИ.
   * @returns AI configuration object / объект конфигурации ИИ
   */
  static getAiConfig(): Record<string, any> {
    return this.config?.aiConfig ?? {}
  }

  // Figma / Интеграция с Figma

  /**
   * Returns the Figma access token.
   *
   * Возвращает токен доступа к Figma.
   * @returns Figma token string / строка токена Figma
   */
  static getFigmaToken(): string {
    return this.config?.figmaToken ?? ''
  }

  /**
   * Recursively retrieves and merges extended configuration files.
   *
   * Рекурсивно получает и объединяет расширенные файлы конфигурации.
   * @param file path to the configuration file / путь к файлу конфигурации
   * @param dir array of directory paths / массив путей директорий
   * @returns merged design UI config / объединенная конфигурация design UI
   */
  protected static getExtends(
    file: string,
    dir: string[] = []
  ): DesignUiConfig {
    const path = [...dir, toPathStandardSep(file)]
    const pathLocal = this.getLocalPath(path)
    const read = PropertiesFile.readFile<DesignUiConfig>(path)
    const readLocal = PropertiesFile.readFile<DesignUiConfig>(pathLocal)

    const extendsFile = readLocal?.extends ?? read?.extends

    if (extendsFile) {
      return {
        ...this.getExtends(
          extendsFile,
          [PropertiesFile.getPathDir(path)]
        ),
        ...read,
        ...readLocal
      }
    }

    return {
      ...read,
      ...readLocal
    }
  }

  /**
   * Generates the local configuration file path by appending the `.local` suffix.
   *
   * Генерирует путь к локальному файлу конфигурации, добавляя суффикс `.local`.
   * @param path path or array of path segments / путь или массив сегментов пути
   * @returns local configuration file path / путь к локальному файлу конфигурации
   */
  protected static getLocalPath(path: string): string
  protected static getLocalPath(path: string[]): string[]
  protected static getLocalPath(path: string | string[]): string | string[] {
    if (Array.isArray(path)) {
      if (path.length === 0) {
        return []
      }

      const lastIndex = path.length - 1
      const copy = [...path]
      copy[lastIndex] = this.getLocalPath(copy[lastIndex]) as string

      return copy
    }

    if (path.match(/(\.[^./\\]+)$/)) {
      return path.replace(/(\.[^./\\]+)$/, '.local$1')
    }

    return `${path}.local`
  }

  /**
   * Discovers and loads the configuration for the design system.
   *
   * Находит и загружает конфигурацию для дизайн-системы.
   * @returns loaded design UI config / загруженная конфигурация design UI
   * @protected
   */
  protected static loadConfig(): DesignUiConfig {
    const searchPath: string[] = []

    for (let index = 0; index < 32; index++) {
      const currentPaths = [...searchPath, UI_CONFIG_FILE]
      const currentPathsLocal = this.getLocalPath(currentPaths)

      if (PropertiesFile.is(currentPaths) || PropertiesFile.is(currentPathsLocal)) {
        const file = PropertiesFile.readFile<DesignUiConfig>(currentPaths)
        const fileLocal = PropertiesFile.readFile<DesignUiConfig>(currentPathsLocal)

        if (file || fileLocal) {
          const extendsFile = fileLocal?.extends ?? file?.extends

          if (extendsFile) {
            return {
              ...this.getExtends(extendsFile, [PropertiesFile.getPathDir(currentPaths)]),
              ...file,
              ...fileLocal
            }
          }

          return {
            ...file,
            ...fileLocal
          }
        }
      }

      searchPath.push('..')
    }

    return {} as DesignUiConfig
  }

  static {
    this.config = this.loadConfig()
  }
}
