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
  /** Extends another configuration file / Расширяет другой файл конфигурации */
  extends?: string

  /** Project name / Название проекта */
  project: string

  /** Design system name / Название дизайн-системы */
  name: string

  /** Alternative design system names / Альтернативные названия дизайн-системы */
  alternativeName?: string[]

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

  /** Target language code for wiki generation / Код целевого языка для генерации wiki */
  wikiLanguage?: string

  /** Package prefix for generating package names / Префикс пакета для генерации названий пакетов */
  packagePrefix?: string

  /** AI provider type for generating content / Тип ИИ-провайдера для генерации контента */
  aiType?: AiType

  /** AI model name for generating content / Название модели ИИ для генерации контента */
  aiModel?: string

  /** Google AI / Gemini API key / Ключ Google AI / Gemini API */
  aiKey?: string

  /** Additional AI provider configuration parameters / Дополнительные параметры конфигурации ИИ-провайдера */
  aiConfig?: Record<string, any>

  /** Figma personal access token for REST API authentication / Персональный токен доступа Figma для аутентификации REST API */
  figmaToken?: string
}
