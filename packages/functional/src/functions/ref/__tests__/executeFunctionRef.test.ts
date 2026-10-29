import { describe, expect, it } from 'vitest'
import { computed, ref, shallowRef } from 'vue'
import { executeFunctionRef } from '../executeFunctionRef'

describe('executeFunctionRef', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return primitive static values directly', () => {
      expect(executeFunctionRef('hello')).toBe('hello')
      expect(executeFunctionRef(123)).toBe(123)
      expect(executeFunctionRef(true)).toBe(true)
    })

    it('should return reference static values (objects, arrays, symbols) without mutation', () => {
      const obj = { id: 1, name: 'test' }
      expect(executeFunctionRef(obj)).toBe(obj)

      const arr = [1, 2, 3]
      expect(executeFunctionRef(arr)).toBe(arr)

      const sym = Symbol('unique')
      expect(executeFunctionRef(sym)).toBe(sym)
    })

    it('should execute a function and return the resolved value', () => {
      const getter = () => 'result'
      expect(executeFunctionRef(getter)).toBe('result')
    })
  })

  describe('Vue Reactivity unwrapping (Ref, shallowRef, ComputedRef)', () => {
    it('should unwrap Vue Ref directly', () => {
      const source = ref('reactive-val')
      expect(executeFunctionRef(source)).toBe('reactive-val')
    })

    it('should unwrap Vue shallowRef directly', () => {
      const source = shallowRef({ count: 42 })
      expect(executeFunctionRef(source)).toEqual({ count: 42 })
    })

    it('should unwrap Vue ComputedRef directly', () => {
      const base = ref(10)
      const doubled = computed(() => base.value * 2)
      expect(executeFunctionRef(doubled)).toBe(20)
    })

    it('should execute a function and unwrap the returned Vue Ref', () => {
      const source = ref('reactive-val-from-fn')
      const getter = () => source
      expect(executeFunctionRef(getter)).toBe('reactive-val-from-fn')
    })

    it('should execute a function and unwrap the returned Vue ComputedRef', () => {
      const count = ref(5)
      const square = computed(() => count.value * count.value)
      const getter = () => square
      expect(executeFunctionRef(getter)).toBe(25)
    })

    it('should execute a function and unwrap the returned Vue shallowRef', () => {
      const shallow = shallowRef([1, 2])
      const getter = () => shallow
      expect(executeFunctionRef(getter)).toEqual([1, 2])
    })
  })

  describe('Nullish, empty, and falsy boundary values', () => {
    it('should safely handle undefined and null as direct values', () => {
      expect(executeFunctionRef(undefined)).toBeUndefined()
      expect(executeFunctionRef(null)).toBeNull()
    })

    it('should safely handle undefined and null returned from a function', () => {
      expect(executeFunctionRef(() => undefined)).toBeUndefined()
      expect(executeFunctionRef(() => null)).toBeNull()
    })

    it('should preserve falsy values without substitution (0, false, empty string, NaN)', () => {
      expect(executeFunctionRef(0)).toBe(0)
      expect(executeFunctionRef(-42)).toBe(-42)
      expect(executeFunctionRef(false)).toBe(false)
      expect(executeFunctionRef('')).toBe('')
      expect(executeFunctionRef(Number.NaN)).toBeNaN()

      expect(executeFunctionRef(() => 0)).toBe(0)
      expect(executeFunctionRef(() => false)).toBe(false)
      expect(executeFunctionRef(() => '')).toBe('')
      expect(executeFunctionRef(() => Number.NaN)).toBeNaN()
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should correctly handle Cyrillic, Vietnamese, and Emojis in values and getters', () => {
      expect(executeFunctionRef('Привет, мир!')).toBe('Привет, мир!')
      expect(executeFunctionRef(() => 'Xin chào thế giới')).toBe('Xin chào thế giới')
      expect(executeFunctionRef(ref('🚀✨'))).toBe('🚀✨')
    })
  })
})
