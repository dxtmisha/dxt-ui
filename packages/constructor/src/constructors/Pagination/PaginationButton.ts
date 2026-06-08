import { computed } from 'vue'
import { type ConstrBind, type ListListInputItem } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
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
    const data: ListListInputItem[] = []
    const visible = this.page.visible
    let start = this.page.value - Math.floor(visible / 2)

    if (start + visible > this.page.pagesCount) {
      start = this.page.pagesCount - visible + 1
    }

    if (start < 1) {
      start = 1
    }

    for (let i = start; i < start + visible; i++) {
      if (i <= this.page.pagesCount) {
        data.push(this.getPageItem(i))
      }
    }

    return data
  })

  /**
   * Computes the list of page numbers and state details for the first page button components.
   *
   * Вычисляет список номеров страниц и их состояния для кнопок выбора первых страниц.
   */
  readonly paginationFirst = computed<ListListInputItem[]>(() => {
    const firstItem = this.pagination.value[0] ?? 0
    const data: ListListInputItem[] = []

    if (this.props.showEnds && firstItem) {
      const limit = Math.min(this.page.ends, (firstItem.value as number) - 1)
      for (let i = 1; i <= limit; i++) {
        data.push(this.getPageItem(i))
      }
    }

    console.log('paginationFirst', data)

    return data
  })

  /**
   * Computes the list of page numbers and state details for the last page button components.
   *
   * Вычисляет список номеров страниц и их состояния для кнопок выбора последних страниц.
   */
  readonly paginationLast = computed<ListListInputItem[]>(() => {
    const lastItem = this.pagination.value[this.pagination.value.length - 1]
    const data: ListListInputItem[] = []

    if (this.props.showEnds && lastItem) {
      const from = Math.max((lastItem.value as number) + 1, this.page.pagesCount - this.page.ends + 1)
      for (let i = from; i <= this.page.pagesCount; i++) {
        data.push(this.getPageItem(i))
      }
    }

    console.log('paginationLast', data)

    return data
  })

  /**
   * Checks if the first ellipsis should be shown.
   *
   * Проверяет, должно ли быть показано первое многоточие.
   */
  readonly showFirstEllipsis = computed<boolean>(() => {
    const firstItem = this.pagination.value[0]
    return Boolean(
      this.props.showEnds
      && firstItem
      && this.page.ends < (firstItem.value as number) - 1
    )
  })

  /**
   * Checks if the last ellipsis should be shown.
   *
   * Проверяет, должно ли быть показано последнее многоточие.
   */
  readonly showLastEllipsis = computed<boolean>(() => {
    const lastItem = this.pagination.value[this.pagination.value.length - 1]
    return Boolean(
      this.props.showEnds
      && lastItem
      && this.page.pagesCount - this.page.ends > (lastItem.value as number)
    )
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
      'key': `item__back`,
      'icon': this.props.iconArrowLeft,
      'value': value - 1,
      'disabled': value <= 1,
      'title': this.text?.previous,
      ...AriaStaticInclude.label(this.text?.previous),
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
      'key': `item__next`,
      'icon': this.props.iconArrowRight,
      'value': value + 1,
      'disabled': value >= this.page.pagesCount,
      'title': this.text?.next,
      ...AriaStaticInclude.label(this.text?.next),
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
      'key': `item__first`,
      'icon': this.props.iconArrowFirst,
      'value': 1,
      'disabled': this.page.value <= 1,
      'title': this.text?.first,
      ...AriaStaticInclude.label(this.text?.first),
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
      'key': `item__last`,
      'icon': this.props.iconArrowLast,
      'value': this.page.pagesCount,
      'disabled': this.page.value >= this.page.pagesCount,
      'title': this.text?.last,
      ...AriaStaticInclude.label(this.text?.last),
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
      'key': `item__more`,
      'label': this.text?.more,
      'value': this.page.value + 1,
      ...AriaStaticInclude.label(this.text?.more),
      'data-event-type': 'more',
      ...this.props.buttonMoreAttrs
    }
  }

  /**
   * Returns properties and visibility states (hide/show) for the "Show previous" loader button.
   *
   * Возвращает свойства и состояние видимости (скрыть/показать) для кнопки подгрузки предыдущей страницы («Показать предыдущие»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get morePrev(): ConstrBind<ButtonPropsBasic> {
    return {
      ...this.binds,
      'key': `item__morePrev`,
      'label': this.text?.morePrev,
      'value': this.page.value - 1,
      ...AriaStaticInclude.label(this.text?.morePrev),
      'data-event-type': 'morePrev',
      ...this.props.buttonMorePrevAttrs
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
      key: 'menuControl',
      label: this.props.rows?.toString(),
      iconTrailing: this.props.iconArrowDown,
      ...AriaStaticInclude.label(this.text?.rowsPerPage),
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
   * Checks if the "Show previous" button should be shown.
   *
   * Проверяет, должна ли быть показана кнопка «Показать предыдущие».
   * @returns true if the button should be shown / true, если кнопка должна быть показана
   */
  showMorePrev(): boolean {
    return Boolean(
      this.props.showMorePrev
      && this.page.pagesCount
      && this.page.value > 1
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

  /**
   * Generates a page button object structure for the specified page number.
   *
   * Генерирует структуру объекта кнопки страницы для указанного номера страницы.
   * @param i page number / номер страницы
   * @returns button configuration item / элемент конфигурации кнопки
   */
  protected getPageItem(i: number): ListListInputItem {
    return {
      ...this.binds,
      'key': `item__${i}`,
      'label': i.toString(),
      'value': i,
      'selected': this.page.value === i,
      ...AriaStaticInclude.label(`${this.text?.page} ${i}`.trim()),
      'data-event-type': 'page'
    }
  }
}
