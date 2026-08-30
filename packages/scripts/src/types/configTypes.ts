/**
 * AI provider type for code and content generation.
 *
 * Тип ИИ-провайдера для генерации кода и контента.
 */
export type AiType
  = | 'claude'
    | 'claude-cli'
    | 'claude-agent'
    | 'gemini'
    | 'gemini-cli'
    | 'openai'
    | 'zai'

/**
 * Configuration structure for the design system UI project (`d-ui.json`).
 *
 * Структура конфигурации для проекта дизайн-системы UI (`d-ui.json`).
 */
export type DesignUiConfig = {
  // Project / Основные параметры проекта

  /** Extends another configuration file / Расширяет другой файл конфигурации */
  extends?: string

  /** Project name / Название проекта */
  project?: string

  /** Design system name / Название дизайн-системы */
  name?: string

  /** Alternative design system names / Альтернативные названия дизайн-системы */
  alternativeName?: string[]

  /** Package prefix for generating package names / Префикс пакета для генерации названий пакетов */
  packagePrefix?: string

  // Types & Compilation / Типизация и компиляция

  /**
   * Directory path for temporary TypeScript type definitions compilation /
   * Путь к временной директории для компиляции определений типов TypeScript
   */
  typesDir?: string

  /**
   * Specific directory paths to scan for types; if specified, only these directories will be scanned /
   * Определенные пути к директориям для сканирования типов; если указано, сканируются только эти папки
   */
  typesPaths?: string[]

  /**
   * Pattern or regular expression to match paths for inclusion during type scanning; if matched, path is scanned, otherwise ignored /
   * Шаблон или регулярное выражение для проверки соответствия пути на включение при сканировании типов; если путь соответствует, он сканируется, иначе игнорируется
   */
  typesMatch?: string | string[]

  /**
   * Pattern or regular expression to match paths for exclusion during type scanning; if matched, path is ignored /
   * Шаблон или регулярное выражение для исключения путей при сканировании типов; если путь соответствует, он игнорируется
   */
  typesExclude?: string | string[]

  /**
   * Flag indicating that Vue Single File Components (.vue) should not be processed during type scanning; if true, Vue compilation is skipped /
   * Флаг, указывающий, что файлы компонентов Vue (.vue) не должны обрабатываться при сканировании типов; если true, компиляция Vue пропускается
   */
  typesWithoutVue?: boolean

  /**
   * Distribution output directory path containing compiled JavaScript files /
   * Путь к директории сборки, содержащей скомпилированные файлы JavaScript
   */
  distDir?: string

  // Separators & Tokens / Разделители и токены

  /**
   * Abbreviation symbol; this key will be used to separate into sub-branches /
   * Символ сокращения, такой ключ будет разделять на под-ветки
   */
  separator?: string

  /**
   * Name that will be removed when splitting into branches /
   * Название, которое будет удаляться при разделении на ветки
   */
  separatorBasicName?: string

  /**
   * Limit of key splitting into sub-branches /
   * Лимит разделения ключа на под-ветки
   */
  separatorLimit?: number

  // Wiki & Documentation / Вики и документация

  /** Target language code for wiki generation / Код целевого языка для генерации wiki */
  wikiLanguage?: string

  /**
   * Directory path containing AI resource and prompt files /
   * Путь к директории, содержащей файлы ресурсов и промптов ИИ
   */
  aiResourcesDir?: string

  /**
   * Maximum directory scan depth for collecting AI prompt packages; deeper nesting is skipped /
   * Максимальная глубина сканирования директорий для сбора пакетов промпта ИИ; более глубокая вложенность пропускается
   */
  promptScanDepth?: number

  // AI Configuration / Конфигурация ИИ

  /** AI provider type for generating content / Тип ИИ-провайдера для генерации контента */
  aiType?: AiType

  /** AI model name for generating content / Название модели ИИ для генерации контента */
  aiModel?: string

  /** Google AI / Gemini API key / Ключ Google AI / Gemini API */
  aiKey?: string

  /** Additional AI provider configuration parameters / Дополнительные параметры конфигурации ИИ-провайдера */
  aiConfig?: Record<string, any>

  /**
   * Maximum number of type definition files processed by AI concurrently /
   * Максимальное количество файлов определений типов, обрабатываемых ИИ одновременно
   */
  aiTypesConcurrency?: number

  // Figma / Интеграция с Figma

  /** Figma personal access token for REST API authentication / Персональный токен доступа Figma для аутентификации REST API */
  figmaToken?: string
}
