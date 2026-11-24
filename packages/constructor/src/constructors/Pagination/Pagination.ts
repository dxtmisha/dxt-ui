import { getCurrentInstance, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComponents,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AreaInclude } from '../../classes/AreaInclude'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { FocusDirectionInclude } from '../../classes/FocusDirectionInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { PaginationButton } from './PaginationButton'
import { PaginationEvent } from './PaginationEvent'
import { PaginationMenuRows } from './PaginationMenuRows'
import { PaginationPage } from './PaginationPage'

import type { AriaList } from '../../types/ariaTypes'
import type { PaginationProps } from './props'
import type { PaginationComponents, PaginationEmits, PaginationSlots } from './types'

/** Pagination dependency constructors type / Тип конструкторов зависимостей Pagination */
export type PaginationConstructors = {
  /** Area manager constructor / Конструктор менеджера области */
  area: typeof AreaInclude
  /** Button configurations manager constructor / Конструктор менеджера конфигураций кнопок */
  button: typeof PaginationButton
  /** Pagination event router constructor / Конструктор маршрутизатора событий пагинации */
  event: typeof PaginationEvent
  /** Native click event manager constructor / Конструктор менеджера стандартных событий клика */
  eventClick: typeof EventClickInclude
  /** Directional keyboard focus navigation constructor / Конструктор направленной клавиатурной навигации фокуса */
  focusDirection: typeof FocusDirectionInclude
  /** Rows-per-page menu manager constructor / Конструктор менеджера меню выбора количества строк */
  menuRows: typeof PaginationMenuRows
  /** Model rows synchronizer constructor / Конструктор синхронизатора модели количества строк */
  modelRows: typeof ModelInclude<number>
  /** Model value synchronizer constructor / Конструктор синхронизатора модели активной страницы */
  modelValue: typeof ModelInclude<number>
  /** Page calculation and state manager constructor / Конструктор менеджера вычислений и состояния страниц */
  page: typeof PaginationPage
  /** Text and localization registry manager constructor / Конструктор менеджера реестра текстов и локализации */
  text: typeof TextInclude
}

/**
 * Pagination orchestrator class coordinating page calculations, rows-per-page menu,
 * navigation buttons, events, directional keyboard focus, area context, and WAI-ARIA bindings
 * with lazy dependency instantiation and unified lifecycle management.
 *
 * Класс-оркестратор Pagination, координирующий расчёты страниц, меню выбора количества строк,
 * кнопки навигации, события, направленную клавиатурную навигацию фокуса, контекст области и WAI-ARIA привязки
 * с ленивой инициализацией зависимостей и единым управлением жизненным циклом.
 */
export class Pagination extends DesignLogicAbstract<
  HTMLDivElement,
  PaginationComponents,
  PaginationEmits,
  PaginationSlots,
  PaginationProps,
  PaginationConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<PaginationConstructors> = {
    area: {
      item: AreaInclude,
      parameters: () => [this.props]
    },
    button: {
      item: PaginationButton,
      parameters: () => [
        this.props,
        () => this.i('event'),
        () => this.i('page'),
        () => this.i('text')
      ]
    },
    event: {
      item: PaginationEvent,
      parameters: () => [
        () => this.i('eventClick'),
        () => this.i('modelRows'),
        () => this.i('modelValue'),
        () => this.i('page'),
        this.emits
      ]
    },
    eventClick: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        undefined,
        this.emits
      ]
    },
    focusDirection: {
      item: FocusDirectionInclude,
      parameters: () => [
        () => this.element.value,
        `.${this.naming.getSubClass('button')}:not(:disabled)`,
        `.${this.naming.getDesign()}-button--selected`,
        `${this.naming.getDesign()}-button--focus`
      ]
    },
    menuRows: {
      item: PaginationMenuRows,
      canCreate: () => PaginationMenuRows.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('event'),
        () => this.i('page'),
        () => this.i('text')
      ]
    },
    modelRows: {
      item: ModelInclude<number>,
      parameters: () => [
        'rows',
        this.emits
      ]
    },
    modelValue: {
      item: ModelInclude<number>,
      parameters: () => [
        'value',
        this.emits
      ]
    },
    page: {
      item: PaginationPage,
      parameters: () => [
        this.props,
        () => this.i('text')
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Constructor for orchestrating the Pagination logic subsystems.
   * Eagerly instantiates the area provider synchronously during setup so Vue provide() registers cleanly.
   *
   * Конструктор для координации логических подсистем компонента пагинации.
   * Синхронно инициализирует провайдер области во время setup для корректной регистрации Vue provide().
   * @param props input reactive properties / входные реактивные свойства
   * @param element root HTML element reference / ссылка на корневой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components helper object for dynamic component rendering / вспомогательный объект для динамического рендеринга компонентов
   * @param slots slot definition descriptors / дескрипторы определений слотов
   * @param emits Vue callback emitter function / функция генерации событий Vue
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register component lifecycle hooks / регистрировать ли хуки жизненного цикла компонента
   */
  constructor(
    props: Readonly<PaginationProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComponents<PaginationComponents, PaginationProps>,
    slots?: PaginationSlots,
    emits?: ConstrEmit<PaginationEmits>,
    constructors?: Partial<PaginationConstructors>,
    hasLifecycle: boolean = true
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors,
      hasLifecycle
    )

    if (getCurrentInstance()) {
      this.i('area')
    }
  }

  /**
   * Returns WAI-ARIA attributes for the root navigation landmark.
   *
   * Возвращает WAI-ARIA атрибуты для корневого ориентира навигации.
   * @returns ARIA attributes dictionary / словарь ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('navigation'),
      ...AriaStaticInclude.label(this.i('text').pagination)
    }
  }

  /**
   * Returns binding attributes for the root container element combining keyboard focus navigation and ARIA attributes.
   *
   * Возвращает атрибуты привязки для корневого контейнера, объединяющие клавиатурную навигацию фокуса и ARIA-атрибуты.
   * @returns root element bindings / привязки корневого элемента
   */
  get binds(): ConstrBind {
    return {
      ...this.i('focusDirection').binds,
      ...this.aria
    }
  }

  /**
   * Checks whether the pagination container should be rendered based on hideIfOne and total page count.
   *
   * Проверяет, должен ли рендериться контейнер пагинации с учётом hideIfOne и общего числа страниц.
   * @returns true if pagination should be rendered / true, если пагинация должна рендериться
   */
  isRender(): boolean {
    return !this.props.hideIfOne || this.i('page').pagesCount > 1
  }
}
