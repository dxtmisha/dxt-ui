import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TableRecord } from './TableRecord'

import type { TableRecordProps } from './props'
import type {
  TableRecordClasses,
  TableRecordComponents,
  TableRecordEmits,
  TableRecordExpose,
  TableRecordSlots
} from './types'

/**
 * TableRecordDesign handles component integration, styles, classes, and markup rendering for the TableRecord constructor.
 *
 * TableRecordDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableRecord.
 */
export class TableRecordDesign<
  COMP extends TableRecordComponents,
  EXPOSE extends TableRecordExpose,
  CLASSES extends TableRecordClasses,
  P extends TableRecordProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  TableRecordEmits,
  EXPOSE,
  TableRecordSlots,
  CLASSES,
  P
> {
  /** TableRecord controller instance / Экземпляр контроллера записи таблицы (TableRecord) */
  protected readonly item: TableRecord

  /**
   * Constructor for TableRecordDesign.
   *
   * Конструктор для TableRecordDesign.
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the table record item / конструктор класса элемента записи таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableRecordEmits, P>,
    ItemConstructor: typeof TableRecord = TableRecord
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
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
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the table record component.
   *
   * Основная функция рендеринга для компонента записи таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    return h('tr', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value,
      ...this.item.binds
    }, this.renderChildren())
  }

  /**
   * Rendering children elements.
   *
   * Рендеринг дочерних элементов.
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  readonly renderChildren = (): any[] => {
    const children: any[] = []

    if (this.props.columns) {
      for (const index of this.props.columns) {
        const column = this.item.renderColumn(index)

        if (column) {
          children.push(column)
        }
      }
    }

    return children
  }
}
