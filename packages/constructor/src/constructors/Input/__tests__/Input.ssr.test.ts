// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { InputDesign } from '../InputDesign'
import { defaultsInput, type InputProps } from '../props'
import type {
  InputClasses,
  InputComponents,
  InputExpose
} from '../types'

const MockField = defineComponent({
  name: 'MockField',
  inheritAttrs: false,
  props: {
    label: String,
    validationMessage: String,
    iconTrailing: [String, Object]
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'div',
      {
        'class': ['mock-field', attrs.class],
        'data-validation': componentProps.validationMessage ?? '',
        'data-label': componentProps.label ?? ''
      },
      slots.default?.({
        id: 'ssr-input-1',
        className: 'd1-field__body__input',
        classHidden: 'd1-field__body__hidden',
        classForFocus: 'd1-field__body__focus',
        binds: {
          'id': 'ssr-input-1',
          'class': 'd1-field__body__input',
          'data-input': 'ssr-input-1'
        }
      })
    )
  }
})

const MockMask = defineComponent({
  name: 'MockMask',
  props: {
    value: [String, Number],
    inputAttrs: Object
  },
  setup(componentProps) {
    return () => h('span', { class: 'mock-mask' }, [
      h('input', {
        value: componentProps.value ?? '',
        ...(componentProps.inputAttrs as Record<string, unknown>)
      })
    ])
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
 * Renders InputDesign in a server-side Node environment without browser globals.
 *
 * Рендерит InputDesign в серверном окружении Node без браузерных глобальных объектов.
 * @param properties component properties / свойства компонента
 * @returns server-rendered HTML string / отрендеренная на сервере HTML-строка
 */
async function renderInputSsr(
  properties: InputProps = {}
): Promise<string> {
  const props = reactive<InputProps>({
    ...(defaultsInput as InputProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-input': true
        }
      }))

      const design = new InputDesign<
        InputComponents,
        InputExpose,
        InputClasses,
        InputProps
      >(
        'd1.input',
        props,
        {
          classes: classesToken,
          components: {
            field: MockField,
            mask: MockMask
          }
        }
      )

      return design.render()
    }
  })

  const app = createSSRApp(Component)
  return renderToString(app)
}

describe('Input (SSR)', () => {
  it('should render basic text input safely in Node without DOM globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderInputSsr({
      label: 'Username',
      placeholder: 'Enter username',
      modelValue: 'alice'
    })

    expect(html).toContain('class="mock-field d1-input d1-input__field"')
    expect(html).toContain('data-label="Username"')
    expect(html).toContain('<input')
    expect(html).toContain('id="ssr-input-1"')
    expect(html).toContain('value="alice"')
    expect(html).toContain('placeholder="Enter username"')
  })

  it('should render numeric 0 and validationMessage deterministically during SSR', async () => {
    const html = await renderInputSsr({
      type: 'number',
      modelValue: 0,
      validationMessage: 'Invalid quantity'
    })

    expect(html).toContain('type="number"')
    expect(html).toContain('value="0"')
    expect(html).toContain('data-validation="Invalid quantity"')
  })

  it('should render password input and mask input without browser API leaks', async () => {
    const passwordHtml = await renderInputSsr({
      type: 'password',
      iconVisibility: 'eye',
      iconVisibilityOff: 'eye-off',
      modelValue: 'secret'
    })
    expect(passwordHtml).toContain('type="password"')
    expect(passwordHtml).toContain('autocomplete="off"')

    const maskHtml = await renderInputSsr({
      mask: '###-###',
      modelValue: '123456'
    })
    expect(maskHtml).toContain('class="mock-mask ')
    expect(maskHtml).toContain('value="123456"')
  })

  it('should isolate ServerStorage across separate SSR requests', async () => {
    ServerStorage.reset()
    const requestA: Record<string, unknown> = {}
    ServerStorage.init(() => requestA)
    const htmlA = await renderInputSsr({ modelValue: 'req-a' })

    ServerStorage.reset()
    const requestB: Record<string, unknown> = {}
    ServerStorage.init(() => requestB)
    const htmlB = await renderInputSsr({ modelValue: 'req-b' })

    expect(htmlA).toContain('value="req-a"')
    expect(htmlA).not.toContain('value="req-b"')
    expect(htmlB).toContain('value="req-b"')
    expect(htmlB).not.toContain('value="req-a"')
  })
})
