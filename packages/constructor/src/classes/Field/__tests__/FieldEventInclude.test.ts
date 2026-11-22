// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick, ref } from 'vue'
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

  it('should emit focus event on onFocus unless disabled', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockFocusEvent = new FocusEvent('focus')

    eventInclude.onFocus(mockFocusEvent)
    expect(emitsSpy).toHaveBeenCalledWith('focus', mockFocusEvent)

    emitsSpy.mockClear()
    const readonlyEventInclude = new FieldEventInclude({ readonly: true }, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    readonlyEventInclude.onFocus(mockFocusEvent)
    expect(emitsSpy).toHaveBeenCalledWith('focus', mockFocusEvent)

    emitsSpy.mockClear()
    const disabledEventInclude = new FieldEventInclude({ disabled: true }, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    disabledEventInclude.onFocus(mockFocusEvent)
    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('should mark change to true and emit blur event on onBlur', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockBlurEvent = new FocusEvent('blur')
    eventInclude.onBlur(mockBlurEvent)

    expect(mockChange.to).toHaveBeenCalled()
    expect(emitsSpy).toHaveBeenCalledWith('blur', mockBlurEvent)
  })

  it('should not mark change to true on onBlur when readonly, while still emitting blur', () => {
    const eventInclude = new FieldEventInclude({ readonly: true }, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockBlurEvent = new FocusEvent('blur')
    eventInclude.onBlur(mockBlurEvent)

    expect(mockChange.to).not.toHaveBeenCalled()
    expect(emitsSpy).toHaveBeenCalledWith('blur', mockBlurEvent)
  })

  it('should not mark change or emit blur on onBlur when disabled', () => {
    const eventInclude = new FieldEventInclude({ disabled: true }, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockBlurEvent = new FocusEvent('blur')
    eventInclude.onBlur(mockBlurEvent)

    expect(mockChange.to).not.toHaveBeenCalled()
    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('should update validation, set value, and emit input events on onInput', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockEvent = { target: {} } as any

    eventInclude.onInput(mockEvent)

    expect(mockValidation.set).toHaveBeenCalledWith(mockEvent)
    expect(mockValue.setByEvent).toHaveBeenCalledWith(mockEvent)
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should trigger update on onChange', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockEvent = { target: {} } as any

    eventInclude.onChange(mockEvent)

    expect(mockValidation.set).toHaveBeenCalledWith(mockEvent)
    expect(mockChange.to).toHaveBeenCalled()
    expect(emitsSpy).toHaveBeenCalledWith('change', mockEvent, expect.any(Object))
  })

  it('should handle onChecked event by delegation', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockEvent = { target: { checked: true } } as any

    eventInclude.onChecked(mockEvent)

    expect(mockValue.setByChecked).toHaveBeenCalledWith(mockEvent)
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should handle onRadio event by delegation', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockEvent = { target: { checked: true, value: 'radio-val' } } as any

    eventInclude.onRadio(mockEvent)

    expect(mockValue.setByRadio).toHaveBeenCalledWith(mockEvent)
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should handle onClear event and delegate to value.clear()', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)
    const mockEvent = {} as any

    eventInclude.onClear(mockEvent)

    expect(mockValue.clear).toHaveBeenCalled()
    expect(emitsSpy).toHaveBeenCalledWith('input', mockEvent, expect.any(Object))
  })

  it('should handle onValue event with and without value', () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)

    eventInclude.onValue('custom-value')
    expect(mockValue.set).toHaveBeenCalledWith('custom-value')
    expect(emitsSpy).toHaveBeenCalledWith('input', undefined, expect.any(Object))

    mockValue.set.mockClear()
    eventInclude.onValue()
    expect(mockValue.set).not.toHaveBeenCalled()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should watch itemByFull after onMounted, deduplicate repeated mounts, and stop on onUnmounted', async () => {
    const eventInclude = new FieldEventInclude({}, () => mockChange, () => mockValue, () => mockValidation, emitsSpy)

    eventInclude.onMounted()
    eventInclude.onMounted()

    mockValue.itemByFull.value = 'updated-1'
    await nextTick()

    expect(emitsSpy).toHaveBeenCalledTimes(2)
    expect(emitsSpy).toHaveBeenCalledWith('update:value', 'updated-1')
    expect(emitsSpy).toHaveBeenCalledWith('update:modelValue', 'updated-1')

    emitsSpy.mockClear()
    eventInclude.onUnmounted()

    mockValue.itemByFull.value = 'updated-2'
    await nextTick()

    expect(emitsSpy).not.toHaveBeenCalled()
  })

  it('should call form.updateData on event when form and props.name are provided', () => {
    const mockForm = { updateData: vi.fn() } as any
    const eventInclude = new FieldEventInclude(
      { name: 'username' },
      () => mockChange,
      () => mockValue,
      () => mockValidation,
      emitsSpy,
      () => mockForm
    )

    const mockEvent = new InputEvent('input')
    eventInclude.on(mockEvent)

    expect(mockForm.updateData).toHaveBeenCalledWith(expect.any(Object), mockEvent)
  })
})
