import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { MaskEmit } from '../MaskEmit'
import type { MaskValidation } from '../MaskValidation'
import type { ConstrEmit } from '@dxtmisha/functional'
import type { MaskEmits } from '../types'

describe('MaskEmit', () => {
  let mockValidation: MaskValidation
  let mockEmits: ConstrEmit<MaskEmits>
  let maskEmit: MaskEmit

  beforeEach(() => {
    mockValidation = {
      item: ref({
        status: true,
        value: '123'
      })
    } as unknown as MaskValidation

    mockEmits = vi.fn() as unknown as ConstrEmit<MaskEmits>
    maskEmit = new MaskEmit(mockValidation, mockEmits)
  })

  it('should determine isValue correctly', () => {
    expect(maskEmit.isValue()).toBe(false)

    maskEmit.setType('focus')
    expect(maskEmit.isValue()).toBe(false)

    maskEmit.setType('input')
    expect(maskEmit.isValue()).toBe(true)

    maskEmit.setType('change')
    expect(maskEmit.isValue()).toBe(true)
  })

  it('should emit input and inputLite events on go()', () => {
    const mockEvent = new Event('input')
    maskEmit.set('input', mockEvent)

    maskEmit.go()

    expect(mockEmits).toHaveBeenCalledWith('input', mockEvent, {
      status: true,
      value: '123'
    })
    expect(mockEmits).toHaveBeenCalledWith('inputLite', {
      status: true,
      value: '123'
    })
  })

  it('should emit change and changeLite events on go()', () => {
    const mockEvent = new Event('change')
    maskEmit.set('change', mockEvent)

    maskEmit.go()

    expect(mockEmits).toHaveBeenCalledWith('change', mockEvent, {
      status: true,
      value: '123'
    })
    expect(mockEmits).toHaveBeenCalledWith('changeLite', {
      status: true,
      value: '123'
    })
  })

  it('should emit other events without validation data', () => {
    const mockEvent = new Event('blur')
    maskEmit.set('blur', mockEvent)

    maskEmit.go()

    expect(mockEmits).toHaveBeenCalledWith('blur', mockEvent, undefined)
  })

  it('should reset stored type and event on reset()', () => {
    const mockEvent = new Event('focus')
    maskEmit.set('focus', mockEvent)

    maskEmit.reset()
    maskEmit.go()

    expect(mockEmits).not.toHaveBeenCalled()
  })
})
