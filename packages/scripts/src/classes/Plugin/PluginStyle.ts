import { PluginTool } from './PluginTool'
import { PluginData } from './PluginData'

/**
 * Class for transforming into non-standard style properties.
 *
 * Класс для преобразования в нестандартные свойства стилей.
 */
export class PluginStyle {
  /**
   * Constructor
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   * @param data plugin data / данные плагина
   */

  constructor(
    protected readonly id: string,
    protected readonly code: string,
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

  getNoneCode(): string {
    return `// ${this.data.getDesign()}-none`
  }

  getModeNoneCode(): string {
    return `// ${this.data.getDesign()}-mode-none`
  }

  /**
   * Checks whether this file needs to be transformed.
   *
   * Проверяет, нужно ли преобразовывать этот файл.
   */
  protected is(): boolean {
    return PluginTool.isCss(this.id) && !this.code.match(this.getNoneCode())
  }

  protected getPropertiesNone() {
    return `(?![^\r\n]*${this.getModeNoneCode()})`
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
      const reg = new RegExp(`(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgb|rgba?\\([^)]+\\))${this.getPropertiesNone()}`, 'ig')
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
    const list: string[] | undefined = (data.vars as any)?.[this.design]

    if (
      list
      && code.match(/var\([^)]+\)/)
    ) {
      return code.replace(/(?<=var\(--)([^,) ]+)(?=[,) ])/ig, (value) => {
        if (list.indexOf(value) !== -1) {
          return `${this.design}-${value}`
        }

        return value
      })
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
    const properties: Record<string, string> = data.modificationProperties
    const reg = new RegExp(`(?<=^\\s*)(${Object.keys(properties).join('|')}):([^;\r\n]+)(;*)${this.getPropertiesNone()}`, 'igm')

    if (code.match(reg)) {
      return code.replace(reg, (
        _,
        name: string,
        value: string,
        end: string
      ) => {
        const data = value.trim()

        return `@include ${properties?.[name.trim()]}(${data.match(/[()]/) ? `#{${data}}` : data})${end}`
      })
    }

    return code
  }
}
