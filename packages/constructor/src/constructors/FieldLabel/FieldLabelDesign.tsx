import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { FieldLabel } from './FieldLabel'

import {
  type FieldLabelPropsBasic
} from './props'
import {
  type FieldLabelClasses,
  type FieldLabelComponents,
  type FieldLabelEmits,
  type FieldLabelExpose,
  type FieldLabelSlots
} from './types'

/**
 * FieldLabelDesign constructor class responsible for assembling and rendering the FieldLabel component.
 * It coordinates class resolution, styles initialization, and the rendered label structure.
 *
 * Класс-конструктор FieldLabelDesign, отвечающий за сборку и рендеринг компонента FieldLabel.
 * Координирует разрешение классов, инициализацию стилей и структуру рендеринга метки.
 */
export class FieldLabelDesign<
  COMP extends FieldLabelComponents,
  EXPOSE extends FieldLabelExpose,
  CLASSES extends FieldLabelClasses,
  P extends FieldLabelPropsBasic
> extends DesignConstructorAbstract<
    HTMLLabelElement,
    COMP,
    FieldLabelEmits,
    EXPOSE,
    FieldLabelSlots,
    CLASSES,
    P
  > {
  /** FieldLabel logic instance / Экземпляр логики FieldLabel */
  protected readonly item: FieldLabel

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor field label item class / класс элемента метки поля
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldLabelEmits, P>,
    ItemConstructor: typeof FieldLabel = FieldLabel
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
   * Display of the asterisk, an indication of required fields.
   *
   * Вывод звездочки, признак обязательного заполнения.
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  readonly renderRequired = (): VNode[] => {
    if (this.props.required) {
      return [
        h(
          'span',
          {
            class: this.classes?.value.required,
            ...AriaStaticInclude.hidden()
          },
          '*'
        )
      ]
    }

    return []
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties object / объект экспортируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns custom classes object / объект пользовательских классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        label: this.naming.getSubClass('label'),
        required: this.naming.getSubClass('required')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns custom styles object / объект пользовательских стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered virtual node or undefined / отрендеренный виртуальный узел или undefined
   */
  protected initRender(): VNode | undefined {
    const children: VNode[] = [
      ...this.item.callInstance('label', item => item.render(this.renderRequired()), []),
      ...this.item.callInstance('progress', item => item.render(), []),
      ...this.item.callInstance('fieldCounter', item => item.render(), [])
    ]

    if (children.length > 0) {
      return h(
        'label',
        mergeProps(
          this.getAttrs(),
          {
            ref: this.element,
            class: this.classes?.value.main,
            style: this.styles?.value,
            for: this.props.for
          }
        ),
        children
      )
    }

    return undefined
  }
}
