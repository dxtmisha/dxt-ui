/** @vitest-environment node */
import { describe, it, expect } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputCodeDesign } from '../InputCodeDesign'
import type { InputCodeProps } from '../props'
import type { InputCodeClasses, InputCodeComponents, InputCodeExpose } from '../types'
import { InputCodeItemDesign } from '../../InputCodeItem/InputCodeItemDesign'
import type { InputCodeItemProps } from '../../InputCodeItem/props'
import type {
  InputCodeItemClasses,
  InputCodeItemComponents,
  InputCodeItemExpose
} from '../../InputCodeItem/types'

const SsrInputCodeItem = defineComponent({
  props: {
    disabled: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    hide: { type: Boolean, default: false },
    isSkeleton: { type: Boolean, default: false },
    index: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: '' },
    tabindex: { type: [Number, String], default: undefined }
  },
  setup(props, { expose }) {
    const design = new InputCodeItemDesign<
      InputCodeItemComponents,
      InputCodeItemExpose,
      InputCodeItemClasses,
      InputCodeItemProps
    >(
      'd1.inputCodeItem',
      props as Readonly<InputCodeItemProps>,
      {
        classes: computed(() => ({
          main: { 'd1-inputCodeItem': true }
        }))
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const SsrFieldLabel = defineComponent({
  props: { label: { type: String, default: undefined } },
  setup(props) {
    return () => h('label', { class: 'd1-fieldLabel' }, props.label)
  }
})

const SsrFieldMessage = defineComponent({
  props: {
    helperMessage: { type: String, default: undefined },
    validationMessage: { type: String, default: undefined },
    helperId: { type: String, default: undefined },
    validationId: { type: String, default: undefined }
  },
  setup(props) {
    return () => h(
      'div',
      {
        class: 'd1-fieldMessage',
        id: props.validationId || props.helperId
      },
      props.validationMessage || props.helperMessage
    )
  }
})

describe('InputCode (SSR)', () => {
  it('should render valid SSR HTML with group role, length, label, and message without browser globals', async () => {
    const SsrComponent = defineComponent({
      props: {
        length: { type: Number, default: 6 },
        label: { type: String, default: 'OTP Code' },
        validationMessage: { type: String, default: 'Invalid OTP' },
        disabled: { type: Boolean, default: true },
        forceShowMessage: { type: Boolean, default: true },
        isSkeleton: { type: Boolean, default: true }
      },
      setup(props, { expose }) {
        const design = new InputCodeDesign<
          InputCodeComponents,
          InputCodeExpose,
          InputCodeClasses,
          InputCodeProps
        >(
          'd1.inputCode',
          props as Readonly<InputCodeProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputCode': true },
              context: 'd1-inputCode__context'
            })),
            components: {
              inputCodeItem: SsrInputCodeItem as never,
              fieldLabel: SsrFieldLabel as never,
              fieldMessage: SsrFieldMessage as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-inputCode')
    expect(html).toContain('role="group"')
    expect(html).toContain('aria-describedby="')
    expect(html).toContain('OTP Code')
    expect(html).toContain('Invalid OTP')
    expect(html).toContain('d1-skeleton__background')
    expect(html).toContain('aria-disabled="true"')
    expect(html.match(/class="d1-inputCodeItem/g)?.length).toBe(6)
  })
})
