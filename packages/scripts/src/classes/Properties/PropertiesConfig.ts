// export:none

import { toPathStandardSep } from '../../functions/toPathStandardSep'

import { PropertiesFile } from './PropertiesFile'

import type { AiType, DesignUiConfig } from '../../types/configTypes'

import {
  UI_CONFIG_FILE
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

  /**
   * Retrieves the global project identifier.
   *
   * Получает глобальный идентификатор проекта.
   * @returns project name string / строка имени проекта
   */
  static getProjectName(): string {
    return this.config.project ?? 'ui'
  }

  /**
   * Retrieves the primary design system name.
   *
   * Получает основное название дизайн-системы.
   * @returns design system name string / строка названия дизайн-системы
   */
  static getDesignName(): string {
    return this.config.name ?? 'ui'
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
   * Returns the token path separator character.
   *
   * Возвращает символ-разделитель пути токена.
   * @returns separator character string / строка символа-разделителя
   */
  static getSeparator(): string {
    return this.config.separator ?? '/'
  }

  /**
   * Returns the identifier for the base level separator.
   *
   * Возвращает идентификатор для базового разделителя.
   * @returns basic separator name string / строка базового имени разделителя
   */
  static getSeparatorBasicName(): string {
    return this.config.separatorBasicName ?? 'basic'
  }

  /**
   * Returns the maximum depth for token path segments.
   *
   * Возвращает максимальную глубину сегментов пути токена.
   * @returns separator depth limit number / число лимита глубины разделителя
   */
  static getSeparatorLimit(): number {
    return this.config.separatorLimit ?? 6
  }

  /**
   * Returns the primary language for documentation generation.
   *
   * Возвращает основной язык для генерации документации.
   * @returns wiki language code / код языка вики
   */
  static getWikiLanguage(): string {
    return this.config.wikiLanguage ?? 'en'
  }

  /**
   * Returns the prefix for generated npm packages.
   *
   * Возвращает префикс для генерируемых npm-пакетов.
   * @returns package prefix or undefined / префикс пакета или undefined
   */
  static getPackagePrefix(): string | undefined {
    return this.config.packagePrefix ?? undefined
  }

  /**
   * Returns the configured AI provider type.
   *
   * Возвращает настроенный тип ИИ-провайдера.
   * @returns AI provider type / тип ИИ-провайдера
   */
  static getAiType(): AiType {
    return this.config.aiType ?? 'gemini'
  }

  /**
   * Returns the specific AI model identifier.
   *
   * Возвращает конкретный идентификатор модели ИИ.
   * @returns AI model name string / строка названия модели ИИ
   */
  static getAiModel(): string {
    return this.config.aiModel ?? ''
  }

  /**
   * Returns the secure API key for AI authentication.
   *
   * Возвращает безопасный API-ключ для аутентификации ИИ.
   * @returns AI API key string / строка API-ключа ИИ
   */
  static getAiKey(): string {
    return this.config.aiKey ?? ''
  }

  /**
   * Returns the Figma access token.
   *
   * Возвращает токен доступа к Figma.
   * @returns Figma token string / строка токена Figma
   */
  static getFigmaToken(): string {
    return this.config.figmaToken ?? ''
  }

  /**
   * Returns the AI configuration object.
   *
   * Возвращает объект конфигурации ИИ.
   * @returns AI configuration object / объект конфигурации ИИ
   */
  static getAiConfig(): Record<string, any> {
    return this.config.aiConfig ?? {}
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
