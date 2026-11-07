// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldAttributesInclude } from '../FieldAttributesInclude'
import { FieldTypeInclude } from '../FieldTypeInclude'
import { FieldPatternInclude } from '../FieldPatternInclude'
import { FieldInputModeInclude } from '../FieldInputModeInclude'

describe('FieldAttributesInclude', () => {
  it('should compile basic validation attributes list even without explicit undefined keys in props', () => {
    const type = new FieldTypeInclude({ type: 'email' })
    const pattern = new FieldPatternInclude({ pattern: '[a-z]+' })
    const attrs = new FieldAttributesInclude(
      { name: 'my-input', required: true },
      () => type,
      () => pattern
    )

    expect(attrs.list.type).toBe('email')
    expect(attrs.list.name).toBe('my-input')
    expect(attrs.list.required).toBe(true)
    expect(attrs.list.pattern).toBe('[a-z]+')
  })

  it('should fallback to raw props and typeDefault when type, pattern, and inputMode helpers are omitted', () => {
    const attrs = new FieldAttributesInclude({
      type: 'tel',
      pattern: '\\d+',
      inputMode: 'numeric',
      autocomplete: 'tel',
      capture: 'environment'
    })

    expect(attrs.listForInput.type).toBe('tel')
    expect(attrs.listForInput.pattern).toBe('\\d+')
    expect(attrs.listForInput.inputMode).toBe('numeric')
    expect(attrs.listForInput.autocomplete).toBe('tel')
    expect(attrs.listForInput.capture).toBe('environment')

    const attrsDefaultType = new FieldAttributesInclude({}, undefined, undefined, undefined, 'file')
    expect(attrsDefaultType.listForInput.type).toBe('file')
  })

  it('should force type to number in listForCheck if min, max or step properties are present (including 0)', () => {
    const type = new FieldTypeInclude({ type: 'text' })
    const attrsMinZero = new FieldAttributesInclude({ min: 0 }, () => type)
    const attrsMax = new FieldAttributesInclude({ max: 10 }, () => type)
    const attrsStep = new FieldAttributesInclude({ step: 2 }, () => type)

    expect(attrsMinZero.list.type).toBe('text')
    expect(attrsMinZero.listForCheck.type).toBe('number')
    expect(attrsMax.listForCheck.type).toBe('number')
    expect(attrsStep.listForCheck.type).toBe('number')
  })

  it('should extract extra input attributes and merge inputAttrs in listForInput', () => {
    const type = new FieldTypeInclude({ type: 'password' })
    const inputMode = new FieldInputModeInclude({ type: 'password', inputMode: 'text' })
    const attrs = new FieldAttributesInclude(
      {
        readonly: true,
        disabled: false,
        placeholder: 'Enter password',
        inputAttrs: { 'data-testid': 'pwd-input' }
      },
      () => type,
      undefined,
      () => inputMode
    )

    const list = attrs.listForInput
    expect(list.type).toBe('password')
    expect(list.readonly).toBe(true)
    expect(list.disabled).toBe(false)
    expect(list.placeholder).toBe('Enter password')
    expect(list.inputMode).toBe('text')
    expect(list.autocomplete).toBe('new-password')
    expect(list['data-testid']).toBe('pwd-input')
  })

  it('should append valueVariant to checkbox attributes only when defined', () => {
    const attrs = new FieldAttributesInclude({ valueVariant: 'checked-state' })
    expect(attrs.listForCheckbox.value).toBe('checked-state')

    const attrsFromInputAttrs = new FieldAttributesInclude({ inputAttrs: { value: 'custom-val' } })
    expect(attrsFromInputAttrs.listForCheckbox.value).toBe('custom-val')
  })

  it('should accept props as a function', () => {
    let required = false
    const attrs = new FieldAttributesInclude(() => ({
      name: 'dynamic-input',
      required
    }))

    expect(attrs.list.name).toBe('dynamic-input')
    expect(attrs.list.required).toBe(false)

    required = true
    expect(attrs.list.required).toBe(true)
  })
})
