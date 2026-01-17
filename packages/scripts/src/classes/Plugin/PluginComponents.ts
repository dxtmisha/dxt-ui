import { PluginTool } from './PluginTool.ts'

type PluginComponentItem = {
  name: string
  design: string
  code: string
  path: string
}

const regDesigns = `(?<=<|'|"\\s)(${data.designs.join('|')})([A-Z0-9-])([^ >'"\\(\\r\\n]+)`
const regMatch = new RegExp(regDesigns, 'i')
const regMatchAll = new RegExp(regDesigns, 'ig')

/**
 * Class for connecting components.
 *
 * Класс для подключения компонентов.
 */
export class PluginComponents {
  /**
   * Constructor
   * @param styles object for working with style connection / объект для работы с подключением стилей
   * @param id file identification / идентификация файла
   * @param code file content / содержимое файла
   */

  constructor(
    protected readonly packageName: string,
    protected readonly componentsReg: RegExp,
    protected readonly styles: PluginImportStyles,
    protected readonly id: string,
    protected readonly code: string
  ) {
  }

  /**
   * Initializes the data.
   *
   * Инициализирует данные.
   */
  init(): string {
    if (this.is()) {
      const list = this.getList()

      if (list) {
        const newImport: string[] = []
        let code = this.getCode()

        list.forEach((component) => {
          const item = this.findComponent(component)

          if (
            item
            && newImport.indexOf(item.name) === -1
            && !this.isImport(item)
          ) {
            newImport.push(item.name)

            code = this.importComponent(code, item)
            // code = this.importStyle(code, item)
          }
        })

        return code
      }
    }

    return this.code
  }

  /**
   * Checks if the file is suitable for conversion.
   *
   * Проверяет, подходит ли файл для преобразования.
   */
  protected is(): boolean {
    return PluginTool.isVue(this.id)
      && Boolean(this.code.match(this.componentsReg))
  }

  /**
   * Checks if the component was connected.
   *
   * Проверяет, был ли подключен компонент.
   * @param item data on the component / данные по компоненту
   */
  protected isImport(item: PluginComponentItem): boolean {
    return Boolean(
      this.code.match(new RegExp(`from ?['"]${data.name}\\/(${item.name}|${item.code})['"]`, 'i'))
    )
  }

  /**
   * Checks if there is a script element.
   *
   * Проверяет, есть ли элемент script.
   */
  protected isScript(): boolean {
    return Boolean(this.code.match(/<script[^>]*setup/))
  }

  /**
   * Finds the list of components and returns them.
   *
   * Находит список компонентов и возвращает их.
   */
  protected getList(): RegExpMatchArray | null {
    return this.code.match(regMatchAll)
  }

  /**
   * Returns the file code, adding a script if it’s not there.
   *
   * Возвращает код файла, добавляя script, если его нет.
   */
  protected getCode(): string {
    if (this.isScript()) {
      return this.code
    }

    return `<script setup></script>${this.code}`
  }

  /**
   * Search for the component in the list.
   *
   * Искать компонент в списке.
   * @param name component name / название компонента
   */
  protected findComponent(name: string): PluginComponentItem | undefined {
    return data.components.find(
      item => item.name === name || item.code === name
    )
  }

  /**
   * Component connection.
   *
   * Подключение компонента.
   * @param code file content / содержимое файла
   * @param item data on the component / данные по компоненту
   */
  protected importComponent(
    code: string,
    item: PluginComponentItem
  ): string {
    return code.replace(/(<script[^\r\n]+)/, `$1\r\nimport {${item.name}} from'${this.packageName}/${item.name}';`)
  }
}
