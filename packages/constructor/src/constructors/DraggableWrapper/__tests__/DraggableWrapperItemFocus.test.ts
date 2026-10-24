// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemFocus } from '../DraggableWrapperItemFocus'

describe('DraggableWrapperItemFocus', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with undefined focused item', () => {
      const focus = new DraggableWrapperItemFocus()
      expect(focus.get()).toBeUndefined()
    })

    it('should set focused element and support method chaining', () => {
      const focus = new DraggableWrapperItemFocus()
      const element = document.createElement('div')

      const result = focus.set(element)
      expect(result).toBe(focus)
      expect(focus.get()).toBe(element)
    })

    it('should reset focused element back to undefined and support chaining', () => {
      const focus = new DraggableWrapperItemFocus()
      const element = document.createElement('div')

      focus.set(element)
      expect(focus.get()).toBe(element)

      const result = focus.reset()
      expect(result).toBe(focus)
      expect(focus.get()).toBeUndefined()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should safely accept undefined in set()', () => {
      const focus = new DraggableWrapperItemFocus()
      const element = document.createElement('div')

      focus.set(element)
      focus.set(undefined)
      expect(focus.get()).toBeUndefined()
    })

    it('should overwrite existing element when set is called repeatedly', () => {
      const focus = new DraggableWrapperItemFocus()
      const element1 = document.createElement('div')
      const element2 = document.createElement('span')

      focus.set(element1)
      expect(focus.get()).toBe(element1)

      focus.set(element2)
      expect(focus.get()).toBe(element2)
    })

    it('should remain undefined when reset is called repeatedly without prior set', () => {
      const focus = new DraggableWrapperItemFocus()
      expect(focus.get()).toBeUndefined()

      focus.reset().reset()
      expect(focus.get()).toBeUndefined()
    })
  })

  describe('Statefulness and instance isolation', () => {
    it('should maintain independent state across distinct instances', () => {
      const focus1 = new DraggableWrapperItemFocus()
      const focus2 = new DraggableWrapperItemFocus()
      const element = document.createElement('div')

      focus1.set(element)
      expect(focus1.get()).toBe(element)
      expect(focus2.get()).toBeUndefined()

      focus1.reset()
      expect(focus1.get()).toBeUndefined()
      expect(focus2.get()).toBeUndefined()
    })
  })
})
