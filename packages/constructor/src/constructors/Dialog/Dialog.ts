import type { Ref, VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComp,
  type DesignName,
  getBind,
  isFilledOrNumber,
  isFunction
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { ActionsProps } from '../Actions'
import { BarsInclude } from '../Bars'
import type { ButtonPropsBasic } from '../Button'
import { IconInclude, type IconPropsBasic, type IconValue } from '../Icon'
import { ModalAbstract, type ModalConstructors } from '../Modal'
import { WindowClassesInclude } from '../Window'

import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { LabelAlternativeSlots } from '../../types/labelTypes'
import type { DialogProps } from './props'
import type { DialogComponents, DialogEmits, DialogSlots } from './types'

/** Dialog dependency constructors type / Тип конструкторов зависимостей Dialog */
export type DialogConstructors = ModalConstructors & {
  /** Description include constructor / Конструктор описания */
  description: typeof DescriptionInclude
  /** Icon include constructor / Конструктор иконки */
  icon: typeof IconInclude
  /** Label include constructor / Конструктор метки заголовка */
  label: typeof LabelInclude
  /** Text include constructor / Конструктор текстов */
  text: typeof TextInclude
  /** Window classes include constructor / Конструктор классов окна */
  windowClasses: typeof WindowClassesInclude
}

/**
 * Class for managing a dialog window component.
 * It extends the base modal abstract logic (ModalAbstract) to provide dialog-specific behaviors, incorporating title/description text, custom icons, message highlights, and customizable button actions (ok/cancel/close).
 *
 * Класс для управления компонентом диалогового окна.
 * Расширяет базовую абстрактную логику модального окна (ModalAbstract) для обеспечения специфичного для диалогов поведения, включая текст заголовка/описания, пользовательские иконки, подсветку сообщений и настраиваемые действия кнопок (ок/отмена/закрыть).
 */
export class Dialog extends ModalAbstract {
  /** Dialog input properties / Входные свойства диалогового окна */
  protected override readonly props: Readonly<DialogProps>
  /** Dialog components registry / Реестр компонентов диалогового окна */
  protected override readonly components?: DesignComp<DialogComponents, DialogProps>
  /** Dialog slots / Слоты диалогового окна */
  protected override readonly slots?: DialogSlots
  /** Dialog event emitter / Функция событий диалогового окна */
  protected override readonly emits?: ConstrEmit<DialogEmits>

  /** Description include constructor for lazy instantiation / Конструктор описания для ленивой инициализации */
  protected readonly descriptionConstructor: typeof DescriptionInclude
  /** Icon include constructor for lazy instantiation / Конструктор иконки для ленивой инициализации */
  protected readonly iconConstructor: typeof IconInclude
  /** Label include constructor for lazy instantiation / Конструктор метки для ленивой инициализации */
  protected readonly labelConstructor: typeof LabelInclude
  /** Text include constructor for lazy instantiation / Конструктор текстов для ленивой инициализации */
  protected readonly textConstructor: typeof TextInclude
  /** Window classes include constructor for lazy instantiation / Конструктор классов окна для ленивой инициализации */
  protected readonly windowClassesConstructor: typeof WindowClassesInclude

  /** Lazily instantiated description helper / Лениво инициализируемый помощник описания */
  protected descriptionInstance?: DescriptionInclude
  /** Lazily instantiated icon helper / Лениво инициализируемый помощник иконки */
  protected iconInstance?: IconInclude
  /** Lazily instantiated label helper / Лениво инициализируемый помощник метки */
  protected labelInstance?: LabelInclude
  /** Lazily instantiated text helper / Лениво инициализируемый помощник текстов */
  protected textInstance?: TextInclude
  /** Lazily instantiated window classes helper / Лениво инициализируемый помощник классов окна */
  protected windowClassesInstance?: WindowClassesInclude

  /**
   * Constructor for initializing all sub-components, icons, and texts of the dialog.
   *
   * Конструктор для инициализации всех подкомпонентов, иконок и текстов диалога.
   * @param props input data / входные данные
   * @param element target element / целевой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots slots / слоты
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with constructor classes / объект с классами конструкторов
   */
  constructor(
    props: Readonly<DialogProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<DialogComponents, DialogProps>,
    slots?: DialogSlots,
    emits?: ConstrEmit<DialogEmits>,
    constructors?: Partial<DialogConstructors>
  ) {
    const {
      description = DescriptionInclude,
      icon = IconInclude,
      label = LabelInclude,
      text = TextInclude,
      windowClasses = WindowClassesInclude,
      ...modalConstructors
    } = constructors ?? {}

    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      modalConstructors,
      () => ({
        adaptive: 'modal',
        ...(this.props.image !== undefined ? { image: this.props.image } : {}),
        ...(this.props.imagePosition !== undefined ? { imagePosition: this.props.imagePosition } : {}),
        ...(this.props.closeButton !== undefined ? { closeButton: this.props.closeButton } : {})
      }),
      undefined,
      () => this.extraActions
    )

    this.props = props
    this.components = components
    this.slots = slots
    this.emits = emits

    this.descriptionConstructor = description
    this.iconConstructor = icon
    this.labelConstructor = label
    this.textConstructor = text
    this.windowClassesConstructor = windowClasses
  }

  /**
   * Renders the dialog description when description text or description slot is provided.
   *
   * Рендерит описание диалогового окна, если задан текст описания или слот description.
   * @returns array of rendered description VNodes / массив отрендеренных VNode описания
   */
  renderDescription(): VNode[] {
    if (
      !this.descriptionInstance
      && !DescriptionInclude.is(this.props, this.getDescriptionSlots())
    ) {
      return []
    }

    if (!this.descriptionInstance) {
      this.descriptionInstance = new this.descriptionConstructor(
        () => ({
          description: this.props.description,
          descriptionId: this.getDescriptionId()
        }),
        this.naming,
        this.slots
      )
    }

    return this.descriptionInstance.render()
  }

  /**
   * Renders the dialog icon when an active icon is configured.
   *
   * Рендерит иконку диалогового окна, если задана активная иконка.
   * @returns array of rendered icon VNodes / массив отрендеренных VNode иконки
   */
  renderIcon(): VNode[] {
    if (
      !this.iconInstance
      && !IconInclude.is({ icon: this.iconValue })
    ) {
      return []
    }

    if (!this.iconInstance) {
      this.iconInstance = new this.iconConstructor(
        () => ({ icon: this.iconValue }),
        this.naming,
        this.components,
        () => this.props.iconAttrs
      )
    }

    return this.iconInstance.renderIcon()
  }

  /**
   * Renders the dialog title label when label text or label slot is provided.
   *
   * Рендерит метку заголовка диалогового окна, если задан текст метки или слот label.
   * @returns array of rendered label VNodes / массив отрендеренных VNode метки
   */
  renderLabel(): VNode[] {
    if (
      !this.labelInstance
      && !LabelInclude.is(this.props, this.getLabelSlots())
    ) {
      return []
    }

    if (!this.labelInstance) {
      this.labelInstance = new this.labelConstructor(
        () => ({
          label: this.props.label,
          labelId: this.getLabelId()
        }),
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        true
      )
    }

    return this.labelInstance.render()
  }

  /**
   * Retrieves additional properties for the actions sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента действий.
   * @returns object with additional actions properties / объект с дополнительными свойствами действий
   */
  protected get extraActions(): ActionsProps {
    const list: ConstrBind<ButtonPropsBasic>[] = []

    if (this.props.buttonClose !== null) {
      list.push(
        getBind(
          this.props.buttonClose,
          {
            label: this.getText().close,
            value: 'close',
            class: this.getWindowClasses().get().close,
            onClick: () => this.emits?.('close')
          },
          'label',
          true
        )
      )
    }

    if (this.props.buttonOk !== null) {
      list.push(
        getBind(
          this.props.buttonOk,
          {
            label: this.getText().ok,
            value: 'ok',
            ...(this.props.clickOkAndClose ? { class: this.getWindowClasses().get().close } : {}),
            onClick: () => this.emits?.('ok')
          },
          'label',
          true
        )
      )
    }

    return {
      list,
      align: 'center'
    }
  }

  /**
   * Resolves the active icon value according to dialog status flags.
   *
   * Определяет значение активной иконки в соответствии с флагами состояния диалога.
   * @returns active icon value or undefined / значение активной иконки или undefined
   */
  protected get iconValue(): IconValue<IconPropsBasic> | undefined {
    if (this.props.success) {
      return this.props.iconSuccess
    }

    if (this.props.error) {
      return this.props.iconError
    }

    return this.props.icon
  }

  /**
   * Resolves the description element identifier for ARIA linkage without duplicating Bars IDs.
   *
   * Разрешает идентификатор элемента описания для связи ARIA без дублирования ID из Bars.
   * @returns description element ID or undefined / идентификатор элемента описания или undefined
   */
  protected getDescriptionId(): string | undefined {
    if (this.props.descriptionId) {
      return this.props.descriptionId
    }

    if (
      BarsInclude.is(this.props)
      && isFilledOrNumber(this.props.barsDescription)
    ) {
      return undefined
    }

    return this.descriptionId
  }

  /**
   * Extracts the description slot map for lazy guard evaluation.
   *
   * Извлекает карту слота description для ленивой проверки.
   * @returns description slots map or undefined / карта слота description или undefined
   */
  protected getDescriptionSlots(): DescriptionSlots | undefined {
    return isFunction(this.slots?.description)
      ? { description: this.slots.description }
      : undefined
  }

  /**
   * Resolves the label element identifier for ARIA linkage without duplicating Bars IDs.
   *
   * Разрешает идентификатор элемента метки для связи ARIA без дублирования ID из Bars.
   * @returns label element ID or undefined / идентификатор элемента метки или undefined
   */
  protected getLabelId(): string | undefined {
    if (this.props.labelId) {
      return this.props.labelId
    }

    if (
      BarsInclude.is(this.props)
      && isFilledOrNumber(this.props.barsLabel)
    ) {
      return undefined
    }

    return this.labelId
  }

  /**
   * Extracts the alternative label slot map so the modal default slot does not trigger label instantiation.
   *
   * Извлекает карту альтернативного слота label, чтобы слот default модального окна не запускал инициализацию метки.
   * @returns label slots map or undefined / карта слота label или undefined
   */
  protected getLabelSlots(): LabelAlternativeSlots | undefined {
    return isFunction(this.slots?.label)
      ? { label: this.slots.label }
      : undefined
  }

  /**
   * Lazily initializes and returns the text helper instance.
   *
   * Лениво инициализирует и возвращает экземпляр помощника текстов.
   * @returns TextInclude instance / экземпляр TextInclude
   */
  protected getText(): TextInclude {
    if (!this.textInstance) {
      this.textInstance = new this.textConstructor(this.props)
    }

    return this.textInstance
  }

  /**
   * Lazily initializes and returns the window classes helper instance.
   *
   * Лениво инициализирует и возвращает экземпляр помощника классов окна.
   * @returns WindowClassesInclude instance / экземпляр WindowClassesInclude
   */
  protected getWindowClasses(): WindowClassesInclude {
    if (!this.windowClassesInstance) {
      this.windowClassesInstance = new this.windowClassesConstructor(this.naming.getDesign())
    }

    return this.windowClassesInstance
  }
}
