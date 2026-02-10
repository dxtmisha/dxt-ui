import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ModalAbstract } from '../Modal/ModalAbstract'
import { TouchEventInclude } from '../../classes/TouchEventInclude'

import type { TouchEventTypeY } from '../../types/touchEventTypes'
import type { ActionSheetComponents, ActionSheetEmits, ActionSheetSlots } from './types'
import type { ActionSheetProps } from './props'

/**
 * ActionSheet
 */
export class ActionSheet extends ModalAbstract {
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
   * @param constructors object with classes/ объект с классами
   * @param constructors.TouchEventIncludeConstructor class for working with touch event/ класс для работы с событием касания
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
    constructors?: {
      TouchEventIncludeConstructor?: typeof TouchEventInclude
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
      computed(() => ({
        open: props.open,

        adaptive: 'actionSheet',
        closeButton: props.barsBackHide,
        closeMobileHide: props.touchClose
      })),
      undefined,
      { align: 'auto' }
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
}
