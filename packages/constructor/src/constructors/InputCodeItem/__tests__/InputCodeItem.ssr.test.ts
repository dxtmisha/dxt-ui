/** @vitest-environment node */
import { describe, it, expect } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { InputCodeItemDesign } from '../InputCodeItemDesign'
import type { InputCodeItemProps } from '../props'
import type { InputCodeItemClasses, InputCodeItemComponents, InputCodeItemExpose } from '../types'

describe('InputCodeItem (SSR)', () => {
  it('should render valid SSR HTML including hide sub-element and skeleton class without browser globals', async () => {
    const SsrComponent = defineComponent({
      props: {
        index: { type: Number, default: 0 },
        hide: { type: Boolean, default: true },
        isSkeleton: { type: Boolean, default: true },
        tabindex: { type: Number, default: 0 },
        textSymbol: { type: String, default: 'Code digit [index]' }
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
            classes: computed(() => ({ main: { 'd1-inputCodeItem': true } }))
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const html = await renderToString(createSSRApp({ render: () => h(SsrComponent) }))

    expect(html).toContain('d1-inputCodeItem')
    expect(html).toContain('d1-skeleton__background')
    expect(html).toContain('aria-label="Code digit 1"')
    expect(html).toContain('tabindex="0"')
    expect(html).toContain('class="d1-inputCodeItem__sub"')
  })
})
