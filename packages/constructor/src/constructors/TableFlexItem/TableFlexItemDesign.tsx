import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { TableFlexItem } from './TableFlexItem'
import { TableItemDesign } from '../TableItem'

import {
  type TableFlexItemPropsBasic
} from './props'
import {
  type TableFlexItemClasses,
  type TableFlexItemComponents,
  type TableFlexItemEmits,
  type TableFlexItemExpose
} from './types'

/**
 * TableFlexItemDesign handles component integration, styles, classes, and markup rendering for the TableFlexItem constructor.
 *
 * TableFlexItemDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableFlexItem.
 */
export class TableFlexItemDesign<
  COMP extends TableFlexItemComponents,
  EXPOSE extends TableFlexItemExpose,
  CLASSES extends TableFlexItemClasses,
  P extends TableFlexItemPropsBasic
> extends TableItemDesign<
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
   * @param ItemConstructor class constructor for the flex table cell item / конструктор класса элемента ячейки флекс-таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableFlexItemEmits, P>,
    ItemConstructor: typeof TableFlexItem = TableFlexItem
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
        description: this.getSubClass('description')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
