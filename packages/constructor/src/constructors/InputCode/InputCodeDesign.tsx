import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { InputCode } from './InputCode'

import {
  type InputCodeProps
} from './props'
import {
  type InputCodeClasses,
  type InputCodeComponents,
  type InputCodeEmits,
  type InputCodeExpose,
  type InputCodeSlots
} from './types'

/**
 * Design constructor class for the InputCode component.
 * It instantiates the logical InputCode manager, initializes exposes (getValue, set, reset, focus),
 * and handles rendering of label, items, and validation messages in the DOM.
 *
 * Класс конструктора дизайна для компонента InputCode.
 * Создает экземпляр логического менеджера InputCode, инициализирует доступные методы (getValue, set, reset, focus)
 * и управляет рендерингом метки, элементов ввода и сообщений валидации в DOM.
 */
export class InputCodeDesign<
  COMP extends InputCodeComponents,
  EXPOSE extends InputCodeExpose,
  CLASSES extends InputCodeClasses,
  P extends InputCodeProps
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    InputCodeEmits,
    EXPOSE,
    InputCodeSlots,
    CLASSES,
    P
  > {
  /** InputCode manager instance / Экземпляр менеджера InputCode */
  protected readonly item: InputCode

  /**
   * Constructor
   * @param name base CSS class name / базовое имя CSS-класса
   * @param props component properties / свойства компонента
   * @param options optional setup properties / дополнительные параметры настройки
   * @param ItemConstructor class constructor for the logical manager / конструктор класса логического менеджера
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, InputCodeEmits, P>,
    ItemConstructor: typeof InputCode = InputCode
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
   * Initializes exposed methods and properties of the component.
   *
   * Инициализирует методы и свойства компонента, доступные извне.
   * @returns object with exposed methods / объект с открытыми методами
   */
  protected initExpose(): EXPOSE {
    return {
      getValue: () => this.item.value.value,
      set: (value: string | number) => this.item.inputCodeItem.update(String(value)),
      reset: () => this.item.inputCodeItem.resetValue(),
      focus: () => this.item.inputCodeItem.focus()
    } as EXPOSE
  }

  /**
   * Resolves and modifies CSS classes for the component.
   *
   * Получает и дорабатывает список классов для компонента.
   * @returns partial map of class names / частичная карта имен классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        context: this.getSubClass('context')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Resolves and modifies inline styles for the component.
   *
   * Получает и дорабатывает список стилей для компонента.
   * @returns map of inline styles / карта встроенных стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Renders the root virtual DOM node of the component.
   *
   * Выполняет рендеринг корневого узла виртуального DOM компонента.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    const children: any[] = [
      ...this.item.fieldLabel.render(),
      this.renderContext(),
      ...this.item.fieldMessage.render()
    ]

    return h(
      'div',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        ...this.item.aria
      },
      children
    )
  }

  /**
   * Renders the container of the input code fields.
   *
   * Выполняет рендеринг контейнера полей ввода кода.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected readonly renderContext = (): VNode => {
    return h(
      'div',
      { class: this.classes?.value.context },
      this.renderItems()
    )
  }

  /**
   * Renders the list of individual code input item nodes.
   *
   * Выполняет рендеринг списка отдельных узлов ввода кода.
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  protected readonly renderItems = (): VNode[] => {
    const children: any[] = []

    this.item.inputCodeItem.reset()

    for (let i = 0; i < (this.props.length ?? 4); i++) {
      children.push(
        ...this.item.inputCodeItem.renderItem(
          i,
          true,
          this.props.success,
          this.item.isValidation()
        )
      )
    }

    return children
  }
}
