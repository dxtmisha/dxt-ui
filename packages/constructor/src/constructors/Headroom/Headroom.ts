import { type Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { HeadroomInclude } from '../../classes/HeadroomInclude'

import type { HeadroomProps } from './props'
import type {
  HeadroomComponents,
  HeadroomEmits,
  HeadroomExpose,
  HeadroomSlots
} from './types'

/** Headroom dependency constructors type / Тип конструкторов зависимостей Headroom */
export type HeadroomConstructors = {
  /** Headroom logic include constructor / Конструктор логики включения headroom */
  headroom: typeof HeadroomInclude
}

/**
 * Headroom logic orchestrator class managing sticky header position and scroll status calculations.
 *
 * Класс-оркестратор логики Headroom, управляющий липким положением шапки и вычислениями состояния прокрутки.
 */
export class Headroom extends DesignLogicAbstract<
  HTMLDivElement,
  HeadroomComponents,
  HeadroomEmits,
  HeadroomSlots,
  HeadroomProps,
  HeadroomConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<HeadroomConstructors> = {
    headroom: {
      item: HeadroomInclude,
      conditions: () => HeadroomInclude.is(this.props),
      parameters: () => [
        this.props,
        this.element,
        this.naming,
        this.emits
      ]
    }
  }

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors dependency injection overrides object / объект переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<HeadroomProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<HeadroomComponents, HeadroomProps>,
    slots?: HeadroomSlots,
    emits?: ConstrEmit<HeadroomEmits>,
    constructors?: Partial<HeadroomConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )
  }

  /**
   * Returns exposed headroom values and methods.
   *
   * Возвращает экспонируемые значения и методы headroom.
   * @returns object with exposed properties and methods / объект с экспонируемыми свойствами и методами
   */
  get expose(): HeadroomExpose {
    return this.i('headroom').expose
  }

  /**
   * Returns HTML tag for the headroom container element.
   *
   * Возвращает HTML-тег для элемента контейнера headroom.
   * @returns tag name / название тега
   */
  get tag(): string {
    return this.props.tag || 'div'
  }
}
