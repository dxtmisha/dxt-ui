// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import { TextareaAutosizeValue } from '../TextareaAutosizeValue'
import type { TextareaAutosizeProps } from '../props'

import type { ConstrEmit } from '@dxtmisha/functional'
import type { TextareaAutosizeEmits } from '../types'

/**
 * Helper to create a reactive TextareaAutosizeValue test instance.
 *
 * Вспомогательная функция для создания реактивного тестового экземпляра TextareaAutosizeValue.
 * @param initialProperties initial component props / начальные свойства компонента
 * @param emits optional emit spy / необязательный шпион событий
 * @returns created value instance and reactive props / созданный экземпляр значения и реактивные свойства
 */
function createTextareaAutosizeValue(
  initialProperties: Partial<TextareaAutosizeProps> = {},
  emits?: ReturnType<typeof vi.fn>
) {
  const props = reactive<TextareaAutosizeProps>({
    autosize: true,
    ...initialProperties
  })

  const value = new TextareaAutosizeValue(props, emits as ConstrEmit<TextareaAutosizeEmits> | undefined)

  return { value, props }
}

describe('TextareaAutosizeValue', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  describe('Initialization and DesignLifecycleAbstract contract', () => {
    it('should extend DesignLifecycleAbstract and initialize item from initial value prop', () => {
      const { value } = createTextareaAutosizeValue({ value: 'hello' })

      expect(value).toBeInstanceOf(DesignLifecycleAbstract)
      expect(value.item.value).toBe('hello')
    })

    it('should initialize item as empty string when value prop is undefined or empty', () => {
      const { value: fromUndefined } = createTextareaAutosizeValue({ value: undefined })
      const { value: fromEmpty } = createTextareaAutosizeValue({ value: '' })

      expect(fromUndefined.item.value).toBe('')
      expect(fromEmpty.item.value).toBe('')
    })

    it('should not watch props.value before onMounted is called', async () => {
      const { value, props } = createTextareaAutosizeValue({ value: 'initial' })

      props.value = 'changed-before-mount'
      await nextTick()

      expect(value.item.value).toBe('initial')

      value.onMounted()
      expect(value.item.value).toBe('changed-before-mount')
      value.onUnmounted()
    })
  })

  describe('Lifecycle watcher synchronization and cleanup', () => {
    it('should synchronize item reactively when props.value changes after mount', async () => {
      const { value, props } = createTextareaAutosizeValue({ value: 'first' })
      value.onMounted()

      expect(value.item.value).toBe('first')

      props.value = 'second'
      await nextTick()
      expect(value.item.value).toBe('second')

      props.value = ''
      await nextTick()
      expect(value.item.value).toBe('')

      props.value = 'third'
      await nextTick()
      expect(value.item.value).toBe('third')

      props.value = undefined
      await nextTick()
      expect(value.item.value).toBe('')

      value.onUnmounted()
    })

    it('should stop watching props.value after onUnmounted', async () => {
      const { value, props } = createTextareaAutosizeValue({ value: 'active' })
      value.onMounted()

      props.value = 'updated'
      await nextTick()
      expect(value.item.value).toBe('updated')

      value.onUnmounted()

      props.value = 'after-unmount'
      await nextTick()
      expect(value.item.value).toBe('updated')
    })

    it('should replace previous watcher safely when onMounted is invoked repeatedly', async () => {
      const { value, props } = createTextareaAutosizeValue({ value: 'start' })
      const setSpy = vi.spyOn(value, 'set')

      value.onMounted()
      value.onMounted()
      setSpy.mockClear()

      props.value = 'next'
      await nextTick()

      expect(setSpy).toHaveBeenCalledTimes(1)
      expect(value.item.value).toBe('next')

      value.onUnmounted()
    })
  })

  describe('set() boundary values and deduplication', () => {
    it('should update item and return true when value differs', () => {
      const { value } = createTextareaAutosizeValue({ value: 'hello' })

      expect(value.set('world')).toBe(true)
      expect(value.item.value).toBe('world')
    })

    it('should return false when setting the same value', () => {
      const { value } = createTextareaAutosizeValue({ value: 'hello' })

      expect(value.set('hello')).toBe(false)
      expect(value.item.value).toBe('hello')
    })

    it('should treat undefined and empty string identically when item is already empty', () => {
      const { value } = createTextareaAutosizeValue({ value: undefined })

      expect(value.set(undefined)).toBe(false)
      expect(value.set('')).toBe(false)
      expect(value.item.value).toBe('')

      expect(value.set('filled')).toBe(true)
      expect(value.set(undefined)).toBe(true)
      expect(value.item.value).toBe('')
      expect(value.set(undefined)).toBe(false)
    })

    it('should preserve whitespace, newlines, and multilingual Unicode strings', () => {
      const { value } = createTextareaAutosizeValue()

      expect(value.set('   \t\n  ')).toBe(true)
      expect(value.item.value).toBe('   \t\n  ')

      const multilingual = 'Привет Мир — Học tiếng Việt Nguyễn — 你好 🚀 👨‍👩‍👧‍👦'
      expect(value.set(multilingual)).toBe(true)
      expect(value.item.value).toBe(multilingual)
    })
  })

  describe('on() input event handling', () => {
    it('should update value and emit input event when target value changes', () => {
      const emits = vi.fn()
      const { value } = createTextareaAutosizeValue({ value: 'old' }, emits)
      const event = {
        target: { value: 'new' }
      } as unknown as InputEvent

      value.on(event)

      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('input', event)
      expect(value.item.value).toBe('new')
    })

    it('should emit input event when clearing value to empty string', () => {
      const emits = vi.fn()
      const { value } = createTextareaAutosizeValue({ value: 'non-empty' }, emits)
      const event = {
        target: { value: '' }
      } as unknown as InputEvent

      value.on(event)

      expect(emits).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('input', event)
      expect(value.item.value).toBe('')
    })

    it('should not emit input event when target value is unchanged', () => {
      const emits = vi.fn()
      const { value } = createTextareaAutosizeValue({ value: 'same' }, emits)
      const event = {
        target: { value: 'same' }
      } as unknown as InputEvent

      value.on(event)

      expect(emits).not.toHaveBeenCalled()
      expect(value.item.value).toBe('same')
    })

    it('should handle null event target and missing emits safely without throwing', () => {
      const { value } = createTextareaAutosizeValue({ value: 'safe' })
      const nullTargetEvent = { target: null } as unknown as InputEvent
      const validEvent = { target: { value: 'updated' } } as unknown as InputEvent

      expect(() => value.on(nullTargetEvent)).not.toThrow()
      expect(value.item.value).toBe('safe')

      expect(() => value.on(validEvent)).not.toThrow()
      expect(value.item.value).toBe('updated')
    })
  })
})
