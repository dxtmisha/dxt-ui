import { describe, it, expect, expectTypeOf, afterEach, vi } from 'vitest'
import { createSSRApp, h } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { AriaStaticInclude } from '../AriaStaticInclude'
import type { AriaList } from '../../types/ariaTypes'
import type { RoleType } from '../../types/roleTypes'

describe('AriaStaticInclude', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should convert boolean values to ARIA string literals via isTrueOrFalse', () => {
      expect(AriaStaticInclude.isTrueOrFalse(true)).toBe('true')
      expect(AriaStaticInclude.isTrueOrFalse(false)).toBe('false')
      expect(AriaStaticInclude.isTrueOrFalse(undefined)).toBe('false')
      expectTypeOf(AriaStaticInclude.isTrueOrFalse(true)).toEqualTypeOf<'true' | 'false'>()
    })

    it.each<RoleType>([
      'button',
      'checkbox',
      'dialog',
      'grid',
      'img',
      'link',
      'listbox',
      'menu',
      'navigation',
      'progressbar',
      'radio',
      'radiogroup',
      'region',
      'row',
      'separator',
      'slider',
      'switch',
      'tab',
      'table',
      'tablist',
      'tabpanel',
      'timer'
    ])('should return role attribute for %s', (role) => {
      expect(AriaStaticInclude.role(role)).toEqual({ role })
    })

    it('should return roledescription, label, labelledby, and describedby attributes', () => {
      expect(AriaStaticInclude.roledescription('slide')).toEqual({ 'aria-roledescription': 'slide' })
      expect(AriaStaticInclude.label('Save changes')).toEqual({ 'aria-label': 'Save changes' })
      expect(AriaStaticInclude.label(123)).toEqual({ 'aria-label': 123 })
      expect(AriaStaticInclude.labelledby('label-id')).toEqual({ 'aria-labelledby': 'label-id' })
      expect(AriaStaticInclude.describedby('desc-id')).toEqual({ 'aria-describedby': 'desc-id' })

      expectTypeOf(AriaStaticInclude.label('test')).toEqualTypeOf<AriaList>()
    })

    it('should return atomic, busy, checked, expanded, multiselectable, and pressed attributes', () => {
      expect(AriaStaticInclude.atomic(true)).toEqual({ 'aria-atomic': 'true' })
      expect(AriaStaticInclude.atomic(false)).toEqual({ 'aria-atomic': 'false' })
      expect(AriaStaticInclude.atomic()).toEqual({ 'aria-atomic': 'false' })

      expect(AriaStaticInclude.busy(true)).toEqual({ 'aria-busy': 'true' })
      expect(AriaStaticInclude.busy(false)).toEqual({ 'aria-busy': 'false' })
      expect(AriaStaticInclude.busy()).toEqual({ 'aria-busy': 'false' })

      expect(AriaStaticInclude.checked(true)).toEqual({ 'aria-checked': 'true' })
      expect(AriaStaticInclude.checked(false)).toEqual({ 'aria-checked': 'false' })
      expect(AriaStaticInclude.checked()).toEqual({ 'aria-checked': 'false' })
      expect(AriaStaticInclude.checked('mixed')).toEqual({ 'aria-checked': 'mixed' })
      expect(AriaStaticInclude.checked('true')).toEqual({ 'aria-checked': 'true' })
      expect(AriaStaticInclude.checked('false')).toEqual({ 'aria-checked': 'false' })

      expect(AriaStaticInclude.expanded(true)).toEqual({ 'aria-expanded': 'true' })
      expect(AriaStaticInclude.expanded(false)).toEqual({ 'aria-expanded': 'false' })
      expect(AriaStaticInclude.expanded()).toEqual({ 'aria-expanded': 'false' })

      expect(AriaStaticInclude.multiselectable(true)).toEqual({ 'aria-multiselectable': 'true' })
      expect(AriaStaticInclude.multiselectable(false)).toEqual({ 'aria-multiselectable': 'false' })
      expect(AriaStaticInclude.multiselectable()).toEqual({ 'aria-multiselectable': 'false' })

      expect(AriaStaticInclude.pressed(true)).toEqual({ 'aria-pressed': 'true' })
      expect(AriaStaticInclude.pressed(false)).toEqual({ 'aria-pressed': 'false' })
      expect(AriaStaticInclude.pressed()).toEqual({ 'aria-pressed': 'false' })
      expect(AriaStaticInclude.pressed('mixed')).toEqual({ 'aria-pressed': 'mixed' })
      expect(AriaStaticInclude.pressed('true')).toEqual({ 'aria-pressed': 'true' })
      expect(AriaStaticInclude.pressed('false')).toEqual({ 'aria-pressed': 'false' })
    })

    it('should return hidden attribute with default true', () => {
      expect(AriaStaticInclude.hidden(true)).toEqual({ 'aria-hidden': 'true' })
      expect(AriaStaticInclude.hidden(false)).toEqual({ 'aria-hidden': 'false' })
      expect(AriaStaticInclude.hidden()).toEqual({ 'aria-hidden': 'true' })
    })

    it('should return disabled, readonly, and invalid attributes only when active', () => {
      expect(AriaStaticInclude.disabled(true)).toEqual({ 'aria-disabled': 'true' })
      expect(AriaStaticInclude.disabled(false)).toEqual({})
      expect(AriaStaticInclude.disabled()).toEqual({ 'aria-disabled': 'true' })

      expect(AriaStaticInclude.readonly(true)).toEqual({ 'aria-readonly': 'true' })
      expect(AriaStaticInclude.readonly(false)).toEqual({})
      expect(AriaStaticInclude.readonly()).toEqual({ 'aria-readonly': 'true' })

      expect(AriaStaticInclude.invalid(true)).toEqual({ 'aria-invalid': 'true' })
      expect(AriaStaticInclude.invalid(false)).toEqual({})
      expect(AriaStaticInclude.invalid('false')).toEqual({})
      expect(AriaStaticInclude.invalid('true')).toEqual({ 'aria-invalid': 'true' })
      expect(AriaStaticInclude.invalid('grammar')).toEqual({ 'aria-invalid': 'grammar' })
      expect(AriaStaticInclude.invalid('spelling')).toEqual({ 'aria-invalid': 'spelling' })
      expect(AriaStaticInclude.invalid()).toEqual({ 'aria-invalid': 'true' })
    })

    it('should return selected attribute when explicitly boolean and omit when undefined or null', () => {
      expect(AriaStaticInclude.selected(true)).toEqual({ 'aria-selected': 'true' })
      expect(AriaStaticInclude.selected(false)).toEqual({ 'aria-selected': 'false' })
      expect(AriaStaticInclude.selected(undefined)).toEqual({})
      expect(AriaStaticInclude.selected(null)).toEqual({})
    })

    it.each<NonNullable<AriaList['aria-current']>>([
      'page',
      'step',
      'location',
      'date',
      'time',
      'true',
      'false'
    ])('should return current attribute for string token %s', (token) => {
      expect(AriaStaticInclude.current(token)).toEqual({ 'aria-current': token })
    })

    it('should return current attribute for boolean and undefined states', () => {
      expect(AriaStaticInclude.current(true)).toEqual({ 'aria-current': 'true' })
      expect(AriaStaticInclude.current(false)).toEqual({ 'aria-current': 'false' })
      expect(AriaStaticInclude.current(undefined)).toEqual({ 'aria-current': 'false' })
    })

    it.each<NonNullable<AriaList['aria-haspopup']>>([
      'true',
      'dialog',
      'menu',
      'listbox',
      'tree',
      'grid'
    ])('should return haspopup attribute for %s', (popupType) => {
      expect(AriaStaticInclude.haspopup(popupType)).toEqual({ 'aria-haspopup': popupType })
    })

    it('should convert boolean true to string "true" in haspopup', () => {
      expect(AriaStaticInclude.haspopup(true)).toEqual({ 'aria-haspopup': 'true' })
    })

    it.each<NonNullable<AriaList['aria-live']>>(['off', 'polite', 'assertive'])('should return live attribute for %s', (live) => {
      expect(AriaStaticInclude.live(live)).toEqual({ 'aria-live': live })
    })

    it.each<NonNullable<AriaList['aria-orientation']>>(['horizontal', 'vertical', 'undefined'])('should return orientation attribute for %s', (orientation) => {
      expect(AriaStaticInclude.orientation(orientation)).toEqual({ 'aria-orientation': orientation })
    })

    it.each<NonNullable<AriaList['aria-sort']>>(['none', 'ascending', 'descending', 'other'])('should return sort attribute for %s', (sortDir) => {
      expect(AriaStaticInclude.sort(sortDir)).toEqual({ 'aria-sort': sortDir })
    })

    it('should return sort attribute for custom string values', () => {
      expect(AriaStaticInclude.sort('custom-sort')).toEqual({ 'aria-sort': 'custom-sort' })
    })

    it('should return controls, activedescendant, and composite control, ariaModal, and modal attributes', () => {
      expect(AriaStaticInclude.activedescendant('active-item-id')).toEqual({ 'aria-activedescendant': 'active-item-id' })
      expect(AriaStaticInclude.controls('panel-id')).toEqual({ 'aria-controls': 'panel-id' })

      expect(AriaStaticInclude.control('trigger-id', 'menu-id', 'menu', true)).toEqual({
        'id': 'trigger-id',
        'aria-controls': 'menu-id',
        'aria-haspopup': 'menu',
        'aria-expanded': 'true'
      })

      expect(AriaStaticInclude.ariaModal(true)).toEqual({ 'aria-modal': 'true' })
      expect(AriaStaticInclude.ariaModal(false)).toEqual({})
      expect(AriaStaticInclude.ariaModal()).toEqual({ 'aria-modal': 'true' })

      expect(AriaStaticInclude.modal(true, 'label-id', 'desc-id')).toEqual({
        'aria-modal': 'true',
        'aria-labelledby': 'label-id',
        'aria-describedby': 'desc-id'
      })
      expect(AriaStaticInclude.modal(false, 'label-id', 'desc-id')).toEqual({
        'aria-labelledby': 'label-id',
        'aria-describedby': 'desc-id'
      })
      expect(AriaStaticInclude.modal(false)).toEqual({})
    })

    it('should return valueMinMax range attributes for numeric and string ranges', () => {
      expect(AriaStaticInclude.valueMinMax(50, 0, 100)).toEqual({
        'aria-valuenow': 50,
        'aria-valuemin': 0,
        'aria-valuemax': 100
      })
      expect(AriaStaticInclude.valueMinMax('50%', '0%', '100%')).toEqual({
        'aria-valuenow': '50%',
        'aria-valuemin': '0%',
        'aria-valuemax': '100%'
      })
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should preserve numeric 0, floats, and negative values in valueMinMax while omitting null and NaN', () => {
      expect(AriaStaticInclude.valueMinMax(0, 0, 0)).toEqual({
        'aria-valuenow': 0,
        'aria-valuemin': 0,
        'aria-valuemax': 0
      })
      expect(AriaStaticInclude.valueMinMax(0.5, -100, 0)).toEqual({
        'aria-valuenow': 0.5,
        'aria-valuemin': -100,
        'aria-valuemax': 0
      })
      expect(AriaStaticInclude.valueMinMax(Number.NaN, null, 100)).toEqual({
        'aria-valuemax': 100
      })
    })

    it('should omit haspopup inside composite control when false or "false"', () => {
      expect(AriaStaticInclude.control('btn-id', 'panel-id', false, true)).toEqual({
        'id': 'btn-id',
        'aria-controls': 'panel-id',
        'aria-expanded': 'true'
      })
      expect(AriaStaticInclude.control('btn-id', 'panel-id', 'false', false)).toEqual({
        'id': 'btn-id',
        'aria-controls': 'panel-id',
        'aria-expanded': 'false'
      })
    })

    it('should omit numeric 0 in label while preserving string "0" per contract', () => {
      expect(AriaStaticInclude.label(0)).toEqual({})
      expect(AriaStaticInclude.label('0')).toEqual({ 'aria-label': '0' })
    })

    it('should omit haspopup when false or "false"', () => {
      expect(AriaStaticInclude.haspopup(false)).toEqual({})
      expect(AriaStaticInclude.haspopup('false')).toEqual({})
    })

    it('should omit non-modal attributes in modal(false) while keeping explicit labelledby/describedby', () => {
      expect(AriaStaticInclude.modal(false, 'header-id')).toEqual({
        'aria-labelledby': 'header-id'
      })
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should omit empty string and undefined values without overwriting existing attributes during spread', () => {
      expect(AriaStaticInclude.role('')).toEqual({})
      expect(AriaStaticInclude.role(undefined)).toEqual({})

      expect(AriaStaticInclude.roledescription('')).toEqual({})
      expect(AriaStaticInclude.roledescription(undefined)).toEqual({})

      expect(AriaStaticInclude.label('')).toEqual({})
      expect(AriaStaticInclude.label(undefined)).toEqual({})

      expect(AriaStaticInclude.labelledby('')).toEqual({})
      expect(AriaStaticInclude.labelledby(undefined)).toEqual({})

      expect(AriaStaticInclude.describedby('')).toEqual({})
      expect(AriaStaticInclude.describedby(undefined)).toEqual({})

      expect(AriaStaticInclude.activedescendant('')).toEqual({})
      expect(AriaStaticInclude.activedescendant(undefined)).toEqual({})

      expect(AriaStaticInclude.controls('')).toEqual({})
      expect(AriaStaticInclude.controls(undefined)).toEqual({})

      expect(AriaStaticInclude.haspopup(undefined)).toEqual({})
      expect(AriaStaticInclude.live(undefined)).toEqual({})
      expect(AriaStaticInclude.orientation(undefined)).toEqual({})
      expect(AriaStaticInclude.sort('')).toEqual({})
      expect(AriaStaticInclude.sort(undefined)).toEqual({})

      expect(AriaStaticInclude.control(undefined, undefined, undefined, undefined)).toEqual({
        'aria-expanded': 'false'
      })
      expect(AriaStaticInclude.control('', '', undefined, false)).toEqual({
        'aria-expanded': 'false'
      })

      expect(AriaStaticInclude.valueMinMax(undefined, undefined, undefined)).toEqual({})
      expect(AriaStaticInclude.valueMinMax('', '', '')).toEqual({})
      expect(AriaStaticInclude.valueMinMax(undefined, 0, 100)).toEqual({
        'aria-valuemin': 0,
        'aria-valuemax': 100
      })

      const merged = {
        role: 'button',
        id: 'existing-id',
        ...AriaStaticInclude.role(undefined),
        ...AriaStaticInclude.control(undefined, undefined, undefined, true)
      }
      expect(merged).toEqual({
        'role': 'button',
        'id': 'existing-id',
        'aria-expanded': 'true'
      })
    })

    it('should preserve whitespace-only strings when explicitly passed to label', () => {
      expect(AriaStaticInclude.label('   ')).toEqual({ 'aria-label': '   ' })
    })
  })

  describe('Immutability and isolation', () => {
    it('should return fresh plain objects on each call without shared mutable references', () => {
      const first = AriaStaticInclude.modal(true, 'title-1', 'desc-1')
      const second = AriaStaticInclude.modal(true, 'title-1', 'desc-1')

      expect(first).toEqual(second)
      expect(first).not.toBe(second)

      first['aria-label'] = 'mutated'
      expect(second['aria-label']).toBeUndefined()
    })
  })

  describe('Multilingual and Unicode handling', () => {
    it('should preserve Cyrillic, Vietnamese diacritics, CJK, and multi-byte Emoji in label and roledescription', () => {
      expect(AriaStaticInclude.label('Закрыть окно — Tiếng Việt 🚀')).toEqual({
        'aria-label': 'Закрыть окно — Tiếng Việt 🚀'
      })
      expect(AriaStaticInclude.roledescription('Слайд • 項目 • 👨‍👩‍👧‍👦')).toEqual({
        'aria-roledescription': 'Слайд • 項目 • 👨‍👩‍👧‍👦'
      })
    })
  })

  describe('SSR isomorphism and Vue attribute rendering', () => {
    it('should render valid ARIA HTML attributes in SSR without browser DOM globals', async () => {
      const app = createSSRApp({
        render() {
          return h('button', {
            ...AriaStaticInclude.role('button'),
            ...AriaStaticInclude.control('trigger-1', 'dialog-1', 'dialog', false),
            ...AriaStaticInclude.label('Открыть меню'),
            ...AriaStaticInclude.disabled(false),
            ...AriaStaticInclude.pressed('mixed')
          })
        }
      })

      const html = await renderToString(app)

      expect(html).toContain('role="button"')
      expect(html).toContain('id="trigger-1"')
      expect(html).toContain('aria-controls="dialog-1"')
      expect(html).toContain('aria-haspopup="dialog"')
      expect(html).toContain('aria-expanded="false"')
      expect(html).toContain('aria-label="Открыть меню"')
      expect(html).toContain('aria-pressed="mixed"')
      expect(html).not.toContain('aria-disabled')
    })

    it('should omit empty/undefined attributes while rendering zero min/max during Vue SSR serialization', async () => {
      const app = createSSRApp({
        render() {
          return h('div', {
            ...AriaStaticInclude.role(undefined),
            ...AriaStaticInclude.valueMinMax(undefined, 0, 100)
          })
        }
      })

      const html = await renderToString(app)

      expect(html).not.toContain('role=')
      expect(html).not.toContain('aria-valuenow=')
      expect(html).toContain('aria-valuemin="0"')
      expect(html).toContain('aria-valuemax="100"')
    })

    it('should safely escape quote and angle-bracket characters in attribute values during Vue SSR serialization', async () => {
      const app = createSSRApp({
        render() {
          return h('button', {
            ...AriaStaticInclude.role('button'),
            ...AriaStaticInclude.label('" onclick="alert(1)" <script>')
          })
        }
      })

      const html = await renderToString(app)

      expect(html).toContain('aria-label="&quot; onclick=&quot;alert(1)&quot; &lt;script&gt;"')
      expect(html).not.toContain('onclick="alert(1)"')
    })
  })
})
