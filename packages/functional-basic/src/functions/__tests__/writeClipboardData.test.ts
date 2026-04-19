/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi } from 'vitest'
import { writeClipboardData } from '../writeClipboardData'

describe('writeClipboardData', () => {
  it('should call navigator.clipboard.writeText in DOM runtime', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true
    })

    await writeClipboardData('test text')
    expect(writeText).toHaveBeenCalledWith('test text')
  })

  it('should call navigator.clipboard.writeText in DOM runtime', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true
    })

    await writeClipboardData('test text')
    expect(writeText).toHaveBeenCalledWith('test text')
  })
})
