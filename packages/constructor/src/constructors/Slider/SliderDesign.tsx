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
 * Class representing the design constructor for the Slider component.
 *
 * Класс, представляющий конструктор дизайна компонента Slider.
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
   * Initialization of exposed properties for export.
   */
  protected initExpose(): EXPOSE {
    return {
      valueMin: this.item.valueMin,
      valueMax: this.item.valueMax,
      currentValue: this.item.currentValue,
      focusThumb: this.item.focusThumb,
      set: (value: number | number[], type?: 'min' | 'max') => this.item.set(value, type),
      updateValueByThumb: (inputValue: number, eventType?: 'on-input' | 'on-change') =>
        this.item.updateValueByThumb(inputValue, eventType)
    } as EXPOSE
  }

  /**
   * Class list preparation for BEM architecture.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {
        [`${this.getName()}--vertical`]: Boolean(this.props.vertical),
        [`${this.getName()}--disabled`]: Boolean(this.props.disabled),
        [`${this.getName()}--drop`]: this.props.appearance === 'drop'
      },
      rail: this.getSubClass('rail'),
      track: this.getSubClass('track'),
      select: this.getSubClass('select'),
      thumb: this.getSubClass('thumb'),
      thumbMin: this.getSubClass('thumbMin'),
      thumbMax: this.getSubClass('thumbMax'),
      labelMin: this.getSubClass('labelMin'),
      labelMax: this.getSubClass('labelMax'),
      marks: this.getSubClass('marks'),
      mark: this.getSubClass('mark')
    } as Partial<CLASSES>
  }

  /**
   * Style list preparation.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main rendering method.
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    if (this.props.multiple) {
      children.push(this.renderThumbMin())
    }

    children.push(this.renderThumbMax())
    children.push(h('div', { class: [this.classes?.value.rail, `${this.getName()}__rail`] }))
    children.push(h('div', { class: [this.classes?.value.track, `${this.getName()}__track`] }))

    if (this.item.parsedMarks.value) {
      children.push(this.renderMarks())
    }

    children.push(
      h('div', {
        class: [this.classes?.value.select, `${this.getName()}__select`],
        onMousedown: this.item.onMousedown,
        onTouchstart: this.item.onMousedown
      })
    )

    this.initSlot('default' as keyof SLOTS, children as any)

    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main
      },
      children
    )
  }

  /**
   * Render min thumb control button.
   */
  readonly renderThumbMin = (): VNode => {
    const isRipple =
      Boolean(this.props.ripple) && this.props.appearance !== 'drop' && !this.props.disabled

    const thumbChildren: VNode[] = [
      h('span', {
        ref: this.item.elementMinLabel,
        class: [
          this.classes?.value.labelMin,
          `${this.getName()}__label`,
          `${this.getName()}__label--min`
        ]
      })
    ]

    if (isRipple) {
      const rippleComponent = this.components.renderOne('ripple', {}) as VNode | undefined
      if (rippleComponent) {
        thumbChildren.push(rippleComponent)
      }
    }

    return h(
      'button',
      {
        ref: this.item.elementMin,
        type: 'button',
        class: [
          this.classes?.value.thumbMin,
          `${this.getName()}__thumb`,
          `${this.getName()}__thumb--min`
        ],
        disabled: this.props.disabled,
        onKeydown: this.item.onKeydown,
        onMousedown: this.item.onMousedown,
        onTouchstart: this.item.onMousedown
      },
      thumbChildren
    )
  }

  /**
   * Render max thumb control button.
   */
  readonly renderThumbMax = (): VNode => {
    const isRipple =
      Boolean(this.props.ripple) && this.props.appearance !== 'drop' && !this.props.disabled

    const thumbChildren: VNode[] = [
      h('span', {
        ref: this.item.elementMaxLabel,
        class: [
          this.classes?.value.labelMax,
          `${this.getName()}__label`,
          `${this.getName()}__label--max`
        ]
      })
    ]

    if (isRipple) {
      const rippleComponent = this.components.renderOne('ripple', {}) as VNode | undefined
      if (rippleComponent) {
        thumbChildren.push(rippleComponent)
      }
    }

    return h(
      'button',
      {
        ref: this.item.elementMax,
        type: 'button',
        class: [
          this.classes?.value.thumbMax,
          `${this.getName()}__thumb`,
          `${this.getName()}__thumb--max`
        ],
        disabled: this.props.disabled,
        onKeydown: this.item.onKeydown,
        onMousedown: this.item.onMousedown,
        onTouchstart: this.item.onMousedown
      },
      thumbChildren
    )
  }

  /**
   * Render list of marks along the slider track.
   */
  readonly renderMarks = (): VNode => {
    const markNodes = (this.item.parsedMarks.value ?? []).map((markItem) => {
      return h('span', {
        key: markItem.mark,
        class: [this.classes?.value.mark, `${this.getName()}__mark`],
        'data-text': markItem.text,
        'data-value': markItem.value,
        style: markItem.style
      })
    })

    return h(
      'div',
      { class: [this.classes?.value.marks, `${this.getName()}__marks`] },
      markNodes
    )
  }
}
