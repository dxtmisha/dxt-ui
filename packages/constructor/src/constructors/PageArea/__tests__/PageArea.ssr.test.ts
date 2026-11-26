// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { setAreaValue } from '../../../functions/setAreaValue'
import { PageAreaDesign } from '../PageAreaDesign'
import { defaultsPageArea, type PageAreaProps, type PageAreaPropsBasic } from '../props'
import type { PageAreaClasses, PageAreaComponents, PageAreaExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const createSsrStub = (kind: string) => defineComponent({
  name: `Ssr-${kind}`,
  props: { label: [String, Number] },
  setup(props, { slots }) {
    return () => h('div', { 'data-ssr-kind': kind }, [
      props.label !== undefined ? String(props.label) : '',
      slots.default ? slots.default() : null
    ])
  }
})

describe('PageArea SSR', () => {
  it('should render corresponding area component in Node SSR without errors', async () => {
    const Child = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({ main: { 'd1-pageArea': true } }))
        const design = new PageAreaDesign<PageAreaComponents, PageAreaExpose, PageAreaClasses, PageAreaPropsBasic>(
          'd1.pageArea',
          { ...defaultsPageArea, label: 'SSR Section' } as Readonly<PageAreaProps>,
          {
            classes,
            components: {
              page: createSsrStub('page'),
              section: createSsrStub('section'),
              block: createSsrStub('block'),
              group: createSsrStub('group')
            }
          }
        )
        return design.render()
      }
    })

    const App = defineComponent({
      setup() {
        setAreaValue(ref('page'))
        return () => h(Child, null, { default: () => h('span', 'SSR content') })
      }
    })

    const html = await renderToString(createSSRApp(App))
    expect(html).toContain('data-ssr-kind="section"')
    expect(html).toContain('SSR Section')
    expect(html).toContain('SSR content')
  })
})
