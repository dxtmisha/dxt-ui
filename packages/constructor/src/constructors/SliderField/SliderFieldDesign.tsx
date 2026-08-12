import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
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
        labelSlider: this.getSubClass('labelSlider'),
        labelLeading: this.getSubClass('labelLeading'),
        labelTrailing: this.getSubClass('labelTrailing'),
        input: this.getSubClass('input'),
        inputMin: this.getSubClass('inputMin'),
        inputMax: this.getSubClass('inputMax'),
        value: this.getSubClass('value'),
        valueMin: this.getSubClass('valueMin'),
        valueMax: this.getSubClass('valueMax'),
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
        key: 'main',
        ...this.getAttrs(),
        class: this.classes?.value.main
      },
      [
        ...this.item.fieldLabel.render(this.slots),
        ...this.renderBody(),
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
  readonly renderBody = (): VNode[] => {
    return [
      h('div', {
        key: 'body',
        class: this.classes?.value.body
      }, [
        ...this.item.icon.render(),
        ...this.renderLabelLeading(),
        ...this.renderInputMin(),
        ...this.renderValueMin(),
        ...this.renderSlider(),
        ...this.renderValueMax(),
        ...this.renderInputMax(),
        ...this.renderLabelTrailing()
      ])
    ]
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
          key: 'labelLeading',
          class: [
            this.classes?.value.labelSlider,
            this.classes?.value.labelLeading
          ]
        }, this.props.labelLeading)
      )
    }

    this.initSlot('leading', children)

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
        h(
          'span',
          {
            key: 'labelTrailing',
            class: [
              this.classes?.value.labelSlider,
              this.classes?.value.labelTrailing
            ]
          },
          this.props.labelTrailing
        )
      )
    }

    this.initSlot('trailing', children)

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
          'key': 'inputMin',
          'type': 'text',
          'placeholder': this.item.label.min,
          'class': [
            this.classes?.value.input,
            this.classes?.value.inputMin
          ],
          'data-type': 'min',
          ...this.item.sliderEvent.inputEvents
        })
      ]
    }

    return []
  }

  /**
   * Renders maximum value input field.
   *
   * Рендерит поле ввода максимального значения.
   * @returns maximum input node or undefined / узел максимального ввода или undefined
   */
  readonly renderInputMax = (): VNode[] => {
    if (this.props.showInput) {
      return [
        h('input', {
          'key': 'inputMax',
          ...this.props.inputAttrs,
          'type': 'text',
          'placeholder': this.item.label.max,
          'class': [
            this.classes?.value.input,
            this.classes?.value.inputMax
          ],
          'data-type': 'max',
          ...this.item.sliderEvent.inputEvents
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
  readonly renderValueMin = (): VNode[] => {
    if (
      this.props.multiple
      && this.props.showValue
      && !this.props.showInput
    ) {
      return [
        h(
          'span',
          {
            key: 'valueMin',
            class: [
              this.classes?.value.value,
              this.classes?.value.valueMin
            ]
          },
          this.item.label.min
        )
      ]
    }

    return []
  }

  /**
   * Renders maximum value display text.
   *
   * Рендерит отображение максимального значения.
   * @returns maximum value node or undefined / узел максимального значения или undefined
   */
  readonly renderValueMax = (): VNode[] => {
    if (
      this.props.showValue
      && !this.props.showInput
    ) {
      return [
        h(
          'span',
          {
            key: 'valueMax',
            class: [
              this.classes?.value.value,
              this.classes?.value.valueMax
            ]
          },
          this.item.label.max
        )
      ]
    }

    return []
  }

  /**
   * Renders embedded slider component via components manager.
   *
   * Рендерит встроенный компонент слайдера через менеджер компонентов.
   * @returns slider virtual nodes / виртуальные узлы слайдера
   */
  readonly renderSlider = (): VNode[] => {
    const slider = this.components.renderOne(
      'slider',
      toBinds(
        {
          readonly: this.props.readonly,
          disabled: this.props.disabled,

          name: this.props.name,
          value: this.item.value.item.value,
          marks: this.props.marks,
          magnet: this.props.magnet,

          keyLabel: this.props.keyLabel,
          keyValue: this.props.keyValue,

          required: this.props.required,
          step: this.props.step,
          min: this.props.min,
          max: this.props.max,
          multiple: this.props.multiple,
          minimumDistance: this.props.minimumDistance,

          showThumbLabel: this.props.showThumbLabel,
          vertical: this.props.vertical,
          isSkeleton: this.props.isSkeleton,
          inputAttrs: this.props.inputAttrs

        },
        this.props.sliderAttrs,
        {
          class: this.classes?.value.slider,
          onInputLite: this.item.sliderEvent.onSliderInput,
          onChangeLite: this.item.sliderEvent.onSliderChange
        }
      )
    )

    if (slider) {
      return [slider]
    }

    return []
  }
}
