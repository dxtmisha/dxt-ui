import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Slider } from './Slider'
import type { SliderPropsBasic } from './props'
import type {
  SliderClasses,
  SliderComponents,
  SliderEmits,
  SliderExpose,
  SliderSlots
} from './types'

/**
 * SliderDesign
 */
export class SliderDesign<
  COMP extends SliderComponents,
  EXPOSE extends SliderExpose,
  CLASSES extends SliderClasses,
  P extends SliderPropsBasic,
  SLOTS extends SliderSlots = SliderSlots
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SliderEmits,
    EXPOSE,
    SLOTS,
    CLASSES,
    P
  > {
  protected readonly item: Slider

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SliderEmits, P>,
    ItemConstructor: typeof Slider = Slider
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
   * Initialization of exposed properties.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Class list preparation.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {
        [`${this.getName()}--vertical`]: Boolean(this.props.vertical),
        [`${this.getName()}--disabled`]: Boolean(this.props.disabled),
        [`${this.getName()}--multiple`]: Boolean(this.props.multiple)
      },
      thumb: this.getSubClass('thumb'),
      label: this.getSubClass('label'),
      rail: this.getSubClass('rail'),
      track: this.getSubClass('track'),
      marks: this.getSubClass('marks'),
      mark: this.getSubClass('mark'),
      select: this.getSubClass('select')
    } as Partial<CLASSES>
  }

  /**
   * Style list preparation.
   */
  protected initStyles(): ConstrStyles {
    return {
      '--_sl__min-x': `${this.item.percentMin.value}%`,
      '--_sl__max-x': `${this.item.percentMax.value}%`
    }
  }

  /**
   * Render function.
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    if (this.props.multiple) {
      children.push(this.renderThumb('min'))
    }
    children.push(this.renderThumb('max'))
    children.push(h('div', { class: this.classes?.value.rail }))
    children.push(h('div', { class: this.classes?.value.track }))

    if (this.item.propMarks.value) {
      children.push(this.renderMarks())
    }

    children.push(
      h('div', {
        class: this.classes?.value.select
      })
    )

    this.initSlot('default' as keyof SLOTS, children as any)

    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        onMousedown: (event: MouseEvent) => this.item.onMousedown(event),
        onTouchstart: (event: TouchEvent) => this.item.onMousedown(event)
      },
      children
    )
  }

  /**
   * Render thumb button (min or max).
   * @param type thumb type
   */
  readonly renderThumb = (type: 'min' | 'max'): VNode => {
    const value = type === 'min' ? this.item.valueMin.value : this.item.valueMax.value

    return h(
      'button',
      {
        key: type,
        class: [
          this.classes?.value.thumb,
          `${this.classes?.value.thumb}--${type}`
        ],
        type: 'button',
        onKeydown: (event: KeyboardEvent) => this.item.onKeydown(event)
      },
      [
        h(
          'span',
          { class: this.classes?.value.label },
          String(value)
        )
      ]
    )
  }

  /**
   * Render marks scale container.
   */
  readonly renderMarks = (): VNode => {
    const markNodes = (this.item.propMarks.value ?? []).map((item) =>
      h('span', {
        key: item.mark,
        class: this.classes?.value.mark,
        style: item.style,
        'data-text': item.text,
        'data-value': item.mark
      })
    )

    return h(
      'div',
      { class: this.classes?.value.marks },
      markNodes
    )
  }
}
