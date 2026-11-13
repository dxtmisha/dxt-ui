// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { computed, h, reactive } from 'vue'
import { type ConstrBind, type ConstrClass, DesignComponents, DesignName, type Undefined } from '@dxtmisha/functional'
import { IconLiteInclude } from '../IconLiteInclude'
import { type IconComponentInclude, type IconLitePropsInclude } from '../basicTypes'
import { type IconPropsBasic } from '../props'

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

describe('IconLiteInclude', () => {
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
      const props = createReactiveProps<IconLitePropsInclude>({ icon: 'home' })
      const extra = computed<ConstrBind<IconPropsBasic>>(() => ({
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
      const state = createReactiveProps<IconLitePropsInclude>({ icon: 'star' })
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
})
