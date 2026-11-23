// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, type GeoFlagNational, ServerStorage } from '@dxtmisha/functional'

import { MenuCountry } from '../MenuCountry'
import { MenuCountryDesign } from '../MenuCountryDesign'
import type { MenuControlItem } from '../../Menu'
import type { MenuCountryProps } from '../props'
import type {
  MenuCountryClasses,
  MenuCountryComponents,
  MenuCountryExpose
} from '../types'

describe('MenuCountry (SSR)', () => {
  const naming = new DesignName('d1.menuCountry')

  beforeEach(() => {
    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)
  })

  afterEach(() => {
    ServerStorage.reset()
  })

  it('should initialize and evaluate MenuCountry logic in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<MenuCountryProps>({
      list: ['US', 'VN'],
      selected: 'VN',
      isSelectedByValue: true,
      showPhoneCode: true,
      language: 'en'
    })

    scope.run(() => {
      const menuCountry = new MenuCountry(props, element, naming)
      const list = menuCountry.binds.list as Array<GeoFlagNational & { caption?: string }>

      expect(list.length).toBeGreaterThanOrEqual(2)
      expect(list.find(item => item.value === 'VN')?.caption).toBe('+84')
      expect(menuCountry.binds.selected).toBe('VN')
      expect(menuCountry.binds.isSelectedByValue).toBe(true)
    })

    scope.stop()
  })

  it('should render MenuCountryDesign to HTML string in SSR across variants', async () => {
    const MockMenu = defineComponent({
      name: 'MockMenu',
      inheritAttrs: false,
      props: {
        list: Array,
        selected: [String, Number, Boolean, Array],
        disabled: Boolean
      },
      setup(props, { attrs, slots }) {
        const controlProps: MenuControlItem = {
          class: 'd1-window__control',
          open: ref(false),
          classesWindow: {} as MenuControlItem['classesWindow'],
          loading: ref(false),
          isSelected: computed(() => Boolean(props.selected)),
          selectedList: computed(() => []),
          selectedNames: computed(() => []),
          selectedValues: computed(() => []),
          previous: () => undefined,
          next: () => undefined,
          onClick: async () => {},
          onKeydown: async () => {},
          onContextmenu: async () => {},
          binds: {
            class: 'd1-window__control',
            onClick: async () => {},
            onKeydown: async () => {},
            onContextmenu: async () => {}
          }
        }

        return () => h(
          'div',
          {
            ...attrs,
            'class': ['ssr-menu', attrs.class],
            'data-selected': String(props.selected ?? ''),
            'data-disabled': String(Boolean(props.disabled))
          },
          [
            slots.control?.(controlProps),
            h(
              'ul',
              (props.list as Array<GeoFlagNational & { caption?: string }> | undefined)?.map(item => h(
                'li',
                { 'data-caption': item.caption ?? '' },
                item.label
              ))
            )
          ]
        )
      }
    })

    const variants: MenuCountryProps[] = [
      {
        list: ['US', 'VN'],
        selected: 'US',
        showPhoneCode: false,
        language: 'en'
      },
      {
        list: ['VN', 'DO'],
        modelSelected: 'VN',
        showPhoneCode: true,
        disabled: true,
        highlightLengthStart: 0,
        showSearch: false,
        filterMode: true,
        language: 'en'
      }
    ]

    for (const variant of variants) {
      const Inner = defineComponent({
        setup() {
          const design = new MenuCountryDesign<
            MenuCountryComponents,
            MenuCountryExpose,
            MenuCountryClasses,
            MenuCountryProps
          >(
            'd1.menuCountry',
            variant,
            {
              classes: ref({
                main: { 'd1-menuCountry': true }
              }),
              components: {
                menu: MockMenu
              }
            }
          )

          return design.render()
        }
      })

      const app = createSSRApp({
        render: () => h(Inner, {}, {
          control: () => h('button', 'Country')
        })
      })

      const html = await renderToString(app)
      expect(html).toContain('d1-menuCountry')
      expect(html).toContain('ssr-menu')
      expect(html).toContain('<button>Country</button>')
      if (variant.showPhoneCode) {
        expect(html).toContain('data-caption="+84"')
      }
    }
  })
})
