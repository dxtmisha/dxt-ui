// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { MotionAxisStatus } from '../MotionAxisStatus'
import type { MotionAxisElement } from '../MotionAxisElement'
import type { MotionAxisPrevious } from '../MotionAxisPrevious'
import type { MotionAxisSelected } from '../MotionAxisSelected'
import type { MotionAxisStyles } from '../MotionAxisStyles'
import type { MotionAxisEmits } from '../types'

describe('MotionAxisStatus', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  function createDependencies(initialSelected?: string) {
    const selectedValue = ref<string | undefined>(initialSelected)
    const preparationElement = document.createElement('div')
    Object.defineProperty(preparationElement, 'offsetHeight', {
      configurable: true,
      get: () => 120
    })

    const mockElement = {
      toStart: vi.fn(),
      toEnd: vi.fn(),
      toMove: vi.fn(),
      blockScroll: vi.fn(),
      returnScroll: vi.fn(),
      initEvent: vi.fn(),
      getElementPreparation: vi.fn(() => preparationElement),
      get: vi.fn(() => document.createElement('div'))
    } as unknown as MotionAxisElement

    const mockPrevious = {
      get: vi.fn(() => undefined as string | undefined),
      set: vi.fn()
    } as unknown as MotionAxisPrevious

    const mockSelected = {
      item: selectedValue,
      is: (value?: string) => selectedValue.value === value,
      set: vi.fn((value?: string) => {
        selectedValue.value = value
        return mockSelected
      })
    } as unknown as MotionAxisSelected

    const mockStyles = {
      addNext: vi.fn()
    } as unknown as MotionAxisStyles

    const emits = vi.fn() as unknown as ConstrEmit<MotionAxisEmits>

    return {
      selectedValue,
      preparationElement,
      mockElement,
      mockPrevious,
      mockSelected,
      mockStyles,
      emits
    }
  }

  it('should initialize active state, support setFlash(), and skip set() when already selected', () => {
    const deps = createDependencies('slide-1')
    const status = new MotionAxisStatus(
      { selected: 'slide-1' },
      () => deps.mockElement,
      () => deps.mockPrevious,
      () => deps.mockSelected,
      () => deps.mockStyles,
      deps.emits
    )

    expect(status.isActive('slide-1')).toBe(true)
    expect(status.isPreparation('slide-1')).toBe(false)
    expect(status.get()).toBe('slide-1')

    // Same slide should short-circuit without starting animation
    status.set('slide-1')
    expect(deps.mockElement.toStart).not.toHaveBeenCalled()

    // setFlash updates active immediately without animation
    status.setFlash('slide-3')
    expect(status.isActive('slide-3')).toBe(true)
    expect(deps.mockSelected.set).toHaveBeenCalledWith('slide-3')
    expect(deps.mockElement.toStart).not.toHaveBeenCalled()
  })

  it('should execute full animation transition sequence and emit start/end events', () => {
    const rafQueue: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      rafQueue.push(callback)
      return rafQueue.length
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const deps = createDependencies('slide-1')
    vi.mocked(deps.mockPrevious.get).mockReturnValue('slide-1')

    const status = new MotionAxisStatus(
      { selected: 'slide-1' },
      () => deps.mockElement,
      () => deps.mockPrevious,
      () => deps.mockSelected,
      () => deps.mockStyles,
      deps.emits
    )

    status.set('slide-2')

    expect(deps.mockElement.toStart).toHaveBeenCalledTimes(1)
    expect(deps.mockPrevious.set).toHaveBeenCalledWith('slide-1')
    expect(status.isPreparation('slide-2')).toBe(true)
    expect(deps.mockElement.blockScroll).toHaveBeenCalledTimes(1)
    expect(rafQueue).toHaveLength(1)

    // Frame 1: preparation element ready -> addNext() and schedule Frame 2
    rafQueue.shift()!(0)
    expect(deps.mockStyles.addNext).toHaveBeenCalledTimes(1)
    expect(rafQueue).toHaveLength(1)

    // Frame 2: toEnd(), toMove(), initEvent(), active updated, emit start
    rafQueue.shift()!(16)
    expect(deps.mockElement.toEnd).toHaveBeenCalledTimes(1)
    expect(deps.mockElement.toMove).toHaveBeenCalledTimes(1)
    expect(status.isActive('slide-2')).toBe(true)
    expect(deps.emits).toHaveBeenCalledWith('start', 'slide-2')
    expect(deps.emits).toHaveBeenCalledWith('motionAxis', {
      type: 'start',
      selected: 'slide-2',
      previous: 'slide-1',
      preparation: 'slide-2',
      active: 'slide-2'
    })

    // Transition end callback
    const endCallback = vi.mocked(deps.mockElement.initEvent).mock.calls[0]?.[0]
    expect(endCallback).toBeTypeOf('function')
    endCallback!()

    expect(deps.mockPrevious.set).toHaveBeenCalledWith(undefined)
    expect(status.isPreparation('slide-2')).toBe(false)
    expect(deps.emits).toHaveBeenCalledWith('end', 'slide-2')
    expect(deps.mockElement.returnScroll).toHaveBeenCalledTimes(1)
  })

  it('should terminate expectation loop cleanly after limit when preparation never becomes visible', () => {
    const rafQueue: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      rafQueue.push(callback)
      return rafQueue.length
    })
    vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const deps = createDependencies('slide-1')
    vi.mocked(deps.mockElement.getElementPreparation).mockReturnValue(null)

    const status = new MotionAxisStatus(
      { selected: 'slide-1' },
      () => deps.mockElement,
      () => deps.mockPrevious,
      () => deps.mockSelected,
      () => deps.mockStyles,
      deps.emits
    )

    status.set('slide-2')

    let iterations = 0
    while (rafQueue.length > 0 && iterations < 100) {
      iterations++
      rafQueue.shift()!(iterations * 16)
    }

    expect(iterations).toBe(64)
    expect(rafQueue).toHaveLength(0)
    expect(deps.mockStyles.addNext).not.toHaveBeenCalled()
  })

  it('should cancel pending animation frame on unmount and abort when container disappears', () => {
    const rafQueue: FrameRequestCallback[] = []
    vi.spyOn(globalThis, 'requestAnimationFrame').mockImplementation((callback) => {
      rafQueue.push(callback)
      return rafQueue.length
    })
    const cancelSpy = vi.spyOn(globalThis, 'cancelAnimationFrame').mockImplementation(() => {})

    const deps = createDependencies('slide-1')
    const status = new MotionAxisStatus(
      { selected: 'slide-1' },
      () => deps.mockElement,
      () => deps.mockPrevious,
      () => deps.mockSelected,
      () => deps.mockStyles,
      deps.emits
    )

    status.onMounted()
    status.set('slide-2')
    expect(rafQueue).toHaveLength(1)

    status.onUnmounted()
    expect(cancelSpy).toHaveBeenCalledTimes(1)

    // Even if queued RAF fires manually, isDestroyed prevents mutation
    rafQueue.shift()!(0)
    expect(deps.mockStyles.addNext).not.toHaveBeenCalled()

    // Re-mounting and container becoming undefined aborts safely
    status.onMounted()
    vi.mocked(deps.mockElement.get).mockReturnValue(undefined)
    status.start()
    rafQueue.shift()!(0)
    expect(deps.mockStyles.addNext).not.toHaveBeenCalled()
  })
})
