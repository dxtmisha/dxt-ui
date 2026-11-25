// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { InputCodeItemValue } from '../InputCodeItemValue'

describe('InputCodeItemValue', () => {
  it('should check filled state, get, set, and reset values', () => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    div.appendChild(input)

    const elementRef = ref(div)
    const itemValue = new InputCodeItemValue(elementRef)

    expect(itemValue.is()).toBe(false)
    expect(itemValue.get()).toBe('')

    itemValue.set('A')
    expect(itemValue.is()).toBe(true)
    expect(itemValue.get()).toBe('A')
    expect(input.value).toBe('A')

    // Setting identical value does not throw or alter DOM
    itemValue.set('A')
    expect(itemValue.get()).toBe('A')

    itemValue.reset()
    expect(itemValue.is()).toBe(false)
    expect(itemValue.get()).toBe('')
    expect(input.value).toBe('')
  })

  it('should safely handle undefined element ref', () => {
    const itemValue = new InputCodeItemValue(ref<HTMLElement | undefined>(undefined))

    expect(() => itemValue.set('7')).not.toThrow()
    expect(itemValue.get()).toBe('7')
    expect(itemValue.is()).toBe(true)
  })
})
