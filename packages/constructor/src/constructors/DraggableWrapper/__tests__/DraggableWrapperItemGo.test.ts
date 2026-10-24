// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemGo } from '../DraggableWrapperItemGo'

describe('DraggableWrapperItemGo', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with no target drop element', () => {
      const go = new DraggableWrapperItemGo()
      expect(go.is()).toBe(false)
      expect(go.get()).toBeUndefined()
    })

    it('should set target element and update is() status', () => {
      const go = new DraggableWrapperItemGo()
      const element = document.createElement('div')

      const result = go.set(element)
      expect(result).toBe(go)
      expect(go.is()).toBe(true)
      expect(go.get()).toBe(element)
    })

    it('should check isByItem correctly comparing against target', () => {
      const go = new DraggableWrapperItemGo()
      const element1 = document.createElement('div')
      const element2 = document.createElement('span')

      go.set(element1)
      expect(go.isByItem(element1)).toBe(false)
      expect(go.isByItem(element2)).toBe(true)
    })

    it('should reset target element and return this for chaining', () => {
      const go = new DraggableWrapperItemGo()
      const element = document.createElement('div')

      go.set(element)
      expect(go.is()).toBe(true)

      const result = go.reset()
      expect(result).toBe(go)
      expect(go.is()).toBe(false)
      expect(go.get()).toBeUndefined()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should return true for isByItem when target is not set', () => {
      const go = new DraggableWrapperItemGo()
      const element = document.createElement('div')
      expect(go.isByItem(element)).toBe(true)
    })

    it('should safely handle set(undefined) and update is() to false', () => {
      const go = new DraggableWrapperItemGo()
      const element = document.createElement('div')

      go.set(element)
      expect(go.is()).toBe(true)

      go.set(undefined)
      expect(go.is()).toBe(false)
      expect(go.get()).toBeUndefined()
    })

    it('should overwrite existing target element on repeated set() calls', () => {
      const go = new DraggableWrapperItemGo()
      const element1 = document.createElement('div')
      const element2 = document.createElement('section')

      go.set(element1)
      expect(go.get()).toBe(element1)

      go.set(element2)
      expect(go.get()).toBe(element2)
      expect(go.isByItem(element1)).toBe(true)
      expect(go.isByItem(element2)).toBe(false)
    })

    it('should remain empty when reset() is called multiple times', () => {
      const go = new DraggableWrapperItemGo()
      go.reset().reset()
      expect(go.is()).toBe(false)
      expect(go.get()).toBeUndefined()
    })
  })

  describe('Statefulness and instance isolation', () => {
    it('should isolate state between different DraggableWrapperItemGo instances', () => {
      const go1 = new DraggableWrapperItemGo()
      const go2 = new DraggableWrapperItemGo()
      const element = document.createElement('div')

      go1.set(element)
      expect(go1.is()).toBe(true)
      expect(go1.get()).toBe(element)
      expect(go2.is()).toBe(false)
      expect(go2.get()).toBeUndefined()

      go1.reset()
      expect(go1.is()).toBe(false)
      expect(go2.is()).toBe(false)
    })
  })
})
