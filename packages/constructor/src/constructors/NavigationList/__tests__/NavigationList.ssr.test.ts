// @vitest-environment node
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { NavigationList } from '../NavigationList'
import { NavigationListDesign } from '../NavigationListDesign'
import { defaultsNavigationList, type NavigationListProps } from '../props'
import type { NavigationListClasses, NavigationListComponents, NavigationListExpose } from '../types'

afterEach(() => {
  ServerStorage.reset()
})

describe('NavigationList (SSR)', () => {
  const naming = new DesignName('d1.navigationList')

  it('initializes cleanly in Node without DOM globals and isolates IDs across requests', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storageA: Record<string, unknown> = {}
    const storageB: Record<string, unknown> = {}

    ServerStorage.init(() => storageA)
    const scopeA = effectScope()
    let idA: unknown
    scopeA.run(() => {
      const list = new NavigationList(
        reactive<NavigationListProps>({
          ...defaultsNavigationList,
          list: [
            { value: 'overview', label: 'Overview' },
            { value: 'settings', label: 'Settings' }
          ],
          selected: 'overview'
        }),
        ref<HTMLElement>(),
        naming
      )
      expect(list).toBeInstanceOf(NavigationList)
      expect(list.list).toHaveLength(2)
      expect(list.i('data').isSelected.value).toBe(true)
      expect(list.i('data').selectedValues.value).toEqual(['overview'])
      idA = list.getItem(list.list[0]!).listId
    })
    scopeA.stop()

    ServerStorage.reset()
    ServerStorage.init(() => storageB)
    const scopeB = effectScope()
    let idB: unknown
    scopeB.run(() => {
      const list = new NavigationList(
        reactive<NavigationListProps>({
          ...defaultsNavigationList,
          disabled: true,
          ariaMultiselectable: true,
          list: [{ value: 'billing', label: 'Billing' }]
        }),
        ref<HTMLElement>(),
        naming
      )
      expect(list.aria).toEqual({
        'role': 'listbox',
        'aria-multiselectable': 'true',
        'aria-disabled': 'true'
      })
      idB = list.getItem(list.list[0]!).listId
    })
    scopeB.stop()

    expect(idA).toBe(2)
    expect(idB).toBe(2)
  })

  it('renders NavigationListDesign markup across variants in SSR deterministically', async () => {
    const MockItem = defineComponent({
      name: 'MockItem',
      props: ['label', 'value', 'tag', 'disabled'],
      setup(props) {
        return () => h(
          String(props.tag ?? 'a'),
          {
            'data-value': props.value,
            'data-disabled': String(Boolean(props.disabled))
          },
          String(props.label ?? '')
        )
      }
    })

    const variants: Array<{ props: NavigationListProps, expected: string[] }> = [
      {
        props: {
          ...defaultsNavigationList,
          list: [
            { type: 'subtitle', label: 'Navigation' },
            { value: 'home', label: 'Home' },
            { type: 'line', value: 'div-1' },
            { type: 'space', value: 'sp-1' },
            { type: 'html', value: 'slotArea', label: 'Fallback' },
            { value: 'about', label: 'About' }
          ],
          selected: 'home'
        },
        expected: ['role="listbox"', 'role="separator"', 'Navigation', 'data-value="home"', 'SSR Nav Slot', 'data-value="about"']
      },
      {
        props: {
          ...defaultsNavigationList,
          disabled: true,
          ariaMultiselectable: true,
          control: true,
          list: [{ value: 'locked', label: 'Locked' }]
        },
        expected: ['aria-multiselectable="true"', 'aria-disabled="true"', 'data-disabled="true"', 'data-value="locked"']
      }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComp = defineComponent({
        setup() {
          const design = new NavigationListDesign<
            NavigationListComponents,
            NavigationListExpose,
            NavigationListClasses,
            NavigationListProps
          >(
            'd1.navigationList',
            variant.props,
            {
              components: {
                listItem: MockItem
              } as unknown as NavigationListComponents
            }
          )

          return design.render()
        }
      })

      const app = createSSRApp({
        render: () => h(TestComp, null, {
          slotArea: () => h('span', 'SSR Nav Slot')
        })
      })

      const html = await renderToString(app)

      for (const fragment of variant.expected) {
        expect(html).toContain(fragment)
      }
    }
  })
})
