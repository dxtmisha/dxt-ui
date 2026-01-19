import { toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { LibraryItems } from './LibraryItems'

import { UI_FILE_NAME_PLUGIN } from '../../config'

/**
 * Class for creating a plugin file.
 *
 * Класс для создания файла плагина.
 */
export class LibraryPlugin {
  /**
   * Constructor
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Creates a plugin file.
   *
   * Создает файл плагина.
   */
  make(): this {
    const design = PropertiesConfig.getDesignName()

    this.items.write(
      UI_FILE_NAME_PLUGIN,
      [
        'import type { Plugin as VitePlugin } from \'vite\'',
        'import { type DesignPluginOptions, Plugin } from \'@dxtmisha/scripts/plugin\'',
        '',
        'import {',
        '  componentsList,',
        '  componentsReg,',
        '  designName,',
        '  packageName,',
        '  styleVarsReg',
        '} from \'./design\'',
        '',
        '/**',
        ' * Initializes the Vite plugin for the design system.',
        ' *',
        ' * Инициализирует плагин Vite для дизайн-системы.',
        ' * @param options plugin options / настройки плагина',
        ' */',
        `export function ui${toCamelCaseFirst(design)}VitePlugin(`,
        '  options: DesignPluginOptions = {}',
        '): VitePlugin {',
        '  return new Plugin(',
        '    designName,',
        '    packageName,',
        '    componentsReg,',
        '    styleVarsReg,',
        '    componentsList,',
        `    'vite-plugin-${toKebabCase(design)}-ui',`,
        '    options',
        '  )',
        '    .init()',
        '}'
      ]
    )

    return this
  }
}
