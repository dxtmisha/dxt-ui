import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { BulletItemInclude } from '../BulletItem'

import type { BulletComponents, BulletEmits, BulletSlots } from './types'
import type { BulletProps } from './props'

/**
 * Class for working with the bullet list component.
 *
 * Класс для работы с компонентом маркированного списка.
 */
export class Bullet {
  /** Item inclusion manager / Менеджер включения элементов */
  readonly list: BulletItemInclude

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
   * @param constructors.BulletItemIncludeConstructor class for working with bullet items / класс для работы с элементами списка
   */
  constructor(
    protected readonly props: BulletProps,
    protected readonly refs: ToRefs<BulletProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BulletComponents, BulletProps>,
    protected readonly slots?: BulletSlots,
    protected readonly emits?: ConstrEmit<BulletEmits>,
    constructors: {
      BulletItemIncludeConstructor?: typeof BulletItemInclude
    } = {}
  ) {
    const {
      BulletItemIncludeConstructor = BulletItemInclude
    } = constructors

    this.list = new BulletItemIncludeConstructor(
      className,
      props,
      components
    )
  }

  /**
   * Returns the processed HTML string with styling applied to list items.
   *
   * Возвращает обработанную HTML-строку со стилизацией элементов списка.
   * @returns processed HTML or undefined / обработанный HTML или undefined
   */
  getHtml(): string | undefined {
    if (this.props.html) {
      return this.props.html
        .replace(/<li>/ig, `<li class="${this.list.getClasses()}">`)
    }

    return undefined
  }
}
