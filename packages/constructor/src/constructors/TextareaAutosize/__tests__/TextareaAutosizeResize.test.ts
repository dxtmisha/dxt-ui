// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive, ref, type Ref } from 'vue'
import { DesignLifecycleAbstract } from '@dxtmisha/functional'

import { TextareaAutosizeResize } from '../TextareaAutosizeResize'
import { TextareaAutosizeValue } from '../TextareaAutosizeValue'
import type { TextareaAutosizeProps } from '../props'

/**
 * Helper to create a TextareaAutosizeResize instance with lazy value getter.
 *
 * Вспомогательная функция для создания экземпляра TextareaAutosizeResize с ленивым геттером значения.
 * @param initialProperties initial component props / начальные свойства компонента
 * @param element textarea DOM element ref / ссылка на DOM-элемент textarea
 * @returns resize instance, value instance, value getter spy, and reactive props / экземпляры resize и value, шпион геттера и реактивные свойства
 */
function createTextareaAutosizeResize(
  initialProperties: Partial<TextareaAutosizeProps>,
  element: Ref<HTMLTextAreaElement | undefined>
) {
  const props = reactive<TextareaAutosizeProps>({
    autosize: true,
    ...initialProperties
  })
  const value = new TextareaAutosizeValue(props)
  const getValueInstance = vi.fn(() => value)
  const resize = new TextareaAutosizeResize(
    props,
    element,
    getValueInstance
  )

  return { resize, value, getValueInstance, props }
}

/**
 * Creates a textarea and hidden clone element pair with configured layout metrics.
 *
 * Создаёт пару элементов textarea и скрытого клона с заданными метриками макета.
 * @param offsetWidth textarea width in pixels / ширина textarea в пикселях
 * @param offsetHeight clone height in pixels / высота клона в пикселях
 * @returns textarea and clone DOM elements / DOM-элементы textarea и клона
 */
function createDomPair(offsetWidth: number = 150, offsetHeight: number = 80) {
  const textareaElement = document.createElement('textarea')
  const cloneElement = document.createElement('div')

  Object.defineProperty(textareaElement, 'offsetWidth', {
    configurable: true,
    value: offsetWidth
  })
  Object.defineProperty(cloneElement, 'offsetHeight', {
    configurable: true,
    value: offsetHeight
  })

  return { textareaElement, cloneElement }
}

describe('TextareaAutosizeResize', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>
  let getComputedStyleSpy: ReturnType<typeof vi.spyOn>
  let nextFrameId: number
  let scheduledFrames: Map<number, FrameRequestCallback>
  let cancelFrameSpy: ReturnType<typeof vi.fn>

  /**
   * Executes all currently queued animation frames.
   *
   * Выполняет все текущие кадры анимации в очереди.
   */
  function flushFrames(): void {
    const entries = [...scheduledFrames.entries()]
    scheduledFrames.clear()

    for (const [, callback] of entries) {
      callback(0)
    }
  }

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    nextFrameId = 1
    scheduledFrames = new Map()
    cancelFrameSpy = vi.fn((frameId: number) => {
      scheduledFrames.delete(frameId)
    })

    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback): number => {
      const id = nextFrameId++
      scheduledFrames.set(id, callback)
      return id
    })
    vi.stubGlobal('cancelAnimationFrame', cancelFrameSpy)

    getComputedStyleSpy = vi.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
      paddingTop: '10px',
      paddingRight: '12px',
      paddingBottom: '14px',
      paddingLeft: '16px',
      getPropertyValue: (property: string) => {
        if (property === '--sys-field-sizing-none') {
          return '"--YES--"'
        }

        return ''
      }
    } as unknown as CSSStyleDeclaration))
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Static predicates and lazy construction', () => {
    it('should evaluate static is() accurately for autosize prop states', () => {
      expect(TextareaAutosizeResize.is({ autosize: true })).toBe(true)
      expect(TextareaAutosizeResize.is({ autosize: false })).toBe(false)
      expect(TextareaAutosizeResize.is({})).toBe(false)
      expect(TextareaAutosizeResize.is(undefined)).toBe(false)
    })

    it('should extend DesignLifecycleAbstract and avoid eager value() getter invocation in constructor', () => {
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const { resize, getValueInstance } = createTextareaAutosizeResize({ autosize: true }, element)

      expect(resize).toBeInstanceOf(DesignLifecycleAbstract)
      expect(getValueInstance).not.toHaveBeenCalled()
      expect(scheduledFrames.size).toBe(0)
    })
  })

  describe('Size synchronization and height updates', () => {
    it('should copy paddings, width, clone innerText, and apply clone height on next animation frame', () => {
      const { textareaElement, cloneElement } = createDomPair(150, 80)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true }, element)

      resize.clone.value = cloneElement
      resize.on()

      expect(cloneElement.style.paddingTop).toBe('10px')
      expect(cloneElement.style.paddingRight).toBe('12px')
      expect(cloneElement.style.paddingBottom).toBe('14px')
      expect(cloneElement.style.paddingLeft).toBe('16px')
      expect(cloneElement.style.width).toBe('150px')
      expect(cloneElement.innerText).toBe(' --')
      expect(textareaElement.style.height).toBe('')

      flushFrames()
      expect(textareaElement.style.height).toBe('80px')
    })

    it('should handle whitespace around --sys-field-sizing-none value', () => {
      getComputedStyleSpy.mockImplementation(() => ({
        paddingTop: '4px',
        paddingRight: '4px',
        paddingBottom: '4px',
        paddingLeft: '4px',
        getPropertyValue: (property: string) => property === '--sys-field-sizing-none' ? ' "--YES--" ' : ''
      } as unknown as CSSStyleDeclaration))

      const { textareaElement, cloneElement } = createDomPair(200, 64)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true, value: 'trimmed' }, element)

      resize.clone.value = cloneElement
      resize.on()
      flushFrames()

      expect(cloneElement.innerText).toBe('trimmed --')
      expect(textareaElement.style.height).toBe('64px')
    })

    it('should delegate input event to value handler and recalculate height via onInput', () => {
      const { textareaElement, cloneElement } = createDomPair(180, 110)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize, value } = createTextareaAutosizeResize({ autosize: true }, element)

      resize.clone.value = cloneElement

      const inputEvent = {
        target: { value: 'input value' }
      } as unknown as InputEvent

      resize.onInput(inputEvent)
      flushFrames()

      expect(value.item.value).toBe('input value')
      expect(cloneElement.innerText).toBe('input value --')
      expect(textareaElement.style.height).toBe('110px')
    })

    it('should coalesce rapid update calls by cancelling previous height animation frames', () => {
      const { textareaElement, cloneElement } = createDomPair(150, 90)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true }, element)

      resize.clone.value = cloneElement

      resize.on()
      resize.on()
      resize.on()

      expect(cancelFrameSpy).toHaveBeenCalledTimes(2)
      expect(scheduledFrames.size).toBe(1)

      flushFrames()
      expect(textareaElement.style.height).toBe('90px')
    })
  })

  describe('Guard conditions and fallback bypass', () => {
    it('should not update sizes or heights when autosize is false', () => {
      const { textareaElement, cloneElement } = createDomPair(150, 80)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: false }, element)

      resize.clone.value = cloneElement
      resize.on()
      flushFrames()

      expect(getComputedStyleSpy).not.toHaveBeenCalled()
      expect(cloneElement.style.paddingTop).toBe('')
      expect(textareaElement.style.height).toBe('')
    })

    it('should not update sizes or heights when --sys-field-sizing-none is not --YES--', () => {
      getComputedStyleSpy.mockImplementation(() => ({
        getPropertyValue: () => '"--NO--"'
      } as unknown as CSSStyleDeclaration))

      const { textareaElement, cloneElement } = createDomPair(150, 80)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true }, element)

      resize.clone.value = cloneElement
      resize.on()
      flushFrames()

      expect(cloneElement.style.paddingTop).toBe('')
      expect(textareaElement.style.height).toBe('')
    })

    it('should skip getComputedStyle when element or clone ref is missing', () => {
      const element = ref<HTMLTextAreaElement | undefined>(document.createElement('textarea'))
      const { resize } = createTextareaAutosizeResize({ autosize: true }, element)

      // clone is still undefined
      resize.on()
      expect(getComputedStyleSpy).not.toHaveBeenCalled()

      // element becomes undefined
      resize.clone.value = document.createElement('div')
      element.value = undefined
      resize.on()
      expect(getComputedStyleSpy).not.toHaveBeenCalled()
    })
  })

  describe('Lifecycle (onMounted / onUnmounted) and leak prevention', () => {
    it('should watch value changes and schedule initial measurement after onMounted', async () => {
      const { textareaElement, cloneElement } = createDomPair(160, 95)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize, value } = createTextareaAutosizeResize({ autosize: true, value: 'initial' }, element)

      resize.clone.value = cloneElement
      resize.onMounted()

      // Wait for nextTick inside onMounted
      await nextTick()
      // First flush runs mount frame -> resize.on(), second flush runs height frame -> updateHeight()
      flushFrames()
      flushFrames()

      expect(cloneElement.innerText).toBe('initial --')
      expect(textareaElement.style.height).toBe('95px')

      Object.defineProperty(cloneElement, 'offsetHeight', {
        configurable: true,
        value: 140
      })

      value.set('new value')
      await nextTick()
      flushFrames()

      expect(cloneElement.innerText).toBe('new value --')
      expect(textareaElement.style.height).toBe('140px')

      resize.onUnmounted()
    })

    it('should cancel pending mount and height frames and stop watching on onUnmounted', async () => {
      const { textareaElement, cloneElement } = createDomPair(150, 88)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize, value } = createTextareaAutosizeResize({ autosize: true }, element)

      resize.clone.value = cloneElement
      resize.onMounted()

      // Unmount before nextTick resolves
      resize.onUnmounted()
      await nextTick()
      expect(scheduledFrames.size).toBe(0)

      // Remount, let nextTick schedule mount frame, then unmount before frame fires
      resize.onMounted()
      await nextTick()
      expect(scheduledFrames.size).toBe(1)

      resize.onUnmounted()
      expect(cancelFrameSpy).toHaveBeenCalledTimes(1)
      expect(scheduledFrames.size).toBe(0)

      // Trigger pending height frame directly and verify unmount cancels it
      resize.on()
      expect(scheduledFrames.size).toBe(1)
      resize.onUnmounted()
      expect(scheduledFrames.size).toBe(0)

      // Watcher must remain stopped after unmount
      value.set('after unmount')
      await nextTick()
      expect(scheduledFrames.size).toBe(0)
      expect(cloneElement.innerText).toBe(' --')
    })

    it('should handle synchronous requestAnimationFrame implementations without leaking stale frame IDs', () => {
      vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback): number => {
        callback(0)
        return 42
      })

      const { textareaElement, cloneElement } = createDomPair(140, 72)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true, value: 'sync' }, element)

      resize.clone.value = cloneElement
      resize.on()

      expect(textareaElement.style.height).toBe('72px')

      resize.onUnmounted()
      expect(cancelFrameSpy).not.toHaveBeenCalled()
    })
  })

  describe('ResizeObserver container width tracking', () => {
    it('should recalculate height on width change without focus/input and ignore height-only resize notifications', async () => {
      let observerCallback: ResizeObserverCallback | undefined
      const observeSpy = vi.fn()
      const disconnectSpy = vi.fn()

      class MockResizeObserver {
        constructor(callback: ResizeObserverCallback) {
          observerCallback = callback
        }

        observe = observeSpy
        unobserve = vi.fn()
        disconnect = disconnectSpy
      }

      vi.stubGlobal('ResizeObserver', MockResizeObserver)

      const { textareaElement, cloneElement } = createDomPair(200, 80)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true, value: 'Responsive text' }, element)

      resize.clone.value = cloneElement
      resize.onMounted()
      await nextTick()
      flushFrames()
      flushFrames()

      expect(observeSpy).toHaveBeenCalledWith(textareaElement)
      expect(textareaElement.style.height).toBe('80px')
      expect(scheduledFrames.size).toBe(0)

      // Height-only resize callback (same offsetWidth) must NOT trigger recalculation loop
      observerCallback?.([], {} as ResizeObserver)
      expect(scheduledFrames.size).toBe(0)

      // Container width changes -> triggers recalculation without focus or input
      Object.defineProperty(textareaElement, 'offsetWidth', {
        configurable: true,
        value: 120
      })
      Object.defineProperty(cloneElement, 'offsetHeight', {
        configurable: true,
        value: 136
      })

      observerCallback?.([], {} as ResizeObserver)
      expect(scheduledFrames.size).toBe(1)
      flushFrames()

      expect(cloneElement.style.width).toBe('120px')
      expect(textareaElement.style.height).toBe('136px')

      // Unmount disconnects observer and ignores stale callbacks
      resize.onUnmounted()
      expect(disconnectSpy).toHaveBeenCalledOnce()

      Object.defineProperty(textareaElement, 'offsetWidth', {
        configurable: true,
        value: 300
      })
      observerCallback?.([], {} as ResizeObserver)
      expect(scheduledFrames.size).toBe(0)
    })

    it('should not create ResizeObserver when native field-sizing is supported or ResizeObserver is unavailable', async () => {
      const observeSpy = vi.fn()

      class MockResizeObserver {
        observe = observeSpy
        unobserve = vi.fn()
        disconnect = vi.fn()
      }

      vi.stubGlobal('ResizeObserver', MockResizeObserver)
      getComputedStyleSpy.mockImplementation(() => ({
        getPropertyValue: () => ''
      } as unknown as CSSStyleDeclaration))

      const { textareaElement, cloneElement } = createDomPair(200, 80)
      const element = ref<HTMLTextAreaElement | undefined>(textareaElement)
      const { resize } = createTextareaAutosizeResize({ autosize: true }, element)

      resize.clone.value = cloneElement
      resize.onMounted()
      await nextTick()
      expect(observeSpy).not.toHaveBeenCalled()
      resize.onUnmounted()

      // Fallback mode without global ResizeObserver should degrade gracefully
      vi.stubGlobal('ResizeObserver', undefined)
      getComputedStyleSpy.mockImplementation(() => ({
        paddingTop: '8px',
        paddingRight: '8px',
        paddingBottom: '8px',
        paddingLeft: '8px',
        getPropertyValue: (property: string) => property === '--sys-field-sizing-none' ? '"--YES--"' : ''
      } as unknown as CSSStyleDeclaration))

      resize.onMounted()
      await nextTick()
      flushFrames()
      flushFrames()
      expect(textareaElement.style.height).toBe('80px')
      resize.onUnmounted()
    })
  })
})
