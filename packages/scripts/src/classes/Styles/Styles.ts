import { forEach, isFilled, isObjectNotArray } from '@dxt-ui/functional'

import { Properties } from '../Properties/Properties'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { PropertiesItems } from '../Properties/PropertiesItems'
import { PropertiesScss } from '../Properties/PropertiesScss'

import { StylesTool } from './StylesTool'

import { StylesRoot } from './StylesRoot'
import { StylesClasses } from './StylesClasses'

import {
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../types/propertyTypes'

import { UI_KEY_CONSTRUCTOR, UI_EXTENSION_STYLE } from '../../config'

const FILE_VAR = 'vars'
const FILE_CLASS = 'classes'
const FILE_PROPERTIES = 'properties'
const FILE_LIST = 'list'
const FILE_BASIC = 'basic'
const FILE_STYLE = 'style'
const FILE_MAIN = 'main'

const DIR_CLASS = 'classes'

/**
 * Base class for generating basic properties.
 *
 * Базовый класс для генерации базовых свойств.
 */
export class Styles {
  private readonly properties: Properties

  /**
   * Constructor
   */
  constructor() {
    this.properties = new Properties()
  }

  /**
   * Generating all basic data.
   *
   * Генерация всех базовых данных.
   */
  make(): this {
    this.getByDesigns((
      design,
      items
    ) => {
      this.initRoot(items)
      this.initClasses(items)
      this.initProperties(items)
      this.initList(items)
      this.initBasic(design)
    })

    return this
  }

  /**
   * Generating basic variables.
   *
   * Генерация базовых переменных.
   * @param items current element/ текущий элемент
   */
  protected initRoot(
    items: PropertiesItems
  ): this {
    const data = StylesTool.join(new StylesRoot(items).init())

    PropertiesFile.write(
      StylesTool.getDir(),
      FILE_VAR,
      data,
      UI_EXTENSION_STYLE
    )

    return this
  }

  /**
   * Generating all base classes.
   *
   * Генерация всех базовых классов.
   * @param items current element/ текущий элемент
   */
  protected initClasses(
    items: PropertiesItems
  ): this {
    const {
      data,
      classes
    } = new StylesClasses(items).init()

    forEach(classes, (item, name) => {
      PropertiesFile.write(
        [...StylesTool.getDir(), DIR_CLASS],
        name,
        StylesTool.join(item),
        UI_EXTENSION_STYLE
      )
    })

    PropertiesFile.write(
      StylesTool.getDir(),
      FILE_CLASS,
      StylesTool.join(data),
      UI_EXTENSION_STYLE
    )

    return this
  }

  protected initProperties(
    items: PropertiesItems
  ): this {
    const scss = new PropertiesScss(items)

    PropertiesFile.write(
      StylesTool.getDir(),
      FILE_PROPERTIES,
      scss.get(),
      UI_EXTENSION_STYLE
    )

    return this
  }

  protected initList(
    items: PropertiesItems
  ): this {
    PropertiesFile.write(
      StylesTool.getDir(),
      FILE_LIST,
      this.removeExcess(items.get())
    )

    return this
  }

  /**
   * Creates files for connection.
   *
   * Создает файлы для подключения.
   * @param design design name/ название дизайна
   */
  protected initBasic(design: string): this {
    const dir = StylesTool.getDir()

    PropertiesFile.write(
      dir,
      FILE_BASIC,
      [
        `@use "./${FILE_VAR}";`,
        `@use "./${FILE_PROPERTIES}";`,
        `@use "./${FILE_CLASS}";`
      ].join('\r\n'),
      UI_EXTENSION_STYLE
    )

    PropertiesFile.write(
      dir,
      FILE_STYLE,
      [
        `@use "@dxt-ui/styles" as variables;`,
        `@use "./${FILE_PROPERTIES}";`,
        '',
        `@forward "@dxt-ui/styles/${FILE_PROPERTIES}";`,
        '',
        `@include variables.setDesignsDesign('${design}');`,
        ''
      ].join('\r\n'),
      UI_EXTENSION_STYLE
    )

    if (!PropertiesFile.is([...dir, `${FILE_MAIN}.${UI_EXTENSION_STYLE}`])) {
      PropertiesFile.write(
        dir,
        FILE_MAIN,
        [
          `@use "./${FILE_BASIC}";`,
          `@use "@dxt-ui/styles/${FILE_PROPERTIES}" as ui;`,
          '',
          '@include ui.initGlobal;',
          `@include ui.initDesignBody('${design}.main');`
        ].join('\r\n'),
        UI_EXTENSION_STYLE
      )
    }

    return this
  }

  /**
   * Generating a list of properties from a design.
   *
   * Получение списка свойств по дизайну.
   * @param callback data processing function/ функция для обработки данных
   */
  private getByDesigns(callback: (design: string, items: PropertiesItems) => void): void {
    const properties = this.properties.get().get()

    this.properties
      .get()
      .getDesigns()
      .forEach((design) => {
        if (design !== UI_KEY_CONSTRUCTOR) {
          callback(
            design,
            new PropertiesItems(properties).setFocusDesign(design)
          )
        }
      })
  }

  private removeExcess(data: PropertyList) {
    const list: Record<string, any> = {}

    forEach(data, (item, key) => {
      if (
        item[PropertyKey.variable] === PropertyType.var
        || isObjectNotArray(item.value)
      ) {
        const value = isObjectNotArray(item.value) ? this.removeExcess(item.value) : item.value

        if (isFilled(value)) {
          list[key] = {
            name: item[PropertyKey.name],
            type: item[PropertyKey.variable],
            value
          }
        }
      }
    })

    return list
  }
}
