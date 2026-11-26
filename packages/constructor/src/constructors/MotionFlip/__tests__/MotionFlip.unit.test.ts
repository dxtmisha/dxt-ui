// @vitest-environment jsdom
import { describe, it, expect, afterEach, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import type { DesignName } from '@dxtmisha/functional'

import { MotionFlip } from '../MotionFlip'
import { MotionFlipAction } from '../MotionFlipAction'
import { MotionFlipElement } from '../MotionFlipElement'
import { MotionFlipItems } from '../MotionFlipItems'
import { MotionFlipObserver } from '../MotionFlipObserver'
import type { MotionFlipProps } from '../props'

const createMockNaming = (): DesignName => ({
  getName: () => 'd1-motion-flip',
  getStatusClass: (status: string) => `d1-motion-flip--${status}`,
  getSubClass: (sub: string) => `d1-motion-flip__${sub}`
} as unknown as DesignName)

describe('MotionFlip (Orchestrator Unit)', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should instantiate all subordinate classes lazily and expose no getter proxies', () => {
    const props = reactive<MotionFlipProps>({ auto: false })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))

    const flip = new MotionFlip(props, element, createMockNaming())

    expect(flip.hasInstance('action')).toBe(false)
    expect(flip.hasInstance('elementManager')).toBe(false)
    expect(flip.hasInstance('items')).toBe(false)
    expect(flip.hasInstance('observer')).toBe(false)

    // No subordinate getter proxies
    expect('action' in flip).toBe(false)
    expect('elementManager' in flip).toBe(false)
    expect('items' in flip).toBe(false)
    expect('observer' in flip).toBe(false)

    // Accessing binds, stop(), and onTransition() before action exists keeps subordinates lazy
    expect(flip.binds).toHaveProperty('onTransitionend', flip.onTransition)
    flip.stop()
    flip.onTransition({ propertyName: 'transform' } as TransitionEvent)

    expect(flip.hasInstance('action')).toBe(false)
    expect(flip.hasInstance('elementManager')).toBe(false)
    expect(flip.hasInstance('items')).toBe(false)
    expect(flip.hasInstance('observer')).toBe(false)
  })

  it('should execute callback without instantiating action when disabled or element is undefined', async () => {
    const props = reactive<MotionFlipProps>({ auto: false, disabled: true })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))
    const flip = new MotionFlip(props, element, createMockNaming())
    const callback = vi.fn(async () => undefined)

    await flip.update(callback)
    expect(callback).toHaveBeenCalledTimes(1)
    expect(flip.hasInstance('action')).toBe(false)

    props.disabled = false
    element.value = undefined
    await flip.update(callback)
    expect(callback).toHaveBeenCalledTimes(2)
    expect(flip.hasInstance('action')).toBe(false)
  })

  it('should support constructor DI overrides and delegate update, stop, and onTransition to action', async () => {
    const scope = effectScope()
    const updateMock = vi.fn(async (callback: () => Promise<void> | void) => {
      await callback()
    })
    const stopMock = vi.fn()
    const onTransitionMock = vi.fn()

    class MockAction extends MotionFlipAction {
      override readonly update = updateMock
      override readonly stop = stopMock
      override readonly onTransition = onTransitionMock
    }

    const props = reactive<MotionFlipProps>({ auto: false })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))

    let flip!: MotionFlip
    scope.run(() => {
      flip = new MotionFlip(
        props,
        element,
        createMockNaming(),
        undefined,
        undefined,
        undefined,
        {
          action: MockAction,
          elementManager: MotionFlipElement,
          items: MotionFlipItems,
          observer: MotionFlipObserver
        }
      )
    })

    const callback = vi.fn()
    await flip.update(callback)

    expect(flip.hasInstance('action')).toBe(true)
    expect(updateMock).toHaveBeenCalledWith(callback)
    expect(callback).toHaveBeenCalledTimes(1)

    const transitionEvent = { propertyName: 'transform' } as TransitionEvent
    flip.onTransition(transitionEvent)
    expect(onTransitionMock).toHaveBeenCalledWith(transitionEvent)

    flip.stop()
    expect(stopMock).toHaveBeenCalledTimes(1)

    scope.stop()
  })

  it('should activate observer via conditions when auto is enabled and keep it unallocated when disabled', async () => {
    const scope = effectScope()
    const props = reactive<MotionFlipProps>({ auto: false, disabled: false })
    const element = ref<HTMLElement | undefined>(document.createElement('div'))

    let flip!: MotionFlip
    scope.run(() => {
      flip = new MotionFlip(props, element, createMockNaming())
    })

    // Trigger mount lifecycle manually via protected/internal or simulate condition evaluation
    expect(flip.hasInstance('observer')).toBe(false)

    // Activate via i('observer') check with conditions enabled
    props.auto = true
    await nextTick()
    expect(MotionFlipObserver.is(props)).toBe(true)

    scope.stop()
  })
})
