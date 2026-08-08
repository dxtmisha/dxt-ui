import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { Slider } from './Slider'

import { type SliderMarkItem } from './basicTypes'
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
        rail: this.getSubClass('rail'),
        thumb: this.getSubClass('thumb'),
        thumbMin: this.getSubClass('thumbMin'),
        thumbMax: this.getSubClass('thumbMax'),
        track: this.getSubClass('track'),
        marks: this.getSubClass('marks'),
        mark: this.getSubClass('mark'),
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
   * A method for rendering main DOM tree.
   *
   * Метод для рендеринга главного DOM-дерева.
   * @returns root VNode / корневой VNode
   */
  protected initRender(): VNode {
    const children: VNode[] = [
      ...this.renderRail(),
      ...this.renderTrack(),
      ...this.renderThumbMin(),
      ...this.renderThumbMax(),
      ...this.renderMarks(),
      ...this.renderSelect(),
      ...this.renderInput()
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

  /**
   * Renders minimum thumb handle button for range mode.
   *
   * Рендерит кнопку минимального ползунка для режима диапазона.
   * @returns VNode or undefined / VNode или undefined
   */
  readonly renderThumbMin = (): VNode[] => {
    if (this.props.multiple) {
      const minLabelContent = this.slots?.minLabel
        ? this.initSlot('minLabel', undefined, this.item.minElement.getSlot())
        : this.item.minElement.label

      return [
        h(
          'button',
          {
            ref: this.item.minElement.element,
            class: [
              this.classes?.value.thumb,
              this.classes?.value.thumbMin,
              this.item.skeleton.classesSkeleton.classBackgroundAfter
            ],
            tabindex: this.item.tabindex,
            ...this.item.minElement.aria,
            ...this.item.enabled.aria,
            ...this.item.event.eventsMin
          },
          this.renderThumbContent(minLabelContent)
        )
      ]
    }

    return []
  }

  /**
   * Renders maximum thumb handle button.
   *
   * Рендерит кнопку максимального ползунка.
   * @returns VNode / VNode ползунка
   */
  readonly renderThumbMax = (): VNode[] => {
    const maxLabelContent = this.slots?.maxLabel
      ? this.initSlot('maxLabel', undefined, this.item.maxElement.getSlot())
      : this.item.maxElement.label

    return [
      h(
        'button',
        {
          ref: this.item.maxElement.element,
          class: [
            this.classes?.value.thumb,
            this.classes?.value.thumbMax,
            this.item.skeleton.classesSkeleton.classBackgroundAfter
          ],
          tabindex: this.item.tabindex,
          ...this.item.maxElement.aria,
          ...this.item.enabled.aria,
          ...this.item.event.eventsMax
        },
        this.renderThumbContent(maxLabelContent)
      )
    ]
  }

  /**
   * Renders inner elements of thumb button (label element and ripple effect).
   *
   * Рендерит внутренние элементы кнопки ползунка (элемент метки и эффект волны).
   * @param label label content / содержимое метки
   * @returns VNode[] / массив элементов VNode
   */
  readonly renderThumbContent = (label?: any): VNode[] => {
    const children: VNode[] = []

    if (this.props.showThumbLabel) {
      children.push(
        h(
          'span',
          { class: this.classes?.value.label },
          label
        )
      )
    }

    children.push(...this.renderRipple())

    return children
  }

  /**
   * Renders slider background rail element.
   *
   * Рендерит элемент рельса заднего плана слайдера.
   * @returns VNode / VNode рельса
   */
  readonly renderRail = (): VNode[] => {
    return [
      h('div', {
        class: [
          this.classes?.value.rail,
          this.item.skeleton.classesSkeleton.classBackground
        ]
      })
    ]
  }

  /**
   * Renders active track element.
   *
   * Рендерит элемент активной дорожки слайдера.
   * @returns VNode / VNode дорожки
   */
  readonly renderTrack = (): VNode[] => {
    return [
      h('div', { class: this.classes?.value.track })
    ]
  }

  /**
   * Renders tick marks container and items.
   *
   * Рендерит контейнер и элементы делений/меток.
   * @returns VNode or undefined / VNode или undefined
   */
  readonly renderMarks = (): VNode[] => {
    const marksList = this.item.marksData.get()

    if (marksList) {
      const children = marksList.map(this.renderMarkItem)

      return [
        h('div', {
          class: this.classes?.value.marks,
          ...AriaStaticInclude.hidden()
        }, children)
      ]
    }

    return []
  }

  /**
   * Renders single mark element.
   *
   * Рендерит отдельный элемент метки.
   * @param markItem mark item configuration / конфигурация элемента метки
   * @returns VNode / VNode метки
   */
  readonly renderMarkItem = (markItem: SliderMarkItem): VNode => {
    return h(
      'span',
      {
        'key': markItem.mark,
        'class': this.classes?.value.mark,
        'data-label': markItem.label,
        'data-value': markItem.value,
        'style': markItem.style
      },
      this.initSlot('mark', undefined, { item: markItem })
    )
  }

  /**
   * Renders clickable/touchable interactive selection area.
   *
   * Рендерит кликабельную/интерактивную область выбора.
   * @returns VNode / VNode области выбора
   */
  readonly renderSelect = (): VNode[] => {
    return [
      h('div', {
        class: this.classes?.value.select,
        onMousedown: this.item.event.onMousedown,
        onTouchstart: this.item.event.onMousedown
      })
    ]
  }

  /**
   * Renders ripple animation component if active.
   *
   * Рендерит компонент анимации волны (ripple), если активен.
   * @returns VNode or undefined / VNode или undefined
   */
  readonly renderRipple = (): VNode[] => {
    return this.components?.render('ripple', {
      visible: this.item.isRipple()
    })
  }

  /**
   * Renders hidden input element.
   *
   * Рендерит скрытый элемент input.
   * @returns VNode[] / массив элементов VNode
   */
  readonly renderInput = (): VNode[] => {
    return [
      h('input', {
        name: this.props.name,
        type: 'hidden',
        value: this.item.value.get() || '',
        required: this.props.required,
        ...this.props.inputAttrs
      })
    ]
  }
}
