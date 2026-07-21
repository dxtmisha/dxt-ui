// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, toRefs, nextTick } from 'vue'
import type { ToRefs } from 'vue'
import { TextareaAutosizeValue } from '../TextareaAutosizeValue'
import type { TextareaAutosizeProps } from '../props'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (callback: () => void) => callback()
  }
})

function createTextareaAutosizeValue(
  initialProperties: Partial<TextareaAutosizeProps>,
  mockEmits?: any
) {
  const reactiveProperties = ref({
    value: undefined,
    autosize: true,
    ...initialProperties
  })
  const references = toRefs(reactiveProperties.value as any) as unknown as ToRefs<TextareaAutosizeProps>
  const textareaAutosizeValue = new TextareaAutosizeValue(
    reactiveProperties.value as unknown as TextareaAutosizeProps,
    references,
    mockEmits
  )
  return { textareaAutosizeValue, reactiveProperties }
}

describe('TextareaAutosizeValue', () => {
  it('should initialize item value correctly based on initial value prop', () => {
    const { textareaAutosizeValue } = createTextareaAutosizeValue({ value: 'hello' })
    expect(textareaAutosizeValue.item.value).toBe('hello')
  })

  it('should initialize item value as empty string if value prop is undefined', () => {
    const { textareaAutosizeValue } = createTextareaAutosizeValue({ value: undefined })
    expect(textareaAutosizeValue.item.value).toBe('')
  })

  it('should update item value when reactive value prop changes', async () => {
    const { textareaAutosizeValue, reactiveProperties } = createTextareaAutosizeValue({ value: 'first' })

    expect(textareaAutosizeValue.item.value).toBe('first')

    reactiveProperties.value.value = 'second'
    await nextTick()
    expect(textareaAutosizeValue.item.value).toBe('second')

    reactiveProperties.value.value = undefined
    await nextTick()
    expect(textareaAutosizeValue.item.value).toBe('')
  })

  it('should set new value and return true if different', () => {
    const { textareaAutosizeValue } = createTextareaAutosizeValue({ value: 'hello' })

    const result = textareaAutosizeValue.set('world')
    expect(result).toBe(true)
    expect(textareaAutosizeValue.item.value).toBe('world')
  })

  it('should return false if setting same value', () => {
    const { textareaAutosizeValue } = createTextareaAutosizeValue({ value: 'hello' })

    const result = textareaAutosizeValue.set('hello')
    expect(result).toBe(false)
    expect(textareaAutosizeValue.item.value).toBe('hello')
  })

  it('should trigger emits on input event when value actually changes', () => {
    const mockEmits = vi.fn()
    const { textareaAutosizeValue } = createTextareaAutosizeValue({ value: 'old' }, mockEmits)
    const mockEvent = {
      target: { value: 'new' }
    } as unknown as InputEvent

    textareaAutosizeValue.on(mockEvent)

    expect(mockEmits).toHaveBeenCalledWith('input', mockEvent)
    expect(textareaAutosizeValue.item.value).toBe('new')
  })

  it('should not trigger emits on input event when value remains unchanged', () => {
    const mockEmits = vi.fn()
    const { textareaAutosizeValue } = createTextareaAutosizeValue({ value: 'same' }, mockEmits)
    const mockEvent = {
      target: { value: 'same' }
    } as unknown as InputEvent

    textareaAutosizeValue.on(mockEvent)

    expect(mockEmits).not.toHaveBeenCalled()
    expect(textareaAutosizeValue.item.value).toBe('same')
  })
})
