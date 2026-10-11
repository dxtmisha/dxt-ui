import { forEach } from '../../functions/forEach'
import { isObject } from '../../functions/isObject'
import { isObjectNotArray } from '../../functions/isObjectNotArray'
import { toArray } from '../../functions/toArray'
import { toCamelCase } from '../../functions/toCamelCase'

import { DesignComponentsAbstract } from './DesignComponentsAbstract'

import type {
  ConstrClass,
  ConstrClasses,
  ConstrClassObject,
  ConstrComponent,
  ConstrEmit,
  ConstrItem,
  ConstrStyles
} from '../../types/constructorTypes'

/**
 * Base abstract class for collecting functional parts of a design component.
 * Provides component naming conventions (BEM: block, element, modifier),
 * CSS custom property naming, class name normalization, and attribute filtering.
 *
 * Базовый абстрактный класс для сбора функциональных частей компонента дизайна.
 * Предоставляет соглашения по именованию компонентов (БЭМ: блок, элемент, модификатор),
 * формирование названий пользовательских CSS-свойств, нормализацию названий классов и фильтрацию атрибутов.
 */
export abstract class DesignConstructorBasicAbstract<
  COMP extends ConstrComponent = ConstrComponent,
  EMITS extends ConstrItem = ConstrItem,
  EXPOSE extends ConstrItem = ConstrItem,
  SLOTS extends ConstrItem = ConstrItem,
  CLASSES extends ConstrClasses = ConstrClasses,
  P extends ConstrItem = ConstrItem
> {
  /** Component name split by levels / Название компонента, разбитое по уровням */
  protected readonly name: string[]
  /** Component properties / Свойства компонента */
  protected readonly props: Readonly<P>
  /** Connected components / Подключенные компоненты */
  protected abstract readonly components: DesignComponentsAbstract<COMP, P>
  /** Emit handlers / Обработчики emit */
  protected readonly emits?: ConstrEmit<EMITS>
  /** Additional attributes / Дополнительные атрибуты */
  protected attrs?: ConstrItem
  /** Named slots / Именованные слоты */
  protected slots?: SLOTS
  /** Exposed data / Экспортируемые данные */
  protected dataExpose?: EXPOSE

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   */
  protected constructor(
    name: string,
    props: Readonly<P> = {} as Readonly<P>,
    options?: {
      emits?: ConstrEmit<EMITS>
      attrs?: ConstrItem
      slots?: SLOTS
    }
  ) {
    this.name = this.initName(name)
    this.props = props
    this.emits = options?.emits
    this.attrs = options?.attrs
    this.slots = options?.slots
  }

  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @returns class name / название класса
   */
  getName(): string {
    return this.name.join('-')
  }

  /**
   * Getting the design name.
   *
   * Получение названия дизайна.
   * @returns design name / название дизайна
   */
  getDesign(): string {
    return String(this.name[0])
  }

  /**
   * Getting the class name of a sub-element.
   *
   * Получение названия класса подэлемента.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns sub-element class name / название класса подэлемента
   */
  getSubClass(name: string | string[]): string {
    return `${this.getName()}__${toArray(name).join('__')}`
  }

  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns status class name / название класса статуса
   */
  getStatusClass(name: string | string[]): string {
    return `${this.getName()}--${toArray(name).join('--')}`
  }

  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns CSS custom property name / название CSS-переменной
   */
  getStyle(name: string | string[]): string {
    return `--${this.getName()}-sys-${toArray(name).join('-')}`
  }

  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   * @returns additional attributes / дополнительные атрибуты
   */
  getAttrs(): ConstrItem {
    const attrs: ConstrItem = { ...this.attrs ?? {} }

    if ('class' in attrs) {
      delete attrs.class
    }

    if ('className' in attrs) {
      delete attrs.className
    }

    if ('style' in attrs) {
      delete attrs.style
    }

    return attrs
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed data / экспортируемые данные
   */
  protected abstract initExpose(): EXPOSE

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial list of classes / частичный список классов
   */
  protected abstract initClasses(): Partial<CLASSES>

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected abstract initStyles(): ConstrStyles

  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation / список классов для преобразования
   * @returns object of classes / объект классов
   */
  protected toClass(classes?: ConstrClass): ConstrClassObject {
    if (isObjectNotArray(classes)) {
      return classes
    }

    if (Array.isArray(classes)) {
      const name = classes
        .filter(item => typeof item === 'string' && item.trim() !== '')
        .join(' ')

      return name === '' ? {} : { [name]: true }
    }

    if (typeof classes === 'string') {
      const name = classes.trim()

      return name === '' ? {} : { [name]: true }
    }

    return {}
  }

  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes / список классов
   * @returns object with converted class names / объект с преобразованными названиями классов
   */
  protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T {
    if (isObject(classes)) {
      const data: ConstrItem = {}

      forEach(classes, (value, name: string) => {
        if (name.match(/\?\?/)) {
          data[name.replace(/\?\?/, this.getName())] = value
        } else if (name.match(/\?/)) {
          data[name.replace(/\?/, this.getDesign())] = value
        } else {
          data[name] = value
        }
      })

      return data as T
    }

    return {} as T
  }

  /**
   * Getting component names as an array.
   *
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation / название компонента для преобразования
   * @returns component names by levels / названия компонента по уровням
   */
  protected initName(name: string): string[] {
    return forEach(name.split('.', 2), item => toCamelCase(item))
  }
}
