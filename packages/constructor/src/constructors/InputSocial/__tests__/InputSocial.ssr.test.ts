/** @vitest-environment node */
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputSocialDesign } from '../InputSocialDesign'
import type { InputSocialProps } from '../props'
import type { InputSocialClasses, InputSocialComponents, InputSocialExpose } from '../types'

const SsrField = defineComponent({
  props: {
    label: { type: [String, Number], default: undefined },
    prefix: { type: [String, Number], default: undefined }
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      {
        'class': 'd1-field',
        'data-label': props.label,
        'data-prefix': props.prefix
      },
      slots.default ? slots.default({ className: 'd1-field__input', binds: {} }) : undefined
    )
  }
})

const SsrMask = defineComponent({
  props: { value: { type: [String, Number], default: undefined } },
  setup(props) {
    return () => h('input', { class: 'd1-mask-input', value: props.value })
  }
})

describe('InputSocial (SSR)', () => {
  it('renders valid SSR HTML with social metadata and mask input', async () => {
    const SsrComponent = defineComponent({
      props: {
        socialType: { type: String, default: 'telegram' },
        value: { type: String, default: 'dxtmisha' }
      },
      setup(props, { expose }) {
        const design = new InputSocialDesign<
          InputSocialComponents,
          InputSocialExpose,
          InputSocialClasses,
          InputSocialProps
        >(
          'd1.inputSocial',
          props as Readonly<InputSocialProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputSocial': true }
            })),
            components: {
              field: SsrField as never,
              mask: SsrMask as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('data-label="Telegram"')
    expect(html).toContain('data-prefix="https://t.me/"')
    expect(html).toContain('value="dxtmisha"')
  })
})
