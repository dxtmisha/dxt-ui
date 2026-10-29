import { describe, it, expect } from 'vitest'
import vm from 'node:vm'
import { isFunction } from '../isFunction'

describe('isFunction', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should return true for standard function declarations and expressions', () => {
      function declaredFunction() {}
      const expressionFunction = function () {}

      expect(isFunction(declaredFunction)).toBe(true)
      expect(isFunction(expressionFunction)).toBe(true)
    })

    it('should return true for arrow functions', () => {
      const arrowFunction = () => {}
      const returningArrowFunction = (value: number) => value * 2

      expect(isFunction(arrowFunction)).toBe(true)
      expect(isFunction(returningArrowFunction)).toBe(true)
    })

    it('should return true for async functions', () => {
      const asyncArrowFunction = async () => 'result'
      async function asyncDeclaredFunction() {
        return 42
      }

      expect(isFunction(asyncArrowFunction)).toBe(true)
      expect(isFunction(asyncDeclaredFunction)).toBe(true)
    })

    it('should return true for generator and async generator functions', () => {
      function* generatorFunction() {
        yield 1
      }
      async function* asyncGeneratorFunction() {
        yield 1
      }

      expect(isFunction(generatorFunction)).toBe(true)
      expect(isFunction(asyncGeneratorFunction)).toBe(true)
    })
    it('should return true for dynamically created functions via Function constructor', () => {
      // eslint-disable-next-line @typescript-eslint/no-implied-eval
      const dynamicFunction = new Function('a', 'b', 'return a + b')
      expect(isFunction(dynamicFunction)).toBe(true)
    })

    it('should return true for functions created in a separate VM realm (cross-realm)', () => {
      const crossRealmFunction = vm.runInNewContext('(function() { return "cross-realm"; })')
      // Cross-realm functions fail `instanceof Function` because of separate Function prototypes
      expect(crossRealmFunction instanceof Function).toBe(false)
      // isFunction correctly identifies it via typeof
      expect(isFunction(crossRealmFunction)).toBe(true)
    })
  })

  describe('Classes, constructors, and bound or proxied functions', () => {
    it('should return true for ES6 classes and built-in constructors', () => {
      class SampleClass {
        static staticMethod() {
          return 'static'
        }

        instanceMethod() {
          return 'instance'
        }
      }

      expect(isFunction(SampleClass)).toBe(true)
      expect(isFunction(SampleClass.staticMethod)).toBe(true)
      expect(isFunction(new SampleClass().instanceMethod)).toBe(true)
      expect(isFunction(Date)).toBe(true)
      expect(isFunction(Array)).toBe(true)
      expect(isFunction(Function)).toBe(true)
      expect(isFunction(Math.max)).toBe(true)
      expect(isFunction(Object.prototype.hasOwnProperty)).toBe(true)
    })

    it('should return true for bound functions and Proxy-wrapped functions', () => {
      const baseFunction = function (greeting: string) {
        return greeting
      }
      const boundFunction = baseFunction.bind(null, 'hello')
      const proxiedFunction = new Proxy(baseFunction, {})

      expect(isFunction(boundFunction)).toBe(true)
      expect(isFunction(proxiedFunction)).toBe(true)
    })

    it('should return false for Proxy-wrapped non-function objects', () => {
      const proxiedObject = new Proxy({ a: 1 }, {})
      const proxiedArray = new Proxy([1, 2, 3], {})

      expect(isFunction(proxiedObject)).toBe(false)
      expect(isFunction(proxiedArray)).toBe(false)
    })
  })

  describe('Empty, nullish, and falsy inputs', () => {
    it('should return false for null and undefined', () => {
      expect(isFunction(null)).toBe(false)
      expect(isFunction(undefined)).toBe(false)
    })

    it('should return false for falsy primitive values (0, false, NaN, empty string)', () => {
      expect(isFunction(0)).toBe(false)
      expect(isFunction(-0)).toBe(false)
      expect(isFunction(0n)).toBe(false)
      expect(isFunction(false)).toBe(false)
      expect(isFunction(Number.NaN)).toBe(false)
      expect(isFunction('')).toBe(false)
    })
  })

  describe('Objects, arrays, and non-callable primitives', () => {
    it('should return false for plain objects and objects mimicking function methods', () => {
      expect(isFunction({})).toBe(false)
      expect(isFunction({ call: () => {}, apply: () => {}, bind: () => {} })).toBe(false)
      expect(isFunction(Object.create(null))).toBe(false)
    })

    it('should return false for arrays and built-in non-callable object instances', () => {
      expect(isFunction([])).toBe(false)
      expect(isFunction([() => {}])).toBe(false)
      expect(isFunction(/regex/)).toBe(false)
      expect(isFunction(new Date())).toBe(false)
      expect(isFunction(new Map())).toBe(false)
      expect(isFunction(new Set())).toBe(false)
      expect(isFunction(Promise.resolve())).toBe(false)
    })

    it('should return false for strings, numbers, booleans, symbols, and bigints', () => {
      expect(isFunction('function() {}')).toBe(false)
      expect(isFunction(123)).toBe(false)
      expect(isFunction(true)).toBe(false)
      expect(isFunction(Symbol('callback'))).toBe(false)
      expect(isFunction(42n)).toBe(false)
    })

    it('should return false for objects with custom Symbol.toPrimitive or valueOf', () => {
      const customObject = {
        [Symbol.toPrimitive]() {
          return 'primitive'
        },
        valueOf() {
          return 42
        }
      }
      expect(isFunction(customObject)).toBe(false)
    })
  })

  describe('TypeScript type guard narrowing', () => {
    it('should correctly narrow union types to callable functions', () => {
      const candidate: string | ((multiplier: number) => number) = (multiplier: number) => multiplier * 5

      if (isFunction(candidate)) {
        // TypeScript verifies `candidate` is callable here
        const result: number = candidate(4)
        expect(result).toBe(20)
      } else {
        expect.unreachable('Should have narrowed to function')
      }
    })

    it('should correctly narrow unknown types to FunctionAnyType', () => {
      const unknownValue: unknown = (greeting: string) => `Hello, ${greeting}!`

      if (isFunction(unknownValue)) {
        // TypeScript verifies `unknownValue` is callable
        expect(unknownValue('World')).toBe('Hello, World!')
      } else {
        expect.unreachable('Should have narrowed to function')
      }
    })
  })
})
