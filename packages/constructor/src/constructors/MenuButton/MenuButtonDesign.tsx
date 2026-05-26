import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  type ListNames
} from '@dxtmisha/functional'

import { MenuButton } from './MenuButton'

import type { MenuControlItem } from '../Menu'
import {
  type MenuButtonPropsBasic
} from './props'
import {
  type MenuButtonClasses,
  type MenuButtonComponents,
  type MenuButtonEmits,
  type MenuButtonExpose,
  type MenuButtonSlots
} from './types'

/**
 * Class representing the design constructor and renderer for the MenuButton component.
 * It manages class generation, styles, template rendering, and exposes internal states
 * such as menu visibility, validation capability, and dynamic layouts for components
 * composed of trigger buttons and dropdown lists.
 *
 * Класс, представляющий конструктор дизайна и рендерер для компонента MenuButton.
 * Управляет генерацией классов, стилей, рендерингом шаблонов и предоставляет доступ к
 * внутренним состояниям, таким как видимость меню, возможность валидации и динамическая разметка
 * для компонентов, состоящих из кнопок-триггеров и выпадающих списков.
 */
export class MenuButtonDesign<
  COMP extends MenuButtonComponents,
  EXPOSE extends MenuButtonExpose,
  CLASSES extends MenuButtonClasses,
  P extends MenuButtonPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  MenuButtonEmits,
  EXPOSE,
  MenuButtonSlots,
  CLASSES,
  P
> {
  /** Instance of the MenuButton controller / Экземпляр контроллера MenuButton */
  protected readonly item: MenuButton

  /**
   * Constructor for MenuButtonDesign.
   *
   * Конструктор для MenuButtonDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuButtonEmits, P>,
    ItemConstructor: typeof MenuButton = MenuButton
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
   * Initializes expose properties, linking internal methods and state to the component instance.
   *
   * Инициализирует свойства expose, связывая внутренние методы и состояние с экземпляром компонента.
   * @returns expose configuration object / конфигурируемый объект expose
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.menu.expose,
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
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
        label: this.getSubClass('label'),
        separator: this.getSubClass('separator'),
        selected: this.getSubClass('selected')
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
   * Core rendering method that outputs the VNode hierarchy for the menu structure.
   *
   * Основной метод рендеринга, выводящий иерархию VNode для структуры меню.
   * @returns array of VNodes representing the template / массив VNode, представляющих шаблон
   */
  protected initRender(): VNode[] {
    return this.item.menu.render(
      {
        control: (props: MenuControlItem) => [
          this.renderControl(props),
          this.renderInput()
        ],
        title: props => this.initSlot('title', undefined, props),
        footer: props => this.initSlot('footer', undefined, props),
        contextTop: props => this.initSlot('contextTop', undefined, props),
        contextBottom: props => this.initSlot('contextBottom', undefined, props)
      },
      {
        selected: this.item.value.item.value
      }
    )
  }

  /**
   * Renders the trigger button component using bindings and labels.
   *
   * Рендерит компонент кнопки-триггера, используя привязки и метки.
   * @param props control item properties / свойства элемента управления
   * @returns rendered button nodes / отрендеренные узлы кнопки
   */
  protected readonly renderControl = (props: MenuControlItem): VNode[] => {
    return this.item.button.render(
      {
        default: () => this.renderControlLabel(props.selectedNames?.value)
      },
      {
        ...props.binds,
        iconTurn: props.open.value
      }
    )
  }

  /**
   * Formats and renders the inner contents of the button, handling labels, separators, and values.
   *
   * Форматирует и рендерит внутреннее содержимое кнопки, обрабатывая метки, разделители и значения.
   * @param selectedNames list of selected option labels / список меток выбранных опций
   * @returns array of rendered nodes / массив отрендеренных узлов
   */
  protected readonly renderControlLabel = (selectedNames?: ListNames): VNode[] => {
    const children: any[] = []
    const hasValue = selectedNames
      && selectedNames.length > 0
      && !(this.props.hideValueIcon && this.props.icon)

    if (
      this.props.label
      && (
        !hasValue
        || !this.props.hideLabelValue
      )
    ) {
      if (hasValue) {
        children.push(
          h('span', { class: this.classes?.value.label }, this.props.label),
          h('span', { class: this.classes?.value.separator }, this.props.labelSeparator)
        )
      } else {
        children.push(
          this.props.label
        )
      }
    }

    if (hasValue) {
      children.push(
        h(
          'span',
          { class: this.classes?.value.selected },
          selectedNames.join(', ')
        )
      )
    }

    return children
  }

  /**
   * Renders the hidden input element used to carry the value.
   *
   * Рендерит скрытый элемент ввода, используемый для передачи значения.
   * @returns hidden input node / узел скрытого ввода
   */
  protected readonly renderInput = (): VNode => {
    return h(
      'input',
      {
        name: this.props.name,
        value: this.item.value.get(),
        type: 'hidden'
      }
    )
  }
}
