import { TableItemInclude } from '../TableItem'

/**
 * TableHeaderItemInclude class provides functionality for rendering table header cell items
 * within other components. It manages cell-level configuration and slot resolving.
 *
 * // @note
 * When extending this class:
 * - Place properties and event listeners that are static or change RARELY during the component's
 *   lifetime (such as style configurations, constant bindings, or callbacks) inside `toBinds()`.
 * - Merge properties that change FREQUENTLY/CONSTANTLY during runtime (such as active state,
 *   values, or open states) inside `getAttrs()` to ensure correct and optimal reactive updates.
 *
 *  Класс TableHeaderItemInclude предоставляет функциональность для рендеринга элементов ячеек шапки таблицы
 * внутри других компонентов. Управляет конфигурацией на уровне ячеек и разрешением слотов.
 */
export class TableHeaderItemInclude extends TableItemInclude {
  /** Component sub-name / Дополнительное имя компонента */
  protected readonly name = 'tableHeaderItem'

  /**
   * Returns the slots name based on the column index for header items.
   *
   * Возвращает имя слота на основе индекса колонки для элементов шапки.
   * @param index column index / индекс колонки
   * @returns slots name / имя слота
   */
  protected override getSlotsName(index: string): string {
    return `header-${super.getSlotsName(index)}`
  }
}
