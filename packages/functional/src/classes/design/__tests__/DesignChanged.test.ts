import { describe, it, expect, beforeEach } from 'vitest'
import { DesignChanged } from '../DesignChanged'

describe('DesignChanged', () => {
  let props: {
    bar: number
    baz?: string
    foo: string
  }

  beforeEach(() => {
    props = {
      foo: 'initial',
      bar: 10
    }
  })

  describe('Constructor', () => {
    it('initializes with default watch keys (all keys in props)', () => {
      const tracker = new DesignChanged(props)
      // Initially the cache is empty, so it's considered changed
      expect(tracker.isChanged()).toBe(true)

      tracker.update()
      expect(tracker.isChanged()).toBe(false)

      props.foo = 'changed'
      expect(tracker.isChanged()).toBe(true)
    })

    it('initializes with specific watch keys', () => {
      const tracker = new DesignChanged(props, ['foo'])

      // Initially changed because foo is in props but not in cache
      expect(tracker.isChanged()).toBe(true)

      tracker.update()
      expect(tracker.isChanged()).toBe(false)

      props.bar = 20
      expect(tracker.isChanged()).toBe(false)

      props.foo = 'changed'
      expect(tracker.isChanged()).toBe(true)
    })
  })

  describe('is()', () => {
    it('returns true if a specific property has changed', () => {
      const tracker = new DesignChanged(props)
      tracker.update()

      props.foo = 'changed'
      expect(tracker.is('foo')).toBe(true)
      expect(tracker.is('bar')).toBe(false)
    })

    it('it returns true if any of the properties in the array have changed', () => {
      const tracker = new DesignChanged(props)
      tracker.update()

      props.bar = 20
      expect(tracker.is(['foo', 'bar'])).toBe(true)
    })

    it('returns false if none of the properties in the array have changed', () => {
      const tracker = new DesignChanged(props)
      tracker.update()

      expect(tracker.is(['foo', 'bar'])).toBe(false)
    })
  })

  describe('isChanged()', () => {
    it('it returns true if any tracked property is missing from the cache (first run before update)', () => {
      const tracker = new DesignChanged(props)
      expect(tracker.isChanged()).toBe(true)
    })

    it('returns false after update() if no changes made', () => {
      const tracker = new DesignChanged(props)
      tracker.update()
      expect(tracker.isChanged()).toBe(false)
    })

    it('detects changes after update()', () => {
      const tracker = new DesignChanged(props)
      tracker.update()

      props.foo = 'new value'
      expect(tracker.isChanged()).toBe(true)
    })

    it('handles new properties added to props if they are in the watch', () => {
      const tracker = new DesignChanged(props, ['baz'])
      tracker.update() // baz is not in props, so not in cache

      props.baz = 'now exists'
      expect(tracker.isChanged()).toBe(true)
    })
  })

  describe('update()', () => {
    it('synchronizes the cache with current props', () => {
      const tracker = new DesignChanged(props)
      expect(tracker.isChanged()).toBe(true)

      tracker.update()
      expect(tracker.isChanged()).toBe(false)

      props.foo = 'changed again'
      expect(tracker.isChanged()).toBe(true)

      tracker.update()
      expect(tracker.isChanged()).toBe(false)
    })
  })
})
