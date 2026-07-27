import { h, type VNode } from 'vue'
import { type ConstrOptions } from '@dxtmisha/functional'

import { TableFlexRecord } from './TableFlexRecord'
import { TableRecordDesign } from '../TableRecord'

import type { TableFlexRecordPropsBasic } from './props'
import type {
  TableFlexRecordClasses,
  TableFlexRecordComponents,
  TableFlexRecordEmits,
  TableFlexRecordExpose
} from './types'

/**
 * TableFlexRecordDesign handles component integration, styles, classes, and markup rendering for the TableFlexRecord constructor.
 *
 * TableFlexRecordDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableFlexRecord.
 */
export class TableFlexRecordDesign<
  COMP extends TableFlexRecordComponents,
  EXPOSE extends TableFlexRecordExpose,
  CLASSES extends TableFlexRecordClasses,
  P extends TableFlexRecordPropsBasic
> extends TableRecordDesign<
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
   * @param ItemConstructor class constructor for the flex table record item / конструктор класса элемента записи флекс-таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableFlexRecordEmits, P>,
    ItemConstructor: typeof TableFlexRecord = TableFlexRecord
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }

  /**
   * Main render function for the flex table record component.
   *
   * Основная функция рендеринга для компонента записи флекс-таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected override initRender(): VNode {
    const children: any[] = []

    if (this.props.columns) {
      for (const index of this.props.columns) {
        const column = this.item.renderColumn(index)

        if (column) {
          children.push(column)
        }
      }
    }

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value,
      ...this.item.binds
    }, children)
  }
}
