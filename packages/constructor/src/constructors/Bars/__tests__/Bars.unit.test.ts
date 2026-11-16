// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
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

    it('should compute backLabel and backBinds correctly in normal and action modes', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<BarsProps>({
        action: false,
        backButton: { label: 'Go Back' },
        iconBack: 'back-icon',
        iconClose: 'close-icon'
      })

      scope.run(() => {
        const bars = new Bars(props, element, naming)

        expect(bars.backLabel).toBe('Go Back')
        expect(bars.backBinds.value?.value).toBe('back')
        expect(bars.backBinds.value?.key).toBe('mainBar-back')
        expect(bars.backBinds.value?.icon).toEqual({
          animationShow: false,
          icon: 'back-icon',
          iconActive: 'close-icon'
        })

        bars.i('action').open()
        expect(bars.backLabel).toBeUndefined()
      })

      scope.stop()
    })

    it('should compute barsBinds and actionBarsBinds correctly and preserve text-only buttons without phantom icon', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const bars = new Bars(
          reactive({
            buttonAttrs: { size: 'sm' },
            bars: [
              { value: 'edit', label: 'Edit', icon: 'edit-icon' },
              { label: 'Save' }
            ],
            actionBars: [
              { value: 'delete', label: 'Delete', icon: 'delete-icon' }
            ]
          }),
          element,
          naming
        )

        expect(bars.barsBinds.value?.[0]?.value).toBe('edit')
        expect(bars.barsBinds.value?.[0]?.key).toBe('mainBar-edit')
        expect(bars.barsBinds.value?.[0]?.size).toBe('sm')
        expect(bars.barsBinds.value?.[0]?.icon).toEqual({
          animationShow: false,
          icon: 'edit-icon'
        })

        expect(bars.barsBinds.value?.[1]?.key).toBe('mainBar-1')
        expect(bars.barsBinds.value?.[1]?.icon).toBeUndefined()

        expect(bars.actionBarsBinds.value?.[0]?.value).toBe('delete')
        expect(bars.actionBarsBinds.value?.[0]?.key).toBe('actionBar-delete')
        expect(bars.actionBarsBinds.value?.[0]?.icon).toEqual({
          animationShow: true,
          icon: 'delete-icon'
        })
      })

      scope.stop()
    })

    it('should return undefined for barsBinds and actionBarsBinds when props are omitted', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const bars = new Bars(reactive({}), element, naming)
        expect(bars.barsBinds.value).toBeUndefined()
        expect(bars.actionBarsBinds.value).toBeUndefined()
      })

      scope.stop()
    })
  })

  describe('Lazy instantiation, canCreate guards & Dependency Injection', () => {
    it('should keep optional label, description, and skeleton uninstantiated when disabled', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()

      scope.run(() => {
        const inspectable = new InspectableBars(
          reactive({}),
          element,
          naming
        )

        expect(inspectable.instantiatedItems.skeleton).toBeUndefined()
        expect(inspectable.instantiatedItems.label).toBeUndefined()
        expect(inspectable.instantiatedItems.description).toBeUndefined()

        expect(inspectable.callInstance('label', item => item.render(), [])).toEqual([])
        expect(inspectable.callInstance('description', item => item.render(), [])).toEqual([])
        expect(inspectable.callInstance('skeleton', item => item.classes)).toBeUndefined()

        expect(inspectable.instantiatedItems.skeleton).toBeUndefined()
        expect(inspectable.instantiatedItems.label).toBeUndefined()
        expect(inspectable.instantiatedItems.description).toBeUndefined()
      })

      scope.stop()
    })

    it('should instantiate label and description lazily when props or action mode enable them', () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const props = reactive<BarsProps>({
        action: false,
        actionLabel: 'Action Header',
        actionDescription: 'Action Desc'
      })

      scope.run(() => {
        const inspectable = new InspectableBars(props, element, naming)

        expect(inspectable.callInstance('label', item => item.render(), [])).toEqual([])
        expect(inspectable.callInstance('description', item => item.render(), [])).toEqual([])
        expect(inspectable.instantiatedItems.label).toBeUndefined()
        expect(inspectable.instantiatedItems.description).toBeUndefined()

        inspectable.i('action').open()

        const labelNodes = inspectable.callInstance('label', item => item.render(), [])
        const descriptionNodes = inspectable.callInstance('description', item => item.render(), [])

        expect(labelNodes.length).toBe(1)
        expect(descriptionNodes.length).toBe(1)
        expect(inspectable.instantiatedItems.label).toBeDefined()
        expect(inspectable.instantiatedItems.description).toBeDefined()
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
          reactive({ isSkeleton: true, label: 'Title' }),
          element,
          naming
        )

        expect(barsWithSkeleton.instantiatedItems.skeleton).toBeUndefined()
        const labelNodes = barsWithSkeleton.callInstance('label', item => item.render(), [])
        expect(labelNodes.length).toBe(1)
        expect(barsWithSkeleton.instantiatedItems.skeleton).toBeInstanceOf(SkeletonInclude)
      })

      scope.stop()
    })
  })

  describe('User interactions & Events', () => {
    it('should handle back button click, close action mode for value="back", and emit model updates', async () => {
      const scope = effectScope()
      const element = ref<HTMLElement>()
      const emitFn = vi.fn()

      await scope.run(async () => {
        const bars = new Bars(
          reactive({ action: true }),
          element,
          naming,
          undefined,
          undefined,
          emitFn
        )

        expect(bars.isAction()).toBe(true)

        const clickEvent = new MouseEvent('click')
        bars.backBinds.value?.onClick?.(clickEvent, { value: 'other', type: 'custom' })
        expect(bars.isAction()).toBe(true)
        expect(emitFn).toHaveBeenCalledWith('click', clickEvent, { value: 'other', type: 'custom' })

        bars.backBinds.value?.onClick?.(clickEvent, { value: 'back', type: 'back' })
        await nextTick()

        expect(bars.isAction()).toBe(false)
        expect(emitFn).toHaveBeenCalledWith('click', clickEvent, { value: 'back', type: 'back' })
        expect(emitFn).toHaveBeenCalledWith('update:action', false)
        expect(emitFn).toHaveBeenCalledWith('update:modelAction', false)
      })

      scope.stop()
    })
  })
})
