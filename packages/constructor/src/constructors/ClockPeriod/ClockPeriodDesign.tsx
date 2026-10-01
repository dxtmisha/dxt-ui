import { h, type VNode } from 'vue'
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
      get: this.item.model.get,
      set: this.item.model.set
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
        item: this.getSubClass('item'),
        am: this.getSubClass('am'),
        pm: this.getSubClass('pm')
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
      {
        class: this.classes?.value.main,
        ...this.item.binds
      },
      [
        this.renderAm(),
        this.renderPm()
      ]
    )
  }

  /**
   * Renders the AM period button.
   *
   * Рендерит кнопку периода AM.
   * @returns virtual node / виртуальный узел
   */
  readonly renderAm = (): VNode => {
    const isSelected = this.item.value.isAm()
    const disabled = !this.item.enabled.isEnabled

    return h(
      'button',
      {
        key: ClockPeriodType.am,
        type: 'button',
        class: {
          [this.classes?.value.item!]: true,
          [this.classes?.value[ClockPeriodType.am]!]: true,
          [this.getStatusClass('selected')]: isSelected
        },
        disabled,
        tabindex: -1,
        role: 'radio',
        'aria-checked': isSelected ? 'true' : 'false',
        'data-value': ClockPeriodType.am,
        onClick: this.item.event.onClick
      },
      this.item.text.am
    )
  }

  /**
   * Renders the PM period button.
   *
   * Рендерит кнопку периода PM.
   * @returns virtual node / виртуальный узел
   */
  readonly renderPm = (): VNode => {
    const isSelected = this.item.value.isPm()
    const disabled = !this.item.enabled.isEnabled

    return h(
      'button',
      {
        key: ClockPeriodType.pm,
        type: 'button',
        class: {
          [this.classes?.value.item!]: true,
          [this.classes?.value[ClockPeriodType.pm]!]: true,
          [this.getStatusClass('selected')]: isSelected
        },
        disabled,
        tabindex: -1,
        role: 'radio',
        'aria-checked': isSelected ? 'true' : 'false',
        'data-value': ClockPeriodType.pm,
        onClick: this.item.event.onClick
      },
      this.item.text.pm
    )
  }
}
