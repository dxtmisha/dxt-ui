import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TableFlexRecord } from './TableFlexRecord'

import {
  type TableFlexRecordPropsBasic
} from './props'
import {
  type TableFlexRecordClasses,
  type TableFlexRecordComponents,
  type TableFlexRecordEmits,
  type TableFlexRecordExpose,
  type TableFlexRecordSlots
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
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TableFlexRecordEmits,
    EXPOSE,
    TableFlexRecordSlots,
    CLASSES,
    P
  > {
  /** TableFlexRecord controller instance / Экземпляр контроллера записи флекс-таблицы (TableFlexRecord) */
  protected readonly item: TableFlexRecord

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
      main: this.item.lazy.classes,
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
    return this.item.lazy.styles
  }

  /**
   * Main render function for the flex table record component.
   *
   * Основная функция рендеринга для компонента записи флекс-таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    const children: any[] = []

    if (this.item.lazy.is()) {
      children.push(this.renderChildren())
    }

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main,
      style: this.styles?.value,
      ...this.item.binds
    }, children)
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
