// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { NavigationItem } from '../NavigationItem'
import { NavigationItemDesign } from '../NavigationItemDesign'
import { defaultsNavigationItem, type NavigationItemProps } from '../props'

describe('NavigationItem (SSR)', () => {
  const naming = new DesignName('d1.navigationItem')

  it('should initialize and compute bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<NavigationItemProps>({
      ...defaultsNavigationItem,
      label: 'SSR Nav Item',
      value: 0,
      selected: true,
      description: 'Server navigation description'
    })

    scope.run(() => {
      const item = new NavigationItem(props, element, naming)

      expect(item).toBeInstanceOf(NavigationItem)
      expect(item.tag).toBe('a')
      expect(item.isRender()).toBe(true)
      expect(item.classes).toEqual({
        'd1-navigationItem--selected': true,
        'd1-navigationItem--selectionStyle': false,
        'd1-navigationItem--selectionStyle--none': true,
        'd1-navigationItem--description': true,
        'd1-a--static': true
      })
      expect(item.binds['data-value']).toBe(0)
      expect(item.aria).toEqual({
        'tabindex': '-1',
        'role': 'option',
        'aria-selected': 'true'
      })
    })

    scope.stop()
  })

  it('should render full NavigationItemDesign to HTML string across variants in SSR', async () => {
    const MockIcon = defineComponent({
      name: 'MockIcon',
      props: { icon: [String, Object] },
      setup(props) {
        return () => h('span', { 'class': 'ssr-icon', 'data-icon': String(props.icon ?? '') })
      }
    })

    const MockBadge = defineComponent({
      name: 'MockBadge',
      props: { label: [String, Number] },
      setup(props) {
        return () => h('span', { class: 'ssr-badge' }, String(props.label ?? ''))
      }
    })

    const MockCheckbox = defineComponent({
      name: 'MockCheckbox',
      props: { value: Boolean },
      setup(props) {
        return () => h('input', { type: 'checkbox', checked: props.value })
      }
    })

    const variants: NavigationItemProps[] = [
      { ...defaultsNavigationItem, label: 'Plain Nav' },
      { ...defaultsNavigationItem, label: 'Link Nav', href: '/home', icon: 'home', badge: 'New' },
      { ...defaultsNavigationItem, label: 'Highlighted Item', highlight: 'light' },
      { ...defaultsNavigationItem, label: 'Checkbox Nav', selectionStyle: 'checkbox', selected: true },
      { ...defaultsNavigationItem, label: 'Filtered Out Nav', filterMode: true, highlight: 'missing' }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new NavigationItemDesign(
            'd1.navigationItem',
            props,
            {
              components: {
                icon: MockIcon,
                badge: MockBadge,
                checkbox: MockCheckbox
              }
            }
          )
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      if (props.filterMode && props.highlight === 'missing') {
        expect(html).toBe('<!---->')
      } else if (props.href) {
        expect(html).toContain('<a ')
        expect(html).toContain(`href="${props.href}"`)
        expect(html).toContain('ssr-icon')
        expect(html).toContain('ssr-badge')
      } else if (props.highlight === 'light') {
        expect(html).toContain('<a ')
        expect(html).toContain('High<span class="d1-navigationItem__highlight">light</span>ed Item')
      } else {
        expect(html).toContain('<a ')
        expect(html).toContain(String(props.label ?? ''))
      }

      if (props.selectionStyle === 'checkbox') {
        expect(html).toContain('type="checkbox"')
      }
    }
  })
})
