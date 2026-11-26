// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive } from 'vue'
import { MotionAxisGo } from '../MotionAxisGo'
import type { MotionAxisSlides } from '../MotionAxisSlides'
import type { MotionAxisStatus } from '../MotionAxisStatus'
import type { MotionAxisProps } from '../props'

describe('MotionAxisGo', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  function createMocks(slideOrder: string[] = ['slide-1', 'slide-2', 'slide-3'], activeSlide?: string) {
    let active = activeSlide
    const mockSlides = {
      getByIndex: vi.fn((step: number) => {
        const index = slideOrder.indexOf(active ?? '')
        if (index === -1) return slideOrder[0]
        const nextIndex = (index + step + slideOrder.length) % slideOrder.length
        return slideOrder[nextIndex]
      }),
      findIndex: vi.fn((key?: string) => slideOrder.indexOf(key ?? active ?? ''))
    } as unknown as MotionAxisSlides

    const mockStatus = {
      set: vi.fn((value?: string) => {
        active = value
      }),
      setFlash: vi.fn((value?: string) => {
        active = value
      })
    } as unknown as MotionAxisStatus

    return {
      mockSlides,
      mockStatus
    }
  }

  it('should lazily resolve slides/status and navigate next/back', () => {
    const { mockSlides, mockStatus } = createMocks(['slide-1', 'slide-2'], 'slide-1')
    const slidesGetter = vi.fn(() => mockSlides)
    const statusGetter = vi.fn(() => mockStatus)

    const go = new MotionAxisGo(
      { axis: 'x', direction: 'auto' },
      slidesGetter,
      statusGetter
    )

    expect(slidesGetter).not.toHaveBeenCalled()
    expect(statusGetter).not.toHaveBeenCalled()
    expect(go.axis.value).toBe('x')
    expect(go.direction.value).toBe('auto')

    go.next()
    expect(go.direction.value).toBe('next')
    expect(mockStatus.set).toHaveBeenCalledWith('slide-2')

    go.back()
    expect(go.direction.value).toBe('back')
    expect(mockStatus.set).toHaveBeenCalledWith('slide-1')
  })

  it('should compute automatic direction and flash mode in to()', () => {
    const { mockSlides, mockStatus } = createMocks(['slide-1', 'slide-2', 'slide-3'], undefined)
    const go = new MotionAxisGo({ axis: 'x', direction: 'auto' }, () => mockSlides, () => mockStatus)

    // Unknown target does nothing
    go.to('missing')
    expect(mockStatus.set).not.toHaveBeenCalled()
    expect(mockStatus.setFlash).not.toHaveBeenCalled()

    // When active is -1, uses setFlash without animation
    go.to('slide-2')
    expect(mockStatus.setFlash).toHaveBeenCalledWith('slide-2')

    // Forward target (1 -> 2) sets direction 'next'
    go.to('slide-3')
    expect(go.direction.value).toBe('next')
    expect(mockStatus.set).toHaveBeenCalledWith('slide-3')

    // Backward target (2 -> 0) sets direction 'back'
    go.to('slide-1')
    expect(go.direction.value).toBe('back')
    expect(mockStatus.set).toHaveBeenCalledWith('slide-1')

    // Same target as active does nothing
    vi.mocked(mockStatus.set).mockClear()
    go.to('slide-1')
    expect(mockStatus.set).not.toHaveBeenCalled()
  })

  it('should set exact axis and direction for directional helpers', () => {
    const { mockSlides, mockStatus } = createMocks(['a', 'b'], 'a')
    const go = new MotionAxisGo({}, () => mockSlides, () => mockStatus)

    go.top('b')
    expect(go.axis.value).toBe('y')
    expect(go.direction.value).toBe('back')

    go.bottom('a')
    expect(go.axis.value).toBe('y')
    expect(go.direction.value).toBe('next')

    go.left('b')
    expect(go.axis.value).toBe('x')
    expect(go.direction.value).toBe('back')

    go.right('a')
    expect(go.axis.value).toBe('x')
    expect(go.direction.value).toBe('next')

    go.down('b')
    expect(go.axis.value).toBe('z')
    expect(go.direction.value).toBe('back')

    go.up('a')
    expect(go.axis.value).toBe('z')
    expect(go.direction.value).toBe('next')

    expect(mockStatus.set).toHaveBeenCalledTimes(6)
  })

  it('should watch axis and direction props only after onMounted', async () => {
    const { mockSlides, mockStatus } = createMocks()
    const props = reactive<MotionAxisProps>({ axis: 'x', direction: 'auto' })
    const scope = effectScope()
    cleanups.push(() => scope.stop())

    const go = new MotionAxisGo(props, () => mockSlides, () => mockStatus)

    // Before onMounted, prop mutations should not auto-sync via watch
    props.axis = 'y'
    await nextTick()
    expect(go.axis.value).toBe('x')

    go.setAxis('y')
    expect(go.axis.value).toBe('y')

    scope.run(() => {
      go.onMounted()
    })

    props.axis = 'z'
    props.direction = 'back'
    await nextTick()
    expect(go.axis.value).toBe('z')
    expect(go.direction.value).toBe('back')
  })
})
