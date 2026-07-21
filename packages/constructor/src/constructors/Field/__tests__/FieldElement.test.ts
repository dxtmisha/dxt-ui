// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { ref, nextTick } from 'vue'
import { FieldElement } from '../FieldElement'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue') as any
  return {
    ...actual,
    onMounted: (fn: () => void) => fn()
  }
})

describe('FieldElement', () => {
  it('should initialize and resolve inputElement', async () => {
    const mockInput = document.createElement('input')
    const mockLabel = document.createElement('label')
    mockLabel.appendChild(mockInput)
    mockInput.setAttribute('data-length', '10')

    const labelRef = ref(mockLabel)
    const fieldElement = new FieldElement({}, labelRef)

    await nextTick()
    expect(fieldElement.inputElement.value).toBe(mockInput)
  })

  it('should resolve unique element id', () => {
    const fieldElementDefault = new FieldElement({}, ref(undefined))
    expect(fieldElementDefault.id).toBeDefined()

    const fieldElementExplicit = new FieldElement({ id: 'my-custom-id' }, ref(undefined))
    expect(fieldElementExplicit.id).toBe('my-custom-id')
  })

  it('should return correct tags and for attributes', () => {
    const classicField = new FieldElement({ classic: true }, ref(undefined))
    expect(classicField.tag).toBe('div')
    expect(classicField.forId).toBeUndefined()

    const nonClassicField = new FieldElement({ classic: false }, ref(undefined))
    expect(nonClassicField.tag).toBe('label')
    expect(nonClassicField.forId).toBe(nonClassicField.id)
  })

  it('should return correct validation eligibility', () => {
    const f1 = new FieldElement({}, ref(undefined))
    expect(f1.isValidation()).toBe(false)

    const f2 = new FieldElement({ validationMessage: 'Error', disabled: true }, ref(undefined))
    expect(f2.isValidation()).toBe(false)

    const f3 = new FieldElement({ validationMessage: 'Error' }, ref(undefined))
    expect(f3.isValidation()).toBe(true)

    const f4 = new FieldElement({ validationMessage: 'Error', disabled: true, forceShowMessage: true }, ref(undefined))
    expect(f4.isValidation()).toBe(true)
  })
})
