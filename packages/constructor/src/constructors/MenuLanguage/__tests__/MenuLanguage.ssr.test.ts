// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, type GeoFlagNational, ServerStorage } from '@dxtmisha/functional'

import { MenuLanguage } from '../MenuLanguage'
import { MenuLanguageDesign } from '../MenuLanguageDesign'
import { MenuLanguageInclude } from '../MenuLanguageInclude'
import type { MenuControlItem } from '../../Menu'
import type { MenuLanguageProps } from '../props'
import type {
  MenuLanguageClasses,
  MenuLanguageComponents,
  MenuLanguageExpose
} from '../types'

describe('MenuLanguage (SSR)', () => {
  const naming = new DesignName('d1.menuLanguage')

  beforeEach(() => {
    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)
  })

  afterEach(() => {
    ServerStorage.reset()
  })

  it('should initialize and evaluate MenuLanguage logic in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<MenuLanguageProps>({
      list: ['en', 'vi', 'ru'],
      selected: 'vi',
      isSelectedByValue: true,
      language: 'en'
    })

    scope.run(() => {
      const menuLanguage = new MenuLanguage(props, element, naming)
      const list = menuLanguage.binds.list as GeoFlagNational[]

      expect(list.length).toBeGreaterThanOrEqual(3)
      expect(list.some(item => item.value === 'vi')).toBe(true)
      expect(menuLanguage.binds.selected).toBe('vi')
      expect(menuLanguage.binds.isSelectedByValue).toBe(true)

      const include = new MenuLanguageInclude({ disabled: false }, naming)
      expect(include.binds.value.disabled).toBe(false)
      expect(include.expose.getOpen()).toBe(false)
    })

    scope.stop()
  })

  it('should render MenuLanguageDesign to HTML string in SSR across variants', async () => {
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
              (props.list as GeoFlagNational[] | undefined)?.map(item => h(
                'li',
                { 'data-value': item.value },
                item.label
              ))
            )
          ]
        )
      }
    })

    const variants: MenuLanguageProps[] = [
      {
        list: ['en', 'vi'],
        selected: 'en',
        language: 'en'
      },
      {
        list: ['vi', 'ru'],
        modelSelected: 'vi',
        disabled: true,
        highlightLengthStart: 0,
        showSearch: false,
        filterMode: true,
        language: 'vi'
      }
    ]

    for (const variant of variants) {
      const Inner = defineComponent({
        setup() {
          const design = new MenuLanguageDesign<
            MenuLanguageComponents,
            MenuLanguageExpose,
            MenuLanguageClasses,
            MenuLanguageProps
          >(
            'd1.menuLanguage',
            variant,
            {
              classes: ref({
                main: { 'd1-menuLanguage': true }
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
          control: () => h('button', 'Language')
        })
      })

      const html = await renderToString(app)
      expect(html).toContain('d1-menuLanguage')
      expect(html).toContain('ssr-menu')
      expect(html).toContain('<button>Language</button>')
      expect(html).toContain('data-value="vi"')
    }
  })
})
