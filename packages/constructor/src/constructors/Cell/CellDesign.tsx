import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { Cell } from './Cell'

import {
  type CellProps
} from './props'
import {
  type CellClasses,
  type CellComponents,
  type CellEmits,
  type CellExpose,
  type CellSlots
} from './types'

/**
 * CellDesign
 */
export class CellDesign<
  COMP extends CellComponents,
  EXPOSE extends CellExpose,
  CLASSES extends CellClasses,
  P extends CellProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  CellEmits,
  EXPOSE,
  CellSlots,
  CLASSES,
  P
> {
  protected readonly item: Cell

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, CellEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new Cell(
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.event.expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
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
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected initRender(): VNode {
    return h(
      this.props.tag ?? 'div',
      {
        ...this.getAttrs(),
        'class': this.classes?.value.main,
        'data-value': this.props.value,
        'data-divider': this.props.divider ? 'active' : undefined,
        'onClick': this.item.event.onClick
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
   * Generates text elements.
   *
   * Генерирует элементы текста.
   */
  protected renderContext = (): VNode[] => {
    return [
      h(
        'div',
        { class: this.classes?.value.context },
        [
          ...this.item.label.render(),
          ...this.item.caption.render(),
          ...this.item.description.render()
        ]
      )
    ]
  }

  /**
   * Generates a slot for elements on the right.
   *
   * Генерирует слот для элементов справа.
   */
  protected renderTrailing = (): VNode[] => {
    if (
      this.slots
      && 'trailing' in this.slots
    ) {
      return [
        h(
          'div',
          { class: this.classes?.value.contextTrailing },
          this.initSlot('trailing', undefined, this.item.getClassesSub())
        )
      ]
    }

    return []
  }

  /**
   * Generates a slot for elements on the right.
   *
   * Генерирует слот для элементов справа.
   */
  protected renderBody = (): VNode[] => {
    if (
      this.slots
      && 'body' in this.slots
    ) {
      return [
        h(
          'div',
          { class: this.classes?.value.body },
          this.initSlot('body', undefined, this.item.getClassesSub())
        )
      ]
    }

    return []
  }
}
