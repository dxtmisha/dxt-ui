// ai-none

import type { VNode } from 'vue'
import { type DesignComponents, type DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'

import type { RippleComponentInclude, RipplePropsInclude } from './basicTypes'
import type { RipplePropsBasic } from './props'

/**
 * Helper class for conditionally rendering the Ripple component in target components.
 *
 * Вспомогательный класс для условного рендеринга компонента Ripple в целевых компонентах.
 */
export class RippleInclude {
  /**
   * Checks whether the ripple effect can be active based on properties.
   *
   * Проверяет, может ли быть активен эффект волны на основе свойств.
   * @param props input properties / входные свойства
   * @returns true if ripple is enabled / true, если волна активна
   */
  static is(props?: RipplePropsInclude): boolean {
    return Boolean(
      !props?.disabled
      && !props?.readonly
      && !props?.loading
    )
  }

  /**
   * Constructor for creating a RippleInclude instance.
   *
   * Конструктор для создания экземпляра RippleInclude.
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param enabled enabled state manager / менеджер состояния активности
   */
  constructor(
    protected readonly naming: DesignName,
    protected readonly components?: DesignComponents<RippleComponentInclude, RipplePropsBasic>,
    protected readonly enabled?: EnabledInclude | (() => EnabledInclude)
  ) {
  }

  /**
   * Renders the ripple element if the component is registered and enabled.
   *
   * Рендерит элемент эффекта волны, если компонент зарегистрирован и активен.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly render = (): VNode[] => {
    const enabled = typeof this.enabled === 'function' ? this.enabled() : this.enabled

    if (
      this.components
      && this.components.is('ripple')
      && (
        !enabled
        || enabled.isEnabled
      )
    ) {
      return this.components.render(
        'ripple',
        { class: this.naming.getSubClass('ripple') }
      )
    }

    return []
  }
}
