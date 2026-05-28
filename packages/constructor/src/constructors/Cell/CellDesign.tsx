import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Cell } from './Cell'

import {
  type CellPropsBasic
} from './props'
import {
  type CellClasses,
  type CellComponents,
  type CellEmits,
  type CellExpose,
  type CellSlots
} from './types'

/**
 * CellDesign handles component integration, styles, classes, and markup rendering for the Cell constructor.
 *
 * CellDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора Cell.
 */
export class CellDesign<
  COMP extends CellComponents,
  EXPOSE extends CellExpose,
  CLASSES extends CellClasses,
  P extends CellPropsBasic
 > extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  CellEmits,
  EXPOSE,
  CellSlots,
  CLASSES,
  P
> {
  /** Cell controller instance / Экземпляр контроллера ячейки (Cell) */
  protected readonly item: Cell

  /**
   * Constructor for CellDesign.
   *
   * Конструктор для CellDesign.
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the cell item / конструктор класса элемента ячейки
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CellEmits, P>,
    ItemConstructor: typeof Cell = Cell
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
   * Initializes exposed interface for the cell component.
   *
   * Инициализирует экспортируемые свойства для компонента ячейки.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose
    } as EXPOSE
  }

  /**
   * Initializes classes for elements in the cell component.
   *
   * Инициализирует классы для элементов компонента ячейки.
   * @returns object with classes / объект с классами
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        context: this.getSubClass('context'),
        contextTrailing: this.getSubClass('contextTrailing'),
        label: this.getSubClass('label'),
        description: this.getSubClass('description'),
        caption: this.getSubClass('caption'),
        icon: this.getSubClass('icon'),
        trailing: this.getSubClass('trailing'),
        body: this.getSubClass('body'),
        loading: this.getSubClass('loading')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initializes styles for the cell component.
   *
   * Инициализирует стили для компонента ячейки.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the cell component.
   *
   * Основная функция рендеринга для компонента ячейки.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
   */
  protected initRender(): VNode {
    return h(
      this.props.tag ?? 'div',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        ...this.item.binds
      },
      [
        ...this.item.icon.render(),
        ...this.renderContext(),
        ...this.renderTrailing(),
        ...this.renderBody(),
        ...this.item.ripple.render(),
        ...this.item.progress.render()
      ]
    )
  }

  /**
   * Renders the text context container containing label, caption, and description.
   *
   * Рендерит контейнер текстового контекста, содержащий метку, подпись и описание.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  protected renderContext = (): VNode[] => {
    return [
      h(
        'div',
        {
          key: 'context',
          class: this.classes?.value.context
        },
        [
          ...this.item.label.render(),
          ...this.item.caption.render(),
          ...this.item.description.render()
        ]
      )
    ]
  }

  /**
   * Renders trailing elements container if a trailing slot is provided.
   *
   * Рендерит контейнер хвостовых элементов, если передан слот trailing.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  protected renderTrailing = (): VNode[] => {
    if (
      this.slots
      && 'trailing' in this.slots
    ) {
      return [
        h(
          'div',
          {
            key: 'trailing',
            class: this.classes?.value.contextTrailing
          },
          this.initSlot('trailing', undefined, this.item.classesSub)
        )
      ]
    }

    return []
  }

  /**
   * Renders the inner body container if a body slot is provided.
   *
   * Рендерит контейнер внутреннего тела, если передан слот body.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  protected renderBody = (): VNode[] => {
    if (
      this.slots
      && 'body' in this.slots
    ) {
      return [
        h(
          'div',
          {
            key: 'body',
            class: this.classes?.value.body
          },
          this.initSlot('body', undefined, this.item.classesSub)
        )
      ]
    }

    return []
  }
}
