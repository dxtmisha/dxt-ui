// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, reactive } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { InputPhoneDesign } from '../InputPhoneDesign'
import { defaultsInputPhone, type InputPhoneProps } from '../props'
import type {
  InputPhoneClasses,
  InputPhoneComponents,
  InputPhoneExpose
} from '../types'

const MockField = defineComponent({
  name: 'MockField',
  inheritAttrs: false,
  props: {
    label: String,
    validationMessage: String,
    disabled: Boolean,
    readonly: Boolean
  },
  setup(componentProps, { attrs, slots }) {
    const control = {
      id: 'ssr-phone-1',
      className: 'd1-field__body__input',
      classHidden: 'd1-field__body__hidden',
      classForFocus: 'd1-field__body__focus',
      binds: {
        'id': 'ssr-phone-1',
        'class': 'd1-field__body__input',
        'disabled': componentProps.disabled,
        'readonly': componentProps.readonly,
        'data-input': 'ssr-phone-1'
      }
    }

    return () => h(
      'div',
      {
        'class': ['mock-field', attrs.class],
        'data-label': componentProps.label ?? '',
        'data-validation': componentProps.validationMessage ?? ''
      },
      [
        ...(slots.leading?.(control) ?? []),
        ...(slots.default?.(control) ?? []),
        ...(slots.trailing?.(control) ?? [])
      ]
    )
  }
})

const MockDialCode = defineComponent({
  name: 'MockDialCode',
  props: {
    value: String,
    disabled: Boolean
  },
  setup(componentProps) {
    return () => h('span', {
      'class': 'mock-dial-code',
      'data-country': componentProps.value ?? ''
    }, componentProps.value ?? '')
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
 * Renders InputPhoneDesign in a server-side Node environment without browser globals.
 *
 * Рендерит InputPhoneDesign в серверном окружении Node без браузерных глобальных объектов.
 */
async function renderInputPhoneSsr(
  properties: InputPhoneProps = {}
): Promise<string> {
  const props = reactive<InputPhoneProps>({
    ...(defaultsInputPhone as InputPhoneProps),
    ...properties
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-inputPhone': true
        }
      }))

      const design = new InputPhoneDesign<
        InputPhoneComponents,
        InputPhoneExpose,
        InputPhoneClasses,
        InputPhoneProps
      >(
        'd1.inputPhone',
        props,
        {
          classes: classesToken,
          components: {
            field: MockField,
            inputPhoneDialCode: MockDialCode,
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

describe('InputPhone (SSR)', () => {
  it('should render safely in Node without DOM globals and match dialCode to value', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderInputPhoneSsr({
      label: 'Phone',
      countryDefault: 'US',
      modelValue: '79001234567'
    })

    expect(html).toContain('class="mock-field d1-inputPhone d1-inputPhone__field"')
    expect(html).toContain('data-label="Phone"')
    expect(html).toContain('data-country="RU"')
    expect(html).toContain('class="mock-mask ')
    expect(html).toContain('id="ssr-phone-1"')
    expect(html).toContain('inputmode="tel"')
    expect(html).toContain('value="79001234567"')
  })

  it('should omit dialCode on SSR when countryBlock is true and render disabled input cleanly', async () => {
    const lockedHtml = await renderInputPhoneSsr({
      countryDefault: 'DE',
      countryBlock: true,
      value: '30123456'
    })

    expect(lockedHtml).not.toContain('mock-dial-code')
    expect(lockedHtml).toContain('value="30123456"')

    const disabledHtml = await renderInputPhoneSsr({
      countryDefault: 'US',
      disabled: true,
      value: '15550001122',
      validationMessage: 'Disabled error'
    })

    expect(disabledHtml).not.toContain('mock-mask')
    expect(disabledHtml).toContain('disabled')
    expect(disabledHtml).toContain('data-validation="Disabled error"')
    expect(disabledHtml).toContain('value="15550001122"')
  })

  it('should isolate ServerStorage across separate SSR requests', async () => {
    ServerStorage.reset()
    const requestA: Record<string, unknown> = {}
    ServerStorage.init(() => requestA)
    const htmlA = await renderInputPhoneSsr({ modelValue: '79001111111' })

    ServerStorage.reset()
    const requestB: Record<string, unknown> = {}
    ServerStorage.init(() => requestB)
    const htmlB = await renderInputPhoneSsr({ modelValue: '49302222222' })

    expect(htmlA).toContain('value="79001111111"')
    expect(htmlA).toContain('data-country="RU"')
    expect(htmlA).not.toContain('value="49302222222"')

    expect(htmlB).toContain('value="49302222222"')
    expect(htmlB).toContain('data-country="DE"')
    expect(htmlB).not.toContain('value="79001111111"')
  })
})
