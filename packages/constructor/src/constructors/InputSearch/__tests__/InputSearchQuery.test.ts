// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { InputSearchQuery } from '../InputSearchQuery'

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
    emits?: any
  } = {}) => {
    const props = {
      minQuery: options.minQuery,
      delay: options.delay ?? 320
    } as any

    const valueItem = ref(options.initialValue ?? '')
    const value = {
      item: valueItem,
      itemByFull: ref(options.initialValue ?? ''),
      boolean: ref(Boolean(options.initialValue)),
      setByEvent: vi.fn((eventOrData: any) => {
        valueItem.value = eventOrData?.value ?? eventOrData?.target?.value ?? ''
      }),
      clear: vi.fn(() => {
        valueItem.value = ''
      })
    } as any

    const emits = options.emits ?? vi.fn()

    const event = {
      isEnabled: vi.fn(() => true),
      onInput: vi.fn((eventOrData: any, data?: any) => {
        value.setByEvent(data ?? eventOrData)
        emits('update:value', valueItem.value)
        emits('update:modelValue', valueItem.value)
        emits('inputLite', { value: valueItem.value })
      }),
      onChange: vi.fn(),
      onClear: vi.fn(() => {
        value.clear()
        emits('update:value', '')
        emits('update:modelValue', '')
        emits('inputLite', { value: '' })
      })
    } as any

    const searchQuery = new InputSearchQuery(
      props,
      value,
      event
    )

    return {
      searchQuery,
      valueItem,
      value,
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

    searchQuery.onInput({ target: { value: 'a' } } as any)
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

  it('should flush pending debounce immediately on Enter keydown', () => {
    const emits = vi.fn()
    const { searchQuery } = createEvent({ delay: 500, emits })

    searchQuery.onInput({ target: { value: 'query' } } as any)
    expect(searchQuery.loading.value).toBe(true)
    expect(emits).not.toHaveBeenCalled()

    searchQuery.onKeydown({ key: 'Enter' } as KeyboardEvent)
    expect(searchQuery.loading.value).toBe(false)
    expect(emits).toHaveBeenCalledWith('update:value', 'query')
    expect(emits).toHaveBeenCalledWith('update:modelValue', 'query')
    expect(emits).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: 'query' }))
  })

  it('should flush pending debounce and call event.onChange on onChange', () => {
    const emits = vi.fn()
    const { searchQuery, event } = createEvent({ delay: 500, emits })

    searchQuery.onInput({ target: { value: 'changed' } } as any)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.onChange()
    expect(searchQuery.loading.value).toBe(false)
    expect(emits).toHaveBeenCalledWith('update:value', 'changed')
    expect(event.onChange).toHaveBeenCalled()
  })

  it('should stop timer and delegate to event.onClear on onClear', () => {
    const emits = vi.fn()
    const { searchQuery, event } = createEvent({ delay: 300, emits })

    searchQuery.onInput({ target: { value: 'test' } } as any)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.onClear()
    expect(searchQuery.loading.value).toBe(false)
    expect(event.onClear).toHaveBeenCalled()
    expect(emits).toHaveBeenCalledWith('update:value', '')
    expect(emits).toHaveBeenCalledWith('update:modelValue', '')
    expect(emits).toHaveBeenCalledWith('inputLite', expect.objectContaining({ value: '' }))
  })

  it('should stop timer and cancel loading on stopTimer', () => {
    const { searchQuery, event } = createEvent({ delay: 300 })
    searchQuery.onInput({ target: { value: 'test' } } as any)
    expect(searchQuery.loading.value).toBe(true)

    searchQuery.stopTimer()
    expect(searchQuery.loading.value).toBe(false)

    vi.advanceTimersByTime(300)
    expect(event.onInput).not.toHaveBeenCalled()
  })

  it('should not trigger input when input length is less than minQuery', () => {
    const { searchQuery, event } = createEvent({ minQuery: 3, delay: 300 })
    searchQuery.onInput({ target: { value: 'ab' } } as any)

    expect(searchQuery.loading.value).toBe(false)
    vi.advanceTimersByTime(300)
    expect(event.onInput).not.toHaveBeenCalled()
  })

  it('should trigger input when input length is greater than or equal to minQuery', () => {
    const { searchQuery, event, valueItem } = createEvent({ minQuery: 3, delay: 300 })
    searchQuery.onInput({ target: { value: 'abc' } } as any)

    expect(searchQuery.loading.value).toBe(true)
    vi.advanceTimersByTime(300)
    expect(event.onInput).toHaveBeenCalled()
    expect(valueItem.value).toBe('abc')
  })

  it('should trigger input when value is empty even if minQuery is set', () => {
    const { searchQuery, event, valueItem } = createEvent({ minQuery: 3, delay: 300 })
    searchQuery.onInput({ target: { value: '' } } as any)

    expect(searchQuery.loading.value).toBe(true)
    vi.advanceTimersByTime(300)
    expect(event.onInput).toHaveBeenCalled()
    expect(valueItem.value).toBe('')
  })

  it('should return extracted string value in getValue', () => {
    const { searchQuery } = createEvent()

    expect((searchQuery as any).getValue(undefined, { value: 'custom' })).toBe('custom')
    expect((searchQuery as any).getValue({ target: { value: 'from-target' } } as any)).toBe('from-target')
    expect((searchQuery as any).getValue()).toBe('')
  })

  it('should return parsed minQuery in getMinQuery', () => {
    const { searchQuery: defaultSearchQuery } = createEvent()
    expect((defaultSearchQuery as any).getMinQuery()).toBe(0)

    const { searchQuery: customSearchQuery } = createEvent({ minQuery: 4 })
    expect((customSearchQuery as any).getMinQuery()).toBe(4)
  })

  it('should return parsed delay in getDelay', () => {
    const { searchQuery: defaultSearchQuery } = createEvent()
    expect((defaultSearchQuery as any).getDelay()).toBe(320)

    const { searchQuery: customSearchQuery } = createEvent({ delay: 500 })
    expect((customSearchQuery as any).getDelay()).toBe(500)
  })
})

