// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { CheckboxDesign } from '../CheckboxDesign'
import { defaultsCheckbox, type CheckboxProps } from '../props'
import type {
  CheckboxClasses,
  CheckboxComponents,
  CheckboxExpose,
  CheckboxSlots
} from '../types'

const MockImage = defineComponent({
  name: 'MockImage',
  props: {
    value: [String, Object]
  },
  setup(componentProps) {
    return () => h('span', {
      'class': 'ssr-mock-image',
      'data-icon': typeof componentProps.value === 'string' ? componentProps.value : ''
    })
  }
})

const MockFieldMessage = defineComponent({
  name: 'MockFieldMessage',
  props: {
    helperMessage: String,
    validationMessage: String
  },
  setup(componentProps) {
    return () => {
      if (!componentProps.helperMessage && !componentProps.validationMessage) {
        return null
      }

      return h('div', { class: 'ssr-mock-message' }, componentProps.validationMessage || componentProps.helperMessage)
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
      ? h('span', { class: 'ssr-mock-progress' })
      : null
  }
})

const MockRipple = defineComponent({
  name: 'MockRipple',
  setup() {
    return () => h('span', { class: 'ssr-mock-ripple' })
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
 * Renders CheckboxDesign in a server-side Node environment without browser DOM globals.
 *
 * Рендерит CheckboxDesign в серверном окружении Node без браузерных глобальных объектов DOM.
 * @param properties component properties / свойства компонента
 * @param slots optional slots / необязательные слоты
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderCheckboxSsr(
  properties: CheckboxProps = {},
  slots: CheckboxSlots = {}
): Promise<string> {
  const props = reactive<CheckboxProps>({
    ...(defaultsCheckbox as CheckboxProps),
    iconCheckbox: 'check',
    iconIndeterminate: 'remove',
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-checkbox': true,
          'd1-checkbox--disabled': Boolean(props.disabled)
        }
      }))

      const design = new CheckboxDesign<
        CheckboxComponents,
        CheckboxExpose,
        CheckboxClasses,
        CheckboxProps
      >(
        'd1.checkbox',
        props,
        {
          classes: classesToken,
          components: {
            image: MockImage,
            fieldMessage: MockFieldMessage,
            progress: MockProgress,
            ripple: MockRipple
          }
        }
      )

      return design.render()
    }
  })

  const app = createSSRApp({
    render: () => h(Component, null, slots as Record<string, () => unknown>)
  })
  return renderToString(app)
}

describe('Checkbox (SSR)', () => {
  it('should render checkbox safely in Node without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderCheckboxSsr({
      name: 'terms',
      label: 'Accept Terms',
      labelId: 'ssr-lbl',
      description: 'Read carefully',
      descriptionId: 'ssr-desc',
      modelValue: true
    })

    expect(html).toContain('<label')
    expect(html).toContain('aria-labelledby="ssr-lbl"')
    expect(html).toContain('aria-describedby="ssr-desc"')
    expect(html).toContain('type="hidden"')
    expect(html).toContain('name="terms"')
    expect(html).toContain('type="checkbox"')
    expect(html).toContain('checked')
    expect(html).toContain('data-icon="check"')
    expect(html).toContain('Accept Terms')
    expect(html).toContain('Read carefully')
  })

  it('should synchronize selected and valueVariant during SSR initial render', async () => {
    const checkedHtml = await renderCheckboxSsr({
      label: 'Choice A',
      selected: 'a',
      valueVariant: 'a'
    })
    expect(checkedHtml).toContain('checked')
    expect(checkedHtml).toContain('data-icon="check"')

    const uncheckedHtml = await renderCheckboxSsr({
      label: 'Choice B',
      selected: 'a',
      valueVariant: 'b'
    })
    expect(uncheckedHtml).not.toContain('checked=""')
    expect(uncheckedHtml).toMatch(/data-icon(?!=)/)
  })

  it('should render indeterminate, loading, skeleton, and validation states cleanly on server', async () => {
    const html = await renderCheckboxSsr({
      label: 'Sync',
      indeterminate: true,
      validationMessage: 'Required field',
      isSkeleton: true
    })

    expect(html).toContain('aria-invalid="true"')
    expect(html).toContain('Required field')
    expect(html).toContain('d1-skeleton__text')

    const loadingHtml = await renderCheckboxSsr({
      label: 'Loading',
      modelValue: true,
      loading: true
    })

    expect(loadingHtml).toContain('ssr-mock-progress')
    expect(loadingHtml).toMatch(/data-icon(?!=)/)
    expect(loadingHtml).not.toContain('ssr-mock-ripple')
  })

  it('should isolate ServerStorage across separate SSR requests', async () => {
    ServerStorage.reset()
    const requestA: Record<string, unknown> = {}
    ServerStorage.init(() => requestA)
    const htmlA = await renderCheckboxSsr({ label: 'Request A', modelValue: true })

    ServerStorage.reset()
    const requestB: Record<string, unknown> = {}
    ServerStorage.init(() => requestB)
    const htmlB = await renderCheckboxSsr({ label: 'Request B', modelValue: false })

    expect(htmlA).toContain('Request A')
    expect(htmlA).toContain('checked')
    expect(htmlB).toContain('Request B')
    expect(htmlB).not.toContain('Request A')
  })
})
