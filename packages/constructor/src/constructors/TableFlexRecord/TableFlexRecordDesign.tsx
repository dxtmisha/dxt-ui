import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles
} from '@dxtmisha/functional'

import { TableRecordDesign } from '../TableRecord'
import { TableFlexRecord } from './TableFlexRecord'

import type { TableFlexRecordProps } from './props'
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
  P extends TableFlexRecordProps
> extends TableRecordDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /** TableFlexRecord controller instance / Экземпляр контроллера записи флекс-таблицы (TableFlexRecord) */
  protected declare readonly item: TableFlexRecord

  /**
   * Constructor for TableFlexRecordDesign.
   *
   * Конструктор для TableFlexRecordDesign.
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
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns object with classes / объект с классами
   */
  protected override initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected override initStyles(): ConstrStyles {
    return this.item.styles
  }

  /**
   * Main render function for the flex table record component.
   *
   * Основная функция рендеринга для компонента записи флекс-таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected override initRender(): VNode {
    const children: VNode[] = this.item.isRender()
      ? this.renderChildren()
      : []

    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }
}
