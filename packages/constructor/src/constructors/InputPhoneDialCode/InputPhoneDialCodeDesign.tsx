import { type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { InputPhoneDialCode } from './InputPhoneDialCode'

import type { MenuControlItem } from '../Menu'
import {
  type InputPhoneDialCodePropsBasic
} from './props'
import {
  type InputPhoneDialCodeClasses,
  type InputPhoneDialCodeComponents,
  type InputPhoneDialCodeEmits,
  type InputPhoneDialCodeExpose,
  type InputPhoneDialCodeSlots
} from './types'

/**
 * Constructor class for the InputPhoneDialCode design component.
 * It manages the visual rendering, dynamic style bindings, and event exposures.
 *
 * Класс-конструктор для дизайн-компонента InputPhoneDialCode.
 * Управляет визуальным рендерингом, динамической привязкой стилей и экспортом событий.
 */
export class InputPhoneDialCodeDesign<
  COMP extends InputPhoneDialCodeComponents,
  EXPOSE extends InputPhoneDialCodeExpose,
  CLASSES extends InputPhoneDialCodeClasses,
  P extends InputPhoneDialCodePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputPhoneDialCodeEmits,
    EXPOSE,
    InputPhoneDialCodeSlots,
    CLASSES,
    P
  > {
  /** Instance of the InputPhoneDialCode logic controller / Экземпляр контроллера логики InputPhoneDialCode */
  protected readonly item: InputPhoneDialCode

  /**
   * Constructor for InputPhoneDialCodeDesign.
   *
   * Конструктор для InputPhoneDialCodeDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputPhoneDialCodeEmits, P>,
    ItemConstructor: typeof InputPhoneDialCode = InputPhoneDialCode
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
   * @returns object containing exposed properties / объект, содержащий экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.menu.expose
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / объект с частичными классами
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        button: this.getSubClass('button'),
        menuCountry: this.getSubClass('menuCountry')
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
    return this.item.menu.render(
      { control: this.renderControl }
    )
  }

  /**
   * Renders the trigger control element.
   *
   * Рендерит триггерный элемент управления.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  protected renderControl = (props: MenuControlItem): VNode[] => {
    return this.item.button.render(
      toBinds(
        props.binds,
        { class: this.classes?.value.button }
      )
    )
  }
}
