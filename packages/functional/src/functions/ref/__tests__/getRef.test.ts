import { describe, it, expect } from 'vitest'
import {
  ref,
  shallowRef,
  computed,
  customRef,
  readonly,
  shallowReadonly,
  reactive
} from 'vue'
import { getRef } from '../getRef'

describe('getRef', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return primitive values directly when passed non-reactive primitives', () => {
      expect(getRef('hello')).toBe('hello')
      expect(getRef(42)).toBe(42)
      expect(getRef(true)).toBe(true)
    })

    it('should unwrap the value from a standard Vue ref', () => {
      const reactiveString = ref('reactive-text')
      const reactiveNumber = ref(100)
      const reactiveBoolean = ref(true)

      expect(getRef(reactiveString)).toBe('reactive-text')
      expect(getRef(reactiveNumber)).toBe(100)
      expect(getRef(reactiveBoolean)).toBe(true)
    })

    it('should unwrap the computed value from a Vue computed ref', () => {
      const sourceCount = ref(5)
      const multipliedCount = computed(() => sourceCount.value * 10)

      expect(getRef(multipliedCount)).toBe(50)
    })

    it('should return plain objects and arrays directly when passed non-reactive structures', () => {
      const plainObject = { identifier: 1, title: 'Item' }
      const plainArray = ['first', 'second', 'third']

      expect(getRef(plainObject)).toBe(plainObject)
      expect(getRef(plainArray)).toBe(plainArray)
    })
  })

  describe('Vue Reactivity primitives and wrappers', () => {
    it('should correctly unwrap a shallowRef', () => {
      const shallowReference = shallowRef({ count: 1 })

      expect(getRef(shallowReference)).toEqual({ count: 1 })
      expect(getRef(shallowReference)).toBe(shallowReference.value)
    })

    it('should correctly unwrap a customRef', () => {
      let customValue = 'initial-custom'
      const customReference = customRef((track, trigger) => ({
        get() {
          track()
          return customValue
        },
        set(newValue) {
          customValue = newValue
          trigger()
        }
      }))

      expect(getRef(customReference)).toBe('initial-custom')
    })

    it('should correctly unwrap a readonly ref', () => {
      const originalReference = ref('immutable-content')
      const readonlyReference = readonly(originalReference)

      expect(getRef(readonlyReference)).toBe('immutable-content')
    })

    it('should correctly unwrap a shallowReadonly ref', () => {
      const originalReference = ref({ key: 'shallow-immutable' })
      const shallowReadonlyReference = shallowReadonly(originalReference)

      expect(getRef(shallowReadonlyReference)).toEqual({ key: 'shallow-immutable' })
    })

    it('should return a reactive proxy directly because reactive proxies are not Vue refs', () => {
      const reactiveObject = reactive({ counter: 10, label: 'status' })

      expect(getRef(reactiveObject)).toBe(reactiveObject)
    })

    it('should return an ordinary object containing a value property without unwrapping (duck typing guard)', () => {
      const pseudoRefObject = { value: 'not-a-vue-ref', description: 'plain object' }

      expect(getRef(pseudoRefObject)).toBe(pseudoRefObject)
      expect(getRef(pseudoRefObject).value).toBe('not-a-vue-ref')
    })

    it('should return the object without unwrapping nested refs when passed a shallowRef containing an object with ref', () => {
      const innerReference = ref('nested-content')
      const containerObject = { childReference: innerReference }
      const shallowContainer = shallowRef(containerObject)

      const extractedValue = getRef(shallowContainer)
      expect(extractedValue).toBe(containerObject)
      expect(extractedValue.childReference).toBe(innerReference)
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should return 0 directly and unwrap ref(0) without treating 0 as falsy fallback', () => {
      expect(getRef(0)).toBe(0)
      expect(getRef(ref(0))).toBe(0)
    })

    it('should return -0 directly and unwrap ref(-0)', () => {
      expect(Object.is(getRef(-0), -0)).toBe(true)
      expect(Object.is(getRef(ref(-0)), -0)).toBe(true)
    })

    it('should handle negative numbers and floating point decimals correctly', () => {
      expect(getRef(-1)).toBe(-1)
      expect(getRef(-42)).toBe(-42)
      expect(getRef(3.14159)).toBe(3.14159)
      expect(getRef(ref(-100.5))).toBe(-100.5)
    })

    it('should handle extreme integer boundaries', () => {
      expect(getRef(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER)
      expect(getRef(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER)
      expect(getRef(Number.EPSILON)).toBe(Number.EPSILON)
      expect(getRef(ref(Number.MAX_SAFE_INTEGER))).toBe(Number.MAX_SAFE_INTEGER)
    })

    it('should preserve NaN directly and inside a ref', () => {
      expect(Number.isNaN(getRef(Number.NaN))).toBe(true)
      expect(Number.isNaN(getRef(ref(Number.NaN)))).toBe(true)
    })

    it('should preserve Infinity and -Infinity directly and inside a ref', () => {
      expect(getRef(Infinity)).toBe(Infinity)
      expect(getRef(-Infinity)).toBe(-Infinity)
      expect(getRef(ref(Infinity))).toBe(Infinity)
      expect(getRef(ref(-Infinity))).toBe(-Infinity)
    })

    it('should return boolean false directly and unwrap ref(false)', () => {
      expect(getRef(false)).toBe(false)
      expect(getRef(ref(false))).toBe(false)
    })

    it('should return BigInt values directly and inside a ref', () => {
      const bigIntValue = 9007199254740991n
      const zeroBigInt = 0n
      const negativeBigInt = -42n

      expect(getRef(bigIntValue)).toBe(bigIntValue)
      expect(getRef(zeroBigInt)).toBe(zeroBigInt)
      expect(getRef(negativeBigInt)).toBe(negativeBigInt)
      expect(getRef(ref(bigIntValue))).toBe(bigIntValue)
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should return undefined directly and unwrap ref(undefined)', () => {
      expect(getRef(undefined)).toBeUndefined()
      expect(getRef(ref(undefined))).toBeUndefined()
    })

    it('should return null directly and unwrap ref(null)', () => {
      expect(getRef(null)).toBeNull()
      expect(getRef(ref(null))).toBeNull()
    })

    it('should return empty string directly and unwrap ref("")', () => {
      expect(getRef('')).toBe('')
      expect(getRef(ref(''))).toBe('')
    })

    it('should preserve whitespace-only strings directly and inside a ref', () => {
      const spacesString = '   '
      const tabsAndNewlinesString = '\t\n\r'

      expect(getRef(spacesString)).toBe(spacesString)
      expect(getRef(tabsAndNewlinesString)).toBe(tabsAndNewlinesString)
      expect(getRef(ref(spacesString))).toBe(spacesString)
      expect(getRef(ref(tabsAndNewlinesString))).toBe(tabsAndNewlinesString)
    })

    it('should preserve empty arrays and empty objects without cloning or modification', () => {
      const emptyArray: unknown[] = []
      const emptyObject: Record<string, unknown> = {}

      expect(getRef(emptyArray)).toBe(emptyArray)
      expect(getRef(emptyObject)).toBe(emptyObject)

      const arrayReference = ref(emptyArray)
      const objectReference = ref(emptyObject)
      expect(getRef(arrayReference)).toEqual(emptyArray)
      expect(getRef(arrayReference)).toBe(arrayReference.value)
      expect(getRef(objectReference)).toEqual(emptyObject)
      expect(getRef(objectReference)).toBe(objectReference.value)

      const shallowArrayReference = shallowRef(emptyArray)
      const shallowObjectReference = shallowRef(emptyObject)
      expect(getRef(shallowArrayReference)).toBe(emptyArray)
      expect(getRef(shallowObjectReference)).toBe(emptyObject)
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should return functions directly without executing them or unwrapping getters', () => {
      const getterFunction = () => 'calculated-result'
      function namedFunction() {
        return 'executed-function'
      }

      expect(getRef(getterFunction)).toBe(getterFunction)
      expect(getRef(namedFunction)).toBe(namedFunction)
    })

    it('should unwrap a ref holding a function without executing the function', () => {
      const targetFunction = () => 'function-in-ref'
      const reactiveFunction = ref(targetFunction)

      expect(getRef(reactiveFunction)).toBe(targetFunction)
    })

    it('should preserve Symbol instances directly and inside a ref', () => {
      const uniqueSymbol = Symbol('uniqueKey')
      const globalSymbol = Symbol.for('dxt.symbol')

      expect(getRef(uniqueSymbol)).toBe(uniqueSymbol)
      expect(getRef(globalSymbol)).toBe(globalSymbol)
      expect(getRef(ref(uniqueSymbol))).toBe(uniqueSymbol)
    })

    it('should preserve Date instances directly and inside a ref', () => {
      const sampleDate = new Date('2026-10-29T22:30:00.000Z')

      expect(getRef(sampleDate)).toBe(sampleDate)
      expect(getRef(ref(sampleDate))).toEqual(sampleDate)
    })

    it('should preserve RegExp instances directly and inside a ref', () => {
      const sampleRegExp = /^[a-z0-9_-]+$/gi

      expect(getRef(sampleRegExp)).toBe(sampleRegExp)
      expect(getRef(ref(sampleRegExp))).toBe(sampleRegExp)
    })

    it('should preserve Map and Set collections directly and inside a ref', () => {
      const sampleMap = new Map<string, number>([['first', 1], ['second', 2]])
      const sampleSet = new Set<string>(['alpha', 'beta', 'gamma'])

      expect(getRef(sampleMap)).toBe(sampleMap)
      expect(getRef(sampleSet)).toBe(sampleSet)

      const mapReference = ref(sampleMap)
      const setReference = ref(sampleSet)
      expect(getRef(mapReference)).toEqual(sampleMap)
      expect(getRef(mapReference)).toBe(mapReference.value)
      expect(getRef(setReference)).toEqual(sampleSet)
      expect(getRef(setReference)).toBe(setReference.value)

      const shallowMapReference = shallowRef(sampleMap)
      const shallowSetReference = shallowRef(sampleSet)
      expect(getRef(shallowMapReference)).toBe(sampleMap)
      expect(getRef(shallowSetReference)).toBe(sampleSet)
    })

    it('should preserve Error and TypeError instances directly and inside a ref', () => {
      const sampleError = new Error('Application error occurred')
      const sampleTypeError = new TypeError('Invalid type argument')

      expect(getRef(sampleError)).toBe(sampleError)
      expect(getRef(sampleTypeError)).toBe(sampleTypeError)
      expect(getRef(ref(sampleError))).toBe(sampleError)
    })
  })

  describe('Metacharacters, escaping, and security payloads', () => {
    it('should preserve HTML and XSS payloads without alteration or sanitization side-effects', () => {
      const scriptPayload = '<script>alert("xss")</script>'
      const imagePayload = '"><img src=x onerror=alert(1)>'

      expect(getRef(scriptPayload)).toBe(scriptPayload)
      expect(getRef(ref(scriptPayload))).toBe(scriptPayload)
      expect(getRef(imagePayload)).toBe(imagePayload)
    })

    it('should preserve regex metacharacters and control characters intact', () => {
      const metacharactersString = '.*+?^${}()|[]\\/'

      expect(getRef(metacharactersString)).toBe(metacharactersString)
      expect(getRef(ref(metacharactersString))).toBe(metacharactersString)
    })

    it('should preserve SQL injection string fragments intact', () => {
      const sqlInjectionString = '1\' OR \'1\'=\'1\'; DROP TABLE users; --'

      expect(getRef(sqlInjectionString)).toBe(sqlInjectionString)
      expect(getRef(ref(sqlInjectionString))).toBe(sqlInjectionString)
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should return and unwrap Cyrillic strings', () => {
      const cyrillicText = 'Привет, мир! Тестирование реактивности.'

      expect(getRef(cyrillicText)).toBe(cyrillicText)
      expect(getRef(ref(cyrillicText))).toBe(cyrillicText)
    })

    it('should return and unwrap Vietnamese strings with complex tone diacritics', () => {
      const vietnameseText = 'Cộng hòa Xã hội chủ nghĩa Việt Nam - Độc lập, Tự do, Hạnh phúc'

      expect(getRef(vietnameseText)).toBe(vietnameseText)
      expect(getRef(ref(vietnameseText))).toBe(vietnameseText)
    })

    it('should return and unwrap accented strings across various European languages', () => {
      const europeanText = 'Über schön, café français, año español'

      expect(getRef(europeanText)).toBe(europeanText)
      expect(getRef(ref(europeanText))).toBe(europeanText)
    })

    it('should return and unwrap CJK ideographs', () => {
      const cjkText = '你好，世界！ こんにちは！ 안녕하세요!'

      expect(getRef(cjkText)).toBe(cjkText)
      expect(getRef(ref(cjkText))).toBe(cjkText)
    })

    it('should return and unwrap emojis and composite multi-byte unicode sequences', () => {
      const emojiString = '🇻🇳 🚀 🌟 💻 👨‍👩‍👧‍👦'

      expect(getRef(emojiString)).toBe(emojiString)
      expect(getRef(ref(emojiString))).toBe(emojiString)
    })
  })

  describe('Complex nested structures and referential integrity', () => {
    it('should maintain strict referential equality (toBe) for non-reactive nested objects', () => {
      const nestedObject = {
        levelOne: {
          levelTwo: {
            title: 'deep-node'
          }
        }
      }

      expect(getRef(nestedObject)).toBe(nestedObject)
      expect(getRef(nestedObject).levelOne).toBe(nestedObject.levelOne)
    })

    it('should maintain strict referential equality (toBe) for non-reactive nested arrays', () => {
      const nestedArray = [1, [2, [3, 4]]]

      expect(getRef(nestedArray)).toBe(nestedArray)
      expect(getRef(nestedArray)[1]).toBe(nestedArray[1])
    })

    it('should handle circular object references directly without recursion errors', () => {
      const circularObject: Record<string, unknown> = { name: 'circular-root' }
      circularObject.selfReference = circularObject

      expect(getRef(circularObject)).toBe(circularObject)
      expect(getRef(circularObject).selfReference).toBe(circularObject)
    })

    it('should handle circular object references inside a ref without errors', () => {
      const circularObject: Record<string, unknown> = { name: 'circular-in-ref' }
      circularObject.selfReference = circularObject
      const reactiveCircular = ref(circularObject)

      expect(getRef(reactiveCircular)).toBe(reactiveCircular.value)
      expect(getRef(reactiveCircular).name).toBe('circular-in-ref')
    })
  })

  describe('Reactivity dynamics and mutations', () => {
    it('should return the updated value after ref value is modified', () => {
      const counterReference = ref(10)

      expect(getRef(counterReference)).toBe(10)

      counterReference.value = 25
      expect(getRef(counterReference)).toBe(25)

      counterReference.value = -5
      expect(getRef(counterReference)).toBe(-5)
    })

    it('should reflect updated values from computed dependencies dynamically', () => {
      const primaryValue = ref(4)
      const secondaryValue = ref(6)
      const combinedSum = computed(() => primaryValue.value + secondaryValue.value)

      expect(getRef(combinedSum)).toBe(10)

      primaryValue.value = 10
      expect(getRef(combinedSum)).toBe(16)

      secondaryValue.value = 20
      expect(getRef(combinedSum)).toBe(30)
    })
  })

  describe('Idempotency and side-effect freedom', () => {
    it('should produce identical results on repeated calls with the same input', () => {
      const sampleReference = ref('consistent-content')

      const firstCallResult = getRef(sampleReference)
      const secondCallResult = getRef(sampleReference)
      const thirdCallResult = getRef(sampleReference)

      expect(firstCallResult).toBe('consistent-content')
      expect(secondCallResult).toBe('consistent-content')
      expect(thirdCallResult).toBe('consistent-content')
      expect(firstCallResult).toBe(secondCallResult)
    })

    it('should not mutate or alter the original ref or object passed to getRef', () => {
      const originalObject = { count: 100 }
      const reactiveReference = ref(originalObject)

      getRef(reactiveReference)
      expect(reactiveReference.value.count).toBe(100)

      getRef(originalObject)
      expect(originalObject.count).toBe(100)
    })

    it('should allow nested composition with itself producing the exact same value', () => {
      const reactiveReference = ref('nested-call-content')

      const unwrappedValue = getRef(reactiveReference)
      const doubleUnwrappedValue = getRef(unwrappedValue)

      expect(doubleUnwrappedValue).toBe('nested-call-content')
      expect(doubleUnwrappedValue).toBe(unwrappedValue)
    })
  })
})
