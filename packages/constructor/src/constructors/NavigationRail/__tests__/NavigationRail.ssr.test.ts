// @vitest-environment node
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { NavigationRail } from '../NavigationRail'
import { NavigationRailDesign } from '../NavigationRailDesign'
import { defaultsNavigationRail, type NavigationRailProps } from '../props'
import type { NavigationRailClasses, NavigationRailComponents, NavigationRailExpose } from '../types'

describe('NavigationRail (SSR)', () => {
  const naming = new DesignName('d1.navigationRail')

  afterEach(() => {
    ServerStorage.reset()
  })

  it('initializes in Node without DOM globals and isolates IDs per request', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storageA: Record<string, unknown> = {}
    const storageB: Record<string, unknown> = {}

    ServerStorage.init(() => storageA)
    const scopeA = effectScope()
    let idA: number | undefined
    scopeA.run(() => {
      const rail = new NavigationRail(
        {
          ...defaultsNavigationRail,
          control: true,
          list: [{ value: 'a', label: 'A' }]
        },
        ref(undefined),
        naming
      )
      expect(rail.aria).toEqual({ role: 'listbox' })
      idA = rail.getItem(rail.list[0]!).listId as number
    })
    scopeA.stop()

    ServerStorage.reset()
    ServerStorage.init(() => storageB)
    const scopeB = effectScope()
    let idB: number | undefined
    scopeB.run(() => {
      const rail = new NavigationRail(
        {
          ...defaultsNavigationRail,
          disabled: true,
          ariaMultiselectable: true,
          list: [{ value: 'b', label: 'B' }]
        },
        ref(undefined),
        naming
      )
      expect(rail.aria).toEqual({
        'role': 'listbox',
        'aria-multiselectable': 'true',
        'aria-disabled': 'true'
      })
      idB = rail.getItem(rail.list[0]!).listId as number
    })
    scopeB.stop()

    expect(idA).toBe(2)
    expect(idB).toBe(2)
  })

  it('renders NavigationRailDesign component to HTML string across variants in SSR', async () => {
    const MockRailItem = defineComponent({
      name: 'MockRailItem',
      props: ['label', 'value', 'listId', 'disabled'],
      setup(props, { attrs }) {
        return () => h(
          'div',
          {
            ...attrs,
            'class': ['ssr-rail-item', attrs.class],
            'data-list-id': props.listId,
            'data-value': props.value,
            'data-disabled': String(Boolean(props.disabled))
          },
          String(props.label)
        )
      }
    })

    const variants: Array<{ props: NavigationRailProps, expected: string[] }> = [
      {
        props: {
          ...defaultsNavigationRail,
          list: [
            { value: 'home', label: 'Home' },
            { type: 'line', value: 'ln' },
            { type: 'html', value: 'slotBanner', label: 'Fallback' }
          ]
        },
        expected: ['role="listbox"', 'role="separator"', 'data-value="home"', 'SSR Banner']
      },
      {
        props: {
          ...defaultsNavigationRail,
          control: true,
          ariaMultiselectable: true,
          disabled: true,
          list: [{ value: 'profile', label: 'Profile' }]
        },
        expected: ['aria-multiselectable="true"', 'aria-disabled="true"', 'data-disabled="true"', 'data-value="profile"']
      }
    ]

    for (const variant of variants) {
      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const TestComponent = defineComponent({
        setup() {
          const design = new NavigationRailDesign<
            NavigationRailComponents,
            NavigationRailExpose,
            NavigationRailClasses,
            NavigationRailProps
          >(
            'd1.navigationRail',
            variant.props,
            {
              components: {
                navigationRailItem: MockRailItem
              }
            }
          )
          return design.render()
        }
      })

      const app = createSSRApp({
        render: () => h(TestComponent, null, {
          slotBanner: () => h('span', 'SSR Banner')
        })
      })
      const html = await renderToString(app)

      for (const fragment of variant.expected) {
        expect(html).toContain(fragment)
      }
    }
  })
})
