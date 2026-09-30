import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ClockPeriod } from './ClockPeriod'

import type { ClockPeriodItem } from './basicTypes'
import type { ClockPeriodProps } from './props'
import type {
  ClockPeriodClasses,
  ClockPeriodComponents,
  ClockPeriodEmits,
  ClockPeriodExpose,
  ClockPeriodSlots
} from './types'

/**
 * ClockPeriodDesign class for assembling Vue DOM tree.
 *
 * Класс ClockPeriodDesign для сборки DOM-дерева Vue.
 */
export class ClockPeriodDesign<
  COMP extends ClockPeriodComponents,
  EXPOSE extends ClockPeriodExpose,
  CLASSES extends ClockPeriodClasses,
  P extends ClockPeriodProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ClockPeriodEmits,
    EXPOSE,
    ClockPeriodSlots,
    CLASSES,
    P
  > {
  /** Instance of the ClockPeriod logic controller / Экземпляр контроллера логики ClockPeriod */
  protected readonly item: ClockPeriod

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
    options?: ConstrOptions<COMP, ClockPeriodEmits, P>,
    ItemConstructor: typeof ClockPeriod = ClockPeriod
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
      setValue: this.item.model.set
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
        item: this.getSubClass('item'),
        label: this.getSubClass('label')
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
    return h(
      'div',
      {
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        ...this.item.binds
      },
      this.renderItems()
    )
  }

  /**
   * Renders the array of period item buttons.
   *
   * Рендерит массив кнопок элементов периода.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderItems = (): VNode[] => {
    return this.item.list.items.value.map((item: ClockPeriodItem) => this.renderItem(item))
  }

  /**
   * Renders an individual period item button.
   *
   * Рендерит отдельную кнопку элемента периода.
   * @param item period item data / данные элемента периода
   * @returns virtual node / виртуальный узел
   */
  readonly renderItem = (item: ClockPeriodItem): VNode => {
    const isSelected = item.selected
    const content = this.slots?.item
      ? this.initSlot('item', undefined, { item })
      : item.label

    return h(
      'button',
      {
        key: item.value,
        type: 'button',
        class: {
          [this.classes?.value.item!]: true,
          [`${this.classes?.value.item}--selected`]: isSelected,
          [`${this.classes?.value.item}--disabled`]: item.disabled,
          [`${this.classes?.value.item}--${item.value}`]: true
        },
        disabled: item.disabled,
        tabindex: -1,
        role: 'radio',
        'aria-checked': isSelected ? 'true' : 'false',
        'data-value': item.value,
        onClick: (event: MouseEvent) => this.item.event.onClick(event, item.value)
      },
      [
        h(
          'span',
          { class: this.classes?.value.label },
          content
        )
      ]
    )
  }
}
