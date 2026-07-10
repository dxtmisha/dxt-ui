import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ProgressBar } from './ProgressBar'
import type { ProgressBarInfoItem } from './basicTypes'
import {
  type ProgressBarClasses,
  type ProgressBarComponents,
  type ProgressBarEmits,
  type ProgressBarExpose,
  type ProgressBarSlots
} from './types'
import {
  type ProgressBarPropsBasic
} from './props'

/**
 * ProgressBarDesign
 *
 * ProgressBarDesign - класс для рендеринга и управления стилями/классами прогресс-бара.
 */
export class ProgressBarDesign<
  COMP extends ProgressBarComponents,
  EXPOSE extends ProgressBarExpose,
  CLASSES extends ProgressBarClasses,
  P extends ProgressBarPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ProgressBarEmits,
    EXPOSE,
    ProgressBarSlots,
    CLASSES,
    P
  > {
  protected readonly item: ProgressBar

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ProgressBarEmits, P>,
    ItemConstructor: typeof ProgressBar = ProgressBar
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
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
        item: this.getSubClass('item'),
        itemLabel: this.getSubClass('item__label'),
        itemProgress: this.getSubClass('item__progress')
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
    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, this.renderList())
  }

  /**
   * Render the progress element.
   *
   * Рендер элемента прогресса.
   * @param item Data about the element / Данные об элементе
   * @returns element Node / узел элемента
   */
  protected readonly renderItem = (item: ProgressBarInfoItem): VNode => {
    const children: VNode[] = []

    if (
      item.label
      && this.props.showLabel
    ) {
      children.push(h(
        'div',
        { class: this.classes?.value.itemLabel },
        item.label
      ))
    }

    children.push(h('div', { class: this.classes?.value.itemProgress }))

    return h(
      'div',
      {
        'class': {
          [this.classes?.value.item ?? '']: true,
          ...item.classes
        },
        'style': item.style,
        'data-index': item.index
      },
      children
    )
  }

  protected readonly renderList = (): VNode[] => {
    const children: VNode[] = []

    this.item.item.value.forEach(item => children.push(this.renderItem(item)))

    return children
  }
}
