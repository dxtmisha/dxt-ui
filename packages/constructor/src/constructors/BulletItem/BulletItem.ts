import type { Ref, ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'

import type { BulletItemComponents, BulletItemEmits, BulletItemSlots } from './types'
import type { BulletItemProps } from './props'

/**
 * Class for working with the marking element.<br>
 * Класс для работы с элементом маркировки.
 */
export class BulletItem {
  /** Description include / Подключение описания */
  readonly description: DescriptionInclude

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
   * @param constructors.DescriptionConstructor class for creating a description / класс для создания описания
   */
  constructor(
    protected readonly props: BulletItemProps,
    protected readonly refs: ToRefs<BulletItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BulletItemComponents, BulletItemProps>,
    protected readonly slots?: BulletItemSlots,
    protected readonly emits?: ConstrEmit<BulletItemEmits>,
    constructors: {
      DescriptionConstructor?: typeof DescriptionInclude
    } = {}
  ) {
    const {
      DescriptionConstructor = DescriptionInclude
    } = constructors

    this.description = new DescriptionConstructor(
      this.props,
      this.className,
      this.slots,
      undefined,
      'span'
    )
  }
}
