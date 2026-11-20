import { mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { MenuCountry } from './MenuCountry'

import type { MenuControlItem } from '../Menu'
import type {
  MenuCountryPropsBasic
} from './props'
import type {
  MenuCountryClasses,
  MenuCountryComponents,
  MenuCountryEmits,
  MenuCountryExpose,
  MenuCountrySlots
} from './types'

/**
 * Design constructor class for the MenuCountry component.
 * Connects MenuCountry logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * Класс-конструктор дизайна для компонента MenuCountry.
 * Связывает логику MenuCountry, настраивает слоты, классы, стили и определяет функцию рендеринга.
 */
export class MenuCountryDesign<
  COMP extends MenuCountryComponents,
  EXPOSE extends MenuCountryExpose,
  CLASSES extends MenuCountryClasses,
  P extends MenuCountryPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MenuCountryEmits,
    EXPOSE,
    MenuCountrySlots,
    CLASSES,
    P
  > {
  /** MenuCountry logic orchestrator instance / Экземпляр логического оркестратора MenuCountry */
  protected readonly item: MenuCountry

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuCountryEmits, P>,
    ItemConstructor: typeof MenuCountry = MenuCountry
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('menu').expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns object of constructor styles / объект стилей конструктора
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  protected initRender(): VNode[] {
    return this.item.i('menu').render(
      {
        control: this.renderControl,
        title: this.renderTitle,
        footer: this.renderFooter,
        contextTop: this.renderContextTop,
        contextBottom: this.renderContextBottom
      },
      mergeProps(
        this.getAttrs(),
        {
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      )
    )
  }

  /**
   * Renders the control slot.
   *
   * Рендерит слот управления.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns control virtual node or undefined / виртуальный узел управления или undefined
   */
  readonly renderControl = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('control', undefined, props)
  }

  /**
   * Renders the title slot.
   *
   * Рендерит слот заголовка.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns title virtual node or undefined / виртуальный узел заголовка или undefined
   */
  readonly renderTitle = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('title', undefined, props)
  }

  /**
   * Renders the footer slot.
   *
   * Рендерит слот подвала.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns footer virtual node or undefined / виртуальный узел подвала или undefined
   */
  readonly renderFooter = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('footer', undefined, props)
  }

  /**
   * Renders the top context slot.
   *
   * Рендерит верхний контекстный слот.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns top context virtual node or undefined / виртуальный узел верхнего контекста или undefined
   */
  readonly renderContextTop = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('contextTop', undefined, props)
  }

  /**
   * Renders the bottom context slot.
   *
   * Рендерит нижний контекстный слот.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns bottom context virtual node or undefined / виртуальный узел нижнего контекста или undefined
   */
  readonly renderContextBottom = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('contextBottom', undefined, props)
  }
}
