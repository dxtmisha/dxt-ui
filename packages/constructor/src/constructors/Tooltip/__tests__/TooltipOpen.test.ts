// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { effectScope, reactive, nextTick } from 'vue'

import { TooltipOpen } from '../TooltipOpen'
import { TooltipStatus } from '../TooltipStatus'
import type { TooltipPosition } from '../TooltipPosition'
import type { TooltipStyle } from '../TooltipStyle'
import type { TooltipProps } from '../props'

describe('TooltipOpen', () => {
  let mockStyle: { setPreparation: ReturnType<typeof vi.fn>, setShow: ReturnType<typeof vi.fn>, resetShow: ReturnType<typeof vi.fn> }
  let status: TooltipStatus
  let mockPosition: { update: ReturnType<typeof vi.fn> }
  let mockEmits: ReturnType<typeof vi.fn<(event: 'tooltip', open: boolean) => void>>

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())

    mockStyle = {
      setPreparation: vi.fn(),
      setShow: vi.fn(),
      resetShow: vi.fn()
    }
    status = new TooltipStatus({ label: 'test' } as Readonly<TooltipProps>)
    mockPosition = {
      update: vi.fn()
    }
    mockEmits = vi.fn<(event: 'tooltip', open: boolean) => void>()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  function createTooltipOpen(initialProperties: Partial<TooltipProps> = {}) {
    const props = reactive<TooltipProps>({
      open: false,
      delay: 64,
      delayHide: 0,
      embedded: false,
      ...initialProperties
    })

    const tooltipOpen = new TooltipOpen(
      props,
      () => mockPosition as unknown as TooltipPosition,
      () => status,
      () => mockStyle as unknown as TooltipStyle,
      mockEmits
    )

    return { tooltipOpen, props }
  }

  it('should detect auto-open via static is()', () => {
    expect(TooltipOpen.is({ open: true })).toBe(true)
    expect(TooltipOpen.is({ open: false })).toBe(false)
    expect(TooltipOpen.is(undefined)).toBe(false)
  })

  it('should toggle open correctly with delays, positioning, and emits', async () => {
    const { tooltipOpen } = createTooltipOpen()
    tooltipOpen.onMounted()

    expect(status.open.value).toBe(false)

    await tooltipOpen.toggle(true)

    expect(status.open.value).toBe(true)
    expect(status.show.value).toBe(true)
    expect(mockPosition.update).toHaveBeenCalled()
    expect(status.preparation.value).toBe(true)

    vi.advanceTimersByTime(64)

    expect(mockStyle.setPreparation).toHaveBeenCalledWith(true)
    expect(mockStyle.setShow).toHaveBeenCalledWith(true)
    expect(mockEmits).toHaveBeenCalledWith('tooltip', true)

    tooltipOpen.onUnmounted()
  })

  it('should use 48ms flash delay when flash is true', async () => {
    const { tooltipOpen } = createTooltipOpen({ delay: 300 })
    tooltipOpen.onMounted()

    await tooltipOpen.toggle(true, true)
    vi.advanceTimersByTime(48)

    expect(mockStyle.setShow).toHaveBeenCalledWith(true)
    expect(mockEmits).toHaveBeenCalledWith('tooltip', true)

    tooltipOpen.onUnmounted()
  })

  it('should toggle close correctly with timing delay and cleanup', async () => {
    const { tooltipOpen } = createTooltipOpen()
    tooltipOpen.onMounted()

    await tooltipOpen.toggle(true)
    vi.advanceTimersByTime(64)
    vi.clearAllMocks()

    await tooltipOpen.toggle(false)

    vi.advanceTimersByTime(384)
    expect(status.open.value).toBe(false)
    expect(mockStyle.resetShow).toHaveBeenCalled()

    vi.advanceTimersByTime(128)
    expect(status.show.value).toBe(false)
    expect(status.preparation.value).toBe(false)
    expect(mockEmits).toHaveBeenCalledWith('tooltip', false)

    tooltipOpen.onUnmounted()
  })

  it('should auto-hide tooltip when delayHide property is positive', async () => {
    const { tooltipOpen } = createTooltipOpen({ delayHide: 2000 })
    tooltipOpen.onMounted()

    await tooltipOpen.toggle(true)
    vi.advanceTimersByTime(64)

    const toggleSpy = vi.spyOn(tooltipOpen, 'toggle')
    vi.advanceTimersByTime(2000)

    expect(toggleSpy).toHaveBeenCalledWith(false)

    tooltipOpen.onUnmounted()
  })

  it('should cancel closing if noHide() is called', async () => {
    const { tooltipOpen } = createTooltipOpen()
    tooltipOpen.onMounted()

    await tooltipOpen.toggle(true)
    vi.advanceTimersByTime(64)
    vi.clearAllMocks()

    await tooltipOpen.toggle(false)
    vi.advanceTimersByTime(200)
    tooltipOpen.noHide()
    vi.advanceTimersByTime(500)

    expect(status.open.value).toBe(true)

    tooltipOpen.onUnmounted()
  })

  it('should react to props.open changes when mounted and stop watching on unmount', async () => {
    const scope = effectScope()
    const { tooltipOpen, props } = createTooltipOpen({ open: false })

    scope.run(() => {
      tooltipOpen.onMounted()
    })

    props.open = true
    await nextTick()
    await nextTick()
    await nextTick()
    vi.advanceTimersByTime(64)

    expect(status.open.value).toBe(true)
    expect(mockEmits).toHaveBeenCalledWith('tooltip', true)

    tooltipOpen.onUnmounted()
    vi.clearAllMocks()

    props.open = false
    await nextTick()
    vi.advanceTimersByTime(1000)

    expect(mockEmits).not.toHaveBeenCalled()
    scope.stop()
  })

  it('should cancel pending timers and prevent emissions after onUnmounted', async () => {
    const { tooltipOpen } = createTooltipOpen({ delay: 200, delayHide: 500 })
    tooltipOpen.onMounted()

    await tooltipOpen.toggle(true)
    tooltipOpen.onUnmounted()

    vi.advanceTimersByTime(2000)

    expect(mockStyle.setShow).not.toHaveBeenCalled()
    expect(mockEmits).not.toHaveBeenCalled()
  })
})
