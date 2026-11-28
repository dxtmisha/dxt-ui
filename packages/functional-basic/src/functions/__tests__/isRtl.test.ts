// @vitest-environment jsdom
import { afterEach, describe, expect, expectTypeOf, it, vi } from 'vitest'
import * as isDomRuntimeModule from '../isDomRuntime'
import { isRtl } from '../isRtl'

describe('isRtl', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    document.body.innerHTML = ''
    document.documentElement.removeAttribute('dir')
    document.body.removeAttribute('dir')
    document.dir = ''
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return false by default in LTR environment', () => {
      expect(isRtl()).toBe(false)
      expectTypeOf(isRtl).returns.toEqualTypeOf<boolean>()
    })

    it('should detect RTL from element dir attribute and ancestor dir attribute', () => {
      const wrapper = document.createElement('div')
      wrapper.setAttribute('dir', 'rtl')
      const child = document.createElement('div')
      wrapper.appendChild(child)
      document.body.appendChild(wrapper)

      expect(isRtl(wrapper)).toBe(true)
      expect(isRtl(child)).toBe(true)
    })

    it('should respect closer LTR override inside RTL ancestor', () => {
      const wrapper = document.createElement('div')
      wrapper.setAttribute('dir', 'rtl')
      const child = document.createElement('div')
      child.setAttribute('dir', 'ltr')
      wrapper.appendChild(child)
      document.body.appendChild(wrapper)

      expect(isRtl(child)).toBe(false)
    })

    it('should detect RTL case-insensitively and via CSS selector or Window', () => {
      const target = document.createElement('div')
      target.id = 'rtl-box'
      target.setAttribute('dir', 'RTL')
      document.body.appendChild(target)

      expect(isRtl('#rtl-box')).toBe(true)

      document.body.setAttribute('dir', 'rtl')
      expect(isRtl(window)).toBe(true)
    })

    it('should fall back to getComputedStyle direction when no dir attribute is present', () => {
      const target = document.createElement('div')
      target.style.direction = 'rtl'
      document.body.appendChild(target)

      expect(isRtl(target)).toBe(true)
    })

    it('should detect RTL from documentElement.dir or document.dir when element is omitted or not found', () => {
      document.documentElement.dir = 'rtl'
      expect(isRtl()).toBe(true)
      expect(isRtl('#missing-element')).toBe(true)

      document.documentElement.removeAttribute('dir')
      document.dir = 'rtl'
      expect(isRtl(null)).toBe(true)
      expect(isRtl(undefined)).toBe(true)
    })
  })

  describe('SSR safety and non-DOM environment', () => {
    it('should return false without touching DOM when isDomRuntime returns false', () => {
      vi.spyOn(isDomRuntimeModule, 'isDomRuntime').mockReturnValue(false)
      document.documentElement.dir = 'rtl'

      const target = document.createElement('div')
      target.setAttribute('dir', 'rtl')

      expect(isRtl()).toBe(false)
      expect(isRtl(target)).toBe(false)
      expect(isRtl('#rtl-box')).toBe(false)
    })
  })
})
