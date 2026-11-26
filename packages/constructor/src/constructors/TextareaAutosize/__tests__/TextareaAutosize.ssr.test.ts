// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import {
  type ConstrClasses,
  type ConstrStyles,
  ServerStorage
} from '@dxtmisha/functional'

import { TextareaAutosizeDesign } from '../TextareaAutosizeDesign'
import { defaultsTextareaAutosize, type TextareaAutosizeProps } from '../props'
import type {
  TextareaAutosizeClasses,
  TextareaAutosizeComponents,
  TextareaAutosizeExpose
} from '../types'

/**
 * Renders the complete TextareaAutosizeDesign component in a server-side Node environment.
 *
 * Рендерит полный компонент TextareaAutosizeDesign в серверном окружении Node.
 * @param properties component properties / свойства компонента
 * @param styles optional inline styles token / необязательный токен стилей
 * @param attrs optional fallthrough attributes / необязательные передаваемые атрибуты
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderTextareaAutosizeSsr(
  properties: Partial<TextareaAutosizeProps> = {},
  styles?: ConstrStyles,
  attrs: Record<string, unknown> = {}
): Promise<string> {
  const props = reactive<TextareaAutosizeProps>({
    ...defaultsTextareaAutosize,
    ...properties
  })

  const TextareaAutosizeComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-textareaAutosize': true,
          'd1-textareaAutosize--autosize': Boolean(props.autosize)
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => styles ?? {})

      const design = new TextareaAutosizeDesign<
        TextareaAutosizeComponents,
        TextareaAutosizeExpose,
        TextareaAutosizeClasses,
        TextareaAutosizeProps
      >('d1.textareaAutosize', props, {
        classes: classesToken,
        styles: stylesToken
      })

      return design.render()
    }
  })

  const RootComponent = defineComponent({
    setup: () => () => h(TextareaAutosizeComponent, attrs)
  })

  return renderToString(createSSRApp(RootComponent))
}

describe('TextareaAutosize (SSR)', () => {
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
    it('should render clone and textarea in Node SSR environment without window or document', async () => {
      const html = await renderTextareaAutosizeSsr({
        autosize: true,
        value: 'Server initial content'
      })

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toContain('<div aria-hidden="true" class="d1-textareaAutosize__clone"></div>')
      expect(html).toContain('<textarea class="d1-textareaAutosize d1-textareaAutosize--autosize"')
      expect(html).toContain('>Server initial content</textarea>')
    })

    it('should render cleanly when autosize is false and value is omitted', async () => {
      const html = await renderTextareaAutosizeSsr({
        autosize: false
      })

      expect(html).toContain('<div aria-hidden="true" class="d1-textareaAutosize__clone"></div>')
      expect(html).toContain('<textarea class="d1-textareaAutosize"')
      expect(html).toContain('></textarea>')
      expect(html).not.toContain('d1-textareaAutosize--autosize')
    })

    it('should forward inputAttrs, fallthrough attributes, and style tokens in SSR markup', async () => {
      const html = await renderTextareaAutosizeSsr(
        {
          autosize: true,
          value: 'Notes',
          inputAttrs: {
            placeholder: 'Enter description',
            rows: 4,
            disabled: true
          }
        },
        { '--d1-textareaAutosize-minHeight': '80px' },
        { 'data-testid': 'ssr-textarea', 'aria-label': 'Description' }
      )

      expect(html).toContain('placeholder="Enter description"')
      expect(html).toContain('rows="4"')
      expect(html).toContain('disabled')
      expect(html).toContain('data-testid="ssr-textarea"')
      expect(html).toContain('aria-label="Description"')
      expect(html).toContain('--d1-textareaAutosize-minHeight:80px;')
      expect(html).toContain('>Notes</textarea>')
    })
  })

  describe('Security escaping and multilingual content in SSR', () => {
    it('should escape HTML/XSS payloads safely in server-rendered textarea content', async () => {
      const html = await renderTextareaAutosizeSsr({
        value: '</textarea><script>alert(1)</script>&"quoted"'
      })

      expect(html).not.toContain('<script>alert(1)</script>')
      expect(html).toContain('&lt;/textarea&gt;&lt;script&gt;alert(1)&lt;/script&gt;&amp;&quot;quoted&quot;')
    })

    it('should preserve Cyrillic, Vietnamese, CJK, and Emoji values during SSR', async () => {
      const content = 'Привет — Tiếng Việt Nguyễn — 你好 — 🚀'
      const html = await renderTextareaAutosizeSsr({ value: content })

      expect(html).toContain(`>${content}</textarea>`)
    })
  })

  describe('Determinism and cross-request isolation', () => {
    it('should produce identical HTML across repeated SSR requests with identical inputs', async () => {
      const htmlFirst = await renderTextareaAutosizeSsr({ autosize: true, value: 'Deterministic' })
      const htmlSecond = await renderTextareaAutosizeSsr({ autosize: true, value: 'Deterministic' })

      expect(htmlFirst).toBe(htmlSecond)
    })

    it('should isolate state completely between distinct SSR requests', async () => {
      const firstRequestHtml = await renderTextareaAutosizeSsr({ autosize: true, value: 'User A secret' })
      const secondRequestHtml = await renderTextareaAutosizeSsr({ autosize: false, value: 'User B public' })

      expect(firstRequestHtml).toContain('User A secret')
      expect(firstRequestHtml).not.toContain('User B public')
      expect(secondRequestHtml).toContain('User B public')
      expect(secondRequestHtml).not.toContain('User A secret')
    })
  })
})
