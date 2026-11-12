// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Bars, type BarsConstructors } from '../Bars'
import { BarsAction } from '../BarsAction'
import { SkeletonInclude } from '../../Skeleton'
import type { BarsProps } from '../props'

class InspectableBars extends Bars {
  get instantiatedItems(): Partial<Record<keyof BarsConstructors, unknown>> {
    return this.instances
  }
}

describe('Bars (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.bars')

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize and evaluate action states to false when empty', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props: BarsProps = reactive({})

      scope.run(() => {
        const bars = new Bars(props, element, naming)

        expect(bars.isAction()).toBe(false)
        expect(bars.isActionPossible()).toBe(false)
        expect(bars.isLabel()).toBe(false)
        expect(bars.isDescription()).toBe(false)
      })

      scope.stop()
    })

    it('should evaluate isLabel() properly based on props and slots', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const barsEmpty = new Bars(reactive({}), element, naming)
        expect(barsEmpty.isLabel()).toBe(false)

        const barsWithLabel = new Bars(reactive({ label: 'Header title' }), element, naming)
        expect(barsWithLabel.isLabel()).toBe(true)

        const barsWithActionLabel = new Bars(reactive({ actionLabel: 'Action title' }), element, naming)
        expect(barsWithActionLabel.isLabel()).toBe(true)

        const barsWithSlot = new Bars(
          reactive({}),
          element,
          naming,
          undefined,
          { default: () => 'Slot Title' }
        )
        expect(barsWithSlot.isLabel()).toBe(true)
      })

      scope.stop()
    })

    it('should evaluate isDescription() properly based on props and slots', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const barsEmpty = new Bars(reactive({}), element, naming)
        expect(barsEmpty.isDescription()).toBe(false)

        const barsWithDesc = new Bars(reactive({ description: 'Description text' }), element, naming)
        expect(barsWithDesc.isDescription()).toBe(true)

        const barsWithActionDesc = new Bars(reactive({ actionDescription: 'Action desc' }), element, naming)
        expect(barsWithActionDesc.isDescription()).toBe(true)

        const barsWithSlot = new Bars(
          reactive({}),
          element,
          naming,
          undefined,
          { description: () => 'Slot Description' }
        )
        expect(barsWithSlot.isDescription()).toBe(true)
      })

      scope.stop()
    })

    it('should return correct classes according to action state', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const barsInactive = new Bars(reactive({ action: false }), element, naming)
        expect(barsInactive.classes).toEqual({
          [naming.getStatusClass('action')]: false
        })

        const barsActive = new Bars(reactive({ action: true }), element, naming)
        expect(barsActive.classes).toEqual({
          [naming.getStatusClass('action')]: true
        })
      })

      scope.stop()
    })

    it('should return correct aria and ariaLive attributes', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const barsStatic = new Bars(reactive({}), element, naming)
        expect(barsStatic.ariaLive).toBeUndefined()
        expect(barsStatic.aria).toEqual({})

        const barsWithAction = new Bars(
          reactive({ actionLabel: 'Select items' }),
          element,
          naming
        )
        expect(barsWithAction.ariaLive).toBe('polite')
        expect(barsWithAction.aria).toEqual({
          'aria-live': 'polite'
        })
      })

      scope.stop()
    })

    it('should compute backLabel and backBinds correctly', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const bars = new Bars(
          reactive({
            backButton: { label: 'Go Back' },
            iconBack: 'back-icon',
            iconClose: 'close-icon'
          }),
          element,
          naming
        )

        expect(bars.backLabel).toBe('Go Back')
        expect(bars.backBinds.value?.value).toBe('back')
        expect(bars.backBinds.value?.key).toBe('mainBar-back')
      })

      scope.stop()
    })

    it('should compute barsBinds and actionBarsBinds correctly', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const bars = new Bars(
          reactive({
            bars: [{ value: 'edit', label: 'Edit' }],
            actionBars: [{ value: 'delete', label: 'Delete' }]
          }),
          element,
          naming
        )

        expect(bars.barsBinds.value?.[0]?.value).toBe('edit')
        expect(bars.barsBinds.value?.[0]?.key).toBe('mainBar-edit')

        expect(bars.actionBarsBinds.value?.[0]?.value).toBe('delete')
        expect(bars.actionBarsBinds.value?.[0]?.key).toBe('actionBar-delete')
      })

      scope.stop()
    })
  })

  describe('Lazy instantiation & Dependency Injection', () => {
    it('should not instantiate optional subordinate items upfront', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const inspectable = new InspectableBars(
          reactive({}),
          element,
          naming
        )

        // skeleton, label, description should NOT be instantiated initially when empty
        expect(inspectable.instantiatedItems.skeleton).toBeUndefined()
        expect(inspectable.instantiatedItems.label).toBeUndefined()
        expect(inspectable.instantiatedItems.description).toBeUndefined()
      })

      scope.stop()
    })

    it('should allow overriding subordinate classes via constructors DI', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      class CustomAction extends BarsAction {
        override isPossible(): boolean {
          return true
        }
      }

      scope.run(() => {
        const bars = new Bars(
          reactive({}),
          element,
          naming,
          undefined,
          undefined,
          undefined,
          { action: CustomAction }
        )

        expect(bars.i('action')).toBeInstanceOf(CustomAction)
        expect(bars.isActionPossible()).toBe(true)
      })

      scope.stop()
    })

    it('should instantiate skeleton only when requested and enabled in props', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const barsWithSkeleton = new InspectableBars(
          reactive({ isSkeleton: true }),
          element,
          naming
        )

        expect(barsWithSkeleton.instantiatedItems.skeleton).toBeUndefined()
        const skeletonInstance = barsWithSkeleton.i('skeleton')
        expect(skeletonInstance).toBeInstanceOf(SkeletonInclude)
        expect(barsWithSkeleton.instantiatedItems.skeleton).toBeDefined()
      })

      scope.stop()
    })
  })

  describe('User interactions & Events', () => {
    it('should handle back button click and close action mode if value is back', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const emitFn = vi.fn()

      scope.run(() => {
        const bars = new Bars(
          reactive({ action: true }),
          element,
          naming,
          undefined,
          undefined,
          emitFn
        )

        expect(bars.isAction()).toBe(true)

        // Trigger back button click
        const clickEvent = new MouseEvent('click')
        bars.backBinds.value?.onClick?.(clickEvent, { value: 'back', type: 'back' })

        expect(bars.isAction()).toBe(false)
        expect(emitFn).toHaveBeenCalledWith('click', clickEvent, { value: 'back', type: 'back' })
      })

      scope.stop()
    })
  })
})
