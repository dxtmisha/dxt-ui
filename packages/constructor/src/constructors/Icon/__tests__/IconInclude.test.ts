// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { reactive, ref } from 'vue'
import { type ConstrClass, DesignName, type Undefined } from '@dxtmisha/functional'
import { IconInclude } from '../IconInclude'
import { type IconLitePropsInclude, type IconPropsInclude } from '../basicTypes'

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
    return value.trim().split(/\s+/).filter(Boolean)
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

describe('IconInclude', () => {
  const naming = new DesignName('d1.button')

  describe('IconInclude', () => {
    it('should map status and style props and merge extra, iconAttrs, and subClass without duplicates', () => {
      const props = createReactiveProps<IconPropsInclude>({
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
      const props = createReactiveProps<IconPropsInclude>({
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
