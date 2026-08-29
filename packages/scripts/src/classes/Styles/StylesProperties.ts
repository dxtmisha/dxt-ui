// export:none

import { PropertiesItems } from '../Properties/PropertiesItems'

import { StylesTool } from './StylesTool'

import { StylesToClass } from './to/StylesToClass'
import { StylesToClassFull } from './to/StylesToClassFull'
import { StylesToVar } from './to/StylesToVar'
import { StylesToProperty } from './to/StylesToProperty'
import { StylesToSelector } from './to/StylesToSelector'
import { StylesToVirtual } from './to/StylesToVirtual'
import { StylesToMedia } from './to/StylesToMedia'
import { StylesToContainer } from './to/StylesToContainer'
import { StylesToAnimate } from './to/StylesToAnimate'
import { StylesToRoot } from './to/StylesToRoot'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey,
  PropertyType
} from '../../types/propertyTypes'

/** List of auxiliary property types / Список вспомогательных типов свойств */
const TYPE_AUXILIARY = [
  'selector',
  'virtual'
]

/** List of basic property types / Список базовых типов свойств */
const TYPE_BASIC = [
  'var',
  'property',
  'scss'
]

/**
 * Class for converting hierarchical design property structures into formatted SCSS rules and directives.
 *
 * Класс для преобразования иерархических структур свойств дизайна в форматированные правила и директивы SCSS.
 */
export class StylesProperties {
  /** Current property item metadata / Метаданные текущего элемента свойства */
  private readonly item: PropertyItem

  /** Array of accumulated SCSS code lines / Массив накопленных строк кода SCSS */
  private readonly data: string[] = []

  /** Indicates whether the first property rule was generated / Указывает, было ли сгенерировано первое правило свойства */
  private first: boolean = false

  /**
   * Constructor for StylesProperties.
   *
   * Конструктор для StylesProperties.
   * @param space indentation string / строка отступа
   * @param property property tree item / элемент дерева свойств
   * @param parent ancestor property item / родительский элемент свойства
   */
  constructor(
    private space: string,
    private property: PropertyItemsItem,
    private parent?: PropertyItem
  ) {
    this.item = property.item
  }

  /**
   * Generates all properties, variables, and nested rules.
   *
   * Генерация всех свойств, переменных и вложенных правил.
   * @returns array of generated SCSS lines / массив сгенерированных строк SCSS
   */
  make(): string[] {
    (new PropertiesItems({})).eachMainOnly((property) => {
      const { item } = property

      if (
        this.isAuxiliary()
        && this.isAuxiliary(item)
        && this.isNotBasic(item)
      ) {
        const data: string[] = new StylesProperties(
          StylesTool.increaseSpace(this.space),
          property,
          this.item
        ).make()

        this.data.push(
          `${this.space}& {`,
          ...data,
          `${this.space}}`
        )
      } else {
        const data = this.toByType(property)

        if (data.length > 0) {
          this.first = true
        }

        this.data.push(...data)
      }
    }, this.property)

    return this.data
  }

  /**
   * Checks if the property item type is auxiliary (e.g. selector or virtual).
   *
   * Проверяет, является ли тип элемента свойства вспомогательным (например, selector или virtual).
   * @param item property item to inspect / элемент свойства для проверки
   * @returns check result / результат проверки
   */
  private isAuxiliary(
    item = this.parent
  ): boolean {
    return Boolean(item && TYPE_AUXILIARY.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  /**
   * Checks if the property item type is non-basic (not var, property, or scss).
   *
   * Проверяет, является ли тип элемента свойства небазовым (не var, property или scss).
   * @param item property item to inspect / элемент свойства для проверки
   * @returns check result / результат проверки
   */
  private isNotBasic(item: PropertyItem): boolean {
    return !(item && TYPE_BASIC.indexOf(item?.[PropertyKey.variable] as string) !== -1)
  }

  /**
   * Returns a closure for generating child content rules.
   *
   * Возвращает функцию замыкания для генерации правил дочернего содержимого.
   * @param property target property item / целевой элемент свойства
   * @returns generator function returning code lines / функция-генератор, возвращающая строки кода
   */
  private getContent(
    property: PropertyItemsItem
  ): () => string[] {
    return () => new StylesProperties(
      this.space,
      property,
      this.item
    ).make()
  }

  /**
   * Builds arguments tuple for child transformer classes.
   *
   * Формирует кортеж аргументов для дочерних классов преобразователей.
   * @param property target property item / целевой элемент свойства
   * @returns tuple with property item, space, content closure, and first-item flag / кортеж с элементом свойства, отступом, замыканием контента и флагом первого элемента
   */
  private getArgumentsForTo(
    property: PropertyItemsItem
  ): [PropertyItemsItem, string, () => string[], boolean] {
    return [
      property,
      this.space,
      this.getContent(property),
      this.first
    ]
  }

  /**
   * Dispatches and converts a property into SCSS lines based on its variable type.
   *
   * Выбирает преобразователь и преобразует свойство в строки SCSS в зависимости от типа его переменной.
   * @param property property item to transform / элемент свойства для преобразования
   * @returns array of transformed SCSS lines / массив преобразованных строк SCSS
   */
  private toByType(
    property: PropertyItemsItem
  ): string[] {
    const argumentsValue = this.getArgumentsForTo(property)

    switch (property.item?.[PropertyKey.variable]) {
      case PropertyType.var:
        return new StylesToVar(...argumentsValue).make()
      case PropertyType.property:
        return new StylesToProperty(...argumentsValue).make()
      case PropertyType.selector:
        return new StylesToSelector(...argumentsValue).make()
      case PropertyType.virtual:
        return new StylesToVirtual(...argumentsValue).make()
      case PropertyType.media:
      case PropertyType.mediaMax:
        return new StylesToMedia(...argumentsValue).make()
      case PropertyType.container:
      case PropertyType.containerMax:
        return new StylesToContainer(...argumentsValue).make()
      case PropertyType.animate:
        return new StylesToAnimate(...argumentsValue).make()
      case PropertyType.root:
        return new StylesToRoot(...argumentsValue).make()
      case PropertyType.state:
      case PropertyType.subclass:
      case PropertyType.classType:
      case PropertyType.scss:
        return new StylesToClass(...argumentsValue).make()
      case PropertyType.animateFrame:
        return new StylesToClassFull(...argumentsValue).make()
      default:
        return []
    }
  }
}
