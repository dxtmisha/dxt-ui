import { PluginData } from './PluginData'
import { PluginCode } from './PluginCode'

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
  make(): this {
    if (this.is()) {
      this.importDesign()
        .makeColors()
        .makeVars()
        .makeProperties()
    }

    return this
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

  /**
   * Returns the comment for ignoring the file.
   *
   * Возвращает комментарий для игнорирования файла.
   */
  protected getIgnoreComment(): string {
    return `// ${this.data.getDesign()}-css-ignore`
  }

  /**
   * Returns a string for a negative lookahead to exclude lines with a special comment.
   *
   * Возвращает строку для негативного просмотра вперед, чтобы исключить строки со специальным комментарием.
   */
  protected getPropertiesNone() {
    return `(?![^\r\n]*// ${this.data.getDesign()}-mode-none)`
  }

  /**
   * Returns a regular expression for finding properties that need to be replaced with mixins.
   *
   * Возвращает регулярное выражение для поиска свойств, которые необходимо заменить на миксины.
   */
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
  protected importDesign(): this {
    const importPath = `${this.data.getPackageName()}/style/ui-properties`
    const code: string = `@use '${importPath}.scss' as *;`

    this.code.addStartIfNone(code, importPath)

    return this
  }

  /**
   * Removes default values from colors.
   *
   * Удаляет значения по умолчанию у цветов.
   */
  protected makeColors(): this {
    const pattern: string = `(?<=var\\([^,]+), ?(#[0-9abcdf]{4,6}|rgba?\\([^)]+\\))${this.getPropertiesNone()}`

    if (this.code.has(pattern)) {
      this.code.replace(
        new RegExp(pattern, 'ig'),
        ''
      )
    }

    return this
  }

  /**
   * Transforms property values under the correct name.
   *
   * Преобразовывает значения свойств под правильным именем.
   */
  protected makeVars(): this {
    const styleVarsReg = this.data.getStyleVarsReg()

    if (this.code.has(styleVarsReg)) {
      this.code.replace(
        styleVarsReg,
        `${this.data.getDesign()}-$1`
      )
    }

    return this
  }

  /**
   * Transformation of all properties into non-standard ones used through mixins.
   *
   * Преобразование всех свойств в нестандартные, используемые через миксины.
   */
  protected makeProperties(): this {
    const properties: Record<string, string> = this.data.getStyleModification()
    const reg = this.getModificationRef()

    if (this.code.has(reg)) {
      this.code.replace(
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

    return this
  }
}
