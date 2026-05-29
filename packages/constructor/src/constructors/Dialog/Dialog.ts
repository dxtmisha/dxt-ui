import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, getBind } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { ActionsInclude, ActionsProps } from '../Actions'
import type { BarsInclude, BarsProps } from '../Bars'
import type { ComponentIncludeExtra } from '../../types/componentInclude'
import { IconInclude, type IconPropsBasic, type IconValue } from '../Icon'
import { ModalAbstract } from '../Modal'
import { WindowClassesInclude, type WindowInclude, type WindowProps } from '../Window'

import type { DialogComponents, DialogEmits, DialogSlots } from './types'
import type { DialogProps } from './props'

/**
 * Class for managing a dialog window component.
 * It extends the base modal abstract logic (ModalAbstract) to provide dialog-specific behaviors, incorporating title/description text, custom icons, message highlights, and customizable button actions (ok/cancel/close).
 *
 * Класс для управления компонентом диалогового окна.
 * Расширяет базовую абстрактную логику модального окна (ModalAbstract) для обеспечения специфичного для диалогов поведения, включая текст заголовка/описания, пользовательские иконки, подсветку сообщений и настраиваемые действия кнопок (ок/отмена/закрыть).
 */
export class Dialog extends ModalAbstract {
  /** Instance for managing the dialog icon / Экземпляр для управления иконкой диалога */
  readonly icon: IconInclude
  /** Instance for managing the dialog title label / Экземпляр для управления меткой заголовка диалога */
  readonly label: LabelInclude
  /** Instance for managing the dialog description / Экземпляр для управления описанием диалога */
  readonly description: DescriptionInclude

  /** Instance for managing custom classes for the dialog window / Экземпляр для управления пользовательскими классами диалогового окна */
  readonly windowClasses: WindowClassesInclude

  /** Instance for managing localized text translations / Экземпляр для управления локализованными текстовыми переводами */
  readonly text: TextInclude

  /**
   * Constructor for initializing all sub-components, icons, and texts of the dialog.
   *
   * Конструктор для инициализации всех подкомпонентов, иконок и текстов диалога.
   * @param props input data / входные данные
   * @param refs input data references / ссылки на входные данные
   * @param element target element / целевой элемент
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots slots / слоты
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param extraWindow additional parameters for WindowInclude / дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude / дополнительные параметры для BarsInclude
   * @param extraActions additional parameters for ActionsInclude / дополнительные параметры для ActionsInclude
   * @param constructors object with classes / объект с классами
   * @param constructors.ActionsConstructor class for creating actions / класс для создания действий
   * @param constructors.BarsConstructor class for creating bars / класс для создания панелей
   * @param constructors.DescriptionIncludeConstructor class for working with description / класс для работы с описанием
   * @param constructors.IconIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   * @param constructors.WindowClassesIncludeConstructor class for working with window classes / класс для работы с классами окна
   * @param constructors.WindowConstructor class for creating a window / класс для создания окна
   */
  constructor(
    protected override readonly props: DialogProps,
    protected readonly refs: ToRefs<DialogProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<DialogComponents, DialogProps>,
    protected readonly slots?: DialogSlots,
    protected readonly emits?: ConstrEmit<DialogEmits>,
    protected readonly extraWindow?: () => ComponentIncludeExtra<WindowProps>,
    protected readonly extraBars?: () => ComponentIncludeExtra<BarsProps>,
    protected readonly extraActions?: () => ComponentIncludeExtra<ActionsProps>,
    constructors: {
      ActionsConstructor?: typeof ActionsInclude
      BarsConstructor?: typeof BarsInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      IconIncludeConstructor?: typeof IconInclude
      LabelIncludeConstructor?: typeof LabelInclude
      TextIncludeConstructor?: typeof TextInclude
      WindowClassesIncludeConstructor?: typeof WindowClassesInclude
      WindowConstructor?: typeof WindowInclude
    } = {}
  ) {
    const {
      DescriptionIncludeConstructor = DescriptionInclude,
      IconIncludeConstructor = IconInclude,
      LabelIncludeConstructor = LabelInclude,
      TextIncludeConstructor = TextInclude,
      WindowClassesIncludeConstructor = WindowClassesInclude
    } = constructors

    super(
      props,
      refs,
      element,
      classDesign,
      className,
      components,
      slots,
      emits,
      extraWindow,
      extraBars,
      extraActions,
      constructors
    )

    this.icon = new IconIncludeConstructor(
      () => ({ icon: this.iconValue }),
      className,
      components,
      refs.iconAttrs
    )
    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      true
    )
    this.description = new DescriptionIncludeConstructor(props, className, slots)

    this.windowClasses = new WindowClassesIncludeConstructor(classDesign)
    this.text = new TextIncludeConstructor(this.props)
  }

  /** Getter value for resolving the active icon / Значение-геттер для определения активной иконки */
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
   * Retrieves additional properties for the window sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента окна.
   * @returns object with additional window properties / объект с дополнительными свойствами окна
   */
  protected override getExtraWindow(): ComponentIncludeExtra<WindowProps> {
    return {
      ...super.getExtraWindow(),

      open: this.props.open,
      image: this.props.image,

      adaptive: 'modal',
      imagePosition: this.props.imagePosition,
      closeButton: this.props.closeButton
    }
  }

  /**
   * Retrieves additional properties for the actions sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента действий.
   * @returns object with additional actions properties / объект с дополнительными свойствами действий
   */
  protected override getExtraActions(): ComponentIncludeExtra<ActionsProps> {
    const list = []

    if (this.props.buttonClose !== null) {
      list.push(
        getBind(
          this.props.buttonClose,
          {
            label: this.text.close,
            value: 'close',
            class: this.windowClasses.get().close,
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
            label: this.text.ok,
            value: 'ok',
            class: this.props.clickOkAndClose ? this.windowClasses.get().close : undefined,
            onClick: () => this.emits?.('ok')
          },
          'label',
          true
        )
      )
    }

    return {
      ...super.getExtraActions(),

      list,
      align: 'center'
    }
  }
}
