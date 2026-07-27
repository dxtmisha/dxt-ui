import { type ConstrOptions } from '@dxtmisha/functional'

import { TableFlexHeaderItem } from './TableFlexHeaderItem'
import { TableHeaderItemDesign } from '../TableHeaderItem'

import type { TableFlexHeaderItemPropsBasic } from './props'
import type {
  TableFlexHeaderItemClasses,
  TableFlexHeaderItemComponents,
  TableFlexHeaderItemEmits,
  TableFlexHeaderItemExpose
} from './types'

/**
 * TableFlexHeaderItemDesign handles component integration, styles, classes, and markup rendering for the TableFlexHeaderItem constructor.
 *
 * TableFlexHeaderItemDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableFlexHeaderItem.
 */
export class TableFlexHeaderItemDesign<
  COMP extends TableFlexHeaderItemComponents,
  EXPOSE extends TableFlexHeaderItemExpose,
  CLASSES extends TableFlexHeaderItemClasses,
  P extends TableFlexHeaderItemPropsBasic
> extends TableHeaderItemDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the flex table header cell item / конструктор класса элемента ячейки шапки флекс-таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableFlexHeaderItemEmits, P>,
    ItemConstructor: typeof TableFlexHeaderItem = TableFlexHeaderItem
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        body: this.getSubClass('body'),
        sort: this.getSubClass('sort'),
        tooltip: this.getSubClass('tooltip')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
