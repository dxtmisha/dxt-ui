// export:none

import { toPathStandardSep } from '../../functions/toPathStandardSep'

import { PropertiesFile } from './PropertiesFile'

import type { AiType, DesignUiConfig } from '../../types/configTypes'

import {
  UI_AI_DOC_DIRECTORY,
  UI_AI_DOC_STORYBOOK,
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
   * Returns alternative design names.
   *
   * Возвращает альтернативные названия дизайна.
   */
  static getDesignAlternativeName(): string[] | undefined {
    return this.config?.alternativeName
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
   * Returns the package prefix.
   *
   * Возвращает префикс пакета.
   */
  static getPackagePrefix(): string | undefined {
    return this.config.packagePrefix ?? undefined
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

  /**
   * Returns the directories for AI documentation generation.
   *
   * Возвращает каталоги для генерации AI документации.
   */
  static getAiDocDirectory(): string[] {
    return this.config.aiDocDirectory ?? UI_AI_DOC_DIRECTORY
  }

  /**
   * Returns the Storybook path for AI documentation generation.
   *
   * Возвращает путь Storybook для генерации AI документации.
   */
  static getAiDocStorybookPath(): string {
    return this.config.aiDocStorybookPath ?? UI_AI_DOC_STORYBOOK
  }

  /**
   * Recursively retrieves and merges extended configuration files.
   *
   * Рекурсивно получает и объединяет расширенные файлы конфигурации.
   * @param file path to the configuration file/ путь к файлу конфигурации
   * @param dir array of directory paths/ массив путей директорий
   */
  protected static getExtends(
    file: string,
    dir: string[] = []
  ): DesignUiConfig {
    const path = [...dir, toPathStandardSep(file)]
    const read = PropertiesFile.readFile<DesignUiConfig>(path)

    if (read?.extends) {
      return {
        ...this.getExtends(
          read.extends,
          [PropertiesFile.getPathDir(path)]
        ),
        ...read
      }
    }

    return read ?? ({} as DesignUiConfig)
  }

  static {
    const paths: string[] = [UI_CONFIG_FILE]
    this.config = {} as DesignUiConfig

    for (let i = 0; i < 32; i++) {
      if (PropertiesFile.is(paths)) {
        let file = PropertiesFile.readFile<DesignUiConfig>(paths)

        if (file) {
          if (
            file?.extends
          ) {
            file = {
              ...this.getExtends(file.extends, [PropertiesFile.getPathDir(paths)]),
              ...file
            }
          }

          this.config = file
          break
        }
      }

      paths.unshift('..')
    }
  }
}
