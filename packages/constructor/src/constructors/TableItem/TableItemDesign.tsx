import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { TableItem } from './TableItem'

import type { TableItemProps } from './props'
import type {
  TableItemClasses,
  TableItemComponents,
  TableItemEmits,
  TableItemExpose,
  TableItemSlots
} from './types'

/**
 * TableItemDesign handles component integration, styles, classes, and markup rendering for the TableItem constructor.
 *
 * TableItemDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора TableItem.
 */
export class TableItemDesign<
  COMP extends TableItemComponents,
  EXPOSE extends TableItemExpose,
  CLASSES extends TableItemClasses,
  P extends TableItemProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TableItemEmits,
    EXPOSE,
    TableItemSlots,
    CLASSES,
    P
  > {
  /** TableItem controller instance / Экземпляр контроллера ячейки таблицы (TableItem) */
  protected readonly item: TableItem

  /**
   * Constructor
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the table cell item / конструктор класса элемента ячейки таблицы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TableItemEmits, P>,
    ItemConstructor: typeof TableItem = TableItem
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
   * Initializes exposed interface for the table item component.
   *
   * Инициализирует экспортируемые свойства для компонента ячейки таблицы.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Initializes classes for elements in the table item component.
   *
   * Инициализирует классы для элементов компонента ячейки таблицы.
   * @returns object with classes / объект с классами
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

  /**
   * Initializes styles for the table item component.
   *
   * Инициализирует стили для компонента ячейки таблицы.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the table item component.
   *
   * Основная функция рендеринга для компонента ячейки таблицы.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    const children: any[] = this.renderContext()

    return h(
      this.item.tag,
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        ...this.item.binds
      },
      children
    )
  }

  /**
   * Renders the children context of the table item.
   *
   * Рендерит контекст содержимого ячейки таблицы.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderContext = (): VNode[] => {
    const children: any[] = [
      ...this.item.label.render(),
      ...this.item.description.render()
    ]

    this.initSlot('context', children)

    return children
  }
}

