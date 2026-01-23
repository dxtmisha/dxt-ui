import { PluginTool } from './PluginTool'
import { PluginData } from './PluginData'
import { PluginCode } from './PluginCode.ts'

/**
 * Class for transforming into non-standard style properties.
 *
 * Класс для преобразования в нестандартные свойства стилей.
 */
export class PluginStyle {
  /**
   * Constructor
   * @param code file content / содержимое файла
   * @param data plugin data / данные плагина
   */

  constructor(
    protected readonly code: PluginCode,
    protected readonly data: PluginData
  ) {
  }

  /**
   * Initialization of the transformation of all style properties.
   *
   * Инициализация преобразования всех свойств стилей.
   */
  init(): string {
    if (this.is()) {
      let code = this.importDesign()

      code = this.initColors(code)
      code = this.initVars(code)
      code = this.initProperties(code)

      return code
    }

    return this.code
  }

  /**
   * Checks whether this file needs to be transformed.
   *
   * Проверяет, нужно ли преобразовывать этот файл.
   */
  protected is(): boolean {
    return this.code.isScss()
      && !this.code.has(this.getIgnoreComment())
  }

  protected getIgnoreComment(): string {
    return `// ${this.data.getDesign()}-css-ignore`
  }

  protected getPropertiesNone() {
    return `(?![^\r\n]*// ${this.data.getDesign()}-mode-none)`
  }

  protected getModificationRef(): RegExp {
    const properties: Record<string, string> = this.data.getStyleModification()

    return new RegExp(
      `(?<=^\\s*)(${Object.keys(properties).join('|')}):([^;\r\n]+)(;*)${this.getPropertiesNone()}`,
      'igm'
    )
  }

  /**
   * Connects a list of tokens to work with values.
   *
   * Подключает список токенов для работы со значениями.
   */
  protected importDesign(): string {
    const importPath = `${this.data.getPackageName()}/properties`

    if (!this.code.match(importPath)) {
      return `@use '${importPath}' as *;\r\n${this.code}`
    }

    return this.code
  }

  /**
   * Removes default values from colors.
   *
   * Удаляет значения по умолчанию у цветов.
   * @param code file content / содержимое файла
   */
  protected initColors(code: string): string {
    if (code.match(
      new RegExp(`#[0-9abcdf]{4,6}|rgb|rgba${this.getPropertiesNone()}`, 'i')
    )) {
      const pattern: string = `(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\\([^)]+\\))${this.getPropertiesNone()}`
      const reg = new RegExp(pattern, 'ig')

      return code.replace(reg, () => '')
    }

    return code
  }

  /**
   * Transforms property values under the correct name.
   *
   * Преобразовывает значения свойств под правильным именем.
   * @param code file content / содержимое файла
   */
  protected initVars(code: string): string {
    if (this.data.hasVars(code)) {
      const design = this.data.getDesign()

      return code.replace(
        this.data.getStyleVarsReg(),
        `${design}-$1`
      )
    }

    return code
  }

  /**
   * Transformation of all properties into non-standard ones used through mixins.
   *
   * Преобразование всех свойств в нестандартные, используемые через миксины.
   * @param code file content / содержимое файла
   */
  protected initProperties(code: string): string {
    const properties: Record<string, string> = this.data.getStyleModification()
    const reg = this.getModificationRef()

    if (code.match(new RegExp(reg, 'i'))) {
      return code.replace(
        reg,
        (
          _,
          name: string,
          value: string,
          end: string
        ) => {
          const data = value.trim()

          return `@include ${properties?.[name.trim()]}(${data.match(/[()]/) ? `#{${data}}` : data})${end}`
        }
      )
    }

    return code
  }
}
