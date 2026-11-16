// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { LabelNumberInclude } from '../../../classes/LabelNumberInclude'
import { IconInclude, type IconPropsInclude } from '../../Icon'
import { Badge, type BadgeConstructors } from '../Badge'
import type { BadgeProps } from '../props'

class InspectableBadge extends Badge {
  get instantiatedItems(): Partial<Record<keyof BadgeConstructors, unknown>> {
    return this.instances
  }
}

describe('Badge (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.badge')

  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep icon and label uninstantiated when dot is true or when props and slots are empty', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const emptyProps = reactive<BadgeProps>({})
      const dotProps = reactive<BadgeProps>({ dot: true, label: '5', icon: 'star' })

      scope.run(() => {
        const emptyBadge = new InspectableBadge(emptyProps, element, naming)
        expect(emptyBadge.autoHide).toBe(true)
        expect(emptyBadge.classes).toEqual({ 'd1-badge--hideAuto': true })
        expect(emptyBadge.hasInstance('icon')).toBe(false)
        expect(emptyBadge.hasInstance('label')).toBe(false)

        const dotBadge = new InspectableBadge(dotProps, element, naming)
        expect(dotBadge.autoHide).toBe(false)
        expect(dotBadge.classes).toEqual({ 'd1-badge--hideAuto': false })
        expect(dotBadge.hasInstance('icon')).toBe(false)
        expect(dotBadge.hasInstance('label')).toBe(false)
      })

      scope.stop()
    })

    it('should instantiate only requested helpers and support constructors DI overrides', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<BadgeProps>({ label: '10', icon: 'bell' })

      class CustomIconInclude<Props extends IconPropsInclude = IconPropsInclude> extends IconInclude<Props> {
        override isIcon(): boolean {
          return false
        }
      }

      class CustomLabelNumberInclude extends LabelNumberInclude {
        override get is(): boolean {
          return true
        }
      }

      scope.run(() => {
        const badge = new Badge(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            icon: CustomIconInclude,
            label: CustomLabelNumberInclude
          }
        )

        expect(badge.i('icon')).toBeInstanceOf(CustomIconInclude)
        expect(badge.i('label')).toBeInstanceOf(CustomLabelNumberInclude)
        expect(badge.autoHide).toBe(false)
      })

      scope.stop()
    })
  })

  describe('ARIA, binds, autoHide, and classes', () => {
    it('should compute aria and binds from ariaLabel', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<BadgeProps>({})

      scope.run(() => {
        const badge = new Badge(props, element, naming)

        expect(badge.aria).toEqual({})
        expect(badge.binds).toEqual({})

        props.ariaLabel = 'Unread count'
        expect(badge.aria).toEqual({ 'aria-hidden': 'true' })
        expect(badge.binds).toEqual({ 'aria-label': 'Unread count' })

        props.ariaLabel = ''
        expect(badge.aria).toEqual({})
        expect(badge.binds).toEqual({})
      })

      scope.stop()
    })

    it('should treat numeric 0 and string "0" labels as visible', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<BadgeProps>({ label: 0 })

      scope.run(() => {
        const badge = new Badge(props, element, naming)
        expect(badge.autoHide).toBe(false)
        expect(badge.classes).toEqual({ 'd1-badge--hideAuto': false })

        props.label = '0'
        expect(badge.autoHide).toBe(false)

        props.label = undefined
        expect(badge.autoHide).toBe(true)
        expect(badge.classes).toEqual({ 'd1-badge--hideAuto': true })
      })

      scope.stop()
    })

    it('should recognize default slot as visible content', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<BadgeProps>({})

      scope.run(() => {
        const badge = new Badge(
          props,
          element,
          naming,
          undefined,
          { default: () => 'slot' }
        )
        expect(badge.autoHide).toBe(false)
        expect(badge.hasInstance('label')).toBe(true)
        expect(badge.hasInstance('icon')).toBe(false)
      })

      scope.stop()
    })
  })
})
