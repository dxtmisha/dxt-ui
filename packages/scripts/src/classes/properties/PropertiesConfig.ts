import { PropertiesFile } from './PropertiesFile'

import type { DesignUiConfig } from '../../types/configTypes'

import {
  DESIGN_UI_FILE_CONFIG_NAME
} from '../../config.ts'

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

  static {
    const file = PropertiesFile.readFile<DesignUiConfig>(DESIGN_UI_FILE_CONFIG_NAME)

    if (file) {
      this.config = file
    } else {
      this.config = {} as DesignUiConfig
    }
  }
}
