import type { Ref } from 'vue'
import type { ConstrEmit, DesignComp, DesignName } from '@dxtmisha/functional'

import { ModalAbstract, type ModalConstructors, type ModalLegacyConstructors } from './ModalAbstract'

import type { ModalComponents, ModalEmits, ModalSlots } from './types'
import type { ModalProps } from './props'

export type { ModalConstructors, ModalLegacyConstructors }

/**
 * Class for managing a modal window component.
 * It extends the abstract modal logic (ModalAbstract) to provide concrete modal behaviors, combining top/bottom bars, action buttons, and window overlays into a cohesive modal interface.
 *
 * Класс для управления компонентом модального окна.
 * Расширяет абстрактную логику модального окна (ModalAbstract) для обеспечения конкретного поведения, объединяя верхние/нижние панели, кнопки действий и оверлеи окон в единый модальный интерфейс.
 */
export class Modal extends ModalAbstract {
  /**
   * Constructor for initializing all sub-components of the modal window.
   *
   * Конструктор для инициализации всех подкомпонентов модального окна.
   * @param props input data / входные данные
   * @param element element / элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots slots / слоты
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with constructor classes / объект с классами конструкторов
   */
  constructor(
    props: ModalProps,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ModalComponents, ModalProps>,
    slots?: ModalSlots,
    emits?: ConstrEmit<ModalEmits>,
    constructors?: Partial<ModalConstructors> | ModalLegacyConstructors
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      () => ({
        image: this.props.image,

        adaptive: 'modal',
        imagePosition: this.props.imagePosition,
        closeButton: this.props.barsBackHide
      }),
      undefined,
      undefined,
      constructors
    )
  }
}
