/** @vitest-environment node */
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputSearchDesign } from '../InputSearchDesign'
import type { InputSearchProps } from '../props'
import type { InputSearchClasses, InputSearchComponents, InputSearchExpose } from '../types'

const SsrField = defineComponent({
  props: {
    value: { type: String, default: undefined },
    placeholder: { type: String, default: undefined }
  },
  setup(_props, { slots }) {
    return () => h(
      'div',
      { class: 'd1-field' },
      slots.default ? slots.default({ className: 'd1-field__input', binds: { 'data-input': true } }) : undefined
    )
  }
})

describe('InputSearch (SSR)', () => {
  it('renders valid SSR HTML with search attributes and initial value', async () => {
    const SsrComponent = defineComponent({
      props: {
        value: { type: String, default: 'typescript' },
        type: { type: String, default: 'search' },
        enterKeyHint: { type: String, default: 'search' },
        inputMode: { type: String, default: 'search' }
      },
      setup(props, { expose }) {
        const design = new InputSearchDesign<
          InputSearchComponents,
          InputSearchExpose,
          InputSearchClasses,
          InputSearchProps
        >(
          'd1.inputSearch',
          props as Readonly<InputSearchProps>,
          {
            classes: computed(() => ({
              main: { 'd1-inputSearch': true }
            })),
            components: {
              field: SsrField as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-field')
    expect(html).toContain('type="search"')
    expect(html).toContain('value="typescript"')
    expect(html).toContain('inputmode="search"')
  })
})
