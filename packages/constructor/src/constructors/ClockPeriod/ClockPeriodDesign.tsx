import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { ClockPeriod } from './ClockPeriod'
import { ClockPeriodType } from './basicTypes'

import type { ClockPeriodProps } from './props'
import type {
  ClockPeriodClasses,
  ClockPeriodComponents,
  ClockPeriodEmits,
  ClockPeriodExpose,
  ClockPeriodSlots
} from './types'

/**
 * ClockPeriodDesign class for assembling the Vue DOM tree of the AM / PM period selector.
 *
 * Класс ClockPeriodDesign для сборки DOM-дерева Vue селектора периода AM / PM.
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
   * Constructor for creating a ClockPeriodDesign instance.
   *
   * Конструктор для создания экземпляра ClockPeriodDesign.
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
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Renders the AM period button.
   *
   * Рендерит кнопку периода AM.
   * @returns virtual node / виртуальный узел
   */
  readonly renderAm = (): VNode => {
    return this.renderPeriod(ClockPeriodType.am, this.item.i('text').am)
  }

  /**
   * Renders a period button element with selection classes, ARIA attributes, and click handling.
   *
   * Рендерит элемент кнопки периода с классами выбора, ARIA-атрибутами и обработкой клика.
   * @param period period type / тип периода
   * @param label display text label / отображаемая текстовая метка
   * @returns virtual node / виртуальный узел
   */
  readonly renderPeriod = (
    period: ClockPeriodType,
    label?: string
  ): VNode => {
    const isSelected = this.item.i('value').isSelected(period)
    const disabled = !this.item.i('enabled').isEnabled

    return h(
      'button',
      {
        'key': period,
        'type': 'button',
        'class': [
          this.classes?.value.item,
          this.classes?.value[period],
          { [this.naming.getStatusClass('selected')]: isSelected }
        ],
        disabled,
        'tabindex': -1,
        ...this.item.getItemAria(period),
        'data-value': period,
        'onClick': this.item.onClick
      },
      label
    )
  }

  /**
   * Renders the PM period button.
   *
   * Рендерит кнопку периода PM.
   * @returns virtual node / виртуальный узел
   */
  readonly renderPm = (): VNode => {
    return this.renderPeriod(ClockPeriodType.pm, this.item.i('text').pm)
  }

  /**
   * Initialization of exposed properties.
   *
   * Инициализация экспонируемых свойств.
   * @returns expose object / объект экспорта
   */
  protected initExpose(): EXPOSE {
    return {
      get: () => this.item.i('value').get(),
      set: (value?: ClockPeriodType) => this.item.i('value').set(value),
      setByHour: (hour?: number) => this.item.i('value').setByHour(hour)
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.naming.getSubClass('item'),
        am: this.naming.getSubClass('am'),
        pm: this.naming.getSubClass('pm')
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
      [
        this.renderAm(),
        this.renderPm()
      ]
    )
  }
}
