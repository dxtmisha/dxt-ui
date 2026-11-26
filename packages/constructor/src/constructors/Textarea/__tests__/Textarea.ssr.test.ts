// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, type ConstrStyles, ServerStorage } from '@dxtmisha/functional'

import { TextareaAutosizeDesign } from '../../TextareaAutosize/TextareaAutosizeDesign'
import { defaultsTextareaAutosize, type TextareaAutosizeProps } from '../../TextareaAutosize/props'
import type {
  TextareaAutosizeClasses,
  TextareaAutosizeComponents,
  TextareaAutosizeExpose
} from '../../TextareaAutosize/types'

import { TextareaDesign } from '../TextareaDesign'
import { defaultsTextarea, type TextareaProps } from '../props'
import type {
  TextareaClasses,
  TextareaComponents,
  TextareaExpose,
  TextareaSlots
} from '../types'

const MockFieldSsr = defineComponent({
  name: 'MockFieldSsr',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    validationMessage: String,
    maxlength: [String, Number]
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'div',
      {
        'class': ['mock-field', attrs.class],
        'style': attrs.style,
        'data-label': String(componentProps.label ?? ''),
        'data-validation': componentProps.validationMessage ?? '',
        'data-maxlength': String(componentProps.maxlength ?? '')
      },
      [
        slots.leading?.(),
        slots.default?.({
          id: 'ssr-textarea-1',
          className: 'd1-field__body__input',
          classHidden: 'd1-field__body__hidden',
          classForFocus: 'd1-field__body__focus',
          binds: {
            'id': 'ssr-textarea-1',
            'class': 'd1-field__body__input',
            'data-input': 'ssr-textarea-1'
          }
        }),
        slots.trailing?.()
      ]
    )
  }
})

const RealTextareaAutosizeSsr = defineComponent({
  name: 'RealTextareaAutosizeSsr',
  inheritAttrs: false,
  props: Object.keys(defaultsTextareaAutosize).concat([
    'value',
    'inputAttrs',
    'height'
  ]),
  emits: ['input'],
  setup(componentProps, { emit }) {
    const typedProps = componentProps as Readonly<TextareaAutosizeProps & { height?: string }>
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-textareaAutosize': true,
        'd1-textareaAutosize--autosize': Boolean(typedProps.autosize),
        ...(typedProps.height ? { [`d1-textareaAutosize--height--${typedProps.height}`]: true } : {})
      }
    }))

    const design = new TextareaAutosizeDesign<
      TextareaAutosizeComponents,
      TextareaAutosizeExpose,
      TextareaAutosizeClasses,
      TextareaAutosizeProps
    >(
      'd1.textareaAutosize',
      typedProps,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken
      }
    )

    return design.render()
  }
})

/**
 * Renders TextareaDesign in a pure Node SSR environment without browser globals.
 *
 * Рендерит TextareaDesign в чистом серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param options optional SSR render flags, slots, and styles / необязательные флаги SSR, слоты и стили
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderTextareaSsr(
  properties: TextareaProps = {},
  options: {
    withAutosize?: boolean
    slots?: TextareaSlots
    styles?: ConstrStyles
    attrs?: Record<string, unknown>
  } = {}
): Promise<string> {
  const {
    withAutosize = true,
    slots = {},
    styles = {},
    attrs = {}
  } = options

  const props = reactive<TextareaProps>({
    ...(defaultsTextarea as TextareaProps),
    ...properties
  })

  const TextareaComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-textarea': true
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => styles)

      const design = new TextareaDesign<
        TextareaComponents,
        TextareaExpose,
        TextareaClasses,
        TextareaProps
      >(
        'd1.textarea',
        props,
        {
          classes: classesToken,
          styles: stylesToken,
          components: withAutosize
            ? {
                field: MockFieldSsr,
                textareaAutosize: RealTextareaAutosizeSsr
              }
            : {
                field: MockFieldSsr
              }
        }
      )

      return design.render()
    }
  })

  const Root = defineComponent({
    setup: () => () => h(TextareaComponent, attrs, slots as Record<string, () => unknown>)
  })

  return renderToString(createSSRApp(Root))
}

describe('Textarea (SSR)', () => {
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    ServerStorage.reset()
    const request: Record<string, unknown> = {}
    ServerStorage.init(() => request)
  })

  afterEach(() => {
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    ServerStorage.reset()
    vi.restoreAllMocks()
  })

  describe('Standard SSR rendering without browser globals', () => {
    it('should render Textarea with RealTextareaAutosize safely in Node without window or document', async () => {
      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')

      const html = await renderTextareaSsr({
        label: 'Comments',
        placeholder: 'Add your feedback',
        modelValue: 'Server rendered notes',
        rows: 4,
        cols: 50,
        wrap: 'soft',
        maxlength: 300,
        validationMessage: 'Check length',
        textareaAttrs: {
          height: 'lg'
        } as Record<string, unknown>
      })

      expect(html).toContain('class="mock-field d1-textarea d1-textarea__field"')
      expect(html).toContain('data-label="Comments"')
      expect(html).toContain('data-validation="Check length"')
      expect(html).toContain('data-maxlength="300"')
      expect(html).toContain('<div aria-hidden="true" class="d1-textareaAutosize__clone"></div>')
      expect(html).toContain('d1-textareaAutosize--autosize')
      expect(html).toContain('d1-textareaAutosize--height--lg')
      expect(html).toContain('id="ssr-textarea-1"')
      expect(html).toContain('placeholder="Add your feedback"')
      expect(html).toContain('rows="4"')
      expect(html).toContain('cols="50"')
      expect(html).toContain('wrap="soft"')
      expect(html).toContain('>Server rendered notes</textarea>')
    })

    it('should render native textarea fallback and projected slots cleanly in SSR', async () => {
      const html = await renderTextareaSsr(
        {
          modelValue: 'Fallback SSR',
          disabled: true,
          readonly: true,
          rows: 3
        },
        {
          withAutosize: false,
          slots: {
            leading: () => h('span', { class: 'ssr-leading' }, 'Pre'),
            trailing: () => h('span', { class: 'ssr-trailing' }, 'Post')
          }
        }
      )

      expect(html).not.toContain('d1-textareaAutosize__clone')
      expect(html).toContain('<span class="ssr-leading">Pre</span>')
      expect(html).toContain('<span class="ssr-trailing">Post</span>')
      expect(html).toContain('disabled')
      expect(html).toContain('readonly')
      expect(html).toContain('rows="3"')
      expect(html).toContain('>Fallback SSR</textarea>')
    })
  })

  describe('Security escaping, Unicode, determinism, and request isolation', () => {
    it('should escape HTML/XSS payloads and preserve Unicode in server-rendered markup', async () => {
      const html = await renderTextareaSsr({
        modelValue: '</textarea><script>alert(1)</script> — Tiếng Việt Nguyễn — Привет 🚀'
      })

      expect(html).not.toContain('<script>alert(1)</script>')
      expect(html).toContain('&lt;/textarea&gt;&lt;script&gt;alert(1)&lt;/script&gt; — Tiếng Việt Nguyễn — Привет 🚀')
    })

    it('should produce deterministic HTML and isolate state across separate SSR requests', async () => {
      const firstHtml = await renderTextareaSsr({ modelValue: 'Deterministic' })
      const secondHtml = await renderTextareaSsr({ modelValue: 'Deterministic' })
      expect(firstHtml).toBe(secondHtml)

      ServerStorage.reset()
      const requestA: Record<string, unknown> = {}
      ServerStorage.init(() => requestA)
      const htmlA = await renderTextareaSsr({ modelValue: 'Secret A', name: 'fieldA' })

      ServerStorage.reset()
      const requestB: Record<string, unknown> = {}
      ServerStorage.init(() => requestB)
      const htmlB = await renderTextareaSsr({ modelValue: 'Public B', name: 'fieldB' })

      expect(htmlA).toContain('Secret A')
      expect(htmlA).not.toContain('Public B')
      expect(htmlB).toContain('Public B')
      expect(htmlB).not.toContain('Secret A')
    })
  })
})
