import { computed } from 'vue'
import { type ConstrBind, type ListListInputItem } from '@dxtmisha/functional'

import { type TextInclude } from '../../classes/TextInclude'

import type { ButtonPropsBasic } from '../Button'

import { type PaginationEvent } from './PaginationEvent'
import { type PaginationPage } from './PaginationPage'

import type { PaginationProps } from './props'

/**
 * Class for managing the button configurations and action handlers of the pagination component.
 *
 * Класс для управления конфигурациями кнопок и обработчиками действий компонента пагинации.
 */
export class PaginationButton {
  /**
   * Constructor for PaginationButton.
   *
   * Конструктор для PaginationButton.
   * @param props input properties / входные свойства
   * @param page page manager instance / экземпляр менеджера страниц
   * @param event click event control instance / экземпляр управления событием клика
   * @param text text manager instance / экземпляр менеджера текстов
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly page: PaginationPage,
    protected readonly event?: PaginationEvent,
    protected readonly text?: TextInclude
  ) {
  }

  /**
   * Computes the list of page numbers and state details (e.g. selected page) to render individual number button components.
   *
   * Вычисляет список номеров страниц и их состояния (например, активная страница) для рендеринга кнопок выбора конкретных страниц.
   */
  readonly pagination = computed<ListListInputItem[]>(() => {
    const value = this.page.value
    const binds = this.binds
    const data: ListListInputItem[] = []
    const visible = this.props.visible ?? 3
    let start = this.page.value - Math.floor(visible / 2)

    if (start + visible > this.page.pagesCount) {
      start = this.page.pagesCount - visible + 1
    }

    if (start < 1) {
      start = 1
    }

    for (let i = start; i < start + visible; i++) {
      if (i <= this.page.pagesCount) {
        data.push({
          ...binds,
          'label': i.toString(),
          'value': i,
          'selected': value === i,
          'data-event-type': 'page'
        })
      }
    }

    return data
  })

  /**
   * Returns the properties configuration and disabled state for the "Back" page button.
   *
   * Возвращает конфигурацию свойств и состояние активности для кнопки перехода на предыдущую страницу («Назад»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get back(): ConstrBind<ButtonPropsBasic> {
    const value = this.page.value

    return {
      ...this.binds,
      'icon': this.props.iconArrowLeft,
      'value': value - 1,
      'disabled': value <= 1,
      'title': this.text?.previous,
      'data-event-type': 'back'
    }
  }

  /**
   * Returns the properties configuration and disabled state for the "Next" page button.
   *
   * Возвращает конфигурацию свойств и состояние активности для кнопки перехода на следующую страницу («Вперед»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get next(): ConstrBind<ButtonPropsBasic> {
    const value = this.page.value

    return {
      ...this.binds,
      'icon': this.props.iconArrowRight,
      'value': value + 1,
      'disabled': value >= this.page.pagesCount,
      'title': this.text?.next,
      'data-event-type': 'next'
    }
  }

  /**
   * Returns the properties configuration and disabled state for the "First page" button.
   *
   * Возвращает конфигурацию свойств и состояние активности для кнопки перехода на самую первую страницу.
   * @returns button binding properties / свойства привязки кнопки
   */
  get first(): ConstrBind<ButtonPropsBasic> {
    return {
      ...this.binds,
      'icon': this.props.iconArrowFirst,
      'value': 1,
      'disabled': this.page.value <= 1,
      'title': this.text?.first,
      'data-event-type': 'first'
    }
  }

  /**
   * Returns the properties configuration and disabled state for the "Last page" button.
   *
   * Возвращает конфигурацию свойств и состояние активности для кнопки перехода на самую последнюю страницу.
   * @returns button binding properties / свойства привязки кнопки
   */
  get last(): ConstrBind<ButtonPropsBasic> {
    return {
      ...this.binds,
      'icon': this.props.iconArrowLast,
      'value': this.page.pagesCount,
      'disabled': this.page.value >= this.page.pagesCount,
      'title': this.text?.last,
      'data-event-type': 'last'
    }
  }

  /**
   * Returns properties and visibility states (hide/show) for the "Show more" loader button.
   *
   * Возвращает свойства и состояние видимости (скрыть/показать) для кнопки подгрузки следующей страницы («Показать еще»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get more(): ConstrBind<ButtonPropsBasic> {
    return {
      ...this.binds,
      'label': this.text?.more,
      'value': this.page.value + 1,
      'data-event-type': 'more',
      ...this.props.buttonMoreAttrs
    }
  }

  /**
   * Returns properties for the rows per page menu button.
   *
   * Возвращает свойства для кнопки меню количества строк на странице.
   * @returns button binding properties / свойства привязки кнопки
   */
  get menu(): ConstrBind<ButtonPropsBasic> {
    return {
      ...this.binds,
      label: this.props.rows?.toString(),
      iconTrailing: this.props.iconArrowDown,
      onClick: undefined,
      ...this.props.buttonMenuAttrs
    }
  }

  /**
   * Checks if the "Show more" button should be shown.
   *
   * Проверяет, должна ли быть показана кнопка «Показать еще».
   * @returns true if the button should be shown / true, если кнопка должна быть показана
   */
  showMore(): boolean {
    return Boolean(
      this.props.showMore
      && this.page.pagesCount
      && this.page.value < this.page.pagesCount
    )
  }

  /**
   * Returns the base shared properties applied to all navigation and control buttons (size, rounded shape, minimum width, etc.).
   *
   * Возвращает базовые общие свойства, применяемые ко всем кнопкам навигации и управления (размер, скругление, минимальная ширина и т.д.).
   * @returns button binding properties / свойства привязки кнопки
   */
  protected get binds(): ConstrBind<ButtonPropsBasic> {
    return {
      hasLabelMinWidth: false,
      onClick: this.event?.onClick,
      ...this.props.buttonAttrs
    }
  }
}
