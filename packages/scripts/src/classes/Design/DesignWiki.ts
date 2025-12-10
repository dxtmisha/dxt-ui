// export:none

import { toCamelCaseFirst } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'

import {
  UI_DIRS_WIKI,
  UI_FILE_NAME_WIKI
} from '../../config'

/**
 * The DesignWiki class is responsible for managing and generating files
 * that contain descriptions of components for the wiki. It ensures that
 * the necessary files are created and initialized properly.
 *
 * Класс DesignWiki отвечает за управление и генерацию файлов,
 * содержащих описания компонентов для wiki. Он гарантирует, что
 * необходимые файлы создаются и инициализируются должным образом.
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
