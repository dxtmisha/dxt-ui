// export:none

import { forEach, isFilled, isObjectNotArray } from '@dxtmisha/functional-basic'

import { PropertiesPath } from './PropertiesPath'
import { PropertiesTool } from './PropertiesTool'

import { PropertiesConvector } from './PropertiesConvector'
import { PropertiesStandard } from './PropertiesStandard'
import { PropertiesImport } from './PropertiesImport'
import { PropertiesSeparator } from './PropertiesSeparator'
import { PropertiesWrap } from './PropertiesWrap'

import type {
  PropertyItem,
  PropertyList
} from '../../types/propertyTypes'

const DIR_NAME = 'main'

/**
 * A class for transforming global tokens.
 *
 * Класс для преобразования глобальных токенов.
 */
export class PropertiesMain {
  /**
   * Constructor
   * @param path object of the class for working with paths/ объект класса для работы с путями
   */
  constructor(
    private readonly path: PropertiesPath
  ) {
  }

  /**
   * Returns all main tokens.
   *
   * Возвращает все основные токены.
   */
  get(): PropertyList {
    return this.path.toAll(DIR_NAME, (
      path,
      _,
      design
    ) => {
      let properties = PropertiesTool.readFile(design, path)

      if (isFilled(properties)) {
        PropertiesConvector.to(properties)

        properties = PropertiesStandard.to({ [design]: properties })

        if (path) {
          properties = new PropertiesImport(properties, path).to()
        }

        if (PropertiesSeparator.is(properties)) {
          properties = PropertiesSeparator.to(properties)
          PropertiesWrap.to(properties)
        }
      }

      return properties ?? {}
    }) as PropertyList
  }

  /**
   * We get the main property taking into account the change of settings.
   *
   * Получаем главное свойство с учетом изменения настроек.
   * @param list list of settings/ список настроек
   */
  getBySettings(list: PropertyList): PropertyList {
    const data = this.get()

    forEach(list, (designItems, design) => {
      const dataDesign = data?.[design]?.value

      if (
        dataDesign
        && isObjectNotArray(dataDesign)
        && isObjectNotArray(designItems.value)
      ) {
        forEach(designItems.value, (componentItems, component) => {
          const dataComponent = dataDesign?.[component]?.value

          if (
            dataComponent
            && isObjectNotArray(dataComponent)
            && isObjectNotArray(componentItems.value)
          ) {
            forEach(componentItems.value, (item, name) => {
              this.copySettings(
                item,
                dataComponent?.[name]
              )
            })
          }
        })
      }
    })

    return data
  }

  /**
   * We copy the settings.
   *
   * Копируем настройки.
   * @param item element with settings/ элемент с настройками
   * @param itemCopy element for copying settings/ элемент для копирования настроек
   */
  protected copySettings(
    item: PropertyItem,
    itemCopy?: PropertyItem
  ): this {
    if (itemCopy) {
      forEach(item, (value, property: keyof PropertyItem) => {
        if (
          property.match(/^_/)
          && property in itemCopy
          && itemCopy[property] !== value
        ) {
          itemCopy[property] = value as never
        }
      })
    }

    return this
  }
}
