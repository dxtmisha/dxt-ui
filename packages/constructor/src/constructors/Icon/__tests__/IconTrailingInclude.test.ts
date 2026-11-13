// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { h, reactive } from 'vue'
import { type ConstrClass, DesignComponents, DesignName, type Undefined } from '@dxtmisha/functional'
import { IconTrailingInclude } from '../IconTrailingInclude'
import { type IconComponentInclude, type IconLitePropsInclude, type IconTrailingPropsInclude } from '../basicTypes'

/**
 * Recursively extracts string class names from a ConstrClass structure without using any.
 *
 * Рекурсивно извлекает строковые имена классов из структуры ConstrClass без использования any.
 * @param value class value to normalize / значение класса для нормализации
 * @returns flat list of string classes / плоский список строковых классов
 */
function extractClassList(value: ConstrClass | Undefined): string[] {
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

/**
 * Creates a reactive props object without triggering deep UnwrapNestedRefs recursion in TypeScript.
 *
 * Создает реактивный объект свойств без вызова глубокой рекурсии UnwrapNestedRefs в TypeScript.
 * @param initial initial properties / начальные свойства
 * @returns reactive properties / реактивные свойства
 */
function createReactiveProps<Props extends IconLitePropsInclude>(initial: Props): Props {
  return reactive<Record<string, unknown>>(initial) as Props
}

describe('IconTrailingInclude', () => {
  const naming = new DesignName('d1.button')

  describe('IconTrailingInclude', () => {
    it('should report isIcon, isIconTrailing, and hasAtLeastOneIcon across all combinations', () => {
      const props = createReactiveProps<IconTrailingPropsInclude>({})
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
      const props = createReactiveProps<IconTrailingPropsInclude>({
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
      const props = createReactiveProps<IconTrailingPropsInclude>({
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

    it('should fall back trailingBind.asPalette to iconPalette when iconTrailingPalette is omitted or false, and support object iconTrailing values', () => {
      const props = createReactiveProps<IconTrailingPropsInclude>({
        icon: { icon: 'folder', overlay: true },
        iconTrailing: { icon: 'chevron_right', hide: true },
        iconPalette: true
      })

      const include = new IconTrailingInclude(props, naming)

      expect(include.iconBind.icon).toBe('folder')
      expect(include.iconBind.overlay).toBe(true)
      expect(include.trailingBind.icon).toBe('chevron_right')
      expect(include.trailingBind.hide).toBe(true)
      expect(include.trailingBind.asPalette).toBe(true)

      props.iconPalette = false
      expect(Boolean(include.trailingBind.asPalette)).toBe(false)
    })

    it('should render both main and trailing icons in order via render()', () => {
      const props = createReactiveProps<IconTrailingPropsInclude>({
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
})
