// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { InputCodeItemValue } from '../InputCodeItemValue'

describe('InputCodeItemValue', () => {
  it('should check filled state, get and set values', () => {
    const div = document.createElement('div')
    const input = document.createElement('input')
    div.appendChild(input)

    const elRef = ref(div)
    const val = new InputCodeItemValue(elRef)

    expect(val.is()).toBe(false)
    expect(val.get()).toBe('')

    val.set('A')
    expect(val.is()).toBe(true)
    expect(val.get()).toBe('A')
    expect(input.value).toBe('A')

    val.reset()
    expect(val.is()).toBe(false)
    expect(val.get()).toBe('')
    expect(input.value).toBe('')
  })
})
