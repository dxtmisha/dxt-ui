// export:none

import { toCamelCaseFirst } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import {
  UI_DIRS_WIKI,
  UI_FILE_NAME_WIKI
} from '../../config'

/**
 * Utility for managing and generating the central wiki configuration for the design system.
 * It ensures that the primary registry for storybook arguments and component descriptions is correctly initialized and synchronized with the project's design configuration.
 *
 * Утилита для управления и генерации центральной конфигурации вики для дизайн-системы.
 * Гарантирует, что основной реестр аргументов Storybook и описаний компонентов правильно инициализирован и синхронизирован с конфигурацией дизайна проекта.
 */
export class DesignWiki {
  /**
   * Executes the initialization of the file with component descriptions for the wiki.
   *
   * Выполняет инициализацию файла с описанием компонентов для wiki.
   */
  make(): void {
    this.initWikiFile()
  }

  /**
   * Creates a file with component descriptions for the wiki.
   *
   * Создает файл с описанием компонентов для wiki.
   */
  protected initWikiFile(): void {
    if (!PropertiesFile.is([...UI_DIRS_WIKI, `${UI_FILE_NAME_WIKI}.ts`])) {
      const designName = PropertiesConfig.getDesignName()

      PropertiesFile.write(
        UI_DIRS_WIKI,
        UI_FILE_NAME_WIKI,
        [
          'import type { StorybookArgsToList } from \'@dxtmisha/wiki\'',
          '',
          `export const wiki${toCamelCaseFirst(designName)}: StorybookArgsToList = {}`,
          ''
        ].join('\r\n'),
        'ts'
      )
    }
  }
}
