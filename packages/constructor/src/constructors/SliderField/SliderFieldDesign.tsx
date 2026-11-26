import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  getObjectNoUndefined,
  type RawSlots
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders body container inside SliderField.
   *
   * Рендерит контейнер тела внутри SliderField.
   * @returns body virtual node array / массив виртуальных узлов тела
   */
  readonly renderBody = (): VNode[] => {
    return [
      h('div', this.getKeyClass('body'), [
        ...this.item.callInstance('icon', item => item.render(), []),
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
   * Renders leading label element and leading slot content.
   *
   * Рендерит элемент ведущей метки и содержимое слота leading.
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
   * Renders trailing label element and trailing slot content.
   *
   * Рендерит элемент замыкающей метки и содержимое слота trailing.
   * @returns trailing elements virtual nodes / виртуальные узлы замыкающих элементов
   */
  readonly renderLabelTrailing = (): VNode[] => {
    const children: VNode[] = []

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
   * @returns minimum input virtual node array / массив виртуальных узлов минимального ввода
   */
  readonly renderInputMin = (): VNode[] => {
    if (
      this.props.multiple
      && this.props.showInput
    ) {
      return [
        h(
          'input',
          mergeProps(
            this.item.ariaInputMin,
            this.item.i('sliderEvent').inputBinds,
            {
              'key': 'inputMin',
              'placeholder': this.item.i('label').min,
              'class': [
                this.classes?.value.input,
                this.classes?.value.inputMin
              ],
              'name': this.item.getName('min'),
              'data-type': 'min'
            }
          )
        )
      ]
    }

    return []
  }

  /**
   * Renders maximum value input field.
   *
   * Рендерит поле ввода максимального значения.
   * @returns maximum input virtual node array / массив виртуальных узлов максимального ввода
   */
  readonly renderInputMax = (): VNode[] => {
    if (this.props.showInput) {
      return [
        h(
          'input',
          mergeProps(
            this.item.ariaInputMax,
            (this.props.inputAttrs ?? {}) as ConstrBind,
            this.item.i('sliderEvent').inputBinds,
            {
              'key': 'inputMax',
              'placeholder': this.item.i('label').max,
              'class': [
                this.classes?.value.input,
                this.classes?.value.inputMax
              ],
              'name': this.item.getName('max'),
              'data-type': 'max'
            }
          )
        )
      ]
    }

    return []
  }

  /**
   * Renders minimum value display text.
   *
   * Рендерит отображение минимального значения.
   * @returns minimum value virtual node array / массив виртуальных узлов минимального значения
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
          this.item.i('label').min
        )
      ]
    }

    return []
  }

  /**
   * Renders maximum value display text.
   *
   * Рендерит отображение максимального значения.
   * @returns maximum value virtual node array / массив виртуальных узлов максимального значения
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
          this.item.i('label').max
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
    const sliderSlots: RawSlots | undefined = this.slots && (
      this.slots.mark
      || this.slots.minLabel
      || this.slots.maxLabel
    )
      ? getObjectNoUndefined({
        mark: this.slots.mark,
        minLabel: this.slots.minLabel,
        maxLabel: this.slots.maxLabel
      }) as RawSlots
      : undefined

    const slider = this.components?.renderOne(
      'slider',
      mergeProps(
        {
          readonly: this.props.readonly,
          disabled: this.props.disabled,
          selected: this.props.selected,

          name: this.props.name,
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
        (this.props.sliderAttrs ?? {}) as ConstrBind,
        {
          class: this.classes?.value.slider,
          value: this.item.i('value').item.value,
          onInputLite: this.item.onSliderInput,
          onChangeLite: this.item.onSliderChange
        }
      ),
      sliderSlots
    )

    if (slider) {
      return [slider]
    }

    return []
  }

  /**
   * Initialization of exposed properties.
   *
   * Инициализация экспонируемых свойств.
   * @returns exposed properties object / объект экспонируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('value').expose(),
      ...this.item.i('validation').expose()
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
        body: this.naming.getSubClass('body'),
        hidden: this.naming.getSubClass('hidden'),
        labelSlider: this.naming.getSubClass('labelSlider'),
        labelLeading: this.naming.getSubClass('labelLeading'),
        labelTrailing: this.naming.getSubClass('labelTrailing'),
        input: this.naming.getSubClass('input'),
        inputMin: this.naming.getSubClass('inputMin'),
        inputMax: this.naming.getSubClass('inputMax'),
        value: this.naming.getSubClass('value'),
        valueMin: this.naming.getSubClass('valueMin'),
        valueMax: this.naming.getSubClass('valueMax'),
        slider: this.naming.getSubClass('slider')
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
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          key: 'main',
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      [
        ...this.item.callInstance('fieldLabel', item => item.render(this.slots), []),
        ...this.renderBody(),
        ...this.item.i('fieldMessage').render()
      ]
    )
  }
}
