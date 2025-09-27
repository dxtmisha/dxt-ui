import { PropertiesFile } from './PropertiesFile'

import type { AiType, DesignUiConfig } from '../../types/configTypes'

import {
  UI_CONFIG_FILE
} from '../../config'

/**
 * Class for retrieving configuration data.
 *
 * Класс для получения данных конфигурации.
 */
export class PropertiesConfig {
  protected static config: DesignUiConfig

  /**
   * Returns the project name.
   *
   * Возвращает название проекта.
   */
  static getProjectName(): string {
    return this.config.project ?? 'ui'
  }

  /**
   * Returns the project name.
   *
   * Возвращает название проекта.
   */
  static getDesignName(): string {
    return this.config.name ?? 'ui'
  }

  /**
   * Returns the separator symbol.
   *
   * Возвращает символ разделителя.
   */
  static getSeparator(): string {
    return this.config.separator ?? '/'
  }

  /**
   * Returns the base name of the separator.
   *
   * Возвращает базовое название разделителя.
   */
  static getSeparatorBasicName(): string {
    return this.config.separatorBasicName ?? 'basic'
  }

  /**
   * Returns the limit of separator characters in a single key.
   *
   * Возвращает лимит символов-разделителей в одном ключе.
   */
  static getSeparatorLimit(): number {
    return this.config.separatorLimit ?? 6
  }

  /**
   * Returns the wiki language.
   *
   * Возвращает язык wiki.
   */
  static getWikiLanguage(): string {
    return this.config.wikiLanguage ?? 'en'
  }

  /**
   * Returns the AI type.
   *
   * Возвращает тип ИИ.
   */
  static getAiType(): AiType {
    return this.config.aiType ?? 'gemini'
  }

  /**
   * Returns the AI model.
   *
   * Возвращает модель ИИ.
   */
  static getAiModel(): string {
    return this.config.aiModel ?? ''
  }

  /**
   * Returns the AI API key.
   *
   * Возвращает API ключ ИИ.
   */
  static getAiKey(): string {
    return this.config.aiKey ?? ''
  }

  static {
    const file = PropertiesFile.readFile<DesignUiConfig>(UI_CONFIG_FILE)

    if (file) {
      this.config = file
    } else {
      this.config = {} as DesignUiConfig
    }
  }
}
