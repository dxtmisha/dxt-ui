// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { DesignName } from '@dxtmisha/functional'
import { DraggableWrapperItemActive } from '../DraggableWrapperItemActive'

describe('DraggableWrapperItemActive', () => {
  const naming = new DesignName('my.component')
  const mockClasses = {
    getName: () => 'my-component',
    getList: () => ({
      active: 'active-class'
    })
  } as any

  describe('Standard functional requirements (Happy path)', () => {
    it('should initialize with no active element', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      expect(active.is()).toBe(false)
      expect(active.get()).toBeUndefined()
    })

    it('should set active element and update is() status', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      const element = document.createElement('div')

      const result = active.set(element)
      expect(result).toBe(active)
      expect(active.is()).toBe(true)
      expect(active.get()).toBe(element)
    })

    it('should prepare elements styles, compute shifts, and apply active class', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      const element = document.createElement('div')

      element.getBoundingClientRect = () => ({
        left: 10,
        top: 20,
        width: 100,
        height: 200,
        right: 110,
        bottom: 220,
        x: 10,
        y: 20,
        toJSON: () => {}
      })

      const result = active.prepare(element, { x: 25, y: 50 })
      expect(result).toBe(active)
      expect(active.get()).toBe(element)
      expect(element.style.getPropertyValue('--my-component-sys-item-width')).toBe('100px')
      expect(element.style.getPropertyValue('--my-component-sys-item-height')).toBe('200px')
      expect(element.style.getPropertyValue('--my-component-sys-item-shift-x')).toBe('15px')
      expect(element.style.getPropertyValue('--my-component-sys-item-shift-y')).toBe('30px')
      expect(element.classList.contains('active-class')).toBe(true)
    })

    it('should reset custom CSS properties and unset active item on reset()', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      const element = document.createElement('div')

      element.getBoundingClientRect = () => ({
        left: 0,
        top: 0,
        width: 50,
        height: 50,
        right: 50,
        bottom: 50,
        x: 0,
        y: 0,
        toJSON: () => {}
      })

      active.prepare(element, { x: 10, y: 10 })
      expect(active.is()).toBe(true)

      const result = active.reset()
      expect(result).toBe(active)
      expect(active.is()).toBe(false)
      expect(active.get()).toBeUndefined()
      expect(element.style.getPropertyValue('--my-component-sys-item-width')).toBe('')
      expect(element.style.getPropertyValue('--my-component-sys-item-height')).toBe('')
      expect(element.style.getPropertyValue('--my-component-sys-item-shift-x')).toBe('')
      expect(element.style.getPropertyValue('--my-component-sys-item-shift-y')).toBe('')
    })

    it('should remove custom properties without unsetting item on resetItemStyles()', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      const element = document.createElement('div')
      element.style.setProperty('--my-component-sys-item-width', '10px')
      element.style.setProperty('--my-component-sys-item-rotate', '45deg')

      active.set(element)
      const result = active.resetItemStyles()
      expect(result).toBe(active)
      expect(active.get()).toBe(element)
      expect(element.style.getPropertyValue('--my-component-sys-item-width')).toBe('')
      expect(element.style.getPropertyValue('--my-component-sys-item-rotate')).toBe('')
    })
  })

  describe('Boundary values and edge cases', () => {
    it('should handle zero and negative coordinates in prepare()', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      const element = document.createElement('div')

      element.getBoundingClientRect = () => ({
        left: 20,
        top: 30,
        width: 100,
        height: 100,
        right: 120,
        bottom: 130,
        x: 20,
        y: 30,
        toJSON: () => {}
      })

      active.prepare(element, { x: 0, y: 0 })
      expect(element.style.getPropertyValue('--my-component-sys-item-shift-x')).toBe('-20px')
      expect(element.style.getPropertyValue('--my-component-sys-item-shift-y')).toBe('-30px')
    })

    it('should safely handle resetItemStyles when no element is set', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      expect(() => active.resetItemStyles()).not.toThrow()
    })

    it('should safely handle reset when called multiple times consecutively', () => {
      const active = new DraggableWrapperItemActive(naming, () => mockClasses)
      expect(() => active.reset().reset()).not.toThrow()
      expect(active.is()).toBe(false)
    })
  })

  describe('Statefulness and instance isolation', () => {
    it('should maintain independent state across instances', () => {
      const active1 = new DraggableWrapperItemActive(naming, () => mockClasses)
      const active2 = new DraggableWrapperItemActive(naming, () => mockClasses)
      const el = document.createElement('div')

      active1.set(el)
      expect(active1.is()).toBe(true)
      expect(active2.is()).toBe(false)
    })
  })
})
