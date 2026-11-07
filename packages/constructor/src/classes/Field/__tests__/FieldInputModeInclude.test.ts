// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { FieldInputModeInclude } from '../FieldInputModeInclude'

describe('FieldInputModeInclude', () => {
  it('should return inputMode from props if provided', () => {
    const inputMode = new FieldInputModeInclude({ type: 'number', inputMode: 'text' })

    expect(inputMode.item).toBe('text')
  })

  it('should resolve default inputMode based on type', () => {
    const inputModeSearch = new FieldInputModeInclude({ type: 'search' })
    expect(inputModeSearch.item).toBe('search')

    const inputModeNumber = new FieldInputModeInclude({ type: 'number' })
    expect(inputModeNumber.item).toBe('numeric')

    const inputModeCurrency = new FieldInputModeInclude({ type: 'currency' })
    expect(inputModeCurrency.item).toBe('decimal')

    const inputModeTel = new FieldInputModeInclude({ type: 'tel' })
    expect(inputModeTel.item).toBe('tel')

    const inputModeUrl = new FieldInputModeInclude({ type: 'url' })
    expect(inputModeUrl.item).toBe('url')

    const inputModeEmail = new FieldInputModeInclude({ type: 'email' })
    expect(inputModeEmail.item).toBe('email')

    const inputModeText = new FieldInputModeInclude({ type: 'text' })
    expect(inputModeText.item).toBeUndefined()
  })

  it('should return autocomplete from props if provided', () => {
    const inputMode = new FieldInputModeInclude({ type: 'email', autocomplete: 'username' })

    expect(inputMode.autocomplete).toBe('username')
  })

  it('should resolve default autocomplete based on type', () => {
    const autocompleteSearch = new FieldInputModeInclude({ type: 'search' })
    expect(autocompleteSearch.autocomplete).toBe('off')

    const autocompleteDate = new FieldInputModeInclude({ type: 'date' })
    expect(autocompleteDate.autocomplete).toBe('off')

    const autocompleteCurrency = new FieldInputModeInclude({ type: 'currency' })
    expect(autocompleteCurrency.autocomplete).toBe('off')

    const autocompletePassword = new FieldInputModeInclude({ type: 'password' })
    expect(autocompletePassword.autocomplete).toBe('new-password')

    const autocompleteText = new FieldInputModeInclude({ type: 'text' })
    expect(autocompleteText.autocomplete).toBeUndefined()
  })

  it('should handle empty props when type is not provided', () => {
    const inputMode = new FieldInputModeInclude({})
    expect(inputMode.item).toBeUndefined()
    expect(inputMode.autocomplete).toBeUndefined()

    const inputModeWithProps = new FieldInputModeInclude({
      inputMode: 'search',
      autocomplete: 'off'
    })
    expect(inputModeWithProps.item).toBe('search')
    expect(inputModeWithProps.autocomplete).toBe('off')
  })
})
