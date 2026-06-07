import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { PaginationButton } from './PaginationButton'
import { PaginationEvent } from './PaginationEvent'
import { PaginationMenuRows } from './PaginationMenuRows'
import { PaginationPage } from './PaginationPage'

import type { PaginationComponents, PaginationEmits, PaginationSlots } from './types'
import type { PaginationProps } from './props'

/**
 * Pagination orchestrator class that coordinates internal sub-modules for managing pages, limit selections, and navigation button configurations.
 *
 * Класс-оркестратор Pagination, координирующий внутренние субмодули для управления страницами, выбором лимита строк и конфигурациями кнопок навигации.
 */
export class Pagination {
  /** Text and translation registry manager instance / Экземпляр менеджера реестра текстов и переводов */
  readonly text: TextInclude
  /** Manager instance handling calculations for page count, row count, value, ranges, and info / Экземпляр менеджера, отвечающий за расчеты количества страниц, строк, активной страницы, диапазонов и информации */
  readonly page: PaginationPage

  /** Instance for working with native click events / Экземпляр для работы со стандартными событиями клика */
  readonly eventClick: EventClickInclude
  /** Class for working with the events / Класс для работы с событиями */
  readonly event: PaginationEvent

  /** Manager instance handling navigation, number buttons, and their event callbacks / Экземпляр менеджера, отвечающий за кнопки навигации, числовые кнопки и их обработчики событий */
  readonly button: PaginationButton
  /** Manager instance handling the rows limit per page selector and option lists / Экземпляр менеджера, отвечающий за лимит строк на странице и списки опций */
  readonly menuRows: PaginationMenuRows

  /**
   * Constructor for orchestrating the Pagination logic subsystems.
   *
   * Конструктор для координации логических подсистем компонента постраничного вывода (Pagination).
   * @param props input reactive properties / входные реактивные свойства
   * @param refs raw properties wrapped as refs / исходные свойства в виде ссылок (refs)
   * @param element root HTML element / корневой HTML-элемент
   * @param classDesign component design system name / имя дизайн-системы компонента
   * @param className base CSS class name / базовое имя CSS класса
   * @param components helper object for dynamic component rendering / вспомогательный объект для динамического рендеринга компонентов
   * @param slots slot definition descriptors / дескрипторы определений слотов
   * @param emits Vue callback emitter function / функция генерации событий Vue
   * @param constructors override constructs object / объект переопределения конструкторов
   * @param constructors.EventClickIncludeConstructor class for working with event click / класс для работы со стандартным событием клика
   * @param constructors.ModelIncludeConstructor class for working with model / класс для работы с моделью
   * @param constructors.PaginationButtonConstructor custom button calculations logic constructor / кастомный конструктор логики вычисления кнопок
   * @param constructors.PaginationEventConstructor custom event management constructor / кастомный конструктор логики событий
   * @param constructors.PaginationMenuRowsConstructor custom rows per page limit selector constructor / кастомный конструктор логики выбора лимита строк
   * @param constructors.PaginationPageConstructor custom page calculations logic constructor / кастомный конструктор логики страниц
   * @param constructors.TextIncludeConstructor custom text management logic constructor / кастомный конструктор менеджера текстов
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly refs: ToRefs<PaginationProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<PaginationComponents, PaginationProps>,
    protected readonly slots?: PaginationSlots,
    protected readonly emits?: ConstrEmit<PaginationEmits>,
    constructors: {
      EventClickIncludeConstructor?: typeof EventClickInclude
      ModelIncludeConstructor?: typeof ModelInclude<number>
      PaginationButtonConstructor?: typeof PaginationButton
      PaginationEventConstructor?: typeof PaginationEvent
      PaginationMenuRowsConstructor?: typeof PaginationMenuRows
      PaginationPageConstructor?: typeof PaginationPage
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      EventClickIncludeConstructor = EventClickInclude,
      ModelIncludeConstructor = ModelInclude,
      PaginationButtonConstructor = PaginationButton,
      PaginationEventConstructor = PaginationEvent,
      PaginationMenuRowsConstructor = PaginationMenuRows,
      PaginationPageConstructor = PaginationPage,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.text = new TextIncludeConstructor(props)
    this.page = new PaginationPageConstructor(
      props,
      refs,
      this.text,
      emits
    )

    this.eventClick = new EventClickIncludeConstructor(props, undefined, emits)
    this.event = new PaginationEventConstructor(
      props,
      this.eventClick,
      emits,
      new ModelIncludeConstructor('value', emits, this.page.valueItem),
      new ModelIncludeConstructor('rows', emits, this.page.rowsItem)
    )

    this.button = new PaginationButtonConstructor(
      props,
      this.page,
      this.event,
      this.text
    )
    this.menuRows = new PaginationMenuRowsConstructor(
      props,
      this.event,
      this.text
    )
  }
}
