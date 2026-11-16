// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { RadioDesign } from '../RadioDesign'
import { defaultsRadio, type RadioProps } from '../props'
import type {
  RadioClasses,
  RadioComponents,
  RadioExpose,
  RadioSlots
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
 * Renders RadioDesign in a server-side Node environment without browser DOM globals.
 *
 * Рендерит RadioDesign в серверном окружении Node без браузерных глобальных объектов DOM.
 * @param properties component properties / свойства компонента
 * @param slots optional slots / необязательные слоты
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderRadioSsr(
  properties: RadioProps = {},
  slots: RadioSlots = {}
): Promise<string> {
  const props = reactive<RadioProps>({
    ...(defaultsRadio as RadioProps),
    iconCheckbox: 'radio_button_unchecked',
    iconIndeterminate: 'remove',
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-radio': true,
          'd1-radio--disabled': Boolean(props.disabled)
        }
      }))

      const design = new RadioDesign<
        RadioComponents,
        RadioExpose,
        RadioClasses,
        RadioProps
      >(
        'd1.radio',
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

describe('Radio (SSR)', () => {
  it('should render radio safely in Node without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderRadioSsr({
      name: 'plan',
      label: 'Space Exploration',
      labelId: 'ssr-radio-lbl',
      description: 'Journey to the galaxy',
      descriptionId: 'ssr-radio-desc',
      modelValue: true
    })

    expect(html).toContain('<label')
    expect(html).toContain('aria-labelledby="ssr-radio-lbl"')
    expect(html).toContain('aria-describedby="ssr-radio-desc"')
    expect(html).toContain('type="hidden"')
    expect(html).toContain('name="plan"')
    expect(html).toContain('type="radio"')
    expect(html).toContain('checked')
    expect(html).toContain('data-icon="radio_button_unchecked"')
    expect(html).toContain('Space Exploration')
    expect(html).toContain('Journey to the galaxy')
  })

  it('should synchronize selected and valueVariant during SSR initial render', async () => {
    const checkedHtml = await renderRadioSsr({
      label: 'Choice A',
      selected: 'a',
      valueVariant: 'a'
    })
    expect(checkedHtml).toContain('checked')
    expect(checkedHtml).toContain('data-icon="radio_button_unchecked"')

    const uncheckedHtml = await renderRadioSsr({
      label: 'Choice B',
      selected: 'a',
      valueVariant: 'b'
    })
    expect(uncheckedHtml).not.toContain('checked=""')
    expect(uncheckedHtml).toMatch(/data-icon(?!=)/)
  })

  it('should render indeterminate, loading, skeleton, and validation states cleanly on server', async () => {
    const html = await renderRadioSsr({
      label: 'Sync',
      indeterminate: true,
      validationMessage: 'Selection required',
      isSkeleton: true
    })

    expect(html).toContain('aria-invalid="true"')
    expect(html).toContain('Selection required')
    expect(html).toContain('d1-skeleton__text')

    const loadingHtml = await renderRadioSsr({
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
    const htmlA = await renderRadioSsr({ label: 'Request A', modelValue: true })

    ServerStorage.reset()
    const requestB: Record<string, unknown> = {}
    ServerStorage.init(() => requestB)
    const htmlB = await renderRadioSsr({ label: 'Request B', modelValue: false })

    expect(htmlA).toContain('Request A')
    expect(htmlA).toContain('checked')
    expect(htmlB).toContain('Request B')
    expect(htmlB).not.toContain('Request A')
  })
})
