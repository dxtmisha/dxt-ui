// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName } from '@dxtmisha/functional'

import { Menu } from '../Menu'
import { MenuDesign } from '../MenuDesign'
import type { MenuProps } from '../props'

describe('Menu (SSR)', () => {
  const naming = new DesignName('d1.menu')

  it('should initialize and evaluate Menu logic in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<MenuProps>({
      list: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 }
      ],
      selected: 1,
      isSelectedByValue: true,
      embedded: true
    })

    scope.run(() => {
      const menu = new Menu(props, element, naming)

      expect(menu.binds.control).toBe(false)
      expect(menu.slotData.isSelected.value).toBe(true)
      expect(menu.slotData.selectedValues.value).toEqual([1])
      expect(menu.slotData.next()).toBe(2)
      expect(menu.slotData.selectedValues.value).toEqual([2])
    })

    scope.stop()
  })

  it('should render MenuDesign to HTML string in SSR across embedded/bars variants', async () => {
    const MockWindow = defineComponent({
      name: 'MockWindow',
      inheritAttrs: false,
      props: {
        embedded: Boolean,
        ariaHaspopup: String,
        closeOnEsc: Boolean
      },
      setup(props, { attrs, slots }) {
        return () => h(
          'div',
          {
            ...attrs,
            'class': ['ssr-window', attrs.class],
            'data-embedded': String(Boolean(props.embedded)),
            'data-aria-haspopup': props.ariaHaspopup
          },
          [
            slots.control?.({
              class: 'd1-window__control',
              open: ref(false),
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
            slots.title?.({} as never),
            slots.default?.({} as never),
            slots.footer?.({} as never)
          ]
        )
      }
    })

    const MockBars = defineComponent({
      name: 'MockBars',
      inheritAttrs: false,
      props: { label: String },
      setup(props) {
        return () => h('div', { class: 'ssr-bars' }, props.label)
      }
    })

    const MockList = defineComponent({
      name: 'MockList',
      inheritAttrs: false,
      props: {
        list: Array,
        selected: [String, Number, Boolean, Array]
      },
      setup(props, { attrs }) {
        return () => h(
          'ul',
          { ...attrs, 'class': ['ssr-list', attrs.class], 'data-selected': String(props.selected ?? '') },
          (props.list as Array<{ label: string, value: string }> | undefined)?.map(item => h('li', item.label))
        )
      }
    })

    const variants: MenuProps[] = [
      {
        list: [{ label: 'Alpha', value: 'a' }],
        selected: 'a',
        barsHide: true,
        barsBackHide: true,
        embedded: false
      },
      {
        list: [{ label: 'Beta', value: 'b' }],
        selected: 'b',
        isSelectedByValue: true,
        barsHide: false,
        barsLabel: 'Actions',
        embedded: true
      }
    ]

    for (const props of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new MenuDesign(
            'd1.menu',
            props,
            {
              components: {
                window: MockWindow,
                bars: MockBars,
                list: MockList
              }
            }
          )
          return design.render()
        }
      })

      const app = createSSRApp({
        render: () => h(TestComponent, null, {
          control: () => 'MenuTrigger',
          footer: () => 'MenuFooter'
        })
      })
      const html = await renderToString(app)

      expect(html).toContain('ssr-window')
      expect(html).toContain('d1-menu__window')
      expect(html).toContain('MenuTrigger')
      expect(html).toContain('MenuFooter')
      expect(html).toContain(`data-selected="${String(props.selected)}"`)
      expect(html).toContain(`data-embedded="${String(Boolean(props.embedded))}"`)
      if (props.barsLabel) {
        expect(html).toContain('ssr-bars')
        expect(html).toContain('Actions')
      } else {
        expect(html).not.toContain('ssr-bars')
      }
    }
  })
})
