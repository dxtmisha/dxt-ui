import { h, mergeProps, type VNode, type VNodeChild } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isFilled,
  type ListNames
} from '@dxtmisha/functional'

import { MenuChip } from './MenuChip'

import type { MenuControlItem } from '../Menu'
import type { MenuChipPropsBasic } from './props'
import type {
  MenuChipClasses,
  MenuChipComponents,
  MenuChipEmits,
  MenuChipExpose,
  MenuChipSlots
} from './types'

/**
 * Design constructor and renderer for the MenuChip component.
 * Manages class generation, styles, trigger chip rendering, hidden form input, and exposed APIs.
 *
 * Конструктор дизайна и рендерер для компонента MenuChip.
 * Управляет генерацией классов, стилей, рендерингом чипа-триггера, скрытого поля формы и экспонируемого API.
 */
export class MenuChipDesign<
  COMP extends MenuChipComponents,
  EXPOSE extends MenuChipExpose,
  CLASSES extends MenuChipClasses,
  P extends MenuChipPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MenuChipEmits,
    EXPOSE,
    MenuChipSlots,
    CLASSES,
    P
  > {
  /** Instance of the MenuChip orchestrator / Экземпляр оркестратора MenuChip */
  protected readonly item: MenuChip

  /**
   * Constructor for MenuChipDesign.
   *
   * Конструктор для MenuChipDesign.
   * @param name class name / название класса
   * @param props component properties / свойства компонента
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor logic orchestrator class / класс логического оркестратора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuChipEmits, P>,
    ItemConstructor: typeof MenuChip = MenuChip
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
   * Renders the trigger chip component using menu control bindings and formatted label content.
   *
   * Рендерит компонент чипа-триггера, используя привязки управления меню и форматированное содержимое метки.
   * @param props menu control item properties / свойства элемента управления меню
   * @returns rendered chip VNodes / отрендеренные VNode чипа
   */
  readonly renderControl = (props: MenuControlItem): VNode[] => {
    const event = this.item.i('event')

    return this.item.i('chip').render(
      {
        default: () => this.slots?.default
          ? this.initSlot('default', undefined, props)
          : this.renderControlLabel(props.selectedNames?.value)
      },
      mergeProps(
        props.binds,
        {
          iconTurn: props.open.value,
          onFocus: event.onFocus,
          onBlur: event.onBlur
        }
      ),
      () => true
    )
  }

  /**
   * Formats and renders the inner contents of the chip, handling labels, separators, and selected values.
   *
   * Форматирует и рендерит внутреннее содержимое чипа, обрабатывая метки, разделители и выбранные значения.
   * @param selectedNames list of selected option labels / список меток выбранных опций
   * @returns array of rendered label nodes / массив отрендеренных узлов метки
   */
  readonly renderControlLabel = (selectedNames?: ListNames): VNodeChild[] => {
    const children: VNodeChild[] = []
    const hasLabel = this.props.label === 0 || isFilled(this.props.label, true)
    const hasValue = Boolean(
      selectedNames
      && selectedNames.length > 0
      && !(this.props.hideValueIcon && this.props.icon)
    )

    if (
      hasLabel
      && (
        !hasValue
        || !this.props.hideLabelValue
      )
    ) {
      if (hasValue) {
        children.push(
          h('span', this.getKeyClass('label'), this.props.label),
          h('span', this.getKeyClass('separator'), this.props.labelSeparator)
        )
      } else {
        children.push(
          this.props.label
        )
      }
    }

    if (hasValue && selectedNames) {
      children.push(
        h(
          'span',
          this.getKeyClass('selected'),
          selectedNames.join(', ')
        )
      )
    }

    return children
  }

  /**
   * Renders the hidden input element used to carry the form value.
   *
   * Рендерит скрытый элемент ввода, используемый для передачи значения формы.
   * @returns hidden input VNode / VNode скрытого элемента ввода
   */
  readonly renderInput = (): VNode => {
    return h(
      'input',
      {
        ref: this.element,
        name: this.props.name,
        value: this.item.i('value').get(),
        type: 'hidden'
      }
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
   * Initializes exposed properties, linking internal methods and state to the component instance.
   *
   * Инициализирует экспонируемые свойства, связывая внутренние методы и состояние с экземпляром компонента.
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
   * @returns partial map of classes / частичная карта классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        label: this.naming.getSubClass('label'),
        separator: this.naming.getSubClass('separator'),
        selected: this.naming.getSubClass('selected')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Initializes dynamic styles for the component.
   *
   * Инициализирует динамические стили для компонента.
   * @returns style mapping object / объект маппинга стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Core rendering method outputting the Menu wrapper with trigger chip and hidden input.
   *
   * Основной метод рендеринга, выводящий обертку Menu с чипом-триггером и скрытым полем ввода.
   * @returns array of VNodes representing the template / массив VNode, представляющих шаблон
   */
  protected initRender(): VNode[] {
    return this.item.i('menu').render(
      {
        control: (props: MenuControlItem) => [
          ...this.renderControl(props),
          this.renderInput()
        ],
        title: this.renderTitle,
        footer: this.renderFooter,
        contextTop: this.renderContextTop,
        contextBottom: this.renderContextBottom
      },
      mergeProps(
        this.getAttrs(),
        {
          class: this.classes?.value.main,
          style: this.styles?.value,
          selected: this.item.i('value').item.value
        }
      )
    )
  }
}
