// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'
import * as functionalBasic from '@dxtmisha/functional-basic'

import { CropAreaElement } from '../CropAreaElement'

describe('CropAreaElement', () => {
  afterEach(() => {
    document.body.className = ''
    vi.restoreAllMocks()
  })

  describe('Bounding rectangle resolution', () => {
    it('should return bounding client rect of the mounted element', () => {
      const element = document.createElement('div')
      const rectMock = {
        top: 10,
        left: 20,
        width: 400,
        height: 300,
        bottom: 310,
        right: 420,
        x: 20,
        y: 10,
        toJSON: () => ({})
      } as DOMRect

      element.getBoundingClientRect = vi.fn().mockReturnValue(rectMock)

      const elementRef = ref<HTMLElement | undefined>(element)
      const elementItem = new CropAreaElement(elementRef, new DesignName('d1.crop-area'))

      expect(elementItem.rect).toBe(rectMock)
      expect(element.getBoundingClientRect).toHaveBeenCalledTimes(1)
    })

    it('should return undefined when element ref is empty', () => {
      const elementRef = ref<HTMLElement | undefined>(undefined)
      const elementItem = new CropAreaElement(elementRef, new DesignName('d1.crop-area'))

      expect(elementItem.rect).toBeUndefined()
    })
  })

  describe('Document body text selection lock', () => {
    it('should add and remove blockSelection class on document.body', () => {
      const elementRef = ref<HTMLElement | undefined>(document.createElement('div'))
      const elementItem = new CropAreaElement(elementRef, new DesignName('d1.crop-area'))

      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)

      elementItem.setBlockSelection(true)
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(true)

      // Calling with default argument (false) removes class
      elementItem.setBlockSelection()
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)

      // Idempotent removal does not throw
      elementItem.setBlockSelection(false)
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
    })

    it('should safely no-op when not running in DOM runtime (SSR guard)', () => {
      vi.spyOn(functionalBasic, 'isDomRuntime').mockReturnValue(false)

      const elementRef = ref<HTMLElement | undefined>(undefined)
      const elementItem = new CropAreaElement(elementRef, new DesignName('d1.crop-area'))

      expect(() => elementItem.setBlockSelection(true)).not.toThrow()
      expect(document.body.classList.contains('d1-cropArea__blockSelection')).toBe(false)
    })
  })
})
