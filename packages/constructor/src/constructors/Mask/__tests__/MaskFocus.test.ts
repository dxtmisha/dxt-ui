import { describe, it, expect, vi, beforeEach } from 'vitest'
import { MaskFocus } from '../MaskFocus'
import type { MaskBuffer } from '../MaskBuffer'

describe('MaskFocus', () => {
  let mockBuffer: MaskBuffer
  let maskFocus: MaskFocus

  beforeEach(() => {
    mockBuffer = {
      reset: vi.fn()
    } as unknown as MaskBuffer

    maskFocus = new MaskFocus(mockBuffer)
  })

  it('should initialize with focus inactive (false)', () => {
    expect(maskFocus.is()).toBe(false)
  })

  it('should activate focus and reset buffer on in()', () => {
    maskFocus.in()

    expect(maskFocus.is()).toBe(true)
    expect(mockBuffer.reset).toHaveBeenCalledTimes(1)
  })

  it('should deactivate focus and reset buffer on out()', () => {
    maskFocus.in()
    expect(maskFocus.is()).toBe(true)

    maskFocus.out()
    expect(maskFocus.is()).toBe(false)
    expect(mockBuffer.reset).toHaveBeenCalledTimes(2)
  })
})
