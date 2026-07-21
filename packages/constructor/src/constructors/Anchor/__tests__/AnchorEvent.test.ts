// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { writeClipboardData } from '@dxtmisha/functional'
import { AnchorEvent } from '../AnchorEvent'

vi.mock('@dxtmisha/functional', async () => {
  const actual = await vi.importActual('@dxtmisha/functional') as any
  return {
    ...actual,
    writeClipboardData: vi.fn().mockResolvedValue(undefined)
  }
})

describe('AnchorEvent', () => {
  let mockTooltip: any
  let mockHref: any
  let mockTo: any

  beforeEach(() => {
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
  })

  it('should copy link to clipboard when props.isCopy is true', async () => {
    const anchorEvent = new AnchorEvent({ isCopy: true, delayHide: 100 }, mockTooltip, mockHref, mockTo)
    const mockEvent = { preventDefault: vi.fn() } as any

    anchorEvent.onClick(mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect(writeClipboardData).toHaveBeenCalledWith('https://example.com#anchor')

    await new Promise(resolve => setTimeout(resolve, 0))

    expect(anchorEvent.isCopy()).toBe(true)
    expect(mockTooltip.open).toHaveBeenCalled()

    await new Promise(resolve => setTimeout(resolve, 150))
    expect(anchorEvent.isCopy()).toBe(false)
    expect(mockTooltip.close).toHaveBeenCalled()
  })

  it('should scroll to element when props.isCopy is false', () => {
    const anchorEvent = new AnchorEvent({ isCopy: false }, mockTooltip, mockHref, mockTo)
    const mockEvent = { preventDefault: vi.fn() } as any

    anchorEvent.onClick(mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalled()
    expect(writeClipboardData).not.toHaveBeenCalled()
    expect(mockTo.go).toHaveBeenCalled()
  })
})
