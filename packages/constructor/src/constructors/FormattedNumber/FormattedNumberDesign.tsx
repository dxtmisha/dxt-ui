import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { FormattedNumber } from './FormattedNumber'

import type {
  FormattedNumberPropsBasic
} from './props'
import type {
  FormattedNumberClasses,
  FormattedNumberComponents,
  FormattedNumberEmits,
  FormattedNumberExpose,
  FormattedNumberSlots
} from './types'

/**
 * Design constructor class for rendering the FormattedNumber component.
 *
 * Класс конструктора дизайна для рендеринга компонента FormattedNumber.
 */
export class FormattedNumberDesign<
  COMP extends FormattedNumberComponents,
  EXPOSE extends FormattedNumberExpose,
  CLASSES extends FormattedNumberClasses,
  P extends FormattedNumberPropsBasic
> extends DesignConstructorAbstract<
    HTMLSpanElement,
    COMP,
    FormattedNumberEmits,
    EXPOSE,
    FormattedNumberSlots,
    CLASSES,
    P
  > {
  /** FormattedNumber logic orchestrator instance / Экземпляр оркестратора логики FormattedNumber */
  protected readonly item: FormattedNumber

  /**
   * Constructor for creating a FormattedNumberDesign instance.
   *
   * Конструктор для создания экземпляра FormattedNumberDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FormattedNumberEmits, P>,
    ItemConstructor: typeof FormattedNumber = FormattedNumber
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
   * @returns object with exposed properties / объект с экспортируемыми свойствами
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
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
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the formatted value inside a root `<span>` element.
   *
   * Метод для рендеринга отформатированного значения внутри корневого элемента `<span>`.
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    return h(
      'span',
      mergeProps(
        this.getAttrs(),
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.item.item
    )
  }
}
