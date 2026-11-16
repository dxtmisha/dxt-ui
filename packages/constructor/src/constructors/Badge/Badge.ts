import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { LabelNumberInclude } from '../../classes/LabelNumberInclude'

import { IconInclude } from '../Icon'

import type { AriaList } from '../../types/ariaTypes'
import type { BadgeProps } from './props'
import type { BadgeComponents, BadgeEmits, BadgeSlots } from './types'

/** Badge dependency constructors type / Тип конструкторов зависимостей Badge */
export type BadgeConstructors = {
  /** Icon constructor / Конструктор иконки */
  icon: typeof IconInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelNumberInclude
}

/**
 * The Badge class implements a badge constructor with icon support and auto-hide logic.
 *
 * Класс Badge реализует конструктор бейджа с поддержкой иконок и авто-скрытия.
 */
export class Badge extends DesignLogicAbstract<
  HTMLDivElement,
  BadgeComponents,
  BadgeEmits,
  BadgeSlots,
  BadgeProps,
  BadgeConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BadgeConstructors> = {
    icon: {
      item: IconInclude,
      canCreate: () => IconInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: LabelNumberInclude,
      canCreate: () => LabelNumberInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots
      ]
    }
  }

  /**
   * Returns ARIA attributes for the inner label element.
   * Hides the visible label from screen readers when an accessible `ariaLabel` is provided.
   *
   * Возвращает ARIA-атрибуты для внутреннего элемента метки.
   * Скрывает видимую метку от скринридеров при наличии доступного `ariaLabel`.
   * @returns list of ARIA properties / список свойств ARIA
   */
  get aria(): AriaList {
    if (this.props.ariaLabel) {
      return AriaStaticInclude.hidden()
    }

    return {}
  }

  /**
   * Computes if the badge should auto-hide when there is no dot, icon, or label.
   *
   * Вычисляет, должен ли бейдж автоматически скрываться, если нет точки, иконки и текста.
   * @returns true if badge should auto-hide / true, если бейдж должен автоматически скрываться
   */
  get autoHide(): boolean {
    return !this.props.dot
      && !this.callInstance('icon', item => item.isIcon(), false)
      && !this.callInstance('label', item => item.is, false)
  }

  /**
   * Returns attributes for the main badge element.
   *
   * Возвращает атрибуты для главного элемента бейджа.
   * @returns main element properties / свойства главного элемента
   */
  get binds(): ConstrBind {
    return AriaStaticInclude.label(this.props.ariaLabel)
  }

  /**
   * Classes for controlling badge visibility.
   *
   * Классы для управления видимостью бейджа.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.naming.getStatusClass('hideAuto')]: this.autoHide
    }
  }
}
