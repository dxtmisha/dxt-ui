// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { FieldCounterDesign } from '../FieldCounterDesign'
import { defaultsFieldCounter, type FieldCounterProps } from '../props'
import type {
  FieldCounterClasses,
  FieldCounterComponents,
  FieldCounterExpose
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders the FieldCounterDesign component in a server-side Node environment without browser globals.
 *
 * Рендерит компонент FieldCounterDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderFieldCounterSsr(properties: FieldCounterProps = {}): Promise<string> {
  const props = reactive<FieldCounterProps>({
    ...(defaultsFieldCounter as FieldCounterProps),
    ...properties
  })

  const FieldCounterComponent = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-fieldCounter': true
        }
      }))

      const design = new FieldCounterDesign<
        FieldCounterComponents,
        FieldCounterExpose,
        FieldCounterClasses,
        FieldCounterProps
      >('d1.fieldCounter', props, {
        classes: classesToken
      })

      return design.render()
    }
  })

  return renderToString(createSSRApp(FieldCounterComponent))
}

describe('FieldCounter (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render empty fragment when neither counter nor positive maxlength is provided', async () => {
      const html = await renderFieldCounterSsr()

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toBe('<!---->')
    })

    it('should render counter-only value in SSR', async () => {
      const html = await renderFieldCounterSsr({
        id: 'ssr-counter',
        counter: 12
      })

      expect(html).toContain('<span')
      expect(html).toContain('id="ssr-counter"')
      expect(html).toContain('d1-fieldCounter')
      expect(html).toContain('12')
      expect(html).not.toContain('aria-live')
    })

    it('should render counter with maxlength and aria live region in SSR when near limit', async () => {
      const html = await renderFieldCounterSsr({
        counter: 95,
        maxlength: 100
      })

      expect(html).toContain('95 / 100')
      expect(html).toContain('d1-fieldCounter__aria')
      expect(html).toContain('aria-live="polite"')
      expect(html).toContain('role="img"')
      expect(html).toContain('aria-label="Remaining 5 characters"')
    })

    it('should render template output and limit message in SSR', async () => {
      const html = await renderFieldCounterSsr({
        counter: 100,
        maxlength: 100,
        template: '[c] of [m]'
      })

      expect(html).toContain('100 of 100')
      expect(html).toContain('aria-label="Character limit exceeded"')
    })

    it('should isolate ServerStorage across separate SSR requests', async () => {
      const firstRequest: Record<string, unknown> = {}
      ServerStorage.init(() => firstRequest)
      const firstHtml = await renderFieldCounterSsr({ counter: 0, maxlength: 10 })

      const secondRequest: Record<string, unknown> = {}
      ServerStorage.init(() => secondRequest)
      const secondHtml = await renderFieldCounterSsr({ counter: 10, maxlength: 10 })

      expect(firstHtml).toContain('0 / 10')
      expect(firstHtml).not.toContain('aria-live')
      expect(secondHtml).toContain('10 / 10')
      expect(secondHtml).toContain('aria-label="Character limit exceeded"')
    })
  })
})
