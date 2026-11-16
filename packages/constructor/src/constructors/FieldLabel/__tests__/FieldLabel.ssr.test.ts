// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { FieldLabelDesign } from '../FieldLabelDesign'
import { defaultsFieldLabel, type FieldLabelProps } from '../props'
import type {
  FieldLabelClasses,
  FieldLabelComponents,
  FieldLabelExpose
} from '../types'

const MockFieldCounter = defineComponent({
  name: 'MockFieldCounter',
  props: {
    id: String,
    counter: [String, Number],
    maxlength: [String, Number]
  },
  setup(componentProps) {
    return () => h('span', {
      id: componentProps.id,
      class: 'mock-field-counter'
    }, `${componentProps.counter ?? 0}/${componentProps.maxlength ?? ''}`)
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps) {
    return () => h('span', {
      'class': 'mock-progress',
      'data-visible': String(Boolean(componentProps.visible))
    })
  }
})

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders FieldLabelDesign in a server-side Node environment without browser globals.
 *
 * Рендерит FieldLabelDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderFieldLabelSsr(properties: FieldLabelProps = {}): Promise<string> {
  const props = reactive<FieldLabelProps>({
    ...(defaultsFieldLabel as FieldLabelProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-fieldLabel': true
        }
      }))

      const design = new FieldLabelDesign<
        FieldLabelComponents,
        FieldLabelExpose,
        FieldLabelClasses,
        FieldLabelProps
      >('d1.fieldLabel', props, {
        classes: classesToken,
        components: {
          fieldCounter: MockFieldCounter,
          progress: MockProgress
        }
      })

      return design.render()
    }
  })

  return renderToString(createSSRApp(Component))
}

describe('FieldLabel (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render empty fragment when no label, loading, or counter is active', async () => {
      const html = await renderFieldLabelSsr()

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toBe('<!---->')
    })

    it('should render label, required asterisk, skeleton class, progress, and counter in SSR', async () => {
      const html = await renderFieldLabelSsr({
        for: 'ssr-phone',
        label: 'Phone',
        labelId: 'ssr-label-id',
        required: true,
        isSkeleton: true,
        loading: true,
        counterShow: true,
        counter: 5,
        maxlength: 20,
        counterId: 'ssr-counter-id'
      })

      expect(html).toContain('<label')
      expect(html).toContain('for="ssr-phone"')
      expect(html).toContain('d1-fieldLabel')
      expect(html).toContain('d1-skeleton__textVariant')
      expect(html).toContain('id="ssr-label-id"')
      expect(html).toContain('Phone')
      expect(html).toContain('aria-hidden="true"')
      expect(html).toContain('*')
      expect(html).toContain('mock-progress')
      expect(html).toContain('data-visible="true"')
      expect(html).toContain('id="ssr-counter-id"')
      expect(html).toContain('5/20')
    })

    it('should isolate ServerStorage across separate SSR requests', async () => {
      const firstRequest: Record<string, unknown> = {}
      ServerStorage.init(() => firstRequest)
      const firstHtml = await renderFieldLabelSsr({ label: 'First', required: true })

      const secondRequest: Record<string, unknown> = {}
      ServerStorage.init(() => secondRequest)
      const secondHtml = await renderFieldLabelSsr({ label: 'Second', required: false })

      expect(firstHtml).toContain('First')
      expect(firstHtml).toContain('*')
      expect(secondHtml).toContain('Second')
      expect(secondHtml).not.toContain('First')
      expect(secondHtml).not.toContain('*')
    })
  })
})
