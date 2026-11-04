import type { SourceMap } from 'magic-string'
import type { Plugin as VitePlugin, Rolldown } from 'vite'

import { PluginCode } from './PluginCode'
import { PluginComponents } from './PluginComponents'
import { PluginData } from './PluginData'
import { PluginImport } from './PluginImport'
import { PluginMap } from './PluginMap'
import { PluginStyle } from './PluginStyle'
import { PluginTool } from './PluginTool'

import type { PluginComponentImports, PluginOptions } from '../../types/pluginTypes'

/**
 * Base class for the Vite plugin that automates component imports, style token injection, and source maps.
 *
 * Базовый класс для плагина Vite, автоматизирующий импорт компонентов, внедрение стилевых токенов и генерацию карт исходного кода.
 */
export class Plugin {
  /** Plugin metadata instance / Экземпляр метаданных плагина */
  protected readonly data: PluginData

  /** Flag indicating the first processed JS/TS entry file / Флаг, указывающий на первый обрабатываемый входной JS/TS файл */
  protected first: boolean = true
  /** Current Vite build mode / Текущий режим сборки Vite */
  protected mode: string = 'production'
  /** Whether source maps are enabled / Включена ли генерация карт исходного кода */
  protected sourcemap: boolean = true

  /**
   * Constructor.
   *
   * Конструктор.
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
    protected readonly componentsList: PluginComponentImports,
    protected readonly name: string = 'vite-plugin-design-ui',
    protected readonly options: PluginOptions = {}
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
   * @returns Vite plugin configuration object / объект конфигурации плагина Vite
   */
  init(): VitePlugin {
    return {
      name: this.name,
      enforce: 'pre',
      apply: (config, env): boolean => {
        this.mode = env.mode
        this.sourcemap = Boolean(
          config?.build?.sourcemap
          || PluginTool.isDev(env.mode)
        )
        return true
      },
      transform: (code: string, id: string): Rolldown.TransformResult => {
        return this.transform(code, id)
      },
      ...this.options?.viteOptions
    }
  }

  /**
   * Checks if components should be processed.
   *
   * Проверяет, нужно ли обрабатывать компоненты.
   * @returns true if component auto-import is enabled / true, если автоимпорт компонентов включен
   */
  protected isComponents(): boolean {
    return Boolean(this.options?.component ?? true)
  }

  /**
   * Checks if source maps should be generated.
   *
   * Проверяет, нужно ли генерировать карты исходного кода.
   * @returns true if source maps are enabled / true, если карты исходного кода включены
   */
  protected isMap(): boolean {
    return Boolean(this.options?.map ?? this.sourcemap)
  }

  /**
   * Checks if the main style file should be processed.
   *
   * Проверяет, нужно ли обрабатывать главный файл стилей.
   * @returns true if main style injection is enabled / true, если подключение главного файла стилей включено
   */
  protected isStyleMain(): boolean {
    return Boolean(this.options?.styleMain ?? true)
  }

  /**
   * Checks if styles should be processed.
   *
   * Проверяет, нужно ли обрабатывать стили.
   * @returns true if style transformation is enabled / true, если преобразование стилей включено
   */
  protected isStyles(): boolean {
    return Boolean(this.options?.style ?? true)
  }

  /**
   * Returns the source map for the modified code if enabled.
   *
   * Возвращает карту исходного кода для измененного кода, если она включена.
   * @param code file content / содержимое файла
   * @returns source map or null / карта исходного кода или null
   */
  protected getMap(code: PluginCode): SourceMap | null {
    if (this.isMap()) {
      return new PluginMap(code).get()
    }

    return null
  }

  /**
   * Initializes the main file.
   *
   * Инициализирует главный файл.
   * @param code file content / содержимое файла
   * @returns code with injected style import / код с добавленным импортом стилей
   */
  protected initMain(code: string): string {
    const imports = new PluginImport(this.packageName, code)

    imports.importStyle()

    return imports.get()
  }

  /**
   * Initializes styles.
   *
   * Инициализирует стили.
   * @param code file content / содержимое файла
   * @returns current instance / текущий экземпляр
   */
  protected initStyles(
    code: PluginCode
  ): this {
    if (this.isStyles()) {
      new PluginStyle(
        code,
        this.data,
        this.options.styleNamespace
      ).make()
    }

    return this
  }

  /**
   * Initializes components.
   *
   * Инициализирует компоненты.
   * @param code file content / содержимое файла
   * @returns current instance / текущий экземпляр
   */
  protected makeComponents(
    code: PluginCode
  ): this {
    if (this.isComponents()) {
      new PluginComponents(code, this.data).make()
    }

    return this
  }

  /**
   * Transforms the code.
   *
   * Преобразовывает код.
   * @param code file content / содержимое файла
   * @param id file identification / идентификация файла
   * @returns transform result with code and source map, or null / результат трансформации с кодом и картой исходников или null
   */
  protected transform(code: string, id: string): Rolldown.TransformResult {
    const magicCode = new PluginCode(id, code)

    if (
      this.first
      && PluginTool.isJs(id)
    ) {
      if (this.isStyleMain()) {
        magicCode.set(this.initMain(magicCode.get()))
      }

      this.first = false
    }

    this.makeComponents(magicCode)
    this.initStyles(magicCode)

    if (!magicCode.isModified()) {
      return null
    }

    return {
      code: magicCode.get(),
      map: this.getMap(magicCode)
    }
  }
}
