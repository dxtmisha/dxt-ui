import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Select } from './Select'

import type { FieldControl, FieldPropsBasic } from '../Field'
import type { MenuControlItem } from '../Menu'
import type { SelectPropsBasic } from './props'
import type {
  SelectClasses,
  SelectComponents,
  SelectEmits,
  SelectExpose,
  SelectSlots
} from './types'

/**
 * Design constructor class for the Select component.
 * Connects Select logic with Field, Menu, and SelectValue sub-components and manages rendering.
 *
 * Класс конструктора дизайна для компонента Select.
 * Связывает логику Select с субкомпонентами Field, Menu и SelectValue и управляет рендерингом.
 */
export class SelectDesign<
  COMP extends SelectComponents,
  EXPOSE extends SelectExpose,
  CLASSES extends SelectClasses,
  P extends SelectPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SelectEmits,
    EXPOSE,
    SelectSlots,
    CLASSES,
    P
  > {
  /** Select logic orchestrator instance / Экземпляр логического оркестратора Select */
  protected readonly item: Select

  /**
   * Constructor for SelectDesign.
   *
   * Конструктор для SelectDesign.
   * @param name class name / название класса
   * @param props component properties / свойства компонента
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SelectEmits, P>,
    ItemConstructor: typeof Select = Select
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
   * Renders the dropdown menu inside the field control container.
   *
   * Рендерит выпадающее меню внутри контейнера элемента управления поля.
   * @param input field control bindings and metadata / привязки и метаданные элемента управления поля
   * @returns array of rendered menu VNodes / массив отрендеренных VNode меню
   */
  readonly renderMenu = (input: FieldControl): VNode[] => {
    return this.item.i('menu').render(
      {
        control: (props: MenuControlItem) => this.renderMenuControl(input, props),
        title: this.renderTitle,
        footer: this.renderFooter,
        contextTop: this.renderContextTop,
        contextBottom: this.renderContextBottom
      },
      {
        selected: this.item.i('value').item.value
      }
    )
  }

  /**
   * Renders the combobox control area combining display value and native input.
   *
   * Рендерит область управления combobox, объединяя отображаемое значение и нативный input.
   * @param input field control bindings / привязки элемента управления поля
   * @param props menu control item properties / свойства элемента управления меню
   * @returns array of rendered control VNodes / массив отрендеренных VNode управления
   */
  readonly renderMenuControl = (
    input: FieldControl,
    props: MenuControlItem
  ): VNode[] => {
    const children: VNode[] = []

    if (!this.item.i('input').isEdit()) {
      const valueNode = this.renderMenuControlValue(input, props)

      if (valueNode) {
        children.push(valueNode)
      }
    }

    children.push(
      this.renderMenuControlInput(input, props)
    )

    return children
  }

  /**
   * Renders the native combobox input element.
   *
   * Рендерит нативный элемент ввода combobox.
   * @param input field control bindings / привязки элемента управления поля
   * @param props menu control item properties / свойства элемента управления меню
   * @returns input element VNode / VNode элемента ввода
   */
  readonly renderMenuControlInput = (
    input: FieldControl,
    props: MenuControlItem
  ): VNode => {
    const inputItem = this.item.i('input')
    const className = inputItem.isEdit() ? input.className : input.classForFocus

    return h(
      'input',
      mergeProps(
        inputItem.binds,
        props.binds,
        {
          ref: this.element,
          id: input.id,
          value: this.item.i('value').get(),
          class: className,
          autocomplete: 'off',
          onInput: this.item.onInputValue
        }
      )
    )
  }

  /**
   * Renders the static display representation of selected values via SelectValue.
   *
   * Рендерит статическое представление выбранных значений через SelectValue.
   * @param input field control bindings / привязки элемента управления поля
   * @param props menu control item properties / свойства элемента управления меню
   * @returns SelectValue VNode or undefined / VNode компонента SelectValue или undefined
   */
  readonly renderMenuControlValue = (
    input: FieldControl,
    props: MenuControlItem
  ): VNode | undefined => {
    return this.components?.renderOne(
      'selectValue',
      mergeProps(
        props.binds,
        this.item.i('input').aria,
        {
          class: input.className,
          disabled: this.props.disabled,
          value: props.selectedList.value,
          multiple: this.props.multiple,
          placeholder: this.props.placeholder,
          onClick: this.item.i('event').onSelect
        }
      )
    )
  }

  /**
   * Renders the dropdown title slot.
   *
   * Рендерит слот заголовка выпадающего меню.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns title VNode or undefined / VNode заголовка или undefined
   */
  readonly renderTitle = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('title', undefined, props)
  }

  /**
   * Renders the dropdown footer slot.
   *
   * Рендерит слот подвала выпадающего меню.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns footer VNode or undefined / VNode подвала или undefined
   */
  readonly renderFooter = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('footer', undefined, props)
  }

  /**
   * Renders the top context slot inside the dropdown menu.
   *
   * Рендерит верхний контекстный слот внутри выпадающего меню.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns top context VNode or undefined / VNode верхнего контекста или undefined
   */
  readonly renderContextTop = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('contextTop', undefined, props)
  }

  /**
   * Renders the bottom context slot inside the dropdown menu.
   *
   * Рендерит нижний контекстный слот внутри выпадающего меню.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns bottom context VNode or undefined / VNode нижнего контекста или undefined
   */
  readonly renderContextBottom = (props: MenuControlItem): VNode | undefined => {
    return this.initSlot('contextBottom', undefined, props)
  }

  /**
   * Initializes exposed component methods and reactive properties.
   *
   * Инициализирует экспонируемые методы и реактивные свойства компонента.
   * @returns exposed API object / объект экспонируемого API
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('menu').expose,
      ...this.item.i('value').expose(),
      ...this.item.i('validation').expose()
    } as EXPOSE
  }

  /**
   * Initializes and extends component CSS class names.
   *
   * Инициализирует и дополняет имена CSS-классов компонента.
   * @returns partial classes map / частичная карта классов
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
   * Initializes dynamic inline styles for the component.
   *
   * Инициализирует динамические встроенные стили компонента.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Core rendering method outputting the Field wrapper with embedded Menu.
   *
   * Основной метод рендеринга, выводящий обертку Field со встроенным Menu.
   * @returns array of root VNodes / массив корневых VNode
   */
  protected initRender(): VNode[] {
    const open = this.item.i('menu').expose.getOpen()

    return this.item.i('field').render(
      {
        ...this.slots,
        default: this.renderMenu
      },
      mergeProps(
        this.getAttrs(),
        {
          focus: open,
          iconTurn: open,
          class: this.classes?.value.main,
          style: this.styles?.value,
          validationMessage: this.item.i('validation').message
        }
      ) as Partial<ConstrBind<FieldPropsBasic>>
    )
  }
}
