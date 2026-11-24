import { type ComponentPublicInstance, h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isDomRuntime
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

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
      setValue: (value?: number) => this.item.i('model').set(value),
      selectByCoordinates: (clientX: number, clientY: number) =>
        this.item.callInstance('select', item => item.selectByCoordinates(clientX, clientY), null)
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
        list: this.naming.getSubClass('list'),
        value: this.naming.getSubClass('value'),
        name: this.naming.getSubClass('name'),
        info: this.naming.getSubClass('info'),
        arrow: this.naming.getSubClass('arrow'),
        arrowHour: this.naming.getSubClass('arrowHour'),
        arrowMinute: this.naming.getSubClass('arrowMinute'),
        arrowSecond: this.naming.getSubClass('arrowSecond'),
        arrowSelect: this.naming.getSubClass('arrowSelect'),
        point: this.naming.getSubClass('point'),
        dial: this.naming.getSubClass('dial'),
        censor: this.naming.getSubClass('censor')
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
    return {}
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
      mergeProps(
        this.getAttrs(),
        this.item.binds,
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
   * Renders the list of clock numbers and divisions.
   *
   * Рендерит список чисел и делений циферблата часов.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderList = (): VNode[] => {
    const items = this.item.i('list').marks.value
    const valueItem = this.item.i('value')
    const isSelectVisible = valueItem.isSelectVisible()
    const selectedValue = isSelectVisible ? valueItem.value : undefined
    const valueClass = this.classes?.value.value

    if (this.item.hasInstance('select')) {
      this.item.i('select').reset()
    }

    const children = items.map((item: ClockDialMarkItem, index: number) => {
      const isSelected = isSelectVisible && item.value === selectedValue
      const content = this.slots?.item
        ? this.initSlot('item', undefined, { item })
        : item.name

      return h(
        'span',
        {
          'key': `${item.value}-${index}`,
          'class': valueClass
            ? {
                [valueClass]: true,
                [`${valueClass}--selected`]: isSelected,
                [`${valueClass}--disabled`]: item.disabled
              }
            : undefined,
          'data-value': item.value,
          'style': item.style,
          'onClick': item.disabled || this.props.clock ? undefined : this.item.onClick
        },
        [
          h(
            'span',
            {
              ref: (element: Element | ComponentPublicInstance | null) => {
                this.item.callInstance(
                  'select',
                  selectItem => selectItem.setElement(
                    index,
                    isDomRuntime() && element instanceof HTMLElement ? element : null
                  )
                )
              },
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
    const valueItem = this.item.i('value')

    if (valueItem.isArrowSelectVisible()) {
      children.push(
        h('span', {
          class: [
            this.classes?.value.arrow,
            this.classes?.value.arrowSelect
          ],
          style: this.item.i('arrows').styleSelect
        })
      )
    } else if (this.props.clock) {
      if (valueItem.isHourVisible()) {
        children.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              this.classes?.value.arrowHour
            ],
            style: this.item.i('arrows').styleHour
          })
        )
      }

      if (valueItem.isMinuteVisible()) {
        children.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              this.classes?.value.arrowMinute
            ],
            style: this.item.i('arrows').styleMinute
          })
        )
      }

      if (valueItem.isSecondVisible()) {
        children.push(
          h('span', {
            class: [
              this.classes?.value.arrow,
              this.classes?.value.arrowSecond
            ],
            style: this.item.i('arrows').styleSecond
          })
        )
      }
    }

    return [
      h(
        'div',
        {
          ...this.getKeyClass('info'),
          ...AriaStaticInclude.hidden()
        },
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
      h('div', {
        ...this.getKeyClass('point'),
        ...AriaStaticInclude.hidden()
      })
    ]
  }

  /**
   * Renders custom dial slot container.
   *
   * Рендерит контейнер пользовательского слота циферблата.
   * @returns VNode[] array of elements / массив элементов VNode
   */
  readonly renderDial = (): VNode[] => {
    const valueItem = this.item.i('value')
    const content = this.initSlot('default')
      ?? (valueItem.isTextVisible() ? valueItem.text : undefined)

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
    if (this.item.i('value').isSelectVisible()) {
      return [
        h('div', {
          class: this.classes?.value.censor,
          ...AriaStaticInclude.hidden(),
          onMousedown: this.item.onStart,
          onTouchstart: this.item.onStart
        })
      ]
    }

    return []
  }
}
