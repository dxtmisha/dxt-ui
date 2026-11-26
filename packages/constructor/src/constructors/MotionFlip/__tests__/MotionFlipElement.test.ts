// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { ref } from 'vue'
import type { DesignName } from '@dxtmisha/functional'

import { MotionFlipElement } from '../MotionFlipElement'

const createMockNaming = (name = 'd1-motion-flip'): DesignName => ({
  getName: () => name,
  getStatusClass: (status: string) => `${name}--${status}`,
  getSubClass: (sub: string) => `${name}__${sub}`
} as unknown as DesignName)

describe('MotionFlipElement', () => {
  describe('Element availability and accessors', () => {
    it('should return false for isEnable and undefined for getElement when element ref is empty', () => {
      const element = ref<HTMLElement | undefined>(undefined)
      const manager = new MotionFlipElement(element, createMockNaming())

      expect(manager.isEnable()).toBe(false)
      expect(manager.getElement()).toBeUndefined()
      expect(manager.getClassName()).toBe('d1-motion-flip')
    })

    it('should return true for isEnable and return the DOM node when element ref is populated', () => {
      const node = document.createElement('div')
      const element = ref<HTMLElement | undefined>(node)
      const manager = new MotionFlipElement(element, createMockNaming('custom-flip'))

      expect(manager.isEnable()).toBe(true)
      expect(manager.getElement()).toBe(node)
      expect(manager.getClassName()).toBe('custom-flip')

      element.value = undefined
      expect(manager.isEnable()).toBe(false)
      expect(manager.getElement()).toBeUndefined()
    })
  })

  describe('Status class mutations', () => {
    it('should add freeze and go status classes and clear them via resetStatus', () => {
      const node = document.createElement('div')
      const element = ref<HTMLElement | undefined>(node)
      const manager = new MotionFlipElement(element, createMockNaming())

      manager.addClassFreeze()
      expect(node.classList.contains('d1-motion-flip--freeze')).toBe(true)
      expect(node.classList.contains('d1-motion-flip--go')).toBe(false)

      manager.addClassGo()
      expect(node.classList.contains('d1-motion-flip--freeze')).toBe(true)
      expect(node.classList.contains('d1-motion-flip--go')).toBe(true)

      manager.resetStatus()
      expect(node.classList.contains('d1-motion-flip--freeze')).toBe(false)
      expect(node.classList.contains('d1-motion-flip--go')).toBe(false)
    })

    it('should safely no-op class operations when element ref is undefined', () => {
      const element = ref<HTMLElement | undefined>(undefined)
      const manager = new MotionFlipElement(element, createMockNaming())

      expect(() => {
        manager.addClassFreeze()
        manager.addClassGo()
        manager.resetStatus()
      }).not.toThrow()
    })
  })
})
