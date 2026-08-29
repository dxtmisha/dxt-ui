// export:none

import { forEach, isFilled, isObjectNotArray } from '@dxtmisha/functional-basic'

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

/** Name of the file for variables / Имя файла для переменных */
const FILE_VAR = 'vars'

/** Name of the file for classes / Имя файла для классов */
const FILE_CLASS = 'classes'

/** Name of the file for properties / Имя файла для свойств */
const FILE_PROPERTIES = 'properties'

/** Name of the file for property list / Имя файла для списка свойств */
const FILE_LIST = 'list'

/** Name of the file for basic imports / Имя файла для базовых импортов */
const FILE_BASIC = 'basic'

/** Name of the file for styles / Имя файла для стилей */
const FILE_STYLE = 'style'

/** Name of the file for main styles entry / Имя файла для главного входа стилей */
const FILE_MAIN = 'main'

/** Name of the directory for classes / Имя директории для классов */
const DIR_CLASS = 'classes'

/**
 * Base class for generating basic SCSS stylesheets, variables, and classes from design tokens.
 *
 * Базовый класс для генерации базовых таблиц стилей SCSS, переменных и классов из дизайн-токенов.
 */
export class Styles {
  /** Properties management instance / Экземпляр управления свойствами */
  private readonly properties: Properties

  /**
   * Constructor for Styles.
   *
   * Конструктор для Styles.
   */
  constructor() {
    this.properties = new Properties()
  }

  /**
   * Generates all basic style files and data across all designs.
   *
   * Генерация всех базовых файлов стилей и данных по всем дизайнам.
   * @returns current instance / текущий экземпляр
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
   * Generates basic CSS variables file from root tokens.
   *
   * Генерация файла базовых переменных CSS из корневых токенов.
   * @param items properties collection instance / экземпляр коллекции свойств
   * @returns current instance / текущий экземпляр
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
   * Generates all base class files and the unified class index file.
   *
   * Генерация всех файлов базовых классов и единого индексного файла классов.
   * @param items properties collection instance / экземпляр коллекции свойств
   * @returns current instance / текущий экземпляр
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

  /**
   * Generates SCSS property definitions file.
   *
   * Генерация файла определений свойств SCSS.
   * @param items properties collection instance / экземпляр коллекции свойств
   * @returns current instance / текущий экземпляр
   */
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

  /**
   * Generates the filtered JSON list file containing valid design properties.
   *
   * Генерация отфильтрованного JSON файла списка, содержащего валидные свойства дизайна.
   * @param items properties collection instance / экземпляр коллекции свойств
   * @returns current instance / текущий экземпляр
   */
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
   * Creates connection and entry SCSS files (basic, style, and main).
   *
   * Создает файлы подключения и входных точек SCSS (basic, style и main).
   * @param design design name / название дизайна
   * @returns current instance / текущий экземпляр
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
        `@use "@dxtmisha/styles" as variables;`,
        `@use "./${FILE_PROPERTIES}";`,
        '',
        `@forward "@dxtmisha/styles/${FILE_PROPERTIES}";`,
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
          `@use "@dxtmisha/styles/${FILE_PROPERTIES}" as ui;`,
          `@use "@dxtmisha/media/style.css";`,
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
   * Iterates over all non-constructor designs and executes the callback.
   *
   * Перебирает все дизайны, кроме конструктора, и выполняет функцию обратного вызова.
   * @param callback data processing function / функция для обработки данных
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

  /**
   * Filters out extraneous properties and retains only variables or non-empty nested objects.
   *
   * Отфильтровывает лишние свойства и сохраняет только переменные или непустые вложенные объекты.
   * @param data property list to filter / список свойств для фильтрации
   * @returns filtered properties record / отфильтрованная запись свойств
   */
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
