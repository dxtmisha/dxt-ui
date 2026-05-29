import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import { executeFunctionRef } from '../executeFunctionRef'

describe('executeFunctionRef', () => {
  it('should return the static value if it is not a function or a Ref', () => {
    expect(executeFunctionRef('hello')).toBe('hello')
    expect(executeFunctionRef(123)).toBe(123)
    const obj = { a: 1 }
    expect(executeFunctionRef(obj)).toBe(obj)
  })

  it('should unwrap Vue Ref directly', () => {
    const source = ref('reactive-val')
    expect(executeFunctionRef(source)).toBe('reactive-val')
  })

  it('should execute a function and return the resolved value', () => {
    const getter = () => 'result'
    expect(executeFunctionRef(getter)).toBe('result')
  })

  it('should execute a function and unwrap the returned Vue Ref', () => {
    const source = ref('reactive-val-from-fn')
    const getter = () => source
    expect(executeFunctionRef(getter)).toBe('reactive-val-from-fn')
  })

  it('should handle undefined and null', () => {
    expect(executeFunctionRef(undefined)).toBeUndefined()
    expect(executeFunctionRef(null)).toBeNull()
  })
})
