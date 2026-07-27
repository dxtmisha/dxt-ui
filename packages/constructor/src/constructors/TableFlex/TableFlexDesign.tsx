import { type ConstrOptions } from '@dxtmisha/functional'

import { TableFlex } from './TableFlex'
import { TableDesign } from '../Table'

import type { TableFlexPropsBasic } from './props'
import type {
  TableFlexClasses,
  TableFlexComponents,
  TableFlexEmits,
  TableFlexExpose
} from './types'

/**
 * TableFlexDesign handles component integration, styles, classes, and markup rendering for the TableFlex constructor.
 *
 * TableFlexDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableFlex.
 */
export class TableFlexDesign<
  COMP extends TableFlexComponents,
  EXPOSE extends TableFlexExpose,
  CLASSES extends TableFlexClasses,
  P extends TableFlexPropsBasic
> extends TableDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor for TableFlexDesign.
   *
   * Конструктор для TableFlexDesign.
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the flex table / конструктор класса флекс-таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableFlexEmits, P>,
    ItemConstructor: typeof TableFlex = TableFlex
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
   * @returns object with classes / объект с классами
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        table: this.getSubClass('table'),
        colgroup: this.getSubClass('colgroup'),
        col: this.getSubClass('col'),
        header: this.getSubClass('header'),
        foot: this.getSubClass('foot'),
        items: this.getSubClass('items'),
        caption: this.getSubClass('caption')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }
}
