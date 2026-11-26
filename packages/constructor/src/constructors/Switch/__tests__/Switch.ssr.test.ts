// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { SwitchDesign } from '../SwitchDesign'
import { defaultsSwitch, type SwitchProps } from '../props'
import type {
  SwitchClasses,
  SwitchComponents,
  SwitchExpose,
  SwitchSlots
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
 * Renders SwitchDesign in a server-side Node environment without browser DOM globals.
 *
 * Рендерит SwitchDesign в серверном окружении Node без браузерных глобальных объектов DOM.
 * @param properties component properties / свойства компонента
 * @param slots optional slots / необязательные слоты
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderSwitchSsr(
  properties: SwitchProps = {},
  slots: SwitchSlots = {}
): Promise<string> {
  const props = reactive<SwitchProps>({
    ...(defaultsSwitch as SwitchProps),
    iconCheckbox: 'check',
    iconIndeterminate: 'remove',
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-switch': true,
          'd1-switch--disabled': Boolean(props.disabled)
        }
      }))

      const design = new SwitchDesign<
        SwitchComponents,
        SwitchExpose,
        SwitchClasses,
        SwitchProps
      >(
        'd1.switch',
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

describe('Switch (SSR)', () => {
  it('should render switch safely in Node without DOM globals including track wrapper', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderSwitchSsr({
      name: 'notifications',
      label: 'Push Notifications',
      labelId: 'ssr-switch-lbl',
      description: 'Instant alerts for important updates',
      descriptionId: 'ssr-switch-desc',
      modelValue: true
    })

    expect(html).toContain('<label')
    expect(html).toContain('aria-labelledby="ssr-switch-lbl"')
    expect(html).toContain('aria-describedby="ssr-switch-desc"')
    expect(html).toContain('type="hidden"')
    expect(html).toContain('name="notifications"')
    expect(html).toContain('type="checkbox"')
    expect(html).toContain('checked')
    expect(html).toContain('d1-switch__track')
    expect(html).toContain('d1-switch__item')
    expect(html).toContain('d1-switch__icon')
    expect(html).toContain('d1-skeleton__background')
    expect(html).toContain('data-icon="check"')
    expect(html).toContain('Push Notifications')
    expect(html).toContain('Instant alerts for important updates')
  })

  it('should synchronize selected and valueVariant during SSR initial render', async () => {
    const checkedHtml = await renderSwitchSsr({
      label: 'Mode A',
      selected: 'a',
      valueVariant: 'a'
    })
    expect(checkedHtml).toContain('checked')
    expect(checkedHtml).toContain('data-icon="check"')

    const uncheckedHtml = await renderSwitchSsr({
      label: 'Mode B',
      selected: 'a',
      valueVariant: 'b'
    })
    expect(uncheckedHtml).not.toContain('checked=""')
    expect(uncheckedHtml).toMatch(/data-icon(?!=)/)
  })

  it('should render indeterminate, loading, skeleton, readonly, slots, and validation states cleanly on server', async () => {
    const html = await renderSwitchSsr(
      {
        indeterminate: true,
        readonly: true,
        validationMessage: 'Toggle required',
        isSkeleton: true
      },
      {
        default: () => h('strong', 'Slot Switch'),
        description: () => h('em', 'Slot Details')
      }
    )

    expect(html).toContain('aria-readonly="true"')
    expect(html).toContain('aria-invalid="true"')
    expect(html).toContain('Toggle required')
    expect(html).toContain('d1-skeleton__text')
    expect(html).toContain('d1-switch__track d1-skeleton__background')
    expect(html).toContain('<strong>Slot Switch</strong>')
    expect(html).toContain('<em>Slot Details</em>')

    const loadingHtml = await renderSwitchSsr({
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
    const htmlA = await renderSwitchSsr({ label: 'Request A', modelValue: true })

    ServerStorage.reset()
    const requestB: Record<string, unknown> = {}
    ServerStorage.init(() => requestB)
    const htmlB = await renderSwitchSsr({ label: 'Request B', modelValue: false })

    expect(htmlA).toContain('Request A')
    expect(htmlA).toContain('checked')
    expect(htmlB).toContain('Request B')
    expect(htmlB).not.toContain('Request A')
  })
})
