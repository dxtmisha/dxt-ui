import { computed } from 'vue'
import { type ConstrEmit, type ConstrBind, type ListListInputItem } from '@dxtmisha/functional'

import { type EventClickInclude } from '../../classes/EventClickInclude'
import { type TextInclude } from '../../classes/TextInclude'
import { type PaginationPage } from './PaginationPage'

import type { ButtonPropsBasic } from '../Button'

import type { PaginationEmits } from './types'
import type { PaginationProps } from './props'
import type { EventClickValue } from '../../types/eventClickTypes.ts'

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
   * @param text text manager instance / экземпляр менеджера текстов
   * @param emits callback for event emitter / функция для генерации событий
   * @param event click event control instance / экземпляр управления событием клика
   */
  constructor(
    protected readonly props: PaginationProps,
    protected readonly page: PaginationPage,
    protected readonly text?: TextInclude,
    protected readonly emits?: ConstrEmit<PaginationEmits>,
    protected readonly event?: EventClickInclude
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
          label: i.toString(),
          value: i,
          selected: value === i
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
      icon: this.props.iconArrowLeft,
      value: value - 1,
      disabled: value <= 1,
      title: this.text?.previous
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
      icon: this.props.iconArrowRight,
      value: value + 1,
      disabled: value >= this.page.pagesCount,
      title: this.text?.next
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
      icon: this.props.iconArrowFirst,
      value: 1,
      disabled: this.page.value <= 1,
      title: this.text?.first
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
      icon: this.props.iconArrowLast,
      value: this.page.pagesCount,
      disabled: this.page.value >= this.page.pagesCount,
      title: this.text?.last
    }
  }

  /**
   * Returns properties and visibility states (hide/show) for the "Show more" loader button.
   *
   * Возвращает свойства и состояние видимости (скрыть/показать) для кнопки подгрузки следующей страницы («Показать еще»).
   * @returns button binding properties with hide state / свойства привязки кнопки с состоянием видимости
   */
  get more(): ConstrBind<ButtonPropsBasic> & { hide: boolean } {
    return {
      ...this.binds,
      label: this.text?.more,
      value: this.page.value + 1,
      hide: !this.page.pagesCount || this.page.value >= this.page.pagesCount
    }
  }

  /**
   * Returns the base shared properties applied to all navigation and control buttons (size, rounded shape, minimum width, etc.).
   *
   * Возвращает базовые общие свойства, применяемые ко всем кнопкам навигации и управления (размер, скругление, минимальная ширина и т.д.).
   * @returns button binding properties / свойства привязки кнопки
   */
  get binds(): ConstrBind<ButtonPropsBasic> {
    return {
      hasLabelMinWidth: false,
      onClick: this.onClick,
      ...this.props.buttonAttrs
    }
  }

  readonly onClick = (
    event: MouseEvent,
    options?: EventClickValue
  ) => {
    this.event?.onClick(event, options)
  }

  /**
   * Event handler triggered on clicking the "Show more" button loader.
   *
   * Обработчик событий клика по кнопке подгрузки следующей страницы («Показать еще»).
   * @param event native click event / нативное событие клика
   * @param options parameters including target value / параметры, содержащие целевое значение страницы
   */
  readonly onMore = (event: MouseEvent, options: { value?: number }): void => {
    if (this.emits) {
      this.emits('more', event, { value: Number(options?.value ?? 1) })
    }
  }
}
