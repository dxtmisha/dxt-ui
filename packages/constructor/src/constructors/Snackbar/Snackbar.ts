import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { SnackbarData } from './SnackbarData'

import type { SnackbarComponents, SnackbarEmits, SnackbarSlots } from './types'
import type { SnackbarProps } from './props'

/**
 * Snackbar
 */
export class Snackbar {
  /** Data manager for snackbar / Менеджер данных для снекбара */
  readonly data: SnackbarData

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.DataConstructor class for creating data / класс для создания данных
   */
  constructor(
    protected readonly props: SnackbarProps,
    protected readonly refs: ToRefs<SnackbarProps>,
    protected readonly element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SnackbarComponents, SnackbarProps>,
    protected readonly slots?: SnackbarSlots,
    protected readonly emits?: ConstrEmit<SnackbarEmits>,
    constructors?: {
      DataConstructor?: typeof SnackbarData
    }
  ) {
    const {
      DataConstructor = SnackbarData
    } = constructors ?? {}

    this.data = new DataConstructor(props, element as any, className)
  }

  /**
   * Event for hiding the message.
   *
   * Событие для скрытия сообщения.
   * @param value element identification / идентификация элемента
   */
  readonly onClose = (value: string) => this.data.remove(value)
}
