// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { FieldDesign } from '../FieldDesign'
import { defaultsField, type FieldProps } from '../props'
import type {
  FieldClasses,
  FieldComponents,
  FieldExpose,
  FieldSlots
} from '../types'

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    ariaLabel: String
  },
  setup(componentProps, { attrs }) {
    return () => h('span', {
      'class': 'mock-icon',
      ...attrs,
      'aria-label': componentProps.ariaLabel
    }, String(componentProps.icon ?? ''))
  }
})

const MockFieldLabel = defineComponent({
  name: 'MockFieldLabel',
  props: {
    label: [String, Number],
    for: String
  },
  setup(componentProps) {
    return () => h('label', {
      class: 'mock-field-label',
      for: componentProps.for
    }, String(componentProps.label ?? ''))
  }
})

const MockFieldMessage = defineComponent({
  name: 'MockFieldMessage',
  props: {
    helperMessage: String,
    helperId: String,
    warningMessage: String,
    warningId: String,
    validationMessage: String,
    validationId: String
  },
  setup(componentProps) {
    return () => {
      if (!componentProps.helperMessage && !componentProps.warningMessage && !componentProps.validationMessage) {
        return null
      }

      const id = componentProps.validationMessage
        ? componentProps.validationId
        : componentProps.warningMessage
          ? componentProps.warningId
          : componentProps.helperId

      return h('div', {
        class: 'mock-field-message',
        id
      }, componentProps.validationMessage || componentProps.warningMessage || componentProps.helperMessage)
    }
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps) {
    return () => componentProps.visible
      ? h('span', { class: 'mock-progress' }, 'loading')
      : null
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
 * Renders FieldDesign in a server-side Node environment without browser globals.
 *
 * Рендерит FieldDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @param slots slot implementations / реализации слотов
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderFieldSsr(
  properties: FieldProps = {},
  slots: FieldSlots = {}
): Promise<string> {
  const props = reactive<FieldProps>({
    ...(defaultsField as FieldProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-field': true,
          'd1-field--classic': props.classic && !props.outlined,
          'd1-field--outlined': props.outlined
        }
      }))

      const design = new FieldDesign<
        FieldComponents,
        FieldExpose,
        FieldClasses,
        FieldProps
      >('d1.field', props, {
        classes: classesToken,
        components: {
          icon: MockIcon,
          fieldLabel: MockFieldLabel,
          fieldMessage: MockFieldMessage,
          progress: MockProgress
        }
      })

      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(Component, {}, slots as Record<string, () => unknown>)
    }
  })

  return renderToString(createSSRApp(Wrapper))
}

describe('Field (SSR)', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should render classic field structure cleanly without browser globals', async () => {
      const html = await renderFieldSsr(
        {
          classic: true,
          id: 'ssr-phone',
          label: 'Phone',
          required: true,
          prefix: '+84',
          prefixId: 'ssr-prefix',
          helperMessage: 'Enter phone number',
          helperId: 'ssr-helper',
          validationMessage: 'Invalid format',
          validationId: 'ssr-error',
          isSkeleton: true
        },
        {
          default: control => h('input', { ...control.binds, type: 'tel' })
        }
      )

      expect(typeof window).toBe('undefined')
      expect(typeof document).toBe('undefined')
      expect(html).toContain('d1-field')
      expect(html).toContain('d1-field--classic')
      expect(html).toContain('d1-field--validation')
      expect(html).toContain('class="mock-field-label d1-field__fieldLabel" for="ssr-phone"')
      expect(html).toContain('>Phone</label>')
      expect(html).toContain('id="ssr-phone"')
      expect(html).toContain('aria-invalid="true"')
      expect(html).toContain('aria-describedby="ssr-prefix ssr-helper ssr-error"')
      expect(html).toContain('d1-skeleton__background')
      expect(html).toContain('+84')
      expect(html).toContain('Invalid format')
    })

    it('should render outlined label field with caption and suffix in SSR', async () => {
      const html = await renderFieldSsr(
        {
          classic: false,
          outlined: true,
          id: 'ssr-weight',
          label: 'Weight',
          suffix: 'kg',
          caption: 'Net',
          value: '10'
        },
        {
          default: control => h('input', { ...control.binds, type: 'text' })
        }
      )

      expect(html).toContain('<label')
      expect(html).toContain('d1-field--outlined')
      expect(html).toContain('d1-field--suffix')
      expect(html).toContain('for="ssr-weight"')
      expect(html).toContain('d1-field__body__scoreboard__input')
      expect(html).toContain('>10<')
      expect(html).toContain('Net')
      expect(html).toContain('kg')
    })

    it('should render warning state and warning message in SSR without aria-invalid', async () => {
      const html = await renderFieldSsr(
        {
          classic: true,
          id: 'ssr-warning-field',
          label: 'Code',
          warning: true,
          warningMessage: 'Double-check your code',
          warningId: 'ssr-warning'
        },
        {
          default: control => h('input', { ...control.binds, type: 'text' })
        }
      )

      expect(html).toContain('d1-field--warning')
      expect(html).not.toContain('d1-field--validation')
      expect(html).not.toContain('aria-invalid="true"')
      expect(html).toContain('aria-describedby="ssr-warning"')
      expect(html).toContain('id="ssr-warning"')
      expect(html).toContain('Double-check your code')
    })

    it('should isolate ServerStorage across concurrent SSR requests', async () => {
      const firstRequest: Record<string, unknown> = {}
      ServerStorage.init(() => firstRequest)
      const firstHtml = await renderFieldSsr({
        classic: true,
        id: 'req-one',
        label: 'First Label',
        validationMessage: 'First Error'
      })

      const secondRequest: Record<string, unknown> = {}
      ServerStorage.init(() => secondRequest)
      const secondHtml = await renderFieldSsr({
        classic: true,
        id: 'req-two',
        label: 'Second Label'
      })

      expect(firstHtml).toContain('First Label')
      expect(firstHtml).toContain('First Error')
      expect(secondHtml).toContain('Second Label')
      expect(secondHtml).not.toContain('First Label')
      expect(secondHtml).not.toContain('d1-field--validation')
    })
  })
})
