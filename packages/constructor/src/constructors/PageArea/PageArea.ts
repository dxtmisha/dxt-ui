import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'
import { getAreaValue } from '../../functions/getAreaValue'

import type { PageAreaComponents, PageAreaEmits, PageAreaSlots } from './types'
import type { PageAreaProps } from './props'

/**
 * PageArea
 *
 * Класс для работы с областью страницы.
 */
export class PageArea {
  /**
   * Constructor
   *
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   */
  constructor(
    protected readonly props: PageAreaProps,
    protected readonly refs: ToRefs<PageAreaProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<PageAreaComponents, PageAreaProps>,
    protected readonly slots?: PageAreaSlots,
    protected readonly emits?: ConstrEmit<PageAreaEmits>
  ) {
  }

  /** Area value / Значение области */
  readonly area = computed(() => getAreaValue())
}
