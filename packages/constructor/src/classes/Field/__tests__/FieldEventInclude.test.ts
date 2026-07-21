// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'
import { FieldEventInclude } from '../FieldEventInclude'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('FieldEventInclude', () => {
  let mockChange: any
  let mockValue: any
  let mockValidation: any
  let emitsSpy: any

  beforeEach(() => {
    mockChange = {
      to: vi.fn(),
      is: vi.fn().mockReturnValue(true)
    }
    mockValue = {
      itemByFull: ref('current-value'),
      item: ref('current-value'),
      setByEvent: vi.fn(),
      setByChecked: vi.fn(),
      setByRadio: vi.fn(),
      clear: vi.fn(),
      set: vi.fn()
    }
    mockValidation = {
      item: ref({ status: true }),
      set: vi.fn()
    }
    emitsSpy = vi.fn()
  })

  it('should mark change to true on onBlur', () => {
    const eventInclude = new FieldEventInclude({}, mockChange, mockValue, mockValidation, emitsSpy)
    eventInclude.onBlur()

    expect(mockChange.to).toHaveBeenCalled()
  })

  it('should update validation, set value, and emit input events on onInput', () => {
    const eventInclude = new FieldEventInclude({}, mockChange, mockValue, mockValidation, emitsSpy)
    const mockEvent = { target: {} } as any

    eventInclude.onInput(mockEvent)

    expect(mockValidation.set).toHaveBeenCalledWith(mockEvent)
    expect(mockValue.setByEvent).toHaveBeenCalledWith(mockEvent)
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should trigger update on onChange', () => {
    const eventInclude = new FieldEventInclude({}, mockChange, mockValue, mockValidation, emitsSpy)
    const mockEvent = { target: {} } as any

    eventInclude.onChange(mockEvent)

    expect(mockValidation.set).toHaveBeenCalledWith(mockEvent)
    expect(mockChange.to).toHaveBeenCalled()
    expect(emitsSpy).toHaveBeenCalledWith('change', mockEvent, expect.any(Object))
  })

  it('should handle onChecked event by delegation', () => {
    const eventInclude = new FieldEventInclude({}, mockChange, mockValue, mockValidation, emitsSpy)
    const mockEvent = { target: { checked: true } } as any

    eventInclude.onChecked(mockEvent)

    expect(mockValue.setByChecked).toHaveBeenCalledWith(mockEvent)
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should handle onRadio event by delegation', () => {
    const eventInclude = new FieldEventInclude({}, mockChange, mockValue, mockValidation, emitsSpy)
    const mockEvent = { target: { checked: true, value: 'radio-val' } } as any

    eventInclude.onRadio(mockEvent)

    expect(mockValue.setByRadio).toHaveBeenCalledWith(mockEvent)
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should handle onClear event and delegate to value.clear()', () => {
    const eventInclude = new FieldEventInclude({}, mockChange, mockValue, mockValidation, emitsSpy)
    const mockEvent = {} as any

    eventInclude.onClear(mockEvent)

    expect(mockValue.clear).toHaveBeenCalled()
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })
})
