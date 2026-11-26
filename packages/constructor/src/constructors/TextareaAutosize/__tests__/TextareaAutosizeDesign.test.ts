// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, createSSRApp, defineComponent, h, nextTick, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { TextareaAutosize } from '../TextareaAutosize'
import { TextareaAutosizeDesign } from '../TextareaAutosizeDesign'
import type { TextareaAutosizeProps } from '../props'
import type {
  TextareaAutosizeClasses,
  TextareaAutosizeComponents,
  TextareaAutosizeExpose
} from '../types'

describe('TextareaAutosizeDesign', () => {
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

  it('should render hidden aria clone and textarea elements and expose getValue and elementHtml', () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    let exposed!: TextareaAutosizeExpose & { elementHtml?: { value?: HTMLTextAreaElement } }

    const component = defineComponent({
      setup() {
        const props = reactive<TextareaAutosizeProps>({
          autosize: true,
          value: 'initial text'
        })
        const design = new TextareaAutosizeDesign<
          TextareaAutosizeComponents,
          TextareaAutosizeExpose,
          TextareaAutosizeClasses,
          TextareaAutosizeProps
        >('d1.textareaAutosize', props, {
          classes: computed<ConstrClasses>(() => ({
            main: {
              'd1-textareaAutosize': true,
              'd1-textareaAutosize--autosize': Boolean(props.autosize)
            }
          })),
          styles: computed<ConstrStyles>(() => ({
            '--d1-textareaAutosize-minHeight': '64px'
          }))
        })

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp(component)

    try {
      app.mount(host)

      const clone = host.querySelector<HTMLDivElement>('div.d1-textareaAutosize__clone')
      const textarea = host.querySelector<HTMLTextAreaElement>('textarea.d1-textareaAutosize')

      expect(clone).not.toBeNull()
      expect(clone?.getAttribute('aria-hidden')).toBe('true')
      expect(textarea).not.toBeNull()
      expect(textarea?.classList.contains('d1-textareaAutosize--autosize')).toBe(true)
      expect(textarea?.style.getPropertyValue('--d1-textareaAutosize-minHeight')).toBe('64px')
      expect(textarea?.value).toBe('initial text')
      expect(exposed.getValue()).toBe('initial text')
      expect(exposed.elementHtml?.value).toBe(textarea)
    } finally {
      app.unmount()
      host.remove()
    }
  })

  it('should merge fallthrough attrs, inputAttrs, and internal handlers via mergeProps without overwriting', () => {
    const attrFocus = vi.fn()
    const attrInput = vi.fn()
    const inputAttrFocus = vi.fn()
    const inputAttrInput = vi.fn()
    const emits = vi.fn()

    const host = document.createElement('div')
    document.body.appendChild(host)

    const innerComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<TextareaAutosizeProps>({
          autosize: true,
          value: 'base',
          inputAttrs: {
            class: 'input-attr-class',
            style: { color: 'rgb(10, 20, 30)' },
            placeholder: 'Enter notes',
            rows: 3,
            onFocus: inputAttrFocus,
            onInput: inputAttrInput
          }
        })

        const design = new TextareaAutosizeDesign<
          TextareaAutosizeComponents,
          TextareaAutosizeExpose,
          TextareaAutosizeClasses,
          TextareaAutosizeProps
        >('d1.textareaAutosize', props, {
          emits,
          classes: computed<ConstrClasses>(() => ({
            main: { 'd1-textareaAutosize': true }
          })),
          styles: computed<ConstrStyles>(() => ({
            minHeight: '40px'
          }))
        })

        return design.render()
      }
    })

    const app = createApp(defineComponent({
      setup: () => () => h(innerComponent, {
        'class': 'external-class',
        'style': { opacity: '0.9' },
        'data-testid': 'merged-textarea',
        'onFocus': attrFocus,
        'onInput': attrInput
      })
    }))

    try {
      app.mount(host)

      const textarea = host.querySelector<HTMLTextAreaElement>('textarea')!
      expect(textarea.getAttribute('data-testid')).toBe('merged-textarea')
      expect(textarea.getAttribute('placeholder')).toBe('Enter notes')
      expect(textarea.getAttribute('rows')).toBe('3')
      expect(textarea.classList.contains('d1-textareaAutosize')).toBe(true)
      expect(textarea.classList.contains('input-attr-class')).toBe(true)
      expect(textarea.classList.contains('external-class')).toBe(true)
      expect(textarea.style.color).toBe('rgb(10, 20, 30)')
      expect(textarea.style.opacity).toBe('0.9')
      expect(textarea.style.minHeight).toBe('40px')

      textarea.dispatchEvent(new Event('focus'))
      expect(attrFocus).toHaveBeenCalledTimes(1)
      expect(inputAttrFocus).toHaveBeenCalledTimes(1)

      textarea.value = 'changed text'
      textarea.dispatchEvent(new Event('input'))
      expect(attrInput).toHaveBeenCalledTimes(1)
      expect(inputAttrInput).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledTimes(1)
    } finally {
      app.unmount()
      host.remove()
    }
  })

  it('should support custom ItemConstructor dependency injection and expose public render methods', () => {
    const focusHandler = vi.fn()
    const inputHandler = vi.fn()
    let designInstance!: TextareaAutosizeDesign<
      TextareaAutosizeComponents,
      TextareaAutosizeExpose,
      TextareaAutosizeClasses,
      TextareaAutosizeProps
    >

    /** Custom TextareaAutosize orchestrator for DI verification / Пользовательский оркестратор TextareaAutosize для проверки DI */
    class CustomTextareaAutosize extends TextareaAutosize {
      override readonly onFocus = focusHandler
      override readonly onInput = inputHandler
    }

    const host = document.createElement('div')
    document.body.appendChild(host)

    const component = defineComponent({
      setup() {
        designInstance = new TextareaAutosizeDesign<
          TextareaAutosizeComponents,
          TextareaAutosizeExpose,
          TextareaAutosizeClasses,
          TextareaAutosizeProps
        >(
          'd1.textareaAutosize',
          { autosize: false, value: 'custom' },
          undefined,
          CustomTextareaAutosize
        )

        return designInstance.render()
      }
    })

    const app = createApp(component)

    try {
      app.mount(host)

      expect(typeof designInstance.renderClone).toBe('function')
      expect(typeof designInstance.renderTextarea).toBe('function')

      const textarea = host.querySelector<HTMLTextAreaElement>('textarea')!
      textarea.dispatchEvent(new Event('focus'))
      textarea.dispatchEvent(new Event('input'))

      expect(focusHandler).toHaveBeenCalledTimes(1)
      expect(inputHandler).toHaveBeenCalledTimes(1)
    } finally {
      app.unmount()
      host.remove()
    }
  })

  it('should hydrate SSR markup without mismatch warnings', async () => {
    const component = defineComponent({
      setup() {
        const props = reactive<TextareaAutosizeProps>({
          autosize: true,
          value: 'SSR hydrated value',
          inputAttrs: { placeholder: 'Write here' }
        })
        const design = new TextareaAutosizeDesign<
          TextareaAutosizeComponents,
          TextareaAutosizeExpose,
          TextareaAutosizeClasses,
          TextareaAutosizeProps
        >('d1.textareaAutosize', props, {
          classes: computed<ConstrClasses>(() => ({
            main: {
              'd1-textareaAutosize': true,
              'd1-textareaAutosize--autosize': true
            }
          }))
        })

        return design.render()
      }
    })

    const root = defineComponent({
      setup: () => () => h(component)
    })

    const html = await renderToString(createSSRApp(root))
    const host = document.createElement('div')
    host.innerHTML = html
    document.body.appendChild(host)

    const existingClone = host.querySelector('div.d1-textareaAutosize__clone')
    const existingTextarea = host.querySelector<HTMLTextAreaElement>('textarea.d1-textareaAutosize')
    const app = createSSRApp(root)

    try {
      expect(existingClone?.getAttribute('aria-hidden')).toBe('true')
      expect(existingTextarea?.value).toBe('SSR hydrated value')

      app.mount(host)
      await nextTick()

      expect(host.querySelector('div.d1-textareaAutosize__clone')).toBe(existingClone)
      expect(host.querySelector('textarea.d1-textareaAutosize')).toBe(existingTextarea)
    } finally {
      app.unmount()
      host.remove()
    }
  })
})
