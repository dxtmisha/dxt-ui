import type { Ref, ToRefs } from 'vue'
import type { ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { ActionsInclude } from '../Actions'
import { BarsInclude } from '../Bars'
import { WindowInclude } from '../Window'

import { ModalAbstract } from './ModalAbstract'

import type { ModalComponents, ModalEmits, ModalSlots } from './types'
import type { ModalProps } from './props'

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
   * @param refs input data references / ссылки на входные данные
   * @param element element / элемент
   * @param classDesign class design / дизайн класса
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots slots / слоты
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with constructor classes / объект с классами конструкторов
   * @param constructors.WindowConstructor class for creating a window / класс для создания окна
   * @param constructors.BarsConstructor class for creating bars / класс для создания панелей
   * @param constructors.ActionsConstructor class for creating actions / класс для создания действий
   */
  constructor(
    protected readonly props: ModalProps,
    protected readonly refs: ToRefs<ModalProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ModalComponents, ModalProps>,
    protected readonly slots?: ModalSlots,
    protected readonly emits?: ConstrEmit<ModalEmits>,
    constructors?: {
      ActionsConstructor?: typeof ActionsInclude
      BarsConstructor?: typeof BarsInclude
      ModelIncludeConstructor?: typeof ModelInclude
      WindowConstructor?: typeof WindowInclude
    }
  ) {
    super(
      props,
      refs,
      element,
      classDesign,
      className,
      components,
      slots,
      emits,
      () => ({
        image: props.image,

        adaptive: 'modal',
        imagePosition: props.imagePosition,
        closeButton: props.barsBackHide
      }),
      undefined,
      undefined,
      constructors
    )
  }
}
