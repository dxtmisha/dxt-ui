// @vitest-environment node
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, Geo, ServerStorage } from '@dxtmisha/functional'

import { InputPhoneDialCode } from '../InputPhoneDialCode'
import { InputPhoneDialCodeDesign } from '../InputPhoneDialCodeDesign'
import type { MenuControlItem } from '../../Menu'
import type { InputPhoneDialCodeProps } from '../props'
import type {
  InputPhoneDialCodeClasses,
  InputPhoneDialCodeComponents,
  InputPhoneDialCodeExpose
} from '../types'

describe('InputPhoneDialCode (SSR)', () => {
  const naming = new DesignName('d1.inputPhoneDialCode')

  beforeEach(() => {
    const storage: Record<string, unknown> = {}
    ServerStorage.reset()
    ServerStorage.init(() => storage)
  })

  afterEach(() => {
    ServerStorage.reset()
  })

  it('should initialize InputPhoneDialCode logic in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<InputPhoneDialCodeProps>({
      value: 'VN',
      labelType: 'code',
      iconArrowDown: 'keyboard_arrow_down'
    })

    scope.run(() => {
      const dialCode = new InputPhoneDialCode(props, element, naming)

      expect(dialCode.hasInstance('menu')).toBe(false)
      expect(dialCode.hasInstance('button')).toBe(false)
      expect(dialCode.hasInstance('model')).toBe(false)

      const menuBinds = dialCode.i('menu').binds.value
      expect(menuBinds.selected).toBe('VN')
      expect(menuBinds.showPhoneCode).toBe(true)
      expect(menuBinds.disableFocusReturn).toBe(true)
      expect(dialCode.bindsButton.iconTrailing).toBe('keyboard_arrow_down')
      expect(dialCode.hasInstance('event')).toBe(false)
    })

    scope.stop()
  })

  it('should render InputPhoneDialCodeDesign to deterministic HTML string in SSR across variants', async () => {
    const MockButton = defineComponent({
      name: 'MockButton',
      inheritAttrs: false,
      props: {
        disabled: Boolean,
        iconTrailing: String,
        label: String
      },
      setup(props, { attrs }) {
        return () => h(
          'button',
          {
            'type': 'button',
            'class': attrs.class,
            'disabled': props.disabled,
            'data-icon-trailing': props.iconTrailing ?? ''
          },
          props.label ?? 'dial'
        )
      }
    })

    const MockMenuCountry = defineComponent({
      name: 'MockMenuCountry',
      inheritAttrs: false,
      props: {
        selected: [String, Number, Boolean, Array],
        showPhoneCode: Boolean,
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
            'class': 'd1-window__control',
            'aria-expanded': false,
            'onClick': async () => {},
            'onKeydown': async () => {},
            'onContextmenu': async () => {}
          }
        }

        return () => h(
          'div',
          {
            'class': ['ssr-menu-country', attrs.class],
            'data-selected': String(props.selected ?? ''),
            'data-disabled': String(Boolean(props.disabled)),
            'data-show-phone-code': String(Boolean(props.showPhoneCode))
          },
          slots.control?.(controlProps)
        )
      }
    })

    const variants: InputPhoneDialCodeProps[] = [
      {
        value: 'VN',
        labelType: 'code',
        iconArrowDown: 'keyboard_arrow_down'
      },
      {
        modelSelected: 'US',
        labelType: 'name',
        disabled: true,
        iconArrowDown: 'keyboard_arrow_down'
      },
      {
        labelType: 'none'
      },
      {
        value: 'RU',
        labelType: 'code',
        countryList: ['RU'],
        iconArrowDown: 'keyboard_arrow_down'
      }
    ]

    for (const variant of variants) {
      const Inner = defineComponent({
        setup() {
          const design = new InputPhoneDialCodeDesign<
            InputPhoneDialCodeComponents,
            InputPhoneDialCodeExpose,
            InputPhoneDialCodeClasses,
            InputPhoneDialCodeProps
          >(
            'd1.inputPhoneDialCode',
            variant,
            {
              classes: ref({
                main: { 'd1-inputPhoneDialCode': true }
              }),
              components: {
                button: MockButton,
                menuCountry: MockMenuCountry
              }
            }
          )

          return design.render()
        }
      })

      const app = createSSRApp({
        render: () => h(Inner)
      })

      const html = await renderToString(app)
      expect(html).toContain('d1-inputPhoneDialCode')
      expect(html).toContain('ssr-menu-country')
      expect(html).toContain('d1-inputPhoneDialCode__button')
      expect(html).toContain(`data-selected="${String(variant.modelSelected ?? variant.value ?? Geo.getCountry())}"`)
      expect(html).toContain('data-show-phone-code="true"')
      if (variant.disabled) {
        expect(html).toContain('disabled')
        expect(html).not.toContain('keyboard_arrow_down')
      }
    }
  })
})
