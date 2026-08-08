import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { SliderField } from './SliderField'

import {
  type SliderFieldPropsBasic
} from './props'
import {
  type SliderFieldClasses,
  type SliderFieldComponents,
  type SliderFieldEmits,
  type SliderFieldExpose,
  type SliderFieldSlots
} from './types'

/**
 * SliderFieldDesign class handles the rendering and design layer structure of SliderField.
 * Ties together label, slider picker, numeric input boxes, value labels, message, and status styles.
 *
 * Класс SliderFieldDesign управляет рендерингом и структурой слоя дизайна SliderField.
 * Связывает метку, ползунок слайдера, числовые поля ввода, метки значений, сообщение и стили статусов.
 */
export class SliderFieldDesign<
  COMP extends SliderFieldComponents,
  EXPOSE extends SliderFieldExpose,
  CLASSES extends SliderFieldClasses,
  P extends SliderFieldPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  SliderFieldEmits,
  EXPOSE,
  SliderFieldSlots,
  CLASSES,
  P
> {
  /** Instance of the SliderField logic controller / Экземпляр контроллера логики SliderField */
  protected readonly item: SliderField

  /**
   * Constructor for creating the SliderField design renderer.
   *
   * Конструктор для создания рендерера дизайна SliderField.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
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
      this.element as any,
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
   *
   * Инициализация экспонируемых свойств.
   * @returns exposed properties object / объект экспонируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.value.expose(),
      ...this.item.validation.expose()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes map / частичная карта классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        body: this.getSubClass('body'),
        hidden: this.getSubClass('hidden'),
        labelLeading: this.getSubClass('labelLeading'),
        labelTrailing: this.getSubClass('labelTrailing'),
        inputMin: this.getSubClass('inputMin'),
        inputMax: this.getSubClass('inputMax'),
        value: this.getSubClass('value'),
        slider: this.getSubClass('slider')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles map / карта стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the core SliderField structure.
   *
   * Метод для рендеринга основной структуры SliderField.
   * @returns virtual node for rendering / виртуальный узел для рендеринга
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      [
        ...this.item.fieldLabel.render(this.slots),
        this.renderBody(),
        ...this.item.fieldMessage.render()
      ]
    )
  }

  /**
   * Renders body container inside SliderField.
   *
   * Рендерит контейнер тела внутри SliderField.
   * @returns body virtual node / виртуальный узел тела
   */
  readonly renderBody = (): VNode => {
    const children: (VNode | undefined)[] = [
      ...this.item.icon.render(),
      ...this.renderLabelLeading(),
      ...this.renderLabelTrailing()
    ]

    if (this.props.multiple) {
      if (this.props.showInput) {
        children.push(...this.renderInputMin())
      } else if (this.props.showValue) {
        children.push(this.renderValueMin())
      }
    }

    children.push(...this.renderSlider())

    if (this.props.showInput) {
      children.push(this.renderInputMax())
    } else if (this.props.showValue) {
      children.push(this.renderValueMax())
    }

    return h('div', {
      class: this.classes?.value.body
    }, children.filter((node): node is VNode => node !== undefined))
  }

  /**
   * Renders leading icon and leading label element.
   *
   * Рендерит ведущую иконку и элемент ведущей метки.
   * @returns leading elements virtual nodes / виртуальные узлы ведущих элементов
   */
  readonly renderLabelLeading = (): VNode[] => {
    const children: VNode[] = []

    if (this.props.labelLeading) {
      children.push(
        h('span', {
          class: this.classes?.value.labelLeading
        }, this.props.labelLeading)
      )
    }

    this.initSlot('labelLeading', children)

    return children
  }

  /**
   * Renders trailing label element and trailing icon.
   *
   * Рендерит элемент замыкающей метки и замыкающую иконку.
   * @returns trailing elements virtual nodes / виртуальные узлы замыкающих элементов
   */
  readonly renderLabelTrailing = (): VNode[] => {
    const children: VNode[] = [
      ...this.item.icon.renderIconTrailing()
    ]

    if (this.props.labelTrailing) {
      children.push(
        h('span', {
          class: this.classes?.value.labelTrailing,
          innerHTML: this.props.labelTrailing
        })
      )
    }

    this.initSlot('labelTrailing', children)

    return children
  }

  /**
   * Renders minimum value input field.
   *
   * Рендерит поле ввода минимального значения.
   * @returns minimum input node or undefined / узел минимального ввода или undefined
   */
  readonly renderInputMin = (): VNode[] => {
    if (
      this.props.multiple
      && this.props.showInput
    ) {
      return [
        h('input', {
          'type': 'text',
          'placeholder': this.item.textMin.value,
          'class': this.classes?.value.inputMin,
          'data-type': 'min',
          'onBlur': this.item.onBlur,
          'onFocus': this.item.onFocus,
          'onInput': this.item.onInput
        })
      ]
    }

    return []
  }

  /**
   * Renders minimum value display text.
   *
   * Рендерит отображение минимального значения.
   * @returns minimum value node or undefined / узел минимального значения или undefined
   */
  readonly renderValueMin = (): VNode | undefined => {
    return h('span', {
      class: [(this.classes?.value as Record<string, any>)?.value, 'is-min'],
      innerHTML: this.item.textMin.value
    })
  }

  /**
   * Renders embedded slider component via components manager.
   *
   * Рендерит встроенный компонент слайдера через менеджер компонентов.
   * @returns slider virtual nodes / виртуальные узлы слайдера
   */
  readonly renderSlider = (): VNode[] => {
    const node = this.components.renderOne('slider', {
      ...this.props.sliderAttrs,
      class: this.classes?.value.slider,
      name: this.props.name,
      required: this.props.required,
      value: this.item.value.item.value,
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      multiple: this.props.multiple,
      marks: this.props.marks,
      minimumDistance: this.props.minimumDistance,
      vertical: this.props.vertical,
      magnet: this.props.magnet,
      disabled: this.props.disabled,
      readonly: this.props.readonly,
      onInput: this.item.onSelect,
      onChange: this.item.onChange
    })

    return node ? [node] : []
  }

  /**
   * Renders maximum value input field.
   *
   * Рендерит поле ввода максимального значения.
   * @returns maximum input node or undefined / узел максимального ввода или undefined
   */
  readonly renderInputMax = (): VNode | undefined => {
    return h('input', {
      ...this.props.inputAttrs,
      'type': 'text',
      'placeholder': this.item.textMax.value,
      'class': this.classes?.value.inputMax,
      'data-type': 'max',
      'onBlur': this.item.onBlur,
      'onFocus': this.item.onFocus,
      'onInput': this.item.onInput
    })
  }

  /**
   * Renders maximum value display text.
   *
   * Рендерит отображение максимального значения.
   * @returns maximum value node or undefined / узел максимального значения или undefined
   */
  readonly renderValueMax = (): VNode | undefined => {
    return h('span', {
      class: [(this.classes?.value as Record<string, any>)?.value, 'is-max'],
      innerHTML: this.item.textMax.value
    })
  }
}
