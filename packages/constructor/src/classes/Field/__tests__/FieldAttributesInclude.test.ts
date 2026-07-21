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
      type,
      pattern
    )

    expect(attrs.list.type).toBe('email')
    expect(attrs.list.name).toBe('my-input')
    expect(attrs.list.required).toBe(true)
    expect(attrs.list.pattern).toBe('[a-z]+')
  })

  it('should force type to number in listForCheck if min, max or step properties are present', () => {
    const type = new FieldTypeInclude({ type: 'text' })
    const attrs = new FieldAttributesInclude({ min: 5, type: undefined }, type)

    expect(attrs.list.type).toBe('text')
    expect(attrs.listForCheck.type).toBe('number')
  })

  it('should extract extra input attributes in listForInput', () => {
    const type = new FieldTypeInclude({ type: 'password' })
    const inputMode = new FieldInputModeInclude({}, type)
    const attrs = new FieldAttributesInclude(
      {
        readonly: true,
        disabled: false,
        placeholder: 'Enter password',
        type: undefined,
        inputMode: undefined,
        autocomplete: undefined
      },
      type,
      undefined,
      inputMode
    )

    const list = attrs.listForInput
    expect(list.type).toBe('password')
    expect(list.readonly).toBe(true)
    expect(list.disabled).toBe(false)
    expect(list.placeholder).toBe('Enter password')
    expect(list.autocomplete).toBe('new-password')
  })

  it('should append valueVariant to checkbox attributes', () => {
    const attrs = new FieldAttributesInclude({ valueVariant: 'checked-state' })
    expect(attrs.listForCheckbox.value).toBe('checked-state')
  })
})
