import { h, type VNode } from 'vue'
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
 * FormDesign component class for rendering form markup and slots.
 *
 * Класс компонента FormDesign для рендеринга разметки формы и слотов.
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
  protected readonly item: Form

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
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {
      submit: this.item.submit,
      reset: this.item.value.reset,
      checkValidity: this.item.error.checkValidity,
      getValues: this.item.value.get,
      set: this.item.value.set,
      setValues: this.item.value.setValues
    } as unknown as EXPOSE
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
    const children: any[] = []

    this.initSlot('header', children)
    this.initSlot('default', children)
    this.initSlot('footer', children)

    return h(
      'form',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...this.item.binds
      },
      children
    )
  }
}

