// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { InputSearchQuery } from '../InputSearchQuery'
import type { FieldEventInclude } from '../../../classes/Field/FieldEventInclude'
import type { InputSearchProps } from '../props'

describe('InputSearchQuery', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  const createEvent = (options: {
    initialValue?: string
    minQuery?: number
    delay?: number
    emits?: (...args: unknown[]) => void
  } = {}) => {
    const props = {
      minQuery: options.minQuery,
      delay: options.delay ?? 320
    } as InputSearchProps

    const valueItem = ref(options.initialValue ?? '')
    const emits = options.emits ?? vi.fn()

    const event = {
      isEnabled: vi.fn(() => true),
      onInput: vi.fn((eventOrData: unknown, data?: { value?: string }) => {
        const nextValue = data?.value ?? (eventOrData as { target?: { value?: string } })?.target?.value ?? ''
        valueItem.value = nextValue
        emits('update:value', valueItem.value)
        emits('update:modelValue', valueItem.value)
        emits('inputLite', { value: valueItem.value })
      }),
      onChange: vi.fn(),
      onClear: vi.fn(() => {
        valueItem.value = ''
        emits('update:value', '')
        emits('update:modelValue', '')
        emits('inputLite', { value: '' })
      })
    } as unknown as FieldEventInclude

    const searchQuery = new InputSearchQuery(
      props,
      () => event
    )

    return {
      searchQuery,
      valueItem,
      event,
      emits
    }
  }

  it('should initialize with loading false', () => {
    const { searchQuery } = createEvent()
    expect(searchQuery.loading.value).toBe(false)
  })

  it('should debounce input and call event.onInput after delay', () => {
    const emits = vi.fn()
    const { searchQuery, valueItem, event } = createEvent({ delay: 300, emits })

    searchQuery.onInput({ target: { value: 'a' } } as unknown as InputEvent)
    expect(searchQuery.loading.value).toBe(true)
    expect(event.onInput).not.toHaveBeenCalled()
    expect(emits).not.toHaveBeenCalled()

    vi.advanceTimersByTime(300)
    expect(searchQuery.loading.value).toBe(false)
    expect(event.onInput).toHaveBeenCalled()
    expect(valueItem.value).toBe('a')
    expect(emits).toHaveBeenCalledWith('update:value', 'a')
    expect(emits).toHaveBeenCalledWith('update:modelValue', 'a')
  })

  it('should trigger immediately when delay is 0', () => {
    const emits = vi.fn()
    const { searchQuery, valueItem, event } = createEvent({ delay: 0, emits })

    searchQuery.onInput({ target: { value: 'instant' } } as unknown as InputEvent)
    expect(searchQuery.loading.value).toBe(false)
    expect(event.onInput).toHaveBeenCalledTimes(1)
    expect(valueItem.value).toBe('instant')
  })

  it('should flush pending debounce immediately on Enter keydown and ignore IME composition', () => {
    const emits = vi.fn()
    const { searchQuery } = createEvent({ delay: 500, emits })

    searchQuery.onInput({ target: { value: 'query' } } as unknown as InputEvent)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.onKeydown({ key: 'Enter', isComposing: true } as KeyboardEvent)
    expect(searchQuery.loading.value).toBe(true)
    expect(emits).not.toHaveBeenCalled()

    searchQuery.onKeydown({ key: 'Enter', isComposing: false } as KeyboardEvent)
    expect(searchQuery.loading.value).toBe(false)
    expect(emits).toHaveBeenCalledWith('update:value', 'query')
    expect(emits).toHaveBeenCalledWith('update:modelValue', 'query')
    expect(emits).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: 'query' }))
  })

  it('should flush pending debounce and call event.onChange on onChange', () => {
    const emits = vi.fn()
    const { searchQuery, event } = createEvent({ delay: 500, emits })

    searchQuery.onInput({ target: { value: 'changed' } } as unknown as InputEvent)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.onChange()
    expect(searchQuery.loading.value).toBe(false)
    expect(emits).toHaveBeenCalledWith('update:value', 'changed')
    expect(event.onChange).toHaveBeenCalled()
  })

  it('should stop timer and delegate to event.onClear on onClear', () => {
    const emits = vi.fn()
    const { searchQuery, event } = createEvent({ delay: 300, emits })

    searchQuery.onInput({ target: { value: 'test' } } as unknown as InputEvent)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.onClear()
    expect(searchQuery.loading.value).toBe(false)
    expect(event.onClear).toHaveBeenCalled()
    expect(emits).toHaveBeenCalledWith('update:value', '')
    expect(emits).toHaveBeenCalledWith('update:modelValue', '')
    expect(emits).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: '' }))
  })

  it('should stop timer on onUnmounted and cancel pending search', () => {
    const { searchQuery, event } = createEvent({ delay: 300 })
    searchQuery.onInput({ target: { value: 'test' } } as unknown as InputEvent)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.onUnmounted()
    expect(searchQuery.loading.value).toBe(false)

    vi.advanceTimersByTime(300)
    expect(event.onInput).not.toHaveBeenCalled()
  })

  it('should not trigger input when input length is less than minQuery', () => {
    const { searchQuery, event } = createEvent({ minQuery: 3, delay: 300 })
    searchQuery.onInput({ target: { value: 'ab' } } as unknown as InputEvent)

    expect(searchQuery.loading.value).toBe(false)
    vi.advanceTimersByTime(300)
    expect(event.onInput).not.toHaveBeenCalled()
  })

  it('should trigger input when input length is greater than or equal to minQuery', () => {
    const { searchQuery, event, valueItem } = createEvent({ minQuery: 3, delay: 300 })
    searchQuery.onInput({ target: { value: 'abc' } } as unknown as InputEvent)

    expect(searchQuery.loading.value).toBe(true)
    vi.advanceTimersByTime(300)
    expect(event.onInput).toHaveBeenCalled()
    expect(valueItem.value).toBe('abc')
  })

  it('should trigger input when value is empty even if minQuery is set', () => {
    const { searchQuery, event, valueItem } = createEvent({ minQuery: 3, delay: 300 })
    searchQuery.onInput({ target: { value: '' } } as unknown as InputEvent)

    expect(searchQuery.loading.value).toBe(true)
    vi.advanceTimersByTime(300)
    expect(event.onInput).toHaveBeenCalled()
    expect(valueItem.value).toBe('')
  })
})
