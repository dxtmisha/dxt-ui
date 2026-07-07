import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { FormattedUnit } from './FormattedUnit'

import {
  type FormattedUnitPropsBasic
} from './props'
import {
  type FormattedUnitClasses,
  type FormattedUnitComponents,
  type FormattedUnitEmits,
  type FormattedUnitExpose,
  type FormattedUnitSlots
} from './types'

/**
 * Design constructor class for rendering the FormattedUnit component.
 *
 * Класс конструктора дизайна для рендеринга компонента FormattedUnit.
 */
export class FormattedUnitDesign<
  COMP extends FormattedUnitComponents,
  EXPOSE extends FormattedUnitExpose,
  CLASSES extends FormattedUnitClasses,
  P extends FormattedUnitPropsBasic
> extends DesignConstructorAbstract<
    HTMLSpanElement,
    COMP,
    FormattedUnitEmits,
    EXPOSE,
    FormattedUnitSlots,
    CLASSES,
    P
  > {
  /** FormattedUnit instance / Экземпляр FormattedUnit */
  protected readonly item: FormattedUnit

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
    options?: ConstrOptions<COMP, FormattedUnitEmits, P>,
    ItemConstructor: typeof FormattedUnit = FormattedUnit
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
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns virtual node / виртуальный узел
   */
  protected initRender(): VNode {
    return h('span', {
      ...this.getAttrs(),
      class: this.classes?.value.main
    }, this.item.item)
  }
}
