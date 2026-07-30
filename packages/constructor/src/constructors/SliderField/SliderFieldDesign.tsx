import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { SliderDesign } from '../Slider/SliderDesign'
import { SliderField } from './SliderField'
import type { SliderFieldPropsBasic } from './props'
import type {
  SliderFieldClasses,
  SliderFieldComponents,
  SliderFieldEmits,
  SliderFieldExpose,
  SliderFieldSlots
} from './types'

/**
 * SliderFieldDesign
 */
export class SliderFieldDesign<
  COMP extends SliderFieldComponents,
  EXPOSE extends SliderFieldExpose,
  CLASSES extends SliderFieldClasses,
  P extends SliderFieldPropsBasic,
  SLOTS extends SliderFieldSlots = SliderFieldSlots
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SliderFieldEmits,
    EXPOSE,
    SLOTS,
    CLASSES,
    P
  > {
  protected readonly item: SliderField

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
    options?: ConstrOptions<COMP, SliderFieldEmits, P>,
    ItemConstructor: typeof SliderField = SliderField
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
        [`${this.getName()}--disabled`]: Boolean(this.props.disabled)
      },
      hidden: this.getSubClass('hidden'),
      label: this.getSubClass('label'),
      body: this.getSubClass('body'),
      icon: this.getSubClass('icon'),
      text: this.getSubClass('text'),
      input: this.getSubClass('input'),
      value: this.getSubClass('value'),
      slider: this.getSubClass('slider'),
      validation: this.getSubClass('validation'),
      helper: this.getSubClass('helper')
    } as Partial<CLASSES>
  }

  /**
   * Style list preparation.
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Render function.
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    children.push(this.renderHiddenInput())

    if (this.props.text) {
      children.push(this.renderLabel())
    }

    children.push(this.renderBody())

    if (this.props.validationMessage) {
      children.push(
        h(
          'div',
          { class: [this.classes?.value.validation, `${this.getName()}__validation`] },
          this.props.validationMessage
        )
      )
    } else if (this.props.helperMessage) {
      children.push(
        h(
          'div',
          { class: [this.classes?.value.helper, `${this.getName()}__helper`] },
          this.props.helperMessage
        )
      )
    }

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
   * Render hidden form input.
   */
  readonly renderHiddenInput = (): VNode => {
    return h('input', {
      type: 'hidden',
      class: this.classes?.value.hidden,
      name: this.props.name,
      value: this.item.propValueString.value,
      required: this.props.required
    })
  }

  /**
   * Render header label.
   */
  readonly renderLabel = (): VNode => {
    const labelChildren: VNode[] = [h('span', undefined, this.props.text)]

    if (this.props.showLabel) {
      labelChildren.push(
        h('span', { class: `${this.getName()}__label-value` }, ` (${this.item.textLabel.value})`)
      )
    }

    return h('label', { class: this.classes?.value.label }, labelChildren)
  }

  /**
   * Render body container.
   */
  readonly renderBody = (): VNode => {
    const bodyChildren: VNode[] = []

    if (this.props.icon) {
      bodyChildren.push(
        (this.components.renderOne('icon', {
          icon: this.props.icon,
          class: [this.classes?.value.icon, `${this.getName()}__icon--leading`]
        }) as VNode) ?? h('span')
      )
    }

    if (this.props.textLeading) {
      bodyChildren.push(
        h(
          'span',
          { class: [this.classes?.value.text, `${this.getName()}__text--leading`] },
          this.props.textLeading
        )
      )
    }

    if (this.props.multiple) {
      bodyChildren.push(this.renderMinControl())
    }

    bodyChildren.push(this.renderSlider())

    bodyChildren.push(this.renderMaxControl())

    if (this.props.textTrailing) {
      bodyChildren.push(
        h(
          'span',
          { class: [this.classes?.value.text, `${this.getName()}__text--trailing`] },
          this.props.textTrailing
        )
      )
    }

    if (this.props.iconTrailing) {
      bodyChildren.push(
        (this.components.renderOne('icon', {
          icon: this.props.iconTrailing,
          class: [this.classes?.value.icon, `${this.getName()}__icon--trailing`]
        }) as VNode) ?? h('span')
      )
    }

    return h('div', { class: this.classes?.value.body }, bodyChildren)
  }

  /**
   * Render min control (input or value span).
   */
  readonly renderMinControl = (): VNode => {
    if (this.props.showInput) {
      return h('input', {
        type: 'number',
        class: [this.classes?.value.input, `${this.getName()}__input--min`],
        value: this.item.textMin.value,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        onInput: (event: Event) =>
          this.item.onInputMinMax(
            parseFloat((event.target as HTMLInputElement).value) || 0,
            'min'
          )
      })
    }
    if (this.props.showValue) {
      return h(
        'span',
        { class: [this.classes?.value.value, `${this.getName()}__value--min`] },
        this.item.textMin.value
      )
    }
    return h('span')
  }

  /**
   * Render max control (input or value span).
   */
  readonly renderMaxControl = (): VNode => {
    if (this.props.showInput) {
      return h('input', {
        type: 'number',
        class: [this.classes?.value.input, `${this.getName()}__input--max`],
        value: this.item.textMax.value,
        disabled: this.props.disabled,
        readonly: this.props.readonly,
        onInput: (event: Event) =>
          this.item.onInputMinMax(
            parseFloat((event.target as HTMLInputElement).value) || 0,
            'max'
          )
      })
    }
    if (this.props.showValue) {
      return h(
        'span',
        { class: [this.classes?.value.value, `${this.getName()}__value--max`] },
        this.item.textMax.value
      )
    }
    return h('span')
  }

  /**
   * Render embedded Slider picker.
   */
  readonly renderSlider = (): VNode => {
    const sliderComponent = this.components.renderOne(
      'slider',
      toBinds(
        {
          class: this.classes?.value.slider,
          value: this.props.value,
          modelValue: this.props.modelValue,
          min: this.props.min,
          max: this.props.max,
          step: this.props.step,
          multiple: this.props.multiple,
          vertical: this.props.vertical,
          disabled: this.props.disabled,
          readonly: this.props.readonly,
          marks: this.props.marks,
          magnet: this.props.magnet,
          minimumDistance: this.props.minimumDistance,
          ripple: this.props.ripple,
          onInput: this.item.onSelect,
          onChange: this.item.onChange
        }
      )
    )

    if (sliderComponent) {
      return sliderComponent as VNode
    }

    const embeddedSliderDesign = new SliderDesign(
      `${this.getName()}__slider`,
      this.props as any,
      {
        emits: this.emits as any
      }
    )
    return (embeddedSliderDesign.render() as unknown) as VNode
  }
}
