// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import type { ToRefs } from 'vue'
import { TooltipOpen } from '../TooltipOpen'
import { TooltipStatus } from '../TooltipStatus'
import type { TooltipProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback(),
    onUnmounted: (callback: () => void) => callback()
  }
})

function createTooltipOpen(
  initialProperties: Partial<TooltipProps>,
  mockStyle: any,
  mockStatus: any,
  mockPosition: any,
  mockEmits?: any
) {
  const reactiveProperties = ref({
    open: false,
    delay: 64,
    delayHide: 0,
    embedded: false,
    ...initialProperties
  })
  const references = toRefs(reactiveProperties.value as any) as unknown as ToRefs<TooltipProps>
  const tooltipOpen = new TooltipOpen(
    reactiveProperties.value as unknown as TooltipProps,
    references,
    mockStyle,
    mockStatus,
    mockPosition,
    mockEmits
  )
  return { tooltipOpen, reactiveProperties }
}

describe('TooltipOpen', () => {
  let mockStyle: any
  let mockStatus: any
  let mockPosition: any
  let mockEmits: any

  beforeEach(() => {
    vi.useFakeTimers()
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => callback(0))

    mockStyle = {
      setPreparation: vi.fn(),
      setShow: vi.fn(),
      resetShow: vi.fn()
    }
    // Using a real status so it acts as a state store
    mockStatus = new TooltipStatus({ label: 'test' } as any)
    mockPosition = {
      update: vi.fn()
    }
    mockEmits = vi.fn()
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  it('should toggle open correctly with delays and execute positioning and style updates', async () => {
    const { tooltipOpen } = createTooltipOpen({}, mockStyle, mockStatus, mockPosition, mockEmits)

    // Initially closed
    expect(mockStatus.open.value).toBe(false)

    // Open tooltip
    await tooltipOpen.toggle(true)

    // Immediately sets open and show to true and updates position
    expect(mockStatus.open.value).toBe(true)
    expect(mockStatus.show.value).toBe(true)

    await nextTick()
    expect(mockPosition.update).toHaveBeenCalled()
    expect(mockStatus.preparation.value).toBe(true)

    // Fast-forward delays (48ms or props.delay which defaults to 64ms)
    vi.advanceTimersByTime(64)

    expect(mockStyle.setPreparation).toHaveBeenCalledWith(true)
    expect(mockStyle.setShow).toHaveBeenCalledWith(true)
    expect(mockEmits).toHaveBeenCalledWith('tooltip', true)
  })

  it('should toggle close correctly with timing delay', async () => {
    const { tooltipOpen } = createTooltipOpen({}, mockStyle, mockStatus, mockPosition, mockEmits)

    // Open first
    await tooltipOpen.toggle(true)
    vi.advanceTimersByTime(64)
    vi.clearAllMocks()

    // Close
    await tooltipOpen.toggle(false)

    // Timing delay for close is 384ms
    vi.advanceTimersByTime(384)

    expect(mockStatus.open.value).toBe(false)
    expect(mockStyle.resetShow).toHaveBeenCalled()

    // Additional 128ms delay before final cleanup
    vi.advanceTimersByTime(128)

    expect(mockStatus.show.value).toBe(false)
    expect(mockStatus.preparation.value).toBe(false)
    expect(mockEmits).toHaveBeenCalledWith('tooltip', false)
  })

  it('should auto-hide tooltip when delayHide property is set', async () => {
    const { tooltipOpen } = createTooltipOpen({ delayHide: 2000 }, mockStyle, mockStatus, mockPosition, mockEmits)

    await tooltipOpen.toggle(true)

    // Open delay 64ms
    vi.advanceTimersByTime(64)

    // Spy on toggle to check if it gets called with false
    const toggleSpy = vi.spyOn(tooltipOpen, 'toggle')

    // Advance 2000ms
    vi.advanceTimersByTime(2000)

    expect(toggleSpy).toHaveBeenCalledWith(false)
  })

  it('should cancel closing if noHide() is called', async () => {
    const { tooltipOpen } = createTooltipOpen({}, mockStyle, mockStatus, mockPosition, mockEmits)

    await tooltipOpen.toggle(true)
    vi.advanceTimersByTime(64)
    vi.clearAllMocks()

    await tooltipOpen.toggle(false)

    // Advance partially
    vi.advanceTimersByTime(200)

    // Call noHide to cancel close
    tooltipOpen.noHide()

    // Advance past remaining close time
    vi.advanceTimersByTime(500)

    // open should still be true
    expect(mockStatus.open.value).toBe(true)
  })
})
