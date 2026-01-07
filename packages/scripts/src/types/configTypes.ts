/** AI type for content generation / Тип ИИ для генерации контента */
export type AiType = 'gemini' | 'gemini-cli'

/** Configuration structure for the design system UI project / Структура конфигурации для проекта дизайн-системы UI */
export type DesignUiConfig = {
  /** Extends another configuration file / Расширяет другой файл конфигурации */
  extends?: string

  /** Project name / Название проекта */
  project: string

  /** Design system name / Название дизайн-системы */
  name: string

  /**
   * Abbreviation symbol, this key will be used to separate into sub-branches /
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

  /** Wiki language / Язык wiki */
  wikiLanguage?: string

  /** AI type for generating content / Тип ИИ для генерации контента */
  aiType?: 'gemini'

  /** AI model for generating content / Модель ИИ для генерации контента */
  aiModel?: string

  /** Google AI key for accessing Google services / Ключ Google AI для доступа к сервисам Google */
  aiKey?: string

  /** Directories for AI documentation generation / Каталоги для генерации AI документации */
  aiDocDirectory?: string[]

  /** Paths to Storybook for AI documentation generation / Пути к Storybook для генерации AI документации */
  aiDocStorybookPath?: string
}
