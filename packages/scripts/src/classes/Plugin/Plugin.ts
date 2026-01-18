import type { TransformResult } from 'rollup'
import type { Plugin as VitePlugin } from 'vite'

import { PluginTool } from './PluginTool'
import { PluginData } from './PluginData'
import { PluginImport } from './PluginImport'
import { PluginComponents } from './PluginComponents'
import { PluginStyle } from './PluginStyle'

import type { DesignPluginOptions } from '../../types/designTypes'
import type { LibraryComponentImports } from '../../types/libraryTypes'

/**
 * Base class for the Vite plugin.
 *
 * Базовый класс для плагина Vite.
 */
export class Plugin {
  protected readonly data: PluginData

  protected first: boolean = true
  protected mode: string = 'production'

  /**
   * Constructor
   * @param design design name / название дизайна
   * @param packageName package name / название пакета
   * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
   * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
   * @param componentsList list of components / список компонентов
   * @param name plugin name / название плагина
   * @param options plugin options / настройки плагина
   */
  constructor(
    protected readonly design: string,
    protected readonly packageName: string,
    protected readonly componentsReg: RegExp,
    protected readonly styleVarsReg: RegExp,
    protected readonly componentsList: LibraryComponentImports,
    protected readonly name: string = 'vite-plugin-design-ui',
    protected readonly options: DesignPluginOptions = {}
  ) {
    this.data = new PluginData(
      design,
      packageName,
      componentsReg,
      styleVarsReg,
      componentsList
    )
  }

  /**
   * Initializes the plugin.
   *
   * Инициализирует плагин.
   */
  init(): VitePlugin {
    return {
      name: this.name,
      enforce: 'pre',
      apply: (_, env): boolean => {
        this.mode = env.mode
        return true
      },
      transform: (code: string, id: string): TransformResult => {
        return this.transform(code, id)
      },
      ...this.options?.viteOptions
    }
  }

  /**
   * Checks if components should be processed.
   *
   * Проверяет, нужно ли обрабатывать компоненты.
   */
  protected isComponents(): boolean {
    return Boolean(this.options?.component ?? true)
  }

  /**
   * Checks if styles should be processed.
   *
   * Проверяет, нужно ли обрабатывать стили.
   */
  protected isStyles(): boolean {
    return Boolean(this.options?.style ?? true)
  }

  /**
   * Transforms the code.
   *
   * Преобразовывает код.
   * @param code file content / содержимое файла
   * @param id file identification / идентификация файла
   */
  protected transform(code: string, id: string): TransformResult {
    if (
      this.first
      && PluginTool.isJs(id)
    ) {
      code = this.initMain(code)
      this.first = false
    }

    code = this.initComponents(id, code)
    code = this.initStyles(id, code)

    return {
      code
    }
  }

  /**
   * Initializes the main file.
   *
   * Инициализирует главный файл.
   * @param code file content / содержимое файла
   */
  protected initMain(code: string): string {
    const imports = new PluginImport(this.packageName, code)

    imports.importStyle()

    return imports.get()
  }

  /**
   * Initializes components.
   *
   * Инициализирует компоненты.
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   */
  protected initComponents(
    id: string,
    code: string
  ): string {
    if (this.isComponents()) {
      return new PluginComponents(id, code, this.data).init()
    }

    return code
  }

  /**
   * Initializes styles.
   *
   * Инициализирует стили.
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   */
  protected initStyles(
    id: string,
    code: string
  ): string {
    if (this.isStyles()) {
      return new PluginStyle(id, code, this.data).init()
    }

    return code
  }
}
