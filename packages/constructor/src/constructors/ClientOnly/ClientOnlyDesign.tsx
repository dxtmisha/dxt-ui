import type { VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ClientOnly } from './ClientOnly'

import type {
  ClientOnlyPropsBasic
} from './props'
import type {
  ClientOnlyClasses,
  ClientOnlyComponents,
  ClientOnlyEmits,
  ClientOnlyExpose,
  ClientOnlySlots
} from './types'

/**
 * ClientOnlyDesign constructor class responsible for conditional client-side slot rendering.
 *
 * Класс-конструктор ClientOnlyDesign, отвечающий за условный рендеринг слота на стороне клиента.
 */
export class ClientOnlyDesign<
  COMP extends ClientOnlyComponents,
  EXPOSE extends ClientOnlyExpose,
  CLASSES extends ClientOnlyClasses,
  P extends ClientOnlyPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ClientOnlyEmits,
    EXPOSE,
    ClientOnlySlots,
    CLASSES,
    P
  > {
  /** ClientOnly logic orchestrator instance / Экземпляр оркестратора логики ClientOnly */
  protected readonly item: ClientOnly

  /**
   * Constructor for creating a ClientOnlyDesign instance.
   *
   * Конструктор для создания экземпляра ClientOnlyDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструктора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ClientOnlyEmits, P>,
    ItemConstructor: typeof ClientOnly = ClientOnly
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
   * A method for rendering the default slot when client-only conditions allow it.
   *
   * Метод для рендеринга слота по умолчанию, когда условия client-only позволяют это.
   * @returns virtual node or undefined / виртуальная нода или undefined
   */
  protected initRender(): VNode | undefined {
    if (this.item.isRender()) {
      return this.initSlot('default')
    }

    return undefined
  }
}
