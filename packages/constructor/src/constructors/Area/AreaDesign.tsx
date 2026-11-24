import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isFunction
} from '@dxtmisha/functional'

import { Area } from './Area'

import type {
  AreaPropsBasic
} from './props'
import type {
  AreaClasses,
  AreaComponents,
  AreaEmits,
  AreaExpose,
  AreaSlots
} from './types'

/**
 * AreaDesign constructor class responsible for selecting and rendering the active area slot.
 *
 * Класс-конструктор AreaDesign, отвечающий за выбор и рендеринг активного слота области.
 */
export class AreaDesign<
  COMP extends AreaComponents,
  EXPOSE extends AreaExpose,
  CLASSES extends AreaClasses,
  P extends AreaPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    AreaEmits,
    EXPOSE,
    AreaSlots,
    CLASSES,
    P
  > {
  /** Area logic orchestrator instance / Экземпляр оркестратора логики Area */
  protected readonly item: Area

  /**
   * Constructor for creating an AreaDesign instance.
   *
   * Конструктор для создания экземпляра AreaDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, AreaEmits, P>,
    ItemConstructor: typeof Area = Area
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the matched area slot or fallback default slot.
   *
   * Метод для рендеринга совпавшего слота области или резервного слота по умолчанию.
   * @returns virtual node or undefined / виртуальная нода или undefined
   */
  protected initRender(): VNode | undefined {
    const area = this.item.area

    if (this.slots) {
      if (
        area
        && Object.hasOwn(this.slots, area)
        && isFunction(this.slots[area])
      ) {
        return this.initSlot(area)
      }

      if (isFunction(this.slots.default)) {
        return this.initSlot('default')
      }
    }

    return undefined
  }
}
