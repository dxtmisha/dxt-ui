import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { getClipboardData } from '../getClipboardData'

describe('getClipboardData', () => {
  let originalClipboard: any

  beforeEach(() => {
    originalClipboard = navigator.clipboard
    Object.defineProperty(navigator, 'clipboard', {
      value: {
        readText: vi.fn()
      },
      writable: true,
      configurable: true
    })
  })

  afterEach(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true
    })
    vi.restoreAllMocks()
  })

  it('should get data from the ClipboardEvent if provided', async () => {
    const mockEvent = {
      clipboardData: {
        getData: vi.fn().mockReturnValue('event content')
      }
    } as unknown as ClipboardEvent

    const data = await getClipboardData(mockEvent)
    expect(data).toBe('event content')
    expect(mockEvent.clipboardData?.getData).toHaveBeenCalledWith('text')
    expect(navigator.clipboard.readText).not.toHaveBeenCalled()
  })

  it('should fall back to navigator.clipboard.readText() if event is not provided', async () => {
    (navigator.clipboard.readText as any).mockResolvedValue('clipboard api content')

    const data = await getClipboardData()
    expect(data).toBe('clipboard api content')
    expect(navigator.clipboard.readText).toHaveBeenCalledOnce()
  })

  it('should fall back to navigator.clipboard.readText() if event.clipboardData is missing', async () => {
    const mockEvent = {} as unknown as ClipboardEvent
            ; (navigator.clipboard.readText as any).mockResolvedValue('clipboard api content')

    const data = await getClipboardData(mockEvent)
    expect(data).toBe('clipboard api content')
    expect(navigator.clipboard.readText).toHaveBeenCalledOnce()
  })

  it('should return an empty string if both fail or reading returns empty', async () => {
    (navigator.clipboard.readText as any).mockResolvedValue('')

    const data = await getClipboardData()
    expect(data).toBe('')
  })
})
