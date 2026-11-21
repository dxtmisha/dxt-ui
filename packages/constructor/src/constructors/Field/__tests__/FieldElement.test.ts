// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { effectScope, nextTick, ref } from 'vue'
import { FieldElement } from '../FieldElement'

describe('FieldElement', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
  })

  it('should initialize, resolve inputElement on mount, react to element ref changes, and clean up on unmount', async () => {
    const mockInput = document.createElement('input')
    mockInput.setAttribute('data-length', '10')
    const mockLabel = document.createElement('label')
    mockLabel.appendChild(mockInput)

    const labelRef = ref<HTMLLabelElement | undefined>(mockLabel)
    const scope = effectScope()
    let fieldElement!: FieldElement

    scope.run(() => {
      fieldElement = new FieldElement({}, labelRef)
    })
    cleanups.push(() => scope.stop())

    expect(fieldElement.inputElement.value).toBeUndefined()

    scope.run(() => {
      fieldElement.onMounted()
    })
    await nextTick()
    expect(fieldElement.inputElement.value).toBe(mockInput)

    const nextInput = document.createElement('input')
    nextInput.setAttribute('data-length', '20')
    const nextLabel = document.createElement('label')
    nextLabel.appendChild(nextInput)

    labelRef.value = nextLabel
    await nextTick()
    expect(fieldElement.inputElement.value).toBe(nextInput)

    fieldElement.onUnmounted()
    labelRef.value = mockLabel
    await nextTick()
    expect(fieldElement.inputElement.value).toBe(nextInput)
  })

  it('should resolve unique element id including numeric and empty string fallback', () => {
    const fieldElementDefault = new FieldElement({}, ref(undefined))
    expect(fieldElementDefault.id).toBeTruthy()

    const fieldElementEmpty = new FieldElement({ id: '' }, ref(undefined))
    expect(fieldElementEmpty.id).toBeTruthy()

    const fieldElementNumber = new FieldElement({ id: 42 }, ref(undefined))
    expect(fieldElementNumber.id).toBe('42')

    const fieldElementExplicit = new FieldElement({ id: 'my-custom-id' }, ref(undefined))
    expect(fieldElementExplicit.id).toBe('my-custom-id')
  })

  it('should return correct tags, forId, and static isClassic evaluation', () => {
    expect(FieldElement.isClassic({ classic: true })).toBe(true)
    expect(FieldElement.isClassic({ classic: true, outlined: true })).toBe(false)
    expect(FieldElement.isClassic({ classic: true, filled: true })).toBe(false)
    expect(FieldElement.isClassic({ classic: true, boxed: true })).toBe(false)
    expect(FieldElement.isClassic({ classic: true, basic: true })).toBe(false)
    expect(FieldElement.isClassic({ classic: true, tonal: true })).toBe(false)

    const classicField = new FieldElement({ classic: true }, ref(undefined))
    expect(classicField.tag).toBe('div')
    expect(classicField.forId).toBeUndefined()

    const nonClassicField = new FieldElement({ classic: false }, ref(undefined))
    expect(nonClassicField.tag).toBe('label')
    expect(nonClassicField.forId).toBe(nonClassicField.id)
  })

  it('should return correct validation eligibility across disabled, readonly, whitespace, and forceShowMessage states', () => {
    expect(new FieldElement({}, ref(undefined)).isValidation()).toBe(false)
    expect(new FieldElement({ validationMessage: '   ' }, ref(undefined)).isValidation()).toBe(false)
    expect(new FieldElement({ validationMessage: 'Error', disabled: true }, ref(undefined)).isValidation()).toBe(false)
    expect(new FieldElement({ validationMessage: 'Error', readonly: true }, ref(undefined)).isValidation()).toBe(false)
    expect(new FieldElement({ validationMessage: 'Error' }, ref(undefined)).isValidation()).toBe(true)
    expect(new FieldElement({ validationMessage: 'Error', disabled: true, forceShowMessage: true }, ref(undefined)).isValidation()).toBe(true)
    expect(new FieldElement({ validationMessage: 'Error', readonly: true, forceShowMessage: true }, ref(undefined)).isValidation()).toBe(true)
  })

  it('should return correct warning eligibility with validation precedence', () => {
    expect(new FieldElement({}, ref(undefined)).isWarning()).toBe(false)
    expect(new FieldElement({ warningMessage: '   ' }, ref(undefined)).isWarning()).toBe(false)
    expect(new FieldElement({ warning: true }, ref(undefined)).isWarning()).toBe(true)
    expect(new FieldElement({ warningMessage: 'Warn' }, ref(undefined)).isWarning()).toBe(true)
    expect(new FieldElement({ warning: true, disabled: true }, ref(undefined)).isWarning()).toBe(false)
    expect(new FieldElement({ warning: true, readonly: true }, ref(undefined)).isWarning()).toBe(false)
    expect(new FieldElement({ warningMessage: 'Warn', readonly: true, forceShowMessage: true }, ref(undefined)).isWarning()).toBe(true)
    expect(new FieldElement({ warning: true, warningMessage: 'Warn', validationMessage: '   ' }, ref(undefined)).isWarning()).toBe(true)
    expect(new FieldElement({ warning: true, warningMessage: 'Warn', validationMessage: 'Error' }, ref(undefined)).isWarning()).toBe(false)
  })
})
