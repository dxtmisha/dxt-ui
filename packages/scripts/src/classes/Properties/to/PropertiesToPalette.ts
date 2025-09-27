import { forEach, isFilled, isObject, isObjectNotArray } from '@dxt-ui/functional'

import { PropertiesToAbstract } from './PropertiesToAbstract'
import { PropertiesItems } from '../PropertiesItems'

import {
  PropertyCategory,
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey,
  type PropertyList,
  PropertyType
} from '../../../types/propertyTypes'

const THEME_BASIC = 'basic'
const KEY_CLASS_NAME = 'palette'

/**
 * Class for working with colors.
 *
 * Класс для работы с цветами.
 */
export class PropertiesToPalette extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '002-palette'
  private palette: PropertyItemsItem[]

  /**
   * Constructor
   * @param items data for processing/ данные для обработки
   */
  constructor(protected items: PropertiesItems) {
    super(items)
    this.palette = this.items.findCategory(PropertyCategory.palette)
  }

  /**
   * Adding a class for working with colors.
   *
   * Добавление класса для работы со цветами.
   */
  protected init(): void {
    this.read()
    this.items.findCategory(PropertyCategory.theme)
      .forEach(({
        design,
        name,
        item
      }) => item?.value && isObjectNotArray(item.value) && this.read(item.value, name, design))
  }

  /**
   * Adding a group of properties based on the design name.
   *
   * Добавление группы свойств по названию дизайна.
   * @param category category names/ названия категорий
   * @param parent the property object, by which it will be added/ объект свойства, по которому будет добавлять
   */
  private getParent(
    category: PropertyCategory.colors | PropertyCategory.class,
    parent: PropertyList
  ): PropertyList {
    if (!(KEY_CLASS_NAME in parent)) {
      parent[KEY_CLASS_NAME] = {
        value: {},
        [PropertyKey.type]: category === PropertyCategory.colors
          ? PropertyType.classType
          : PropertyType.component,
        [PropertyKey.category]: category
      }
    }

    return parent[KEY_CLASS_NAME].value as PropertyList
  }

  /**
   * Adding a new class with the name of the color.
   *
   * Добавление нового класса по имени цвета.
   * @param items list of classes/ список классов
   * @param name class name/ название класса
   */
  private getClass(items: PropertyList, name: string): PropertyList {
    if (!items?.[name]) {
      items[name] = {
        value: {},
        [PropertyKey.type]: PropertyType.state
      }
    }

    return items[name].value as PropertyList
  }

  /**
   * Returns names for light.
   *
   * Возвращает названия для света.
   * @param theme the name of the theme/ название темы
   * @param name names of colors/ названия цвета
   */
  private getName(theme: string, name: string): string {
    return `${theme}-${name}`
  }

  /**
   * Returns values for color.
   *
   * Возвращает значения для цвета.
   * @param link base link/ базовая ссылка
   * @param name names of colors/ названия цвета
   */
  private getValue(link: string, name: string): string {
    return `{${link}.${name}}`
  }

  /**
   * Checking the default value.
   *
   * Проверка значения по умолчанию.
   * @param item the value to be checked/ проверяемое значение
   * @param theme the name of the theme/ название темы
   */
  private getValueDefault(item: PropertyItem, theme: string): string {
    const value = item?.[PropertyKey.default]

    if (isFilled(value)) {
      return isObject(value) ? value?.[theme] : value as string
    }

    return 'default'
  }

  /**
   * Adding a color property by the name of the theme.
   *
   * Добавление свойства цвета по названию темы.
   * @param root the property object, by which it will be added/
   * объект свойства, по которому будет добавлять
   * @param theme the name of the theme/ название темы
   * @param designParent design name/ название дизайна
   */
  private read(
    root?: PropertyList,
    theme = THEME_BASIC,
    designParent?: string
  ) {
    this.palette.forEach(({
      design,
      item,
      parents,
      index
    }) => {
      if (!designParent || designParent === design) {
        const themeName = item?.[PropertyKey.theme]

        if (!themeName || themeName === theme) {
          const list = this.getParent(
            root ? PropertyCategory.colors : PropertyCategory.class,
            root ?? (parents?.[0]?.item.value as PropertyList)
          )

          if (
            list
            && isObjectNotArray(item.value)
          ) {
            forEach(item.value, (shade, name) => {
              const parent = this.getClass(list, name)

              if (
                isObjectNotArray(shade.value)
                && shade?.[PropertyKey.category] !== PropertyCategory.paletteNone
              ) {
                this.addItem(
                  parent,
                  `${index}.${name}`,
                  theme,
                  shade.value
                )
              }

              this.addDefault(parent, theme, item)
            })
          }
        }
      }
    })
  }

  /**
   * Adding a saturation property.
   *
   * Добавление свойства насыщенности.
   * @param parent list of available values for the class/ список доступных значений у класса
   * @param link list of classes/ список классов
   * @param theme the name of the theme/ название темы
   * @param palette the list of saturation/ список насыщенности
   * @private
   */
  private addItem(
    parent: PropertyList,
    link: string,
    theme: string,
    palette: PropertyList
  ): void {
    forEach(palette, (item, name) => {
      if (item) {
        parent[this.getName(theme, name)] = {
          value: this.getValue(link, name),
          [PropertyKey.type]: PropertyType.var,
          [PropertyKey.category]: PropertyCategory.color
        }
      }
    })
  }

  /**
   * Adding a default value.
   *
   * Добавление значения по умолчанию.
   * @param parent list of available values for the class/ список доступных значений у класса
   * @param theme the name of the theme/ название темы
   * @param palette list of classes/ список классов
   * @private
   */
  private addDefault(
    parent: PropertyList,
    theme: string,
    palette: PropertyItem
  ): void {
    const defaultValue = this.getValueDefault(palette, theme)
    const name = this.getName(theme, defaultValue)

    if (parent?.[name]) {
      parent['sys-palette'] = {
        ...parent[name],
        [PropertyKey.fullName]: true
      }
    }
  }
}
