/** @vitest-environment node */
import { describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { SelectValueDesign } from '../SelectValueDesign'
import type { SelectValueProps } from '../props'
import type { SelectValueClasses, SelectValueComponents, SelectValueExpose } from '../types'

const SsrChip = defineComponent({
  props: { label: { type: [String, Number], default: undefined } },
  setup(props) {
    return () => h('span', { class: 'd1-chip' }, String(props.label ?? ''))
  }
})

describe('SelectValue (SSR)', () => {
  it('renders valid SSR HTML for multiple selection chips and placeholder', async () => {
    const SsrComponent = defineComponent({
      props: {
        multiple: { type: Boolean, default: true },
        value: {
          type: Array,
          default: () => [
            { label: 'One', value: '1', index: '1' },
            { label: 'Two', value: '2', index: '2' }
          ]
        }
      },
      setup(props, { expose }) {
        const design = new SelectValueDesign<
          SelectValueComponents,
          SelectValueExpose,
          SelectValueClasses,
          SelectValueProps
        >(
          'd1.selectValue',
          props as Readonly<SelectValueProps>,
          {
            classes: computed(() => ({
              main: { 'd1-selectValue': true },
              item: 'd1-selectValue__item',
              trailing: 'd1-selectValue__trailing'
            })),
            components: {
              chip: SsrChip as never
            }
          } as never
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-selectValue')
    expect(html).toContain('d1-selectValue--multiple')
    expect(html).toContain('One')
    expect(html).toContain('Two')
  })
})
