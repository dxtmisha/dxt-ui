import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Form } from './Form'

import {
  type FormPropsBasic
} from './props'
import {
  type FormClasses,
  type FormComponents,
  type FormEmits,
  type FormExpose,
  type FormSlots
} from './types'

/**
 * FormDesign component class for assembling and rendering form markup, slots, and exposed form controls.
 *
 * Класс компонента FormDesign для сборки и рендеринга разметки формы, слотов и экспонируемых методов управления формой.
 */
export class FormDesign<
  COMP extends FormComponents,
  EXPOSE extends FormExpose,
  CLASSES extends FormClasses,
  P extends FormPropsBasic
> extends DesignConstructorAbstract<
    HTMLFormElement,
    COMP,
    FormEmits,
    EXPOSE,
    FormSlots,
    CLASSES,
    P
  > {
  /** Form logic orchestrator instance / Экземпляр оркестратора логики формы */
  protected readonly item: Form

  /**
   * Constructor for creating a FormDesign instance.
   *
   * Конструктор для создания экземпляра FormDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FormEmits, P>,
    ItemConstructor: typeof Form = Form
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
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {
      checkValidity: this.item.checkValidity,
      getValues: this.item.getValues,
      reset: this.item.reset,
      set: this.item.set,
      setValues: this.item.setValues,
      setValuesAll: this.item.setValuesAll,
      submit: this.item.submit
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
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node / отрисованный виртуальный узел
   */
  protected initRender(): VNode {
    const children: VNode[] = []

    this.initSlot('header', children)
    this.initSlot('default', children)
    this.initSlot('footer', children)

    return h(
      'form',
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
}
