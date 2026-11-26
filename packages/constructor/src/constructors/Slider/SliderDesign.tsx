import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Skeleton, type SkeletonClassesList } from '../Skeleton'

import { Slider } from './Slider'

import type { SliderMarkItem, SliderValueType } from './basicTypes'
import type { SliderPropsBasic } from './props'
import type {
  SliderClasses,
  SliderComponents,
  SliderEmits,
  SliderExpose,
  SliderSlots
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
  /** Instance of the Slider logic controller / Экземпляр контроллера логики Slider */
  protected readonly item: Slider

  /**
   * Constructor.
   *
   * Конструктор.
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of exposed properties.
   *
   * Инициализация экспонируемых свойств.
   * @returns expose object / объект экспорта
   */
  protected initExpose(): EXPOSE {
    return {
      getValue: () => this.item.i('model').get(),
      setValue: (value: SliderValueType) => this.item.i('value').set(value),
      increase: () => this.item.i('go').increase(),
      decrease: () => this.item.i('go').decrease()
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
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        rail: this.naming.getSubClass('rail'),
        thumb: this.naming.getSubClass('thumb'),
        thumbMin: this.naming.getSubClass('thumbMin'),
        thumbMax: this.naming.getSubClass('thumbMax'),
        track: this.naming.getSubClass('track'),
        marks: this.naming.getSubClass('marks'),
        mark: this.naming.getSubClass('mark'),
        label: this.naming.getSubClass('label'),
        select: this.naming.getSubClass('select')
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
    return this.item.styles
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
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      children
    )
  }

  /**
   * Renders minimum thumb handle button for range mode.
   *
   * Рендерит кнопку минимального ползунка для режима диапазона.
   * @returns VNode array / массив VNode
   */
  readonly renderThumbMin = (): VNode[] => {
    return this.item.callInstance('thumbMin', (thumbMin) => {
      if (!this.props.multiple) {
        return []
      }

      const minLabelContent = this.props.showThumbLabel
        ? (
            this.slots?.minLabel
              ? this.initSlot('minLabel', undefined, thumbMin.getSlot())
              : thumbMin.label
          )
        : undefined

      return [
        h(
          'button',
          {
            type: 'button',
            ref: thumbMin.element,
            class: [
              this.classes?.value.thumb,
              this.classes?.value.thumbMin,
              this.getSkeletonClass('classBackgroundAfter')
            ],
            tabindex: this.item.tabindex,
            ...thumbMin.aria,
            ...this.item.i('enabled').aria,
            ...this.item.eventsMin
          },
          this.renderThumbContent(minLabelContent)
        )
      ]
    }, [])
  }

  /**
   * Renders maximum thumb handle button.
   *
   * Рендерит кнопку максимального ползунка.
   * @returns VNode array / массив VNode ползунка
   */
  readonly renderThumbMax = (): VNode[] => {
    const thumbMax = this.item.i('thumbMax')
    const maxLabelContent = this.props.showThumbLabel
      ? (
          this.slots?.maxLabel
            ? this.initSlot('maxLabel', undefined, thumbMax.getSlot())
            : thumbMax.label
        )
      : undefined

    return [
      h(
        'button',
        {
          type: 'button',
          ref: thumbMax.element,
          class: [
            this.classes?.value.thumb,
            this.classes?.value.thumbMax,
            this.getSkeletonClass('classBackgroundAfter')
          ],
          tabindex: this.item.tabindex,
          ...thumbMax.aria,
          ...this.item.i('enabled').aria,
          ...this.item.eventsMax
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
   * @returns VNode array / массив элементов VNode
   */
  readonly renderThumbContent = (label?: string | VNode | VNode[]): VNode[] => {
    const children: VNode[] = []

    if (this.props.showThumbLabel) {
      children.push(
        h(
          'span',
          this.getKeyClass('label'),
          label
        )
      )
    }

    if (!this.props.isSkeleton) {
      children.push(...this.item.callInstance('ripple', item => item.render(), []))
    }

    return children
  }

  /**
   * Renders slider background rail element.
   *
   * Рендерит элемент рельса заднего плана слайдера.
   * @returns VNode array / массив VNode рельса
   */
  readonly renderRail = (): VNode[] => {
    return [
      h('div', {
        class: [
          this.classes?.value.rail,
          this.getSkeletonClass('classBackground')
        ],
        ...AriaStaticInclude.hidden()
      })
    ]
  }

  /**
   * Renders active track element.
   *
   * Рендерит элемент активной дорожки слайдера.
   * @returns VNode array / массив VNode дорожки
   */
  readonly renderTrack = (): VNode[] => {
    return [
      h('div', {
        ...this.getKeyClass('track'),
        ...AriaStaticInclude.hidden()
      })
    ]
  }

  /**
   * Renders tick marks container and items.
   *
   * Рендерит контейнер и элементы делений/меток.
   * @returns VNode array / массив VNode
   */
  readonly renderMarks = (): VNode[] => {
    const marksList = this.item.i('marksData').get()

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
   * @param index optional item index for unique key / опциональный индекс элемента для уникального ключа
   * @returns VNode / VNode метки
   */
  readonly renderMarkItem = (
    markItem: SliderMarkItem,
    index?: number
  ): VNode => {
    return h(
      'span',
      {
        'key': index !== undefined ? `${markItem.mark}-${index}` : markItem.mark,
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
   * @returns VNode array / массив VNode области выбора
   */
  readonly renderSelect = (): VNode[] => {
    return [
      h('div', {
        class: this.classes?.value.select,
        ...AriaStaticInclude.hidden(),
        onMousedown: this.item.onMousedown,
        onTouchstart: this.item.onMousedown
      })
    ]
  }

  /**
   * Renders hidden input element.
   *
   * Рендерит скрытый элемент input.
   * @returns VNode array / массив элементов VNode
   */
  readonly renderInput = (): VNode[] => {
    return [
      h(
        'input',
        mergeProps(
          {
            name: this.props.name,
            type: 'hidden',
            value: this.item.i('value').get() ?? '',
            required: this.props.required
          },
          (this.props.inputAttrs ?? {}) as ConstrBind
        )
      )
    ]
  }

  /**
   * Resolves a skeleton utility class without eagerly instantiating SkeletonInclude.
   *
   * Возвращает служебный класс скелетона без преждевременной инициализации SkeletonInclude.
   * @param key skeleton class key / ключ класса скелетона
   * @returns resolved CSS class name / вычисленное имя CSS-класса
   */
  protected getSkeletonClass(key: keyof SkeletonClassesList): string {
    return this.item.callInstance(
      'skeleton',
      item => item.classesSkeleton[key],
      () => Skeleton.getClassesListByDesign(this.naming.getDesign())[key]
    )
  }
}
