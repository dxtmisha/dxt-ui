import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ClockDial } from './ClockDial'

import type { ClockDialMarkItem } from './basicTypes'
import type { ClockDialPropsBasic } from './props'
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
  P extends ClockDialPropsBasic
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
      getValue: () => this.item.getValue(),
      setValue: (value?: number) => this.item.setValue(value),
      selectByCoordinates: (clientX: number, clientY: number) => this.item.selectByCoordinates(clientX, clientY)
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
        ...this.item.aria
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
    const selectedValue = this.item.model.getValue()

    const itemVNodes = items.map((item: ClockDialMarkItem, index: number) => {
      const isSelected = item.value === selectedValue
      const content = this.slots?.item
        ? this.initSlot('item', undefined, { item })
        : item.name

      return h(
        'span',
        {
          'key': `${item.value}-${index}`,
          'class': [
            this.classes?.value.value,
            isSelected && `${this.getName()}__value--selected`,
            item.disabled && `${this.getName()}__value--disabled`
          ],
          'data-value': item.value,
          'style': item.style,
          'onClick': this.item.event.onClick
        },
        [
          h(
            'span',
            {
              ref: (element: unknown) => this.item.select.setElement(index, element as HTMLElement | null),
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
        { class: this.classes?.value.list },
        itemVNodes
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
    const arrowChildren: VNode[] = []

    if (this.item.valueItem.isSelectVisible()) {
      arrowChildren.push(
        h('span', {
          class: [
            this.classes?.value.arrow,
            `${this.getName()}__arrow--select`
          ],
          style: this.item.arrows.styleSelect
        })
      )
    } else {
      if (this.item.valueItem.isHourVisible()) {
        arrowChildren.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              `${this.getName()}__arrow--hour`
            ],
            style: this.item.arrows.styleHour
          })
        )
      }

      if (this.item.valueItem.isMinuteVisible()) {
        arrowChildren.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              `${this.getName()}__arrow--minute`
            ],
            style: this.item.arrows.styleMinute
          })
        )
      }

      if (this.item.valueItem.isSecondVisible()) {
        arrowChildren.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              `${this.getName()}__arrow--second`
            ],
            style: this.item.arrows.styleSecond
          })
        )
      }
    }

    return [
      h(
        'div',
        { class: this.classes?.value.info },
        arrowChildren
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
      h('div', { class: this.classes?.value.point })
    ]
  }

  /**
   * Renders custom dial slot container.
   *
   * Рендерит контейнер пользовательского слота циферблата.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderDial = (): VNode[] => {
    return [
      h(
        'div',
        { class: this.classes?.value.dial },
        this.initSlot('default')
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
