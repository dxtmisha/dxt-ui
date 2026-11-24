// ai-none

import { computed, mergeProps } from 'vue'
import { type ConstrBind, type ListListInputItem } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import type { TextInclude } from '../../classes/TextInclude'
import type { ButtonPropsBasic } from '../Button'

import type { PaginationEvent } from './PaginationEvent'
import type { PaginationPage } from './PaginationPage'
import type { PaginationProps } from './props'

/**
 * Class for managing button configurations, visible page ranges, ellipsis flags, and action bindings of the pagination component.
 *
 * Класс для управления конфигурациями кнопок, видимыми диапазонами страниц, флагами многоточий и привязками действий компонента пагинации.
 */
export class PaginationButton {
  /**
   * Constructor for PaginationButton.
   *
   * Конструктор для PaginationButton.
   * @param props input properties / входные свойства
   * @param event lazy getter for click event control / ленивый геттер управления событием клика
   * @param page lazy getter for page state manager / ленивый геттер менеджера состояния страниц
   * @param text lazy getter for text manager / ленивый геттер менеджера текстов
   */
  constructor(
    protected readonly props: Readonly<PaginationProps>,
    protected readonly event: () => PaginationEvent,
    protected readonly page: () => PaginationPage,
    protected readonly text: () => TextInclude
  ) {
  }

  /**
   * Computes the list of page numbers and state details (e.g. selected page) to render individual number button components.
   *
   * Вычисляет список номеров страниц и их состояния (например, активная страница) для рендеринга кнопок выбора конкретных страниц.
   */
  readonly pagination = computed<ListListInputItem[]>(() => {
    const data: ListListInputItem[] = []
    const page = this.page()
    const pagesCount = page.pagesCount
    const visible = page.visible

    if (pagesCount <= 0 || visible <= 0) {
      return data
    }

    let start = page.value - Math.floor(visible / 2)

    if (start + visible > pagesCount) {
      start = pagesCount - visible + 1
    }

    if (start < 1) {
      start = 1
    }

    const end = Math.min(start + visible - 1, pagesCount)

    for (let pageNumber = start; pageNumber <= end; pageNumber++) {
      data.push(this.getPageItem(pageNumber))
    }

    return data
  })

  /**
   * Computes the list of page numbers and state details for the first page button components.
   *
   * Вычисляет список номеров страниц и их состояния для кнопок выбора первых страниц.
   */
  readonly paginationFirst = computed<ListListInputItem[]>(() => {
    const firstItem = this.pagination.value[0]
    const data: ListListInputItem[] = []

    if (this.props.showEnds && firstItem) {
      const firstPage = Number(firstItem.value)
      const limit = Math.min(this.page().ends, firstPage - 1)

      for (let pageNumber = 1; pageNumber <= limit; pageNumber++) {
        data.push(this.getPageItem(pageNumber))
      }
    }

    return data
  })

  /**
   * Computes the list of page numbers and state details for the last page button components.
   *
   * Вычисляет список номеров страниц и их состояния для кнопок выбора последних страниц.
   */
  readonly paginationLast = computed<ListListInputItem[]>(() => {
    const pagination = this.pagination.value
    const lastItem = pagination[pagination.length - 1]
    const data: ListListInputItem[] = []

    if (this.props.showEnds && lastItem) {
      const page = this.page()
      const pagesCount = page.pagesCount
      const ends = page.ends

      if (ends > 0 && pagesCount > 0) {
        const lastPage = Number(lastItem.value)
        const from = Math.max(lastPage + 1, pagesCount - ends + 1)

        for (let pageNumber = from; pageNumber <= pagesCount; pageNumber++) {
          data.push(this.getPageItem(pageNumber))
        }
      }
    }

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
      && this.page().ends < Number(firstItem.value) - 1
    )
  })

  /**
   * Checks if the last ellipsis should be shown.
   *
   * Проверяет, должно ли быть показано последнее многоточие.
   */
  readonly showLastEllipsis = computed<boolean>(() => {
    const pagination = this.pagination.value
    const lastItem = pagination[pagination.length - 1]

    return Boolean(
      this.props.showEnds
      && lastItem
      && this.page().pagesCount - this.page().ends > Number(lastItem.value)
    )
  })

  /**
   * Returns the properties configuration and disabled state for the "Back" page button.
   *
   * Возвращает конфигурацию свойств и состояние активности для кнопки перехода на предыдущую страницу («Назад»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get back(): ConstrBind<ButtonPropsBasic> {
    const page = this.page()
    const value = page.value
    const label = this.text().previous

    return {
      ...this.binds,
      'key': 'item__back',
      'icon': this.props.iconArrowLeft,
      'value': Math.max(1, value - 1),
      'disabled': value <= 1 || page.pagesCount <= 0,
      'title': label,
      ...AriaStaticInclude.label(label),
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
    const page = this.page()
    const pagesCount = page.pagesCount
    const value = page.value
    const label = this.text().next

    return {
      ...this.binds,
      'key': 'item__next',
      'icon': this.props.iconArrowRight,
      'value': pagesCount > 0 ? Math.min(pagesCount, value + 1) : 1,
      'disabled': value >= pagesCount,
      'title': label,
      ...AriaStaticInclude.label(label),
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
    const page = this.page()
    const label = this.text().first

    return {
      ...this.binds,
      'key': 'item__first',
      'icon': this.props.iconArrowFirst,
      'value': 1,
      'disabled': page.value <= 1 || page.pagesCount <= 0,
      'title': label,
      ...AriaStaticInclude.label(label),
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
    const page = this.page()
    const pagesCount = page.pagesCount
    const label = this.text().last

    return {
      ...this.binds,
      'key': 'item__last',
      'icon': this.props.iconArrowLast,
      'value': Math.max(1, pagesCount),
      'disabled': page.value >= pagesCount,
      'title': label,
      ...AriaStaticInclude.label(label),
      'data-event-type': 'last'
    }
  }

  /**
   * Returns properties for the rows per page menu button.
   *
   * Возвращает свойства для кнопки меню количества строк на странице.
   * @returns button binding properties / свойства привязки кнопки
   */
  get menu(): ConstrBind<ButtonPropsBasic> {
    return mergeProps(
      this.bindsBase,
      {
        key: 'menuControl',
        label: this.page().rows.toString(),
        iconTrailing: this.props.iconArrowDown,
        ...AriaStaticInclude.label(this.text().rowsPerPage)
      },
      (this.props.buttonMenuAttrs ?? {}) as Record<string, unknown>
    ) as ConstrBind<ButtonPropsBasic>
  }

  /**
   * Returns properties for the "Show more" loader button.
   *
   * Возвращает свойства для кнопки подгрузки следующей страницы («Показать еще»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get more(): ConstrBind<ButtonPropsBasic> {
    const label = this.text().more

    return mergeProps(
      this.binds,
      {
        'key': 'item__more',
        'label': label,
        'value': this.page().value + 1,
        ...AriaStaticInclude.label(label),
        'data-event-type': 'more'
      },
      (this.props.buttonMoreAttrs ?? {}) as Record<string, unknown>
    ) as ConstrBind<ButtonPropsBasic>
  }

  /**
   * Returns properties for the "Show previous" loader button.
   *
   * Возвращает свойства для кнопки подгрузки предыдущей страницы («Показать предыдущие»).
   * @returns button binding properties / свойства привязки кнопки
   */
  get morePrev(): ConstrBind<ButtonPropsBasic> {
    const label = this.text().morePrev

    return mergeProps(
      this.binds,
      {
        'key': 'item__morePrev',
        'label': label,
        'value': Math.max(1, this.page().value - 1),
        ...AriaStaticInclude.label(label),
        'data-event-type': 'morePrev'
      },
      (this.props.buttonMorePrevAttrs ?? {}) as Record<string, unknown>
    ) as ConstrBind<ButtonPropsBasic>
  }

  /**
   * Checks if the "Show more" button should be shown.
   *
   * Проверяет, должна ли быть показана кнопка «Показать еще».
   * @returns true if the button should be shown / true, если кнопка должна быть показана
   */
  showMore(): boolean {
    const page = this.page()

    return Boolean(
      this.props.showMore
      && page.pagesCount > 0
      && page.value < page.pagesCount
    )
  }

  /**
   * Checks if the "Show previous" button should be shown.
   *
   * Проверяет, должна ли быть показана кнопка «Показать предыдущие».
   * @returns true if the button should be shown / true, если кнопка должна быть показана
   */
  showMorePrev(): boolean {
    const page = this.page()

    return Boolean(
      this.props.showMorePrev
      && page.pagesCount > 0
      && page.value > 1
    )
  }

  /**
   * Returns the shared button properties including the pagination click handler.
   *
   * Возвращает общие свойства кнопок, включая обработчик клика пагинации.
   * @returns button binding properties / свойства привязки кнопки
   */
  protected get binds(): ConstrBind<ButtonPropsBasic> {
    return mergeProps(
      this.bindsBase,
      {
        onClick: this.event().onClick
      }
    ) as ConstrBind<ButtonPropsBasic>
  }

  /**
   * Returns the base shared properties applied to all pagination buttons without the page click listener.
   *
   * Возвращает базовые общие свойства всех кнопок пагинации без обработчика клика по странице.
   * @returns base button binding properties / базовые свойства привязки кнопки
   */
  protected get bindsBase(): ConstrBind<ButtonPropsBasic> {
    return mergeProps(
      {
        hasLabelMinWidth: false,
        tabindex: -1
      },
      (this.props.buttonAttrs ?? {}) as Record<string, unknown>
    ) as ConstrBind<ButtonPropsBasic>
  }

  /**
   * Generates a page button object structure for the specified page number.
   *
   * Генерирует структуру объекта кнопки страницы для указанного номера страницы.
   * @param pageNumber page number / номер страницы
   * @returns button configuration item / элемент конфигурации кнопки
   */
  protected getPageItem(pageNumber: number): ListListInputItem {
    const isSelected = this.page().value === pageNumber
    const pagePrefix = this.text().page ?? ''

    return {
      ...this.binds,
      'key': `item__${pageNumber}`,
      'label': pageNumber.toString(),
      'value': pageNumber,
      'selected': isSelected,
      ...(isSelected ? AriaStaticInclude.current('page') : {}),
      ...AriaStaticInclude.label(`${pagePrefix} ${pageNumber}`.trim()),
      'data-event-type': 'page'
    }
  }
}
