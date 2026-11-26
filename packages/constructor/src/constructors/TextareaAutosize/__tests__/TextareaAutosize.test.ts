// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { TextareaAutosize } from '../TextareaAutosize'
import { TextareaAutosizeDesign } from '../TextareaAutosizeDesign'
import { defaultsTextareaAutosize, type TextareaAutosizeProps } from '../props'
import type {
  TextareaAutosizeClasses,
  TextareaAutosizeComponents,
  TextareaAutosizeExpose
} from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract instance checks for integration assertions.
 *
 * Подкласс для интеграционных проверок ленивого создания зависимостей DesignLogicAbstract.
 */
class InspectableTextareaAutosize extends TextareaAutosize {}

describe('TextareaAutosize (Integration)', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>
  let getComputedStyleSpy: ReturnType<typeof vi.spyOn>
  let nextFrameId: number
  let scheduledFrames: Map<number, FrameRequestCallback>
  let cancelFrameSpy: ReturnType<typeof vi.fn>

  /**
   * Flushes queued animation frames deterministically.
   *
   * Детерминированно выполняет все кадры анимации в очереди.
   */
  function flushFrames(): void {
    const entries = [...scheduledFrames.entries()]
    scheduledFrames.clear()

    for (const [, callback] of entries) {
      callback(0)
    }
  }

  /**
   * Mounts a complete TextareaAutosize component powered by TextareaAutosizeDesign.
   *
   * Монтирует полноценный компонент TextareaAutosize на базе TextareaAutosizeDesign.
   * @param initialProps initial component properties / начальные свойства компонента
   * @param fallbackEnabled whether --sys-field-sizing-none fallback mode is active / активен ли fallback-режим --sys-field-sizing-none
   * @param attrs optional fallthrough attributes / необязательные передаваемые атрибуты
   * @returns mounted harness handles / вспомогательные ссылки смонтированного компонента
   */
  function mountTextareaAutosize(
    initialProps: Partial<TextareaAutosizeProps> = {},
    fallbackEnabled: boolean = true,
    attrs: Record<string, unknown> = {}
  ) {
    getComputedStyleSpy.mockImplementation(() => ({
      paddingTop: '8px',
      paddingRight: '10px',
      paddingBottom: '8px',
      paddingLeft: '10px',
      getPropertyValue: (property: string) => {
        if (property === '--sys-field-sizing-none') {
          return fallbackEnabled ? '"--YES--"' : ''
        }

        return ''
      }
    } as unknown as CSSStyleDeclaration))

    const props = reactive<TextareaAutosizeProps>({
      ...defaultsTextareaAutosize,
      ...initialProps
    })
    const emits = vi.fn()
    const host = document.createElement('div')
    document.body.appendChild(host)

    let exposed!: TextareaAutosizeExpose & { elementHtml?: { value?: HTMLTextAreaElement } }
    let logic!: InspectableTextareaAutosize

    const innerComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-textareaAutosize': true,
            'd1-textareaAutosize--autosize': Boolean(props.autosize)
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({}))

        const design = new TextareaAutosizeDesign<
          TextareaAutosizeComponents,
          TextareaAutosizeExpose,
          TextareaAutosizeClasses,
          TextareaAutosizeProps
        >(
          'd1.textareaAutosize',
          props,
          {
            emits,
            classes: classesToken,
            styles: stylesToken
          },
          InspectableTextareaAutosize
        )

        logic = (design as unknown as { item: InspectableTextareaAutosize }).item
        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(defineComponent({
      setup: () => () => h(innerComponent, attrs)
    }))

    app.mount(host)

    const textarea = host.querySelector<HTMLTextAreaElement>('textarea')!
    const clone = host.querySelector<HTMLDivElement>('.d1-textareaAutosize__clone')!

    Object.defineProperty(textarea, 'offsetWidth', {
      configurable: true,
      value: 320
    })
    Object.defineProperty(clone, 'offsetHeight', {
      configurable: true,
      value: 76
    })

    return {
      app,
      host,
      props,
      emits,
      exposed,
      logic,
      textarea,
      clone,
      cleanup: () => {
        app.unmount()
        host.remove()
      }
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
    getComputedStyleSpy = vi.spyOn(window, 'getComputedStyle')
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Full component rendering, reactivity, and autosize flow', () => {
    it('should render clone and textarea, compute initial height on mount, and react to input and prop updates', async () => {
      const harness = mountTextareaAutosize({
        value: 'Line 1\nLine 2',
        inputAttrs: { placeholder: 'Type message', maxlength: 200 }
      })

      try {
        expect(harness.clone.getAttribute('aria-hidden')).toBe('true')
        expect(harness.textarea.classList.contains('d1-textareaAutosize')).toBe(true)
        expect(harness.textarea.classList.contains('d1-textareaAutosize--autosize')).toBe(true)
        expect(harness.textarea.getAttribute('placeholder')).toBe('Type message')
        expect(harness.textarea.getAttribute('maxlength')).toBe('200')
        expect(harness.exposed.getValue()).toBe('Line 1\nLine 2')

        // Initial mount nextTick + rAF measurement
        await nextTick()
        flushFrames()
        flushFrames()

        expect(harness.clone.style.width).toBe('320px')
        expect(harness.clone.style.paddingTop).toBe('8px')
        expect(harness.clone.innerText).toBe('Line 1\nLine 2 --')
        expect(harness.textarea.style.height).toBe('76px')

        // Simulate user typing into textarea
        Object.defineProperty(harness.clone, 'offsetHeight', {
          configurable: true,
          value: 128
        })
        harness.textarea.value = 'Line 1\nLine 2\nLine 3'
        harness.textarea.dispatchEvent(new Event('input'))
        flushFrames()

        expect(harness.exposed.getValue()).toBe('Line 1\nLine 2\nLine 3')
        expect(harness.emits).toHaveBeenCalledTimes(1)
        expect(harness.emits.mock.calls[0]?.[0]).toBe('input')
        expect(harness.clone.innerText).toBe('Line 1\nLine 2\nLine 3 --')
        expect(harness.textarea.style.height).toBe('128px')

        // Reactive external props.value update
        Object.defineProperty(harness.clone, 'offsetHeight', {
          configurable: true,
          value: 44
        })
        harness.props.value = 'Short'
        await nextTick()
        flushFrames()

        expect(harness.exposed.getValue()).toBe('Short')
        expect(harness.textarea.value).toBe('Short')
        expect(harness.clone.innerText).toBe('Short --')
        expect(harness.textarea.style.height).toBe('44px')
      } finally {
        harness.cleanup()
      }
    })

    it('should refresh height on focus event when fallback mode is active', async () => {
      const harness = mountTextareaAutosize({ value: 'Focus text' })

      try {
        await nextTick()
        flushFrames()
        flushFrames()

        Object.defineProperty(harness.clone, 'offsetHeight', {
          configurable: true,
          value: 102
        })

        harness.textarea.dispatchEvent(new Event('focus'))
        flushFrames()

        expect(harness.textarea.style.height).toBe('102px')
      } finally {
        harness.cleanup()
      }
    })

    it('should skip JS height calculation when native CSS field-sizing is supported', async () => {
      const harness = mountTextareaAutosize({ value: 'Native sizing' }, false)

      try {
        await nextTick()
        flushFrames()
        flushFrames()

        expect(harness.textarea.style.height).toBe('')

        harness.textarea.value = 'Updated native'
        harness.textarea.dispatchEvent(new Event('input'))
        flushFrames()

        expect(harness.exposed.getValue()).toBe('Updated native')
        expect(harness.emits).toHaveBeenCalledTimes(1)
        expect(harness.textarea.style.height).toBe('')
      } finally {
        harness.cleanup()
      }
    })
  })

  describe('Lazy instantiation and dynamic autosize toggling', () => {
    it('should keep resize uninstantiated while autosize is false and activate it dynamically when toggled to true', async () => {
      const harness = mountTextareaAutosize({
        autosize: false,
        value: 'No autosize yet'
      })

      try {
        expect(harness.logic.hasInstance('value')).toBe(true)
        expect(harness.logic.hasInstance('resize')).toBe(false)

        harness.textarea.dispatchEvent(new Event('focus'))
        harness.textarea.value = 'Edited without resize'
        harness.textarea.dispatchEvent(new Event('input'))

        expect(harness.logic.hasInstance('resize')).toBe(false)
        expect(harness.exposed.getValue()).toBe('Edited without resize')
        expect(harness.emits).toHaveBeenCalledTimes(1)
        expect(harness.textarea.style.height).toBe('')

        // Toggle autosize on reactively
        harness.props.autosize = true
        await nextTick()
        await nextTick()
        flushFrames()
        flushFrames()

        expect(harness.logic.hasInstance('resize')).toBe(true)
        expect(harness.clone.innerText).toBe('Edited without resize --')
        expect(harness.textarea.style.height).toBe('76px')
      } finally {
        harness.cleanup()
      }
    })
  })

  describe('Security, Unicode, and lifecycle resource cleanup', () => {
    it('should handle XSS-like strings and multilingual text safely as plain text without HTML injection', async () => {
      const payload = '<script>alert(1)</script><img src=x onerror=alert(1)> — Tiếng Việt Nguyễn — Привет 🚀'
      const harness = mountTextareaAutosize({ value: payload })

      try {
        await nextTick()
        flushFrames()
        flushFrames()

        expect(harness.exposed.getValue()).toBe(payload)
        expect(harness.textarea.value).toBe(payload)
        expect(harness.clone.querySelector('script')).toBeNull()
        expect(harness.clone.querySelector('img')).toBeNull()
        expect(harness.clone.innerText).toBe(`${payload} --`)
      } finally {
        harness.cleanup()
      }
    })

    it('should dispose watchers and cancel pending animation frames cleanly on unmount', async () => {
      const harness = mountTextareaAutosize({ value: 'Will unmount' })

      await nextTick()
      expect(scheduledFrames.size).toBe(1)

      harness.cleanup()

      expect(cancelFrameSpy).toHaveBeenCalledTimes(1)
      expect(scheduledFrames.size).toBe(0)

      harness.props.value = 'Changed after unmount'
      await nextTick()
      expect(harness.exposed.getValue()).toBe('Will unmount')
      expect(scheduledFrames.size).toBe(0)
    })
  })
})
