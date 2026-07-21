// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldInputModeInclude } from '../FieldInputModeInclude'
import { FieldTypeInclude } from '../FieldTypeInclude'

describe('FieldInputModeInclude', () => {
  it('should return inputMode from props if provided', () => {
    const type = new FieldTypeInclude({ type: 'number' })
    const inputMode = new FieldInputModeInclude({ inputMode: 'text' }, type)

    expect(inputMode.item).toBe('text')
  })

  it('should resolve default inputMode based on type', () => {
    const numberType = new FieldTypeInclude({ type: 'number' })
    const inputModeNumber = new FieldInputModeInclude({}, numberType)
    expect(inputModeNumber.item).toBe('numeric')

    const currencyType = new FieldTypeInclude({ type: 'currency' })
    const inputModeCurrency = new FieldInputModeInclude({}, currencyType)
    expect(inputModeCurrency.item).toBe('decimal')

    const telType = new FieldTypeInclude({ type: 'tel' })
    const inputModeTel = new FieldInputModeInclude({}, telType)
    expect(inputModeTel.item).toBe('tel')

    const emailType = new FieldTypeInclude({ type: 'email' })
    const inputModeEmail = new FieldInputModeInclude({}, emailType)
    expect(inputModeEmail.item).toBe('email')

    const textType = new FieldTypeInclude({ type: 'text' })
    const inputModeText = new FieldInputModeInclude({}, textType)
    expect(inputModeText.item).toBeUndefined()
  })

  it('should return autocomplete from props if provided', () => {
    const type = new FieldTypeInclude({ type: 'email' })
    const inputMode = new FieldInputModeInclude({ autocomplete: 'username' }, type)

    expect(inputMode.autocomplete).toBe('username')
  })

  it('should resolve default autocomplete based on type', () => {
    const searchType = new FieldTypeInclude({ type: 'search' })
    const autocompleteSearch = new FieldInputModeInclude({}, searchType)
    expect(autocompleteSearch.autocomplete).toBe('off')

    const passwordType = new FieldTypeInclude({ type: 'password' })
    const autocompletePassword = new FieldInputModeInclude({}, passwordType)
    expect(autocompletePassword.autocomplete).toBe('new-password')

    const textType = new FieldTypeInclude({ type: 'text' })
    const autocompleteText = new FieldInputModeInclude({}, textType)
    expect(autocompleteText.autocomplete).toBeUndefined()
  })
})
