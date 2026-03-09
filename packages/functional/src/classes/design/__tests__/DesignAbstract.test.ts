import { describe, it, expect, vi, beforeEach } from 'vitest'
import { DesignAbstract } from '../DesignAbstract'

// Concrete class for testing
class TestDesign extends DesignAbstract<{ foo: string, bar: number }, { result: string }> {
  protected initEvent(): void {
    this.event.result = `${this.props.foo}-${this.props.bar}`
  }

  // Expose protected methods for testing
  public testIs(name: 'foo' | 'bar'): boolean {
    return this.is(name)
  }

  public testIsChanged(name: 'result', nameProp?: ('foo' | 'bar') | ('foo' | 'bar')[]): boolean {
    return this.isChanged(name, nameProp as any)
  }
}

describe('DesignAbstract', () => {
  let props: { foo: string, bar: number }
  let callback: any

  beforeEach(() => {
    props = { foo: 'initial', bar: 10 }
    callback = vi.fn()
  })

  describe('Constructor', () => {
    it('initializes basic properties', () => {
      const design = new TestDesign(props, callback)
      expect(design).toBeDefined()
    })
  })

  describe('is()', () => {
    it('returns true for existing properties in props', () => {
      const design = new TestDesign(props, callback)
      expect(design.testIs('foo')).toBe(true)
      expect(design.testIs('bar')).toBe(true)
    })

    it('returns false for non-existing properties (if typed loosely)', () => {
      const design = new TestDesign(props, callback)
      expect(design.testIs('nonexistent' as any)).toBe(false)
    })
  })

  describe('make() and makeCallback()', () => {
    it('calls initEvent and callback on the first make() call', () => {
      const design = new TestDesign(props, callback)
      design.make()

      expect(callback).toHaveBeenCalledTimes(1)
      expect(callback).toHaveBeenCalledWith({ result: 'initial-10' })
    })

    it('it does not recall callback if data has not changed', () => {
      const design = new TestDesign(props, callback)
      design.make() // First call
      design.make() // Second call (no change)

      expect(callback).toHaveBeenCalledTimes(1)
    })

    it('recalls callback if data has changed', () => {
      const design = new TestDesign(props, callback)
      design.make()

      props.foo = 'updated'
      design.make()

      expect(callback).toHaveBeenCalledTimes(2)
      expect(callback).toHaveBeenLastCalledWith({ result: 'updated-10' })
    })

    it('recalls callback if compelled is true', () => {
      const design = new TestDesign(props, callback)
      design.make()
      design.make(true)

      expect(callback).toHaveBeenCalledTimes(2)
    })
  })

  describe('isChanged()', () => {
    it('returns true if the property is not in event yet', () => {
      const design = new TestDesign(props, callback)
      // design.make() not called, event is empty
      expect(design.testIsChanged('result')).toBe(true)
    })

    it('returns true if dependencies have changed', () => {
      const design = new TestDesign(props, callback)
      design.make() // Initializes event and cache

      props.foo = 'changed'
      expect(design.testIsChanged('result', 'foo')).toBe(true)
    })

    it('returns false if dependencies have NOT changed', () => {
      const design = new TestDesign(props, callback)
      design.make()

      expect(design.testIsChanged('result', 'foo')).toBe(false)
    })

    it('correctly handles an array of dependency names', () => {
      const design = new TestDesign(props, callback)
      design.make()

      expect(design.testIsChanged('result', ['foo', 'bar'])).toBe(false)

      props.bar = 20
      expect(design.testIsChanged('result', ['foo', 'bar'])).toBe(true)
    })
  })

  describe('Integration with designChanged', () => {
    it('it only tracks specified properties if passed to the constructor', () => {
      // Track only 'foo', ignore 'bar'
      const design = new TestDesign(props, callback, ['foo'])
      design.make()

      props.bar = 999
      design.make()
      expect(callback).toHaveBeenCalledTimes(1) // Should NOT trigger because 'bar' is not tracked

      props.foo = 'new-foo'
      design.make()
      expect(callback).toHaveBeenCalledTimes(2) // Should trigger now
    })
  })
})
