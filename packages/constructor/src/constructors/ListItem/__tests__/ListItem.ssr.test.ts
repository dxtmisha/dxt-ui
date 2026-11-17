// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { ListItem } from '../ListItem'
import { ListItemDesign } from '../ListItemDesign'
import type { ListItemProps } from '../props'

describe('ListItem (SSR)', () => {
  const naming = new DesignName('d1.listItem')

  it('should initialize and compute bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const scope = effectScope()
    const element = ref<HTMLElement>()
    const props = reactive<ListItemProps>({
      label: 'SSR Item',
      value: 0,
      role: 'option',
      selected: true,
      selectionStyle: 'none',
      description: 'Server description'
    })

    scope.run(() => {
      const item = new ListItem(props, element, naming)

      expect(item.tag).toBe('div')
      expect(item.isRender()).toBe(true)
      expect(item.classes).toEqual({
        'd1-listItem--selected': true,
        'd1-listItem--selectionStyle': false,
        'd1-listItem--selectionStyle--none': true,
        'd1-listItem--description': true,
        'd1-a--static': true
      })
      expect(item.binds['data-value']).toBe(0)
      expect(item.aria).toEqual({
        'tabindex': undefined,
        'role': 'option',
        'aria-selected': 'true'
      })
    })

    scope.stop()
  })

  it('should render full ListItemDesign to HTML string across variants in SSR', async () => {
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

    const variants: ListItemProps[] = [
      { label: 'Plain Item', selectionStyle: 'none' },
      { label: 'Link Item', href: '/home', icon: 'home', badge: 'New', selectionStyle: 'none' },
      { label: 'Highlighted Item', highlight: 'light', selectionStyle: 'none' },
      { label: 'Checkbox Item', selectionStyle: 'checkbox', selected: true },
      { label: 'Filtered Out Item', filterMode: true, highlight: 'missing', selectionStyle: 'none' }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new ListItemDesign(
            'd1.listItem',
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
        expect(html).toContain('<div ')
        expect(html).toContain('High<span class="d1-listItem__highlight">light</span>ed Item')
      } else {
        expect(html).toContain('<div ')
        expect(html).toContain(String(props.label ?? ''))
      }

      if (props.selectionStyle === 'checkbox') {
        expect(html).toContain('type="checkbox"')
      }
    }
  })
})
