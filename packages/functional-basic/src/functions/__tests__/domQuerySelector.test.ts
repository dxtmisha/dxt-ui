/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { domQuerySelector } from '../domQuerySelector'

describe('domQuerySelector', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    container.innerHTML = `
      <div class="test-class" id="first" data-index="0" data-active="false">First</div>
      <div class="test-class" id="second" data-index="1" data-active="true">
        <span class="nested-span" data-label="Привет">Nested</span>
      </div>
      <button type="button" class="button-test" disabled>Action</button>
    `
    document.body.appendChild(container)
  })

  afterEach(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container)
    }
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should select the first matching element by class selector', () => {
      const element = domQuerySelector('.test-class')
      expect(element).toBeDefined()
      expect(element?.id).toBe('first')
      expect(element?.textContent).toBe('First')
    })

    it('should select the matching element by ID selector', () => {
      const element = domQuerySelector('#second')
      expect(element).toBeDefined()
      expect(element?.id).toBe('second')
    })

    it('should select the matching element by tag and descendant selectors', () => {
      const element = domQuerySelector('div .nested-span')
      expect(element).toBeInstanceOf(HTMLSpanElement)
      expect(element?.textContent).toBe('Nested')
    })

    it('should select the matching element using compound and attribute selectors', () => {
      const secondElement = domQuerySelector('.test-class#second')
      expect(secondElement?.id).toBe('second')

      const zeroIndexElement = domQuerySelector('[data-index="0"]')
      expect(zeroIndexElement?.id).toBe('first')

      const falseAttrElement = domQuerySelector('[data-active="false"]')
      expect(falseAttrElement?.id).toBe('first')

      const disabledButton = domQuerySelector('button:disabled')
      expect(disabledButton).toBeInstanceOf(HTMLButtonElement)
      expect(disabledButton?.textContent).toBe('Action')
    })

    it('should support generic element type narrowing', () => {
      const button = domQuerySelector<HTMLButtonElement>('.button-test')
      expect(button).toBeInstanceOf(HTMLButtonElement)
      expect(button?.disabled).toBe(true)
    })
  })

  describe('Boundary values and document order', () => {
    it('should strictly return the first element in document tree order when multiple elements match', () => {
      const matched = domQuerySelector('[data-index]')
      expect(matched?.getAttribute('data-index')).toBe('0')
      expect(matched?.id).toBe('first')
    })

    it('should match root-level document elements such as html and body', () => {
      expect(domQuerySelector('html')).toBe(document.documentElement)
      expect(domQuerySelector('body')).toBe(document.body)
    })
  })

  describe('Non-matching and invalid selectors', () => {
    it('should return undefined (never null) when no element matches the selector', () => {
      const result = domQuerySelector('.non-existent-class')
      expect(result).toBeUndefined()
      expect(result).not.toBeNull()
    })

    it('should throw a SyntaxError / DOMException when given an empty or invalid CSS selector', () => {
      expect(() => domQuerySelector('')).toThrow()
      expect(() => domQuerySelector('[[invalid-selector')).toThrow()
    })
  })

  describe('Multilingual and Unicode attribute selectors', () => {
    it('should match elements with Cyrillic, Vietnamese, and CJK attribute values and Emoji content', () => {
      const unicodeElement = document.createElement('div')
      unicodeElement.setAttribute('data-cyrillic', 'Привет')
      unicodeElement.setAttribute('data-vietnamese', 'Tiếng Việt')
      unicodeElement.setAttribute('data-cjk', '你好世界')
      unicodeElement.textContent = '🚀 🔥 ✨'
      container.appendChild(unicodeElement)

      expect(domQuerySelector('[data-cyrillic="Привет"]')).toBe(unicodeElement)
      expect(domQuerySelector('[data-vietnamese="Tiếng Việt"]')).toBe(unicodeElement)
      expect(domQuerySelector('[data-cjk="你好世界"]')).toBe(unicodeElement)
      expect(domQuerySelector('[data-cjk="你好世界"]')?.textContent).toBe('🚀 🔥 ✨')
    })
  })

  describe('SSR and non-DOM environment safety', () => {
    it('should return undefined when isDomRuntime() returns false without calling document.querySelector', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
      const querySelectorSpy = vi.spyOn(document, 'querySelector')

      const result = domQuerySelector('.test-class')

      expect(result).toBeUndefined()
      expect(querySelectorSpy).not.toHaveBeenCalled()
    })
  })

  describe('DOM state isolation and live updates', () => {
    it('should reflect live DOM additions and removals across invocations', () => {
      expect(domQuerySelector('#dynamic-node')).toBeUndefined()

      const dynamicNode = document.createElement('section')
      dynamicNode.id = 'dynamic-node'
      container.appendChild(dynamicNode)

      expect(domQuerySelector('#dynamic-node')).toBe(dynamicNode)

      container.removeChild(dynamicNode)
      expect(domQuerySelector('#dynamic-node')).toBeUndefined()
    })
  })
})
