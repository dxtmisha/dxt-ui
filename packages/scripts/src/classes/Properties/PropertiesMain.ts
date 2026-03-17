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
 * Orchestrator for global design token transformation.
 * This class serves as the primary engine for loading, validating, and normalizing "main" tokens across all supported designs. It coordinates a multi-stage pipeline—including semantic conversion, reference import, and structural wrapping—to synthesize a unified property tree ready for consumption by external builders.
 *
 * Оркестратор глобальной трансформации токенов дизайна.
 * Этот класс служит основным движком для загрузки, валидации и нормализации «основных» (main) токенов во всех поддерживаемых дизайнах. Он координирует многоэтапный конвейер — включая семантическую конвертацию, импорт ссылок и структурную обертку — для синтеза унифицированного дерева свойств, готового к использованию внешними строителями.
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
   * Executes the full transformation pipeline for all main design tokens.
   * Discovers token files via the path manager, then sequentially applies reading, conversion, standardization, link resolution, and structural wrapping for every design entry.
   *
   * Выполняет полный конвейер трансформации для всех основных токенов дизайна.
   * Обнаруживает файлы токенов через менеджер путей, затем последовательно применяет чтение, конвертацию, стандартизацию, разрешение ссылок и структурную обертку для каждой записи дизайна.
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
   * Synchronizes global tokens with a provided settings cluster.
   * Retrieves the full set of main tokens and deeply merges internal state flags from the settings list into the corresponding nodes of the global tree.
   *
   * Синхронизирует глобальные токены с предоставленным кластером настроек.
   * Получает полный набор основных токенов и глубоко объединяет флаги внутреннего состояния из списка настроек в соответствующие узлы глобального дерева.
   * @param list the settings cluster to apply / кластер настроек для применения
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
