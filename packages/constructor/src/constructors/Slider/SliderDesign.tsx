import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Slider } from './Slider'

import { type SliderPropsBasic } from './props'
import {
  type SliderClasses,
  type SliderComponents,
  type SliderEmits,
  type SliderExpose,
  type SliderSlots
} from './types'

/**
 * SliderDesign class for assembling Vue DOM tree.
 *
 * Класс SliderDesign для сборки DOM-дерева Vue.
 */
export class SliderDesign<
  COMP extends SliderComponents,
  EXPOSE extends SliderExpose,
  CLASSES extends SliderClasses,
  P extends SliderPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SliderEmits,
    EXPOSE,
    SliderSlots,
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
   *
   * Инициализация экспонируемых свойств.
   * @returns expose object / объект экспорта
   */
  protected initExpose(): EXPOSE {
    return {
      getValue: () => this.item.model.getValue(),
      setValue: val => this.item.value.set(val),
      increase: () => this.item.go.increase(),
      decrease: () => this.item.go.decrease()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns classes partial / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {
        ...this.item.classes
      },
      ...{
        // :classes [!] System label / Системная метка
        thumb: this.getSubClass('thumb'),
        thumbMin: this.getSubClass('thumbMin'),
        thumbMax: this.getSubClass('thumbMax'),
        rail: this.getSubClass('rail'),
        track: this.getSubClass('track'),
        marks: this.getSubClass('marks'),
        label: this.getSubClass('label'),
        select: this.getSubClass('select')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles / пользовательские стили
   */
  protected initStyles(): ConstrStyles {
    return {
      ...this.item.styles
    }
  }

  /**
   * Renders minimum thumb handle button for range mode.
   *
   * Рендерит кнопку минимального ползунка для режима диапазона.
   * @returns VNode or undefined / VNode или undefined
   */
  readonly renderThumbMin = (): VNode | undefined => {
    if (!this.props.multiple) {
      return undefined
    }

    const minItem = this.item.minElement.item.value
    const minLabelContent = this.slots?.minLabel
      ? this.slots.minLabel({ value: this.item.value.min, item: minItem })
      : this.item.minElement.label

    const rippleVNode = this.components?.render('ripple', {
      visible: this.item.isRipple()
    })

    return h(
      'button',
      {
        'ref': this.item.minElement.element,
        'class': [this.getSubClass('thumb'), this.getSubClass('thumbMin')],
        'type': 'button',
        'tabindex': this.item.enabled.isEnabled ? 0 : -1,
        'role': 'slider',
        'aria-valuenow': this.item.value.min,
        'aria-valuemin': this.item.marksData.minNumber,
        'aria-valuemax': this.item.value.max,
        'aria-orientation': this.props.vertical ? 'vertical' : 'horizontal',
        ...this.item.enabled.aria,
        'onKeydown': this.item.onKeydown,
        'onMousedown': (event: MouseEvent) => this.item.onMousedown(event, 'min'),
        'onTouchstart': (event: TouchEvent) => this.item.onMousedown(event, 'min')
      },
      [
        h(
          'span',
          {
            ref: this.item.minElement.elementLabel,
            class: this.getSubClass('label')
          },
          [minLabelContent]
        ),
        ...(rippleVNode ? [rippleVNode] : [])
      ]
    )
  }

  /**
   * Renders maximum thumb handle button.
   *
   * Рендерит кнопку максимального ползунка.
   * @returns VNode / VNode ползунка
   */
  readonly renderThumbMax = (): VNode => {
    const maxItem = this.item.maxElement.item.value
    const maxLabelContent = this.slots?.maxLabel
      ? this.slots.maxLabel({ value: this.item.value.max, item: maxItem })
      : this.item.maxElement.label

    const rippleVNode = this.components?.render('ripple', {
      visible: this.item.isRipple()
    })

    return h(
      'button',
      {
        'ref': this.item.maxElement.element,
        'class': [this.getSubClass('thumb'), this.getSubClass('thumbMax')],
        'type': 'button',
        'tabindex': this.item.enabled.isEnabled ? 0 : -1,
        'role': 'slider',
        'aria-valuenow': this.item.value.max,
        'aria-valuemin': this.props.multiple ? this.item.value.min : this.item.marksData.minNumber,
        'aria-valuemax': this.item.marksData.maxNumber,
        'aria-orientation': this.props.vertical ? 'vertical' : 'horizontal',
        ...this.item.enabled.aria,
        'onKeydown': this.item.onKeydown,
        'onMousedown': (event: MouseEvent) => this.item.onMousedown(event, 'max'),
        'onTouchstart': (event: TouchEvent) => this.item.onMousedown(event, 'max')
      },
      [
        h(
          'span',
          {
            ref: this.item.maxElement.elementLabel,
            class: this.getSubClass('label')
          },
          [maxLabelContent]
        ),
        ...(rippleVNode ? [rippleVNode] : [])
      ]
    )
  }

  /**
   * Renders slider background rail element.
   *
   * Рендерит элемент рельса заднего плана слайдера.
   * @returns VNode / VNode рельса
   */
  readonly renderRail = (): VNode => {
    return h('div', {
      class: this.getSubClass('rail')
    })
  }

  /**
   * Renders active track element.
   *
   * Рендерит элемент активной дорожки слайдера.
   * @returns VNode / VNode дорожки
   */
  readonly renderTrack = (): VNode => {
    return h('div', {
      class: this.getSubClass('track')
    })
  }

  /**
   * Renders tick marks container and items.
   *
   * Рендерит контейнер и элементы делений/меток.
   * @returns VNode or undefined / VNode или undefined
   */
  readonly renderMarks = (): VNode | undefined => {
    if (!this.item.marksData.is()) {
      return undefined
    }

    const marksList = this.item.marksData.get()!

    const markVNodes = marksList.map((markItem) => {
      const markSlotContent = this.slots?.mark
        ? this.slots.mark({ item: markItem })
        : undefined

      return h('span', {
        'key': markItem.mark,
        'class': this.getSubClass('mark'),
        'data-text': markItem.text,
        'data-value': markItem.value,
        'style': markItem.style
      }, [markSlotContent])
    })

    return h('div', {
      class: this.getSubClass('marks')
    }, markVNodes)
  }

  /**
   * Renders clickable/touchable interactive selection area.
   *
   * Рендерит кликабельную/интерактивную область выбора.
   * @returns VNode / VNode области выбора
   */
  readonly renderSelect = (): VNode => {
    return h('div', {
      class: this.getSubClass('select'),
      onMousedown: this.item.onMousedown,
      onTouchstart: this.item.onMousedown
    })
  }

  /**
   * A method for rendering main DOM tree.
   *
   * Метод для рендеринга главного DOM-дерева.
   * @returns root VNode / корневой VNode
   */
  protected initRender(): VNode {
    const minThumb = this.renderThumbMin()
    const maxThumb = this.renderThumbMax()
    const rail = this.renderRail()
    const track = this.renderTrack()
    const marks = this.renderMarks()
    const select = this.renderSelect()

    const children: VNode[] = [
      ...(minThumb ? [minThumb] : []),
      maxThumb,
      rail,
      track,
      ...(marks ? [marks] : []),
      select
    ]

    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value
      },
      children
    )
  }
}
