import { type Ref } from 'vue'
import { type ConstrEmit, type DesignComp, type DesignName, isFilled } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { LabelNumberInclude } from '../../classes/LabelNumberInclude'

import { IconInclude } from '../Icon'

import type { AriaList } from '../../types/ariaTypes'
import type { BadgeComponents, BadgeEmits, BadgeSlots } from './types'
import type { BadgeProps } from './props'

/**
 * The Badge class implements a badge constructor with icon support and auto-hide logic.
 *
 * Класс Badge реализует конструктор бейджа с поддержкой иконок и авто-скрытия.
 */
export class Badge {
  readonly label: LabelNumberInclude
  readonly icon: IconInclude

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.IconIncludeConstructor class for working with icon / класс для работы с иконкой
   * @param constructors.LabelNumberIncludeConstructor class for working with label / класс для работы с меткой
   */
  constructor(
    protected readonly props: BadgeProps,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComp<BadgeComponents, BadgeProps>,
    protected readonly slots?: BadgeSlots,
    protected readonly emits?: ConstrEmit<BadgeEmits>,
    constructors: {
      IconIncludeConstructor?: typeof IconInclude
      LabelNumberIncludeConstructor?: typeof LabelNumberInclude
    } = {}
  ) {
    const {
      IconIncludeConstructor = IconInclude,
      LabelNumberIncludeConstructor = LabelNumberInclude
    } = constructors

    this.label = new LabelNumberIncludeConstructor(
      props,
      naming,
      undefined,
      slots
    )

    this.icon = new IconIncludeConstructor(
      props,
      naming,
      components
    )
  }

  /**
   * Computes if the badge should auto-hide when there is no dot, icon, or label.
   *
   * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
   */
  get autoHide(): boolean {
    return !this.props.dot
      && !isFilled(this.icon.isIcon())
      && !isFilled(this.label.is)
  }

  /**
   * Classes for controlling badge visibility.
   *
   * Классы для управления видимостью бейджа.
   */
  get classes() {
    return {
      [this.naming.getStatusClass('hideAuto')]: this.autoHide
    }
  }

  get aria(): AriaList {
    if (this.props.ariaLabel) {
      return {
        ...AriaStaticInclude.hidden()
      }
    }

    return {}
  }
}
