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

import { PROPERTY_CONSTRUCTOR_BASIC_NAME, STYLES_FILE_EXTENSION } from '../../config'

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
      this.initRoot(design, items)
      // this.initClasses(design, items)
      // this.initProperties(design, items)
      // this.initList(design, items)
      // this.initBasic(design)
    })

    return this
  }

  /**
   * Generating basic variables.
   *
   * Генерация базовых переменных.
   * @param design design name/ название дизайна
   * @param items current element/ текущий элемент
   */
  protected initRoot(
    design: string,
    items: PropertiesItems
  ): this {
    const data = StylesTool.join(new StylesRoot(items).init())

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_VAR,
      data,
      STYLES_FILE_EXTENSION
    )

    return this
  }

  /**
   * Generating all base classes.
   *
   * Генерация всех базовых классов.
   * @param design design name/ название дизайна
   * @param items current element/ текущий элемент
   */
  protected initClasses(
    design: string,
    items: PropertiesItems
  ): this {
    const {
      data,
      classes
    } = new StylesClasses(items).init()

    forEach(classes, (item, name) => {
      PropertiesFile.write(
        [...StylesTool.getDir(design), DIR_CLASS],
        name,
        StylesTool.join(item),
        STYLES_FILE_EXTENSION
      )
    })

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_CLASS,
      StylesTool.join(data),
      STYLES_FILE_EXTENSION
    )

    return this
  }

  protected initProperties(
    design: string,
    items: PropertiesItems
  ): this {
    const scss = new PropertiesScss(items)

    PropertiesFile.write(
      StylesTool.getDir(design),
      FILE_PROPERTIES,
      scss.get(),
      STYLES_FILE_EXTENSION
    )

    return this
  }

  protected initList(
    design: string,
    items: PropertiesItems
  ): this {
    PropertiesFile.write(
      StylesTool.getDir(design),
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
    const dir = StylesTool.getDir(design)

    PropertiesFile.write(
      dir,
      FILE_BASIC,
      [
        `@import "./${FILE_VAR}";`,
        `@import "./${FILE_CLASS}";`,
        `@import "./${FILE_PROPERTIES}";`
      ].join('\r\n'),
      STYLES_FILE_EXTENSION
    )

    PropertiesFile.write(
      dir,
      FILE_STYLE,
      [
        `@import "../styles/${FILE_PROPERTIES}";`,
        `@import "../../styles/${FILE_PROPERTIES}";`,
        '',
        `$designsDesign: '${design}';`,
        `$designsDesigns: ('${design}');`
      ].join('\r\n'),
      STYLES_FILE_EXTENSION
    )

    if (!PropertiesFile.is([...dir, `${FILE_MAIN}.${STYLES_FILE_EXTENSION}`])) {
      PropertiesFile.write(
        dir,
        FILE_MAIN,
        [
          `@import "./${FILE_BASIC}";`,
          '@import "../../styles/properties";',
          '@import "../../styles/init";',
          '',
          '@include initGlobal;',
          `@include initDesignBody('${design}.main');`
        ].join('\r\n'),
        STYLES_FILE_EXTENSION
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
        if (design !== PROPERTY_CONSTRUCTOR_BASIC_NAME) {
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
