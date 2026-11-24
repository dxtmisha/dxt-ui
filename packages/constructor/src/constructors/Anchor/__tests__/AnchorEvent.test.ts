// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { writeClipboardData } from '@dxtmisha/functional'
import { AnchorEvent } from '../AnchorEvent'
import type { AnchorHref } from '../AnchorHref'
import type { AnchorTo } from '../AnchorTo'
import type { TooltipInclude } from '../../Tooltip'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional')>('@dxtmisha/functional')
  return {
    ...actual,
    writeClipboardData: vi.fn().mockResolvedValue(undefined)
  }
})

describe('AnchorEvent', () => {
  let mockTooltip: { open: ReturnType<typeof vi.fn>, close: ReturnType<typeof vi.fn> }
  let mockHref: { getLink: ReturnType<typeof vi.fn> }
  let mockTo: { go: ReturnType<typeof vi.fn> }

  beforeEach(() => {
    vi.useFakeTimers()
    mockTooltip = {
      open: vi.fn(),
      close: vi.fn()
    }
    mockHref = {
      getLink: vi.fn().mockReturnValue('https://example.com#anchor')
    }
    mockTo = {
      go: vi.fn()
    }
    vi.clearAllMocks()
    vi.mocked(writeClipboardData).mockResolvedValue(undefined)
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  function createEvent(props: { isCopy?: boolean, delayHide?: number } = {}): AnchorEvent {
    const instance = new AnchorEvent(
      props,
      () => mockHref as unknown as AnchorHref,
      () => mockTo as unknown as AnchorTo,
      () => mockTooltip as unknown as TooltipInclude
    )
    instance.onMounted()
    return instance
  }

  it('should copy link to clipboard, open tooltip, and reset copy state after delayHide', async () => {
    const anchorEvent = createEvent({ isCopy: true, delayHide: 100 })
    const mockEvent = { preventDefault: vi.fn() } as unknown as MouseEvent

    anchorEvent.onClick(mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect(writeClipboardData).toHaveBeenCalledWith('https://example.com#anchor')

    await Promise.resolve()

    expect(anchorEvent.isCopy()).toBe(true)
    expect(mockTooltip.open).toHaveBeenCalledTimes(1)

    vi.advanceTimersByTime(100)

    expect(anchorEvent.isCopy()).toBe(false)
    expect(mockTooltip.close).toHaveBeenCalledTimes(1)
  })

  it('should scroll to element when props.isCopy is false', () => {
    const anchorEvent = createEvent({ isCopy: false })
    const mockEvent = { preventDefault: vi.fn() } as unknown as MouseEvent

    anchorEvent.onClick(mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect(writeClipboardData).not.toHaveBeenCalled()
    expect(mockTo.go).toHaveBeenCalledTimes(1)
  })

  it('should handle clipboard rejection gracefully without unhandled errors', async () => {
    vi.mocked(writeClipboardData).mockRejectedValueOnce(new Error('Permission denied'))
    const anchorEvent = createEvent({ isCopy: true })

    anchorEvent.onClick({ preventDefault: vi.fn() } as unknown as MouseEvent)
    await Promise.resolve()
    await Promise.resolve()

    expect(anchorEvent.isCopy()).toBe(false)
    expect(mockTooltip.open).not.toHaveBeenCalled()
  })

  it('should activate copy via Enter/Space keyboard events and ignore IME composing', async () => {
    const anchorEvent = createEvent({ isCopy: true })

    anchorEvent.onKeydown({ key: 'Enter', isComposing: true, preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(writeClipboardData).not.toHaveBeenCalled()

    anchorEvent.onKeydown({ key: 'Enter', isComposing: false, preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(writeClipboardData).toHaveBeenCalledTimes(1)

    anchorEvent.onKeydown({ key: ' ', isComposing: false, preventDefault: vi.fn() } as unknown as KeyboardEvent)
    expect(writeClipboardData).toHaveBeenCalledTimes(2)
  })

  it('should clear pending timeout and ignore clicks after onUnmounted', async () => {
    const anchorEvent = createEvent({ isCopy: true, delayHide: 500 })

    anchorEvent.onClick({ preventDefault: vi.fn() } as unknown as MouseEvent)
    await Promise.resolve()
    expect(anchorEvent.isCopy()).toBe(true)

    anchorEvent.onUnmounted()
    vi.advanceTimersByTime(1000)

    expect(mockTooltip.close).not.toHaveBeenCalled()

    vi.clearAllMocks()
    anchorEvent.onClick({ preventDefault: vi.fn() } as unknown as MouseEvent)
    expect(writeClipboardData).not.toHaveBeenCalled()
  })
})
