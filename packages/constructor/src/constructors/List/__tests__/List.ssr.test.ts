// @vitest-environment node
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { List } from '../List'
import { ListDesign } from '../ListDesign'
import { defaultsList, type ListProps } from '../props'
import type { ListClasses, ListComponents, ListExpose } from '../types'

describe('List (SSR)', () => {
  const naming = new DesignName('d1.list')

  afterEach(() => {
    ServerStorage.reset()
  })

  it('initializes List in Node without DOM globals and isolates IDs per request', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storageA: Record<string, unknown> = {}
    const storageB: Record<string, unknown> = {}

    ServerStorage.init(() => storageA)
    const scopeA = effectScope()
    let firstIdA: number | undefined
    scopeA.run(() => {
      const props = reactive<ListProps>({
        control: true,
        filterMode: true,
        highlight: 'al',
        list: [{ value: 'a', label: 'Alpha' }]
      })
      const listA = new List(props, ref(undefined), naming)
      expect(listA.list).toHaveLength(1)
      expect(listA.classes['d1-list--searchActive']).toBe(true)
      firstIdA = listA.getItem(listA.list[0]!).listId as number
    })
    scopeA.stop()

    ServerStorage.reset()
    ServerStorage.init(() => storageB)
    const scopeB = effectScope()
    let firstIdB: number | undefined
    scopeB.run(() => {
      const listB = new List({ list: [{ value: 'b', label: 'Beta' }] }, ref(undefined), naming)
      firstIdB = listB.getItem(listB.list[0]!).listId as number
    })
    scopeB.stop()

    expect(firstIdA).toBe(2)
    expect(firstIdB).toBe(2)
  })

  it('renders complete ListDesign component to HTML string across variants in SSR', async () => {
    const MockListItem = defineComponent({
      name: 'MockListItem',
      props: ['label', 'value', 'listId'],
      setup(props, { attrs }) {
        return () => h(
          'div',
          {
            ...attrs,
            'class': ['ssr-list-item', attrs.class],
            'data-list-id': props.listId,
            'data-value': props.value
          },
          String(props.label)
        )
      }
    })

    const MockInput = defineComponent({
      name: 'MockInput',
      props: ['inputAttrs'],
      setup(props) {
        return () => h('input', {
          ...(props.inputAttrs as Record<string, unknown>),
          class: 'ssr-search-input'
        })
      }
    })

    const variants: ListProps[] = [
      {
        ...defaultsList,
        axis: 'y',
        showSearch: true,
        filterMode: true,
        textNotFound: 'Empty',
        list: [
          { type: 'subtitle', value: 'sub', label: 'Header' },
          { value: '1', label: 'First' }
        ]
      },
      {
        ...defaultsList,
        axis: 'x',
        control: true,
        list: [
          { value: '2', label: 'Second' }
        ]
      }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const design = new ListDesign<ListComponents, ListExpose, ListClasses, ListProps>(
            'd1.list',
            variant,
            {
              components: {
                listItem: MockListItem,
                input: MockInput
              }
            }
          )
          return design.render()
        }
      })

      const html = await renderToString(createSSRApp({ render: () => h(TestComponent) }))
      expect(html).toContain('role="listbox"')
      expect(html).toContain('ssr-list-item')
      expect(html).toContain('data-list-id="2"')

      if (variant.showSearch) {
        expect(html).toContain('ssr-search-input')
        expect(html).toContain('Empty')
        expect(html).toContain('Header')
      }

      ServerStorage.reset()
    }
  })
})
