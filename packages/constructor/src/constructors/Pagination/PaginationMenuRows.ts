// ai-none

import { computed, mergeProps } from 'vue'
import { type ConstrBind, forEach, type ListList } from '@dxtmisha/functional'

import type { TextInclude } from '../../classes/TextInclude'
import type { MenuPropsBasic } from '../Menu'

import type { PaginationEvent } from './PaginationEvent'
import type { PaginationPage } from './PaginationPage'
import type { PaginationProps } from './props'

/**
 * Class for managing the rows per page menu logic of the pagination component.
 * Builds menu item lists, resolves localized labels, and composes menu bindings with event hooks.
 *
 * Класс для управления логикой меню лимита строк на странице компонента пагинации.
 * Формирует списки пунктов меню, разрешает локализованные метки и собирает привязки меню с обработчиками событий.
 */
export class PaginationMenuRows {
  /**
   * Checks whether the rows-per-page menu should be enabled based on props.
   *
   * Проверяет, должно ли отображаться меню выбора количества строк на основе свойств.
   * @param props component properties / свойства компонента
   * @returns true if menuRows contains at least one item / true, если menuRows содержит хотя бы один элемент
   */
  static is(props?: Readonly<PaginationProps>): boolean {
    return Boolean(props?.menuRows && props.menuRows.length > 0)
  }

  /**
   * Constructor for PaginationMenuRows.
   *
   * Конструктор для PaginationMenuRows.
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
   * Returns list of rows limit options formatted for menu selection (e.g. [{ value: 10, label: '10' }]).
   *
   * Возвращает список вариантов лимита строк, отформатированный для меню выбора (например, [{ value: 10, label: '10' }]).
   */
  readonly menuList = computed<ListList | undefined>(() => {
    if (this.props.menuRows) {
      return forEach(this.props.menuRows, item => ({
        value: item,
        label: item.toString()
      })) as ListList
    }

    return undefined
  })

  /**
   * Returns properties for the rows per page menu component.
   *
   * Возвращает свойства для компонента меню количества строк на странице.
   * @returns menu binding properties / свойства привязки меню
   */
  get binds(): ConstrBind<MenuPropsBasic> {
    const menuAttrs = this.props.menuAttrs

    return mergeProps(
      {
        key: 'menuRows',
        selected: this.page().rows,
        list: this.menuList.value,
        onClick: this.event().onClick
      },
      (menuAttrs ?? {}) as Record<string, unknown>,
      {
        itemAttrs: mergeProps(
          {
            'data-event-type': 'rows'
          },
          (menuAttrs?.itemAttrs ?? {}) as Record<string, unknown>
        )
      }
    ) as ConstrBind<MenuPropsBasic>
  }

  /**
   * Returns localized "Rows per page" text label.
   *
   * Возвращает локализованную метку «Строк на странице».
   * @returns localized label string or undefined / локализованная строка метки или undefined
   */
  get labelRowsPerPage(): string | undefined {
    return this.text().rowsPerPage
  }
}
