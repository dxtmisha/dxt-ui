// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldAttributesInclude } from '../FieldAttributesInclude'
import { FieldTypeInclude } from '../FieldTypeInclude'
import { FieldPatternInclude } from '../FieldPatternInclude'
import { FieldInputModeInclude } from '../FieldInputModeInclude'

describe('FieldAttributesInclude', () => {
  it('should compile basic validation attributes list', () => {
    const type = new FieldTypeInclude({ type: 'email' })
    const pattern = new FieldPatternInclude({ pattern: '[a-z]+' })
    const attrs = new FieldAttributesInclude(
      { name: 'my-input', required: true, type: undefined, pattern: undefined },
      () => type,
      () => pattern
    )

    expect(attrs.list.type).toBe('email')
    expect(attrs.list.name).toBe('my-input')
    expect(attrs.list.required).toBe(true)
    expect(attrs.list.pattern).toBe('[a-z]+')
  })

  it('should fallback to raw props when type, pattern, and inputMode helpers are omitted', () => {
    const attrs = new FieldAttributesInclude({
      type: 'tel',
      pattern: '\\d+',
      inputMode: 'numeric',
      autocomplete: 'tel'
    })

    expect(attrs.listForInput.type).toBe('tel')
    expect(attrs.listForInput.pattern).toBe('\\d+')
    expect(attrs.listForInput.inputMode).toBe('numeric')
    expect(attrs.listForInput.autocomplete).toBe('tel')
  })

  it('should force type to number in listForCheck if min, max or step properties are present', () => {
    const type = new FieldTypeInclude({ type: 'text' })
    const attrsMin = new FieldAttributesInclude({ min: 5, type: undefined }, () => type)
    const attrsMax = new FieldAttributesInclude({ max: 10, type: undefined }, () => type)
    const attrsStep = new FieldAttributesInclude({ step: 2, type: undefined }, () => type)

    expect(attrsMin.list.type).toBe('text')
    expect(attrsMin.listForCheck.type).toBe('number')
    expect(attrsMax.listForCheck.type).toBe('number')
    expect(attrsStep.listForCheck.type).toBe('number')
  })

  it('should extract extra input attributes and merge inputAttrs in listForInput', () => {
    const type = new FieldTypeInclude({ type: 'password' })
    const inputMode = new FieldInputModeInclude({ inputMode: 'text' }, () => type)
    const attrs = new FieldAttributesInclude(
      {
        readonly: true,
        disabled: false,
        placeholder: 'Enter password',
        type: undefined,
        inputMode: undefined,
        autocomplete: undefined,
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

  it('should append valueVariant to checkbox attributes', () => {
    const attrs = new FieldAttributesInclude({ valueVariant: 'checked-state' })
    expect(attrs.listForCheckbox.value).toBe('checked-state')
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
