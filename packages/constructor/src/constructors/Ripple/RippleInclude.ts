import type { VNode } from 'vue'
import { DesignComponents } from '@dxt-ui/functional'

import { EnabledInclude } from '../../classes/EnabledInclude'

import type { RippleComponentsInclude } from './basicTypes'
import type { RipplePropsBasic } from './props'

export class RippleInclude {
  constructor(
    protected readonly className: string,
    protected readonly components?: DesignComponents<RippleComponentsInclude, RipplePropsBasic>,
    protected readonly enabled?: EnabledInclude
  ) {
  }

  /**
   * Render Ripple
   *
   * Рендер Ripple
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.components.is('ripple')
      && (
        !this.enabled
        || this.enabled.isEnabled.value
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
