import { describe, it, expect } from 'vitest'
import { AriaStaticInclude } from '../AriaStaticInclude'

describe('AriaStaticInclude', () => {
  it('should return role object', () => {
    expect(AriaStaticInclude.role('button')).toEqual({ role: 'button' })
    expect(AriaStaticInclude.role(undefined)).toEqual({ role: undefined })
  })

  it('should return atomic attribute', () => {
    expect(AriaStaticInclude.atomic(true)).toEqual({ 'aria-atomic': 'true' })
    expect(AriaStaticInclude.atomic(false)).toEqual({ 'aria-atomic': 'false' })
    expect(AriaStaticInclude.atomic(undefined)).toEqual({ 'aria-atomic': 'false' })
  })

  it('should return checked attribute', () => {
    expect(AriaStaticInclude.checked(true)).toEqual({ 'aria-checked': 'true' })
    expect(AriaStaticInclude.checked(false)).toEqual({ 'aria-checked': 'false' })
    expect(AriaStaticInclude.checked(undefined)).toEqual({ 'aria-checked': 'false' })
  })

  it('should return controls attribute', () => {
    expect(AriaStaticInclude.controls('element-id')).toEqual({ 'aria-controls': 'element-id' })
    expect(AriaStaticInclude.controls(undefined)).toEqual({})
  })

  it('should return current attribute', () => {
    expect(AriaStaticInclude.current('page')).toEqual({ 'aria-current': 'page' })
    expect(AriaStaticInclude.current(true)).toEqual({ 'aria-current': 'true' })
    expect(AriaStaticInclude.current(false)).toEqual({ 'aria-current': 'false' })
    expect(AriaStaticInclude.current(undefined)).toEqual({ 'aria-current': 'false' })
  })

  it('should return busy attribute', () => {
    expect(AriaStaticInclude.busy(true)).toEqual({ 'aria-busy': 'true' })
    expect(AriaStaticInclude.busy(false)).toEqual({ 'aria-busy': 'false' })
    expect(AriaStaticInclude.busy(undefined)).toEqual({ 'aria-busy': 'false' })
  })

  it('should return describedby attribute', () => {
    expect(AriaStaticInclude.describedby('desc-id')).toEqual({ 'aria-describedby': 'desc-id' })
    expect(AriaStaticInclude.describedby(undefined)).toEqual({})
  })

  it('should return disabled attribute', () => {
    expect(AriaStaticInclude.disabled(true)).toEqual({ 'aria-disabled': 'true' })
    expect(AriaStaticInclude.disabled(false)).toEqual({})
    expect(AriaStaticInclude.disabled()).toEqual({ 'aria-disabled': 'true' })
  })

  it('should return expanded attribute', () => {
    expect(AriaStaticInclude.expanded(true)).toEqual({ 'aria-expanded': 'true' })
    expect(AriaStaticInclude.expanded(false)).toEqual({ 'aria-expanded': 'false' })
    expect(AriaStaticInclude.expanded(undefined)).toEqual({ 'aria-expanded': 'false' })
  })

  it('should return haspopup attribute', () => {
    expect(AriaStaticInclude.haspopup('dialog')).toEqual({ 'aria-haspopup': 'dialog' })
    expect(AriaStaticInclude.haspopup(undefined)).toEqual({})
  })

  it('should return label attribute', () => {
    expect(AriaStaticInclude.label('test-label')).toEqual({ 'aria-label': 'test-label' })
    expect(AriaStaticInclude.label(123)).toEqual({ 'aria-label': 123 })
    expect(AriaStaticInclude.label(undefined)).toEqual({})
  })

  it('should return labelledby attribute', () => {
    expect(AriaStaticInclude.labelledby('label-id')).toEqual({ 'aria-labelledby': 'label-id' })
    expect(AriaStaticInclude.labelledby(undefined)).toEqual({})
  })

  it('should return invalid attribute', () => {
    expect(AriaStaticInclude.invalid(true)).toEqual({ 'aria-invalid': 'true' })
    expect(AriaStaticInclude.invalid(false)).toEqual({})
    expect(AriaStaticInclude.invalid()).toEqual({ 'aria-invalid': 'true' })
  })

  it('should return control roles combined', () => {
    expect(AriaStaticInclude.control('test-id', 'test-controls', 'menu', true)).toEqual({
      id: 'test-id',
      'aria-controls': 'test-controls',
      'aria-haspopup': 'menu',
      'aria-expanded': 'true'
    })
    expect(AriaStaticInclude.control(undefined, undefined, undefined, undefined)).toEqual({
      id: undefined,
      'aria-expanded': 'false'
    })
  })

  it('should return hidden attribute', () => {
    expect(AriaStaticInclude.hidden(true)).toEqual({ 'aria-hidden': 'true' })
    expect(AriaStaticInclude.hidden(false)).toEqual({ 'aria-hidden': 'false' })
    expect(AriaStaticInclude.hidden()).toEqual({ 'aria-hidden': 'true' })
  })

  it('should return live attribute', () => {
    expect(AriaStaticInclude.live('polite')).toEqual({ 'aria-live': 'polite' })
    expect(AriaStaticInclude.live(undefined)).toEqual({})
  })

  it('should return ariaModal attribute', () => {
    expect(AriaStaticInclude.ariaModal(true)).toEqual({ 'aria-modal': true })
    expect(AriaStaticInclude.ariaModal(false)).toEqual({})
    expect(AriaStaticInclude.ariaModal()).toEqual({ 'aria-modal': true })
  })

  it('should return modal attributes combined', () => {
    expect(AriaStaticInclude.modal(true, 'label-id', 'desc-id')).toEqual({
      'aria-modal': true,
      'aria-labelledby': 'label-id',
      'aria-describedby': 'desc-id'
    })
  })

  it('should return multiselectable attribute', () => {
    expect(AriaStaticInclude.multiselectable(true)).toEqual({ 'aria-multiselectable': 'true' })
    expect(AriaStaticInclude.multiselectable(false)).toEqual({ 'aria-multiselectable': 'false' })
    expect(AriaStaticInclude.multiselectable(undefined)).toEqual({ 'aria-multiselectable': 'false' })
  })

  it('should return selected attribute', () => {
    expect(AriaStaticInclude.selected(true)).toEqual({ 'aria-selected': 'true' })
    expect(AriaStaticInclude.selected(false)).toEqual({ 'aria-selected': 'false' })
    expect(AriaStaticInclude.selected(undefined)).toEqual({})
  })

  it('should return valueMinMax attributes', () => {
    expect(AriaStaticInclude.valueMinMax(50, 0, 100)).toEqual({
      'aria-valuenow': 50,
      'aria-valuemin': 0,
      'aria-valuemax': 100
    })
    expect(AriaStaticInclude.valueMinMax(undefined, undefined, undefined)).toEqual({
      'aria-valuenow': undefined,
      'aria-valuemin': undefined,
      'aria-valuemax': undefined
    })
  })

  it('should format true or false value to string', () => {
    expect(AriaStaticInclude.isTrueOrFalse(true)).toBe('true')
    expect(AriaStaticInclude.isTrueOrFalse(false)).toBe('false')
    expect(AriaStaticInclude.isTrueOrFalse(undefined)).toBe('false')
  })
})
