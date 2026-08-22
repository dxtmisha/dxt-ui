import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ClockDial } from './ClockDial'

import type { ClockDialMarkItem } from './basicTypes'
import type { ClockDialProps } from './props'
import type {
  ClockDialClasses,
  ClockDialComponents,
  ClockDialEmits,
  ClockDialExpose,
  ClockDialSlots
} from './types'

/**
 * ClockDialDesign class for assembling Vue DOM tree.
 *
 * Класс ClockDialDesign для сборки DOM-дерева Vue.
 */
export class ClockDialDesign<
  COMP extends ClockDialComponents,
  EXPOSE extends ClockDialExpose,
  CLASSES extends ClockDialClasses,
  P extends ClockDialProps
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  ClockDialEmits,
  EXPOSE,
  ClockDialSlots,
  CLASSES,
  P
> {
  /** Instance of the ClockDial logic controller / Экземпляр контроллера логики ClockDial */
  protected readonly item: ClockDial

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
    options?: ConstrOptions<COMP, ClockDialEmits, P>,
    ItemConstructor: typeof ClockDial = ClockDial
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
      getValue: this.item.model.getValue,
      setValue: this.item.model.set,
      selectByCoordinates: this.item.select.selectByCoordinates
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
        list: this.getSubClass('list'),
        value: this.getSubClass('value'),
        name: this.getSubClass('name'),
        info: this.getSubClass('info'),
        arrow: this.getSubClass('arrow'),
        arrowHour: this.getSubClass('arrowHour'),
        arrowMinute: this.getSubClass('arrowMinute'),
        arrowSecond: this.getSubClass('arrowSecond'),
        arrowSelect: this.getSubClass('arrowSelect'),
        point: this.getSubClass('point'),
        dial: this.getSubClass('dial'),
        censor: this.getSubClass('censor')
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
      ...this.renderList(),
      ...this.renderInfo(),
      ...this.renderPoint(),
      ...this.renderDial(),
      ...this.renderCensor()
    ]

    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.binds
      },
      children
    )
  }

  /**
   * Renders the list of clock numbers and divisions.
   *
   * Рендерит список чисел и делений циферблата часов.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderList = (): VNode[] => {
    const items = this.item.list.marks.value
    const selectedValue = this.item.valueItem.value

    this.item.select.reset()

    const children = items.map((item: ClockDialMarkItem, index: number) => {
      const isSelected = item.value === selectedValue && this.item.valueItem.isSelectVisible()
      const content = this.slots?.item
        ? this.initSlot('item', undefined, { item })
        : item.name

      return h(
        'span',
        {
          'key': `${item.value}-${index}`,
          'class': {
            [`${this.classes?.value.value}`]: true,
            [`${this.classes?.value.value}--selected`]: isSelected,
            [`${this.classes?.value.value}--disabled`]: item.disabled
          },
          'data-value': item.value,
          'style': item.style,
          'onClick': this.item.event.onClick
        },
        [
          h(
            'span',
            {
              ref: (element: any) => this.item.select.setElement(index, element),
              class: this.classes?.value.name
            },
            content
          )
        ]
      )
    })

    return [
      h(
        'div',
        this.getKeyClass('list'),
        children
      )
    ]
  }

  /**
   * Renders clock hands (arrows) container and active arrows.
   *
   * Рендерит контейнер стрелок часов и активные стрелки.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderInfo = (): VNode[] => {
    const children: VNode[] = []

    if (this.item.valueItem.isArrowSelectVisible()) {
      children.push(
        h('span', {
          class: [
            this.classes?.value.arrow,
            this.classes?.value.arrowSelect
          ],
          style: this.item.arrows.styleSelect
        })
      )
    } else if (this.props.clock) {
      if (this.item.valueItem.isHourVisible()) {
        children.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              this.classes?.value.arrowHour
            ],
            style: this.item.arrows.styleHour
          })
        )
      }

      if (this.item.valueItem.isMinuteVisible()) {
        children.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              this.classes?.value.arrowMinute
            ],
            style: this.item.arrows.styleMinute
          })
        )
      }

      if (this.item.valueItem.isSecondVisible()) {
        children.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              this.classes?.value.arrowSecond
            ],
            style: this.item.arrows.styleSecond
          })
        )
      }
    }

    return [
      h(
        'div',
        this.getKeyClass('info'),
        children
      )
    ]
  }

  /**
   * Renders center pin point of clock dial.
   *
   * Рендерит центральную точку циферблата часов.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderPoint = (): VNode[] => {
    return [
      h('div', this.getKeyClass('point'))
    ]
  }

  /**
   * Renders custom dial slot container.
   *
   * Рендерит контейнер пользовательского слота циферблата.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderDial = (): VNode[] => {
    const content = this.initSlot('default')
      ?? (this.item.valueItem.isTextVisible() ? this.item.valueItem.text : undefined)

    return [
      h(
        'div',
        this.getKeyClass('dial'),
        content
      )
    ]
  }

  /**
   * Renders interactive censor drag overlay.
   *
   * Рендерит интерактивный слой перетаскивания (цензор).
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderCensor = (): VNode[] => {
    if (this.item.valueItem.isSelectVisible()) {
      return [
        h('div', {
          class: this.classes?.value.censor,
          onMousedown: this.item.event.onStart,
          onTouchstart: this.item.event.onStart
        })
      ]
    }

    return []
  }
}
