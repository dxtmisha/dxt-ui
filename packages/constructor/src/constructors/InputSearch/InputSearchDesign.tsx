import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { InputSearch } from './InputSearch'

import type { FieldControl } from '../Field'
import {
  type InputSearchPropsBasic
} from './props'
import {
  type InputSearchClasses,
  type InputSearchComponents,
  type InputSearchEmits,
  type InputSearchExpose,
  type InputSearchSlots
} from './types'

/**
 * InputSearchDesign class for assembling the VNode DOM structure of the search input.
 *
 * Класс InputSearchDesign для сборки DOM-структуры VNode компонента поиска.
 */
export class InputSearchDesign<
  COMP extends InputSearchComponents,
  EXPOSE extends InputSearchExpose,
  CLASSES extends InputSearchClasses,
  P extends InputSearchPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputSearchEmits,
    EXPOSE,
    InputSearchSlots,
    CLASSES,
    P
  > {
  protected readonly item: InputSearch

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputSearchEmits, P>,
    ItemConstructor: typeof InputSearch = InputSearch
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
   * Initialization of all the necessary properties for export.
   *
   * Инициализация всех необходимых свойств для экспорта.
   * @returns expose object / объект экспонируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.value.expose(),
      ...this.item.validation.expose()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns classes partial object / частичный объект классов
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
   * @returns array of VNodes / массив VNode
   */
  protected initRender(): VNode[] {
    return this.item.field.render(
      {
        default: this.renderInput
      },
      {
        ...this.getAttrs(),
        class: this.classes?.value.main,
        validationMessage: this.item.validation.message
      }
    )
  }

  /**
   * Rendering the input element.
   *
   * Рендер элемента ввода.
   * @param input data for the input element / данные для элемента ввода
   * @returns array of VNodes / массив VNode
   */
  readonly renderInput = (input: FieldControl): VNode[] => {
    return [h(
      'input',
      toBinds(
        this.item.binds,
        input.binds,
        {
          ref: this.element
        }
      )
    )]
  }
}
