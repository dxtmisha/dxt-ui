// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { FieldMessageDesign } from '../FieldMessageDesign'
import { defaultsFieldMessage, type FieldMessageProps } from '../props'
import type {
  FieldMessageClasses,
  FieldMessageComponents,
  FieldMessageExpose
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

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

/**
 * Renders FieldMessageDesign in a server-side Node environment without browser globals.
 *
 * Рендерит FieldMessageDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderFieldMessageSsr(properties: FieldMessageProps = {}): Promise<string> {
  const props = reactive<FieldMessageProps>({
    ...(defaultsFieldMessage as FieldMessageProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-fieldMessage': true
        }
      }))

      const design = new FieldMessageDesign<
        FieldMessageComponents,
        FieldMessageExpose,
        FieldMessageClasses,
        FieldMessageProps
      >('d1.fieldMessage', props, {
        classes: classesToken,
        components: {
          fieldCounter: MockFieldCounter
        }
      })

      return design.render()
    }
  })

  return renderToString(createSSRApp(Component))
}

describe('FieldMessage (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render empty fragment when no helper, validation, or counter is active', async () => {
      const html = await renderFieldMessageSsr()

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toBe('<!---->')
    })

    it('should render helper, warning, validation, skeleton class, role alert, and counter in SSR', async () => {
      const html = await renderFieldMessageSsr({
        helperMessage: 'Helper text',
        helperId: 'ssr-helper-id',
        warningMessage: 'Warning text',
        warningId: 'ssr-warning-id',
        validationMessage: 'Validation text',
        validationId: 'ssr-validation-id',
        isSkeleton: true,
        counterShow: true,
        counter: 3,
        maxlength: 15,
        counterId: 'ssr-counter-id'
      })

      expect(html).toContain('d1-fieldMessage')
      expect(html).toContain('d1-fieldMessage--warning')
      expect(html).toContain('d1-fieldMessage--validation')
      expect(html).toContain('d1-skeleton__textVariant')
      expect(html).toContain('id="ssr-helper-id"')
      expect(html).toContain('Helper text')
      expect(html).toContain('id="ssr-warning-id"')
      expect(html).toContain('d1-fieldMessage__warning')
      expect(html).toContain('Warning text')
      expect(html).toContain('id="ssr-validation-id"')
      expect(html).toContain('role="alert"')
      expect(html).toContain('Validation text')
      expect(html).toContain('id="ssr-counter-id"')
      expect(html).toContain('3/15')
    })

    it('should suppress output when disabled without forceShow in SSR', async () => {
      const html = await renderFieldMessageSsr({
        disabled: true,
        helperMessage: 'Hidden helper',
        validationMessage: 'Hidden error'
      })

      expect(html).toBe('<!---->')
    })

    it('should isolate ServerStorage across separate SSR requests', async () => {
      const firstRequest: Record<string, unknown> = {}
      ServerStorage.init(() => firstRequest)
      const firstHtml = await renderFieldMessageSsr({
        helperMessage: 'First helper',
        validationMessage: 'First error'
      })

      const secondRequest: Record<string, unknown> = {}
      ServerStorage.init(() => secondRequest)
      const secondHtml = await renderFieldMessageSsr({
        helperMessage: 'Second helper'
      })

      expect(firstHtml).toContain('First helper')
      expect(firstHtml).toContain('First error')
      expect(secondHtml).toContain('Second helper')
      expect(secondHtml).not.toContain('First helper')
      expect(secondHtml).not.toContain('d1-fieldMessage--validation')
    })
  })
})
