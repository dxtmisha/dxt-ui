// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { ListMenu } from '../ListMenu'
import { ListMenuDesign } from '../ListMenuDesign'
import type { ListMenuProps } from '../props'

describe('ListMenu (SSR)', () => {
  const naming = new DesignName('d1.listMenu')

  it('should initialize and evaluate bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<ListMenuProps>({
      open: true,
      axis: 'y',
      divider: true
    })

    scope.run(() => {
      const menu = new ListMenu(props, element, naming)

      expect(menu.isOpen()).toBe(true)
      expect(menu.binds).toEqual({
        open: true,
        inert: false,
        autoTabIndex: false,
        closeOnEsc: false
      })
      expect(menu.i('window').binds.value).toMatchObject({
        adaptive: 'menu',
        axis: 'y',
        role: 'menu',
        ariaHaspopup: 'menu'
      })
    })

    scope.stop()
  })

  it('should render full ListMenuDesign component to HTML string across variants in SSR', async () => {
    const MockWindow = defineComponent({
      name: 'MockWindow',
      inheritAttrs: false,
      props: {
        open: Boolean,
        adaptive: String,
        axis: String,
        role: String,
        ariaHaspopup: String,
        inert: Boolean,
        autoTabIndex: Boolean,
        closeOnEsc: Boolean
      },
      setup(props, { attrs, slots }) {
        return () => h(
          'div',
          {
            ...attrs,
            'class': ['ssr-window', attrs.class],
            'data-open': String(props.open),
            'data-axis': props.axis,
            'data-adaptive': props.adaptive,
            'data-role': props.role
          },
          [
            slots.control?.({
              class: 'd1-window__control',
              open: ref(props.open),
              classesWindow: {},
              onClick: async () => {},
              onKeydown: async () => {},
              onContextmenu: async () => {},
              binds: {
                class: 'd1-window__control',
                onClick: async () => {},
                onKeydown: async () => {},
                onContextmenu: async () => {}
              }
            }),
            slots.default?.()
          ]
        )
      }
    })

    const variants: ListMenuProps[] = [
      { open: false, axis: 'x' },
      { open: true, axis: 'y' }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new ListMenuDesign(
            'd1.listMenu',
            props,
            {
              components: {
                window: MockWindow
              }
            }
          )
          return design.render()
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp({
        render: () => h(TestComponent, null, {
          head: (slotProps: { open: { value: boolean } }) => `Head:${slotProps.open.value}`,
          list: () => 'Menu List Content'
        })
      })
      const html = await renderToString(app)

      expect(html).toContain('ssr-window')
      expect(html).toContain('d1-listMenu__window')
      expect(html).toContain(`data-open="${String(props.open)}"`)
      expect(html).toContain(`data-axis="${props.axis}"`)
      expect(html).toContain('data-adaptive="menu"')
      expect(html).toContain('data-role="menu"')
      expect(html).toContain(`Head:${String(props.open)}`)
      expect(html).toContain('Menu List Content')
    }
  })
})
