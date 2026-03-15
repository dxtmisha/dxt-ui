import { toCamelCaseFirst, toKebabCase } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { LibraryItems } from './LibraryItems'

import { UI_FILE_NAME_PLUGIN } from '../../config'

/**
 * Class for creating a plugin file for the design system.
 *
 * Класс для создания файла плагина для дизайн-системы.
 */
export class LibraryPlugin {
  /**
   * Constructor for LibraryPlugin.
   *
   * Конструктор для LibraryPlugin.
   * @param items object for working with the list of components / объект для работы со списком компонентов
   */
  constructor(
    protected readonly items: LibraryItems
  ) {
  }

  /**
   * Creates a plugin file that initializes the Vite plugin for the library.
   *
   * Создает файл плагина, который инициализирует плагин Vite для библиотеки.
   * @returns this
   */
  make(): this {
    const design = PropertiesConfig.getDesignName()

    this.items.write(
      UI_FILE_NAME_PLUGIN,
      [
        'import type { Plugin as VitePlugin } from \'vite\'',
        'import { type PluginOptions, Plugin } from \'@dxtmisha/constructor/plugin\'',
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
        '  options: PluginOptions = {}',
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
