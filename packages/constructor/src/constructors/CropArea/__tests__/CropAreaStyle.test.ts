// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { CropAreaStyle } from '../CropAreaStyle'

describe('CropAreaStyle', () => {
  describe('Element resolution and CSS custom property updates', () => {
    it('should return the current element via getElement and apply CSS variables on set', () => {
      const element = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(element)
      const style = new CropAreaStyle(elementRef, new DesignName('d1.crop-area'))

      expect(style.getElement()).toBe(element)

      style.set([10, 20, 30, 40])

      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('10%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-right')).toBe('20%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-bottom')).toBe('30%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('40%')
    })

    it('should support zero and fractional percentage coordinates', () => {
      const element = document.createElement('div')
      const elementRef = ref<HTMLElement | undefined>(element)
      const style = new CropAreaStyle(elementRef, new DesignName('d1.cropArea'))

      style.set([0, 12.5, 0, 37.8])

      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('0%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-right')).toBe('12.5%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-bottom')).toBe('0%')
      expect(element.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('37.8%')
    })

    it('should safely no-op when element is not mounted', () => {
      const elementRef = ref<HTMLElement | undefined>(undefined)
      const style = new CropAreaStyle(elementRef, new DesignName('d1.crop-area'))

      expect(style.getElement()).toBeUndefined()
      expect(() => style.set([10, 20, 30, 40])).not.toThrow()
    })

    it('should reflect reactive element ref updates', () => {
      const elementRef = ref<HTMLElement | undefined>(undefined)
      const style = new CropAreaStyle(elementRef, new DesignName('d1.crop-area'))

      expect(style.getElement()).toBeUndefined()

      const mounted = document.createElement('div')
      elementRef.value = mounted
      style.set([5, 15, 25, 35])

      expect(style.getElement()).toBe(mounted)
      expect(mounted.style.getPropertyValue('--d1-cropArea-sys-crop-top')).toBe('5%')
      expect(mounted.style.getPropertyValue('--d1-cropArea-sys-crop-left')).toBe('35%')
    })
  })
})
