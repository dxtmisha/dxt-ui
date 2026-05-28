import type { VNode } from 'vue'
import { type DesignComponents } from '@dxtmisha/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'

import type { RippleComponentInclude } from './basicTypes'
import type { RipplePropsBasic } from './props'

/**
 * Helper class for conditionally rendering the Ripple component in target components.
 *
 * Вспомогательный класс для условного рендеринга компонента Ripple в целевых компонентах.
 */
export class RippleInclude {
  /**
   * Constructor for creating a RippleInclude instance.
   *
   * Конструктор для создания экземпляра RippleInclude.
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param enabled enabled state manager / менеджер состояния активности
   */
  constructor(
    protected readonly className: string,
    protected readonly components?: DesignComponents<RippleComponentInclude, RipplePropsBasic>,
    protected readonly enabled?: EnabledInclude
  ) {
  }

  /**
   * Renders the ripple element if the component is registered and enabled.
   *
   * Рендерит элемент эффекта волны, если компонент зарегистрирован и активен.
   * @returns array of virtual nodes (VNode) / массив виртуальных узлов (VNode)
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.components.is('ripple')
      && (
        !this.enabled
        || this.enabled.isEnabled
      )
    ) {
      return this.components.render(
        'ripple',
        { class: `${this.className}__ripple` }
      )
    }

    return []
  }
}
