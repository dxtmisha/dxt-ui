import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { InputCodeItem } from './InputCodeItem'

import {
  type InputCodeItemPropsBasic
} from './props'
import {
  type InputCodeItemClasses,
  type InputCodeItemComponents,
  type InputCodeItemEmits,
  type InputCodeItemExpose,
  type InputCodeItemSlots
} from './types'

/**
 * Design constructor class for InputCodeItem component.
 * Integrates properties, exposes the required API methods, resolves CSS classes/styles,
 * and handles custom layout rendering for the code input element.
 *
 * Класс конструктора дизайна для компонента InputCodeItem.
 * Интегрирует свойства, предоставляет необходимые методы API, определяет CSS классы/стили
 * и управляет рендерингом разметки для элемента ввода кода.
 */
export class InputCodeItemDesign<
  COMP extends InputCodeItemComponents,
  EXPOSE extends InputCodeItemExpose,
  CLASSES extends InputCodeItemClasses,
  P extends InputCodeItemPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  InputCodeItemEmits,
  EXPOSE,
  InputCodeItemSlots,
  CLASSES,
  P
> {
  /** Instance of the InputCodeItem logic class / Экземпляр класса логики InputCodeItem */
  protected readonly item: InputCodeItem

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
    options?: ConstrOptions<COMP, InputCodeItemEmits, P>,
    ItemConstructor: typeof InputCodeItem = InputCodeItem
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {
      index: this.props.index,
      getValue: () => this.item.value.get(),
      set: this.item.value.set,
      reset: this.item.value.reset,
      focusInput: this.item.focus
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes map / частичная карта классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        input: this.getSubClass('input'),
        sub: this.getSubClass('sub')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles map / карта пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальная нода
   */
  protected initRender(): VNode {
    const children: any[] = [
      this.renderInput(),
      h('span', { class: this.classes?.value.sub })
    ]

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, children)
  }

  /**
   * Render of the input element.
   *
   * Рендер элемента ввода.
   * @returns virtual node / виртуальная нода
   */
  protected readonly renderInput = (): VNode => {
    return h('input', this.item.inputBinds)
  }
}
