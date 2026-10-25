// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, h, reactive, ref } from 'vue'
import { type ConstrClass, DesignComponents, DesignName } from '@dxtmisha/functional'

import { IconLiteInclude } from '../IconLiteInclude'
import { IconInclude } from '../IconInclude'
import { IconTrailingInclude } from '../IconTrailingInclude'
import type {
  IconComponentInclude,
  IconLitePropsInclude,
  IconPropsInclude,
  IconTrailingPropsInclude
} from '../basicTypes'
import type { IconPropsBasic } from '../props'

/**
 * Recursively extracts string class names from a ConstrClass structure without using any.
 *
 * Рекурсивно извлекает строковые имена классов из структуры ConstrClass без использования any.
 * @param value class value to normalize / значение класса для нормализации
 * @returns flat list of string classes / плоский список строковых классов
 */
function extractClassList(value: ConstrClass | undefined): string[] {
  if (!value) {
    return []
  }

  if (typeof value === 'string') {
    return [value]
  }

  if (Array.isArray(value)) {
    const result: string[] = []

    for (const item of value) {
      result.push(...extractClassList(item))
    }

    return result
  }

  return Object.entries(value)
    .filter(([, enabled]) => Boolean(enabled))
    .map(([className]) => className)
}

describe('Icon Include Classes', () => {
  const naming = new DesignName('d1.button')

  describe('IconLiteInclude', () => {
    it('should report isIcon presence accurately for string, object, empty, null, and undefined values', () => {
      expect(new IconLiteInclude({ icon: 'home' }, naming).isIcon()).toBe(true)
      expect(new IconLiteInclude({ icon: { icon: 'home', turn: true } }, naming).isIcon()).toBe(true)
      expect(new IconLiteInclude({ icon: '' }, naming).isIcon()).toBe(false)
      expect(new IconLiteInclude({ icon: null }, naming).isIcon()).toBe(false)
      expect(new IconLiteInclude({}, naming).isIcon()).toBe(false)
    })

    it('should compute iconBind for string and object icon values and merge extra classes without duplicates', () => {
      const props = reactive<IconLitePropsInclude>({ icon: 'home' })
      const extra = computed<IconPropsBasic>(() => ({
        ariaLabel: 'Home action',
        class: 'extra-button-icon'
      }))

      const include = new IconLiteInclude(
        props,
        naming,
        undefined,
        extra
      )

      expect(include.isIcon()).toBe(true)
      const bind = include.iconBind
      expect(bind.icon).toBe('home')
      expect(bind.ariaLabel).toBe('Home action')
      expect(bind['data-event-type']).toBe('icon')

      const classes = extractClassList(bind.class)
      expect(classes).toEqual(['extra-button-icon', 'd1-button__icon'])
      expect(new Set(classes).size).toBe(classes.length)

      props.icon = { icon: 'settings', turn: true }
      expect(include.iconBind.icon).toBe('settings')
      expect(include.iconBind.turn).toBe(true)
    })

    it('should support reactive getter functions for props and render VNodes via DesignComponents', () => {
      const state = reactive<IconLitePropsInclude>({ icon: 'star' })
      const components = new DesignComponents<IconComponentInclude, IconLitePropsInclude>(
        {
          icon: {
            name: 'StubIcon',
            setup(componentProps: Record<string, unknown>) {
              return () => h('span', {
                'class': componentProps.class,
                'data-icon': componentProps.icon
              })
            }
          }
        },
        state
      )

      const include = new IconLiteInclude(
        () => ({ icon: state.icon }),
        naming,
        components
      )

      const rendered = include.renderIcon()
      expect(rendered).toHaveLength(1)
      expect(rendered[0]?.props).toEqual(expect.objectContaining({
        'icon': 'star',
        'data-event-type': 'icon'
      }))

      state.icon = undefined
      expect(include.isIcon()).toBe(false)
      expect(include.renderIcon()).toEqual([])
    })

    it('should return an empty array from renderIcon when components registry is omitted', () => {
      const include = new IconLiteInclude({ icon: 'home' }, naming)
      expect(include.isIcon()).toBe(true)
      expect(include.renderIcon()).toEqual([])
    })
  })

  describe('IconInclude', () => {
    it('should map status and style props and merge extra, iconAttrs, and subClass without duplicates', () => {
      const props = reactive<IconPropsInclude>({
        icon: 'search',
        selected: true,
        iconTurn: true,
        iconHide: false,
        iconPalette: true,
        iconDir: true,
        iconAttrs: {
          class: 'user-icon-class',
          ariaLabel: 'Search field'
        }
      })

      const startRef = ref(true)
      const endRef = ref(false)

      const include = new IconInclude(
        props,
        naming,
        undefined,
        { class: 'extra-button-icon' },
        undefined,
        undefined,
        startRef,
        endRef
      )

      const bind = include.iconBind
      expect(bind.icon).toBe('search')
      expect(bind.active).toBe(true)
      expect(bind.turn).toBe(true)
      expect(bind.hide).toBe(false)
      expect(bind.asPalette).toBe(true)
      expect(bind.animationType).toBe('type2')
      expect(bind.dir).toBe(true)
      expect(bind.start).toBe(true)
      expect(bind.end).toBe(false)
      expect(bind.ariaLabel).toBe('Search field')
      expect(bind['data-event-type']).toBe('icon')

      const classes = extractClassList(bind.class)
      expect(classes).toEqual([
        'extra-button-icon',
        'user-icon-class',
        'd1-button__icon'
      ])
      expect(new Set(classes).size).toBe(classes.length)
    })

    it('should prioritize constructor turn and dir arguments over props.iconTurn and props.iconDir when provided', () => {
      const props = reactive<IconPropsInclude>({
        icon: 'arrow_forward',
        iconTurn: true,
        iconDir: true
      })

      const include = new IconInclude(
        props,
        naming,
        undefined,
        undefined,
        () => false,
        () => false,
        false,
        true
      )

      expect(include.iconBind.turn).toBe(false)
      expect(include.iconBind.dir).toBe(false)
      expect(include.iconBind.start).toBe(false)
      expect(include.iconBind.end).toBe(true)
    })
  })

  describe('IconTrailingInclude', () => {
    it('should report isIcon, isIconTrailing, and hasAtLeastOneIcon across all combinations', () => {
      const props = reactive<IconTrailingPropsInclude>({})
      const include = new IconTrailingInclude(props, naming)

      expect(include.isIcon()).toBe(false)
      expect(include.isIconTrailing()).toBe(false)
      expect(include.hasAtLeastOneIcon()).toBe(false)

      props.icon = 'home'
      expect(include.isIcon()).toBe(true)
      expect(include.isIconTrailing()).toBe(false)
      expect(include.hasAtLeastOneIcon()).toBe(true)

      props.icon = undefined
      props.iconTrailing = 'arrow_drop_down'
      expect(include.isIcon()).toBe(false)
      expect(include.isIconTrailing()).toBe(true)
      expect(include.hasAtLeastOneIcon()).toBe(true)

      props.icon = 'home'
      expect(include.isIcon()).toBe(true)
      expect(include.isIconTrailing()).toBe(true)
      expect(include.hasAtLeastOneIcon()).toBe(true)
    })

    it('should compute trailingBind and merge extra, iconAttrs, and trailing subClass without duplicate classes', () => {
      const props = reactive<IconTrailingPropsInclude>({
        icon: 'check',
        iconTrailing: 'arrow_down',
        iconTurn: true,
        iconDir: true,
        iconPalette: false,
        iconTrailingPalette: true,
        iconAttrs: {
          class: 'user-shared-class'
        }
      })

      const include = new IconTrailingInclude(
        props,
        naming,
        undefined,
        { class: 'extra-button-icon' }
      )

      const trailingBind = include.trailingBind
      expect(trailingBind.icon).toBe('arrow_down')
      expect(trailingBind.turn).toBe(true)
      expect(trailingBind.dir).toBe(true)
      expect(trailingBind.asPalette).toBe(true)
      expect(trailingBind.end).toBe(true)
      expect(trailingBind.high).toBe(true)
      expect(trailingBind['data-event-type']).toBe('icon-trailing')

      const classes = extractClassList(trailingBind.class)
      expect(classes).toEqual([
        'extra-button-icon',
        'user-shared-class',
        'd1-button__trailing'
      ])
      expect(new Set(classes).size).toBe(classes.length)
    })

    it('should control main icon turn and dir based on iconTrailing, iconTrailingTurnOnly, and iconTrailingDirOnly', () => {
      const props = reactive<IconTrailingPropsInclude>({
        icon: 'expand_more',
        iconTurn: true,
        iconDir: true
      })

      const include = new IconTrailingInclude(props, naming)

      // When no trailing icon and *Only flags are false, main icon receives turn and dir
      expect(include.iconBind.start).toBe(true)
      expect(include.iconBind.turn).toBe(true)
      expect(include.iconBind.dir).toBe(true)

      // When iconTrailingTurnOnly or iconTrailingDirOnly is true, main icon does not turn/mirror
      props.iconTrailingTurnOnly = true
      props.iconTrailingDirOnly = true
      expect(include.iconBind.turn).toBe(false)
      expect(include.iconBind.dir).toBe(false)

      // When iconTrailing is present, main icon does not turn/mirror even if *Only flags are false
      props.iconTrailingTurnOnly = false
      props.iconTrailingDirOnly = false
      props.iconTrailing = 'chevron_right'
      expect(include.iconBind.turn).toBe(false)
      expect(include.iconBind.dir).toBe(false)
      expect(include.trailingBind.turn).toBe(true)
      expect(include.trailingBind.dir).toBe(true)
    })

    it('should render both main and trailing icons in order via render()', () => {
      const props = reactive<IconTrailingPropsInclude>({
        icon: 'person',
        iconTrailing: 'expand_more'
      })

      const components = new DesignComponents<IconComponentInclude, IconTrailingPropsInclude>(
        {
          icon: {
            name: 'StubIcon',
            setup(componentProps: Record<string, unknown>) {
              return () => h('span', {
                'data-icon': componentProps.icon,
                'data-event-type': componentProps['data-event-type']
              })
            }
          }
        },
        props
      )

      const include = new IconTrailingInclude(props, naming, components)

      const allNodes = include.render()
      expect(allNodes).toHaveLength(2)
      expect(allNodes[0]?.props).toEqual(expect.objectContaining({
        'data-event-type': 'icon',
        'icon': 'person'
      }))
      expect(allNodes[1]?.props).toEqual(expect.objectContaining({
        'data-event-type': 'icon-trailing',
        'icon': 'expand_more'
      }))

      props.iconTrailing = undefined
      expect(include.renderIconTrailing()).toEqual([])
      expect(include.render()).toHaveLength(1)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it.each([
      ['иконка_дом', 'Главная страница'],
      ['biểu_tượng_nhà', 'Trang chủ 🇻🇳'],
      ['图标_主页', '首页 🚀']
    ])('should preserve Unicode icon %s and ariaLabel %s in iconBind', (icon, ariaLabel) => {
      const include = new IconInclude(
        {
          icon,
          iconAttrs: { ariaLabel }
        },
        naming
      )

      expect(include.iconBind.icon).toBe(icon)
      expect(include.iconBind.ariaLabel).toBe(ariaLabel)
    })
  })
})
