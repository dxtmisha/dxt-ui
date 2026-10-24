// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DraggableWrapperItemSelection } from '../DraggableWrapperItemSelection'

describe('DraggableWrapperItemSelection', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with undefined selection stack', () => {
      const selection = new DraggableWrapperItemSelection()
      expect(selection.get()).toBeUndefined()
    })

    it('should set selected elements array and support method chaining', () => {
      const selection = new DraggableWrapperItemSelection()
      const el1 = document.createElement('div')
      const el2 = document.createElement('span')

      const result = selection.set([el1, el2])
      expect(result).toBe(selection)
      expect(selection.get()).toEqual([el1, el2])
    })

    it('should reset selected elements array back to undefined and support chaining', () => {
      const selection = new DraggableWrapperItemSelection()
      const el = document.createElement('div')

      selection.set([el])
      expect(selection.get()).toEqual([el])

      const result = selection.reset()
      expect(result).toBe(selection)
      expect(selection.get()).toBeUndefined()
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should accept empty array [] in set() and return it', () => {
      const selection = new DraggableWrapperItemSelection()
      selection.set([])
      expect(selection.get()).toEqual([])
    })

    it('should accept undefined in set()', () => {
      const selection = new DraggableWrapperItemSelection()
      const el = document.createElement('div')

      selection.set([el])
      selection.set(undefined)
      expect(selection.get()).toBeUndefined()
    })

    it('should overwrite existing array on consecutive set calls', () => {
      const selection = new DraggableWrapperItemSelection()
      const el1 = document.createElement('div')
      const el2 = document.createElement('span')

      selection.set([el1])
      expect(selection.get()).toEqual([el1])

      selection.set([el2])
      expect(selection.get()).toEqual([el2])
    })

    it('should remain undefined when reset is called multiple times', () => {
      const selection = new DraggableWrapperItemSelection()
      selection.reset().reset()
      expect(selection.get()).toBeUndefined()
    })
  })

  describe('Statefulness and instance isolation', () => {
    it('should maintain independent selection arrays across different instances', () => {
      const sel1 = new DraggableWrapperItemSelection()
      const sel2 = new DraggableWrapperItemSelection()
      const el = document.createElement('div')

      sel1.set([el])
      expect(sel1.get()).toEqual([el])
      expect(sel2.get()).toBeUndefined()

      sel1.reset()
      expect(sel1.get()).toBeUndefined()
      expect(sel2.get()).toBeUndefined()
    })
  })
})
