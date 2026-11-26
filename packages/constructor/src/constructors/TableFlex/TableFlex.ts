import type { ConstrBind } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Table } from '../Table'

import type { AriaList } from '../../types/ariaTypes'

/**
 * Class representing a flex table constructor (TableFlex).
 * Coordinates flex table rendering, ARIA table role, and div-based tag overrides, inheriting logic from Table.
 *
 * Класс, представляющий конструктор флекс-таблицы (TableFlex).
 * Координирует рендеринг флекс-таблицы, ARIA-роль таблицы и переопределения тегов на div, наследуя логику Table.
 */
export class TableFlex extends Table {
  /**
   * Computed ARIA attributes for the flex table element.
   *
   * Вычисляемые ARIA-атрибуты для элемента флекс-таблицы.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return AriaStaticInclude.role('table')
  }

  /**
   * Computed ARIA attributes for flex table section wrappers (`header`, `items`, `foot`).
   *
   * Вычисляемые ARIA-атрибуты для обёрток секций флекс-таблицы (`header`, `items`, `foot`).
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get ariaSection(): AriaList {
    return AriaStaticInclude.role('rowgroup')
  }

  /**
   * Computed HTML attributes and bindings for the flex table element.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента флекс-таблицы.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  override get binds(): ConstrBind {
    return {
      ...super.binds,
      ...this.aria
    }
  }

  /**
   * Computed HTML attributes and bindings for flex table section wrappers (`header`, `items`, `foot`).
   *
   * Вычисляемые HTML-атрибуты и привязки для обёрток секций флекс-таблицы (`header`, `items`, `foot`).
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  override get bindsSection(): ConstrBind {
    return {
      ...super.bindsSection,
      ...this.ariaSection
    }
  }

  /**
   * Returns the HTML tag for the table.
   *
   * Возвращает HTML-тег для таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tag(): string {
    return 'div'
  }

  /**
   * Returns the HTML tag for the table caption.
   *
   * Возвращает HTML-тег для подписи таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tagCaption(): string {
    return 'div'
  }

  /**
   * Returns the HTML tag for the table colgroup.
   *
   * Возвращает HTML-тег для colgroup таблицы.
   * @returns HTML tag name or undefined / имя HTML-тега или undefined
   */
  override get tagColgroup(): string | undefined {
    return undefined
  }

  /**
   * Returns the HTML tag for the table foot.
   *
   * Возвращает HTML-тег для подвала таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tagFoot(): string {
    return 'div'
  }

  /**
   * Returns the HTML tag for the table header.
   *
   * Возвращает HTML-тег для шапки таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tagHeader(): string {
    return 'div'
  }

  /**
   * Returns the HTML tag for the table items.
   *
   * Возвращает HTML-тег для элементов таблицы.
   * @returns HTML tag name / имя HTML-тега
   */
  override get tagItems(): string {
    return 'div'
  }
}
