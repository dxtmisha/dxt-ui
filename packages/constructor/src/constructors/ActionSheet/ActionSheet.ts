import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { TouchEventInclude } from '../../classes/TouchEventInclude'

import type { ActionsInclude, ActionsProps } from '../Actions'
import type { BarsInclude, BarsProps } from '../Bars'
import { ModalAbstract } from '../Modal'
import type { WindowInclude, WindowProps } from '../Window'

import type { TouchEventTypeY } from '../../types/touchEventTypes'
import type { ComponentIncludeExtra } from '../../types/componentInclude'
import type { ActionSheetComponents, ActionSheetEmits, ActionSheetSlots } from './types'
import type { ActionSheetProps } from './props'

/**
 * ActionSheet
 *
 * The class for working with an action sheet.
 * Класс для работы с листом действий.
 */
export class ActionSheet extends ModalAbstract {
  /** touch event/ событие касания */
  readonly touchEvent: TouchEventInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extraWindow additional parameters for WindowInclude / дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude / дополнительные параметры для BarsInclude
   * @param extraActions additional parameters for ActionsInclude / дополнительные параметры для ActionsInclude
   * @param constructors object with classes/ объект с классами
   * @param constructors.ActionsConstructor class for creating actions/ класс для создания действий
   * @param constructors.BarsConstructor class for creating bars/ класс для создания панелей
   * @param constructors.TouchEventIncludeConstructor class for working with touch event/ класс для работы с событием касания
   * @param constructors.WindowConstructor class for creating a window/ класс для создания окна
   */
  constructor(
    protected readonly props: ActionSheetProps,
    protected readonly refs: ToRefs<ActionSheetProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ActionSheetComponents, ActionSheetProps>,
    protected readonly slots?: ActionSheetSlots,
    protected readonly emits?: ConstrEmit<ActionSheetEmits>,
    protected readonly extraWindow?: () => ComponentIncludeExtra<WindowProps>,
    protected readonly extraBars?: () => ComponentIncludeExtra<BarsProps>,
    protected readonly extraActions?: () => ComponentIncludeExtra<ActionsProps>,
    constructors?: {
      ActionsConstructor?: typeof ActionsInclude
      BarsConstructor?: typeof BarsInclude
      TouchEventIncludeConstructor?: typeof TouchEventInclude
      WindowConstructor?: typeof WindowInclude
    }
  ) {
    const {
      TouchEventIncludeConstructor = TouchEventInclude
    } = constructors ?? {}

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

    this.touchEvent = new TouchEventIncludeConstructor(
      undefined,
      (
        _,
        __,
        ___,
        clientY: number
      ) => clientY >= 0,
      (_, type: TouchEventTypeY) => {
        if (type === 'bottom') {
          this.window.expose.setOpen(false).then()
          return false
        }

        return true
      }
    )
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

      adaptive: 'actionSheet' as any,
      closeButton: this.props.barsBackHide,
      closeMobileHide: this.props.touchClose
    }
  }

  /**
   * Retrieves additional properties for the actions sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента действий.
   * @returns object with additional actions properties / объект с дополнительными свойствами действий
   */
  protected override getExtraActions(): ComponentIncludeExtra<ActionsProps> {
    return {
      ...super.getExtraActions(),

      align: 'auto'
    }
  }
}
