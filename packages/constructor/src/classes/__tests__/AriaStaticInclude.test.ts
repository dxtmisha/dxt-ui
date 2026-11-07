import { describe, it, expect } from 'vitest'
import { AriaStaticInclude } from '../AriaStaticInclude'

describe('AriaStaticInclude', () => {
  describe('Boolean conversion helper (isTrueOrFalse)', () => {
    it('should convert boolean or undefined values to ARIA string literals', () => {
      expect(AriaStaticInclude.isTrueOrFalse(true)).toBe('true')
      expect(AriaStaticInclude.isTrueOrFalse(false)).toBe('false')
      expect(AriaStaticInclude.isTrueOrFalse(undefined)).toBe('false')
    })
  })

  describe('Semantic role and naming attributes', () => {
    it('should return role object', () => {
      expect(AriaStaticInclude.role('button')).toEqual({ role: 'button' })
      expect(AriaStaticInclude.role('img')).toEqual({ role: 'img' })
      expect(AriaStaticInclude.role(undefined)).toEqual({ role: undefined })
    })

    it('should return roledescription attribute when non-empty', () => {
      expect(AriaStaticInclude.roledescription('slide')).toEqual({ 'aria-roledescription': 'slide' })
      expect(AriaStaticInclude.roledescription('')).toEqual({})
      expect(AriaStaticInclude.roledescription(undefined)).toEqual({})
    })

    it('should return label attribute for string or numeric values', () => {
      expect(AriaStaticInclude.label('test-label')).toEqual({ 'aria-label': 'test-label' })
      expect(AriaStaticInclude.label(123)).toEqual({ 'aria-label': 123 })
      expect(AriaStaticInclude.label('')).toEqual({})
      expect(AriaStaticInclude.label(0)).toEqual({})
      expect(AriaStaticInclude.label(undefined)).toEqual({})
    })

    it('should return labelledby and describedby attributes', () => {
      expect(AriaStaticInclude.labelledby('label-id')).toEqual({ 'aria-labelledby': 'label-id' })
      expect(AriaStaticInclude.labelledby('')).toEqual({})
      expect(AriaStaticInclude.labelledby(undefined)).toEqual({})

      expect(AriaStaticInclude.describedby('desc-id')).toEqual({ 'aria-describedby': 'desc-id' })
      expect(AriaStaticInclude.describedby('')).toEqual({})
      expect(AriaStaticInclude.describedby(undefined)).toEqual({})
    })
  })

  describe('Widget states and boolean ARIA attributes', () => {
    it('should return atomic, busy, checked, expanded, and multiselectable attributes', () => {
      expect(AriaStaticInclude.atomic(true)).toEqual({ 'aria-atomic': 'true' })
      expect(AriaStaticInclude.atomic(false)).toEqual({ 'aria-atomic': 'false' })
      expect(AriaStaticInclude.atomic(undefined)).toEqual({ 'aria-atomic': 'false' })

      expect(AriaStaticInclude.busy(true)).toEqual({ 'aria-busy': 'true' })
      expect(AriaStaticInclude.busy(false)).toEqual({ 'aria-busy': 'false' })
      expect(AriaStaticInclude.busy(undefined)).toEqual({ 'aria-busy': 'false' })

      expect(AriaStaticInclude.checked(true)).toEqual({ 'aria-checked': 'true' })
      expect(AriaStaticInclude.checked(false)).toEqual({ 'aria-checked': 'false' })
      expect(AriaStaticInclude.checked(undefined)).toEqual({ 'aria-checked': 'false' })

      expect(AriaStaticInclude.expanded(true)).toEqual({ 'aria-expanded': 'true' })
      expect(AriaStaticInclude.expanded(false)).toEqual({ 'aria-expanded': 'false' })
      expect(AriaStaticInclude.expanded(undefined)).toEqual({ 'aria-expanded': 'false' })

      expect(AriaStaticInclude.multiselectable(true)).toEqual({ 'aria-multiselectable': 'true' })
      expect(AriaStaticInclude.multiselectable(false)).toEqual({ 'aria-multiselectable': 'false' })
      expect(AriaStaticInclude.multiselectable(undefined)).toEqual({ 'aria-multiselectable': 'false' })
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
      expect(AriaStaticInclude.invalid()).toEqual({ 'aria-invalid': 'true' })
    })

    it('should return selected attribute when explicitly boolean and omit when undefined', () => {
      expect(AriaStaticInclude.selected(true)).toEqual({ 'aria-selected': 'true' })
      expect(AriaStaticInclude.selected(false)).toEqual({ 'aria-selected': 'false' })
      expect(AriaStaticInclude.selected(undefined)).toEqual({})
    })

    it('should return current attribute for token strings and boolean states', () => {
      expect(AriaStaticInclude.current('page')).toEqual({ 'aria-current': 'page' })
      expect(AriaStaticInclude.current('step')).toEqual({ 'aria-current': 'step' })
      expect(AriaStaticInclude.current(true)).toEqual({ 'aria-current': 'true' })
      expect(AriaStaticInclude.current(false)).toEqual({ 'aria-current': 'false' })
      expect(AriaStaticInclude.current(undefined)).toEqual({ 'aria-current': 'false' })
    })
  })

  describe('Relationship, live region, and layout attributes', () => {
    it('should return controls and haspopup attributes', () => {
      expect(AriaStaticInclude.controls('element-id')).toEqual({ 'aria-controls': 'element-id' })
      expect(AriaStaticInclude.controls(undefined)).toEqual({})

      expect(AriaStaticInclude.haspopup('dialog')).toEqual({ 'aria-haspopup': 'dialog' })
      expect(AriaStaticInclude.haspopup(true)).toEqual({ 'aria-haspopup': true })
      expect(AriaStaticInclude.haspopup(undefined)).toEqual({})
    })

    it('should return live, orientation, and sort attributes', () => {
      expect(AriaStaticInclude.live('polite')).toEqual({ 'aria-live': 'polite' })
      expect(AriaStaticInclude.live('assertive')).toEqual({ 'aria-live': 'assertive' })
      expect(AriaStaticInclude.live(undefined)).toEqual({})

      expect(AriaStaticInclude.orientation('horizontal')).toEqual({ 'aria-orientation': 'horizontal' })
      expect(AriaStaticInclude.orientation('vertical')).toEqual({ 'aria-orientation': 'vertical' })
      expect(AriaStaticInclude.orientation(undefined)).toEqual({})

      expect(AriaStaticInclude.sort('ascending')).toEqual({ 'aria-sort': 'ascending' })
      expect(AriaStaticInclude.sort('descending')).toEqual({ 'aria-sort': 'descending' })
      expect(AriaStaticInclude.sort('none')).toEqual({ 'aria-sort': 'none' })
      expect(AriaStaticInclude.sort(undefined)).toEqual({})
    })

    it('should return valueMinMax range attributes', () => {
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
      expect(AriaStaticInclude.valueMinMax(undefined, undefined, undefined)).toEqual({
        'aria-valuenow': undefined,
        'aria-valuemin': undefined,
        'aria-valuemax': undefined
      })
    })
  })

  describe('Composite helper methods (control, ariaModal, modal)', () => {
    it('should return composite control attributes', () => {
      expect(AriaStaticInclude.control('test-id', 'test-controls', 'menu', true)).toEqual({
        'id': 'test-id',
        'aria-controls': 'test-controls',
        'aria-haspopup': 'menu',
        'aria-expanded': 'true'
      })
      expect(AriaStaticInclude.control(undefined, undefined, undefined, undefined)).toEqual({
        'id': undefined,
        'aria-expanded': 'false'
      })
    })

    it('should return ariaModal and composite modal attributes', () => {
      expect(AriaStaticInclude.ariaModal(true)).toEqual({ 'aria-modal': true })
      expect(AriaStaticInclude.ariaModal(false)).toEqual({})
      expect(AriaStaticInclude.ariaModal()).toEqual({ 'aria-modal': true })

      expect(AriaStaticInclude.modal(true, 'label-id', 'desc-id')).toEqual({
        'aria-modal': true,
        'aria-labelledby': 'label-id',
        'aria-describedby': 'desc-id'
      })
      expect(AriaStaticInclude.modal(false)).toEqual({})
    })
  })
})
