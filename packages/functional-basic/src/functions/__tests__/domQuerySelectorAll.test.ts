/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import * as domRuntime from '../isDomRuntime'
import { domQuerySelectorAll } from '../domQuerySelectorAll'

describe('domQuerySelectorAll', () => {
  let container: HTMLElement

  beforeEach(() => {
    container = document.createElement('div')
    container.innerHTML = `
      <div class="test-class" id="first" data-index="0" data-active="false">First</div>
      <div class="test-class" id="second" data-index="1" data-active="true">Second</div>
      <span class="other-class" id="third">Other</span>
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
    it('should return all matching elements in document order', () => {
      const elements = domQuerySelectorAll('.test-class')

      expect(elements).toBeDefined()
      expect(elements?.length).toBe(2)
      expect(elements?.[0]?.id).toBe('first')
      expect(elements?.[1]?.id).toBe('second')
    })

    it('should support comma-separated selector groups matching multiple element types', () => {
      const elements = domQuerySelectorAll('.test-class, .other-class')

      expect(elements?.length).toBe(3)
      expect(elements?.[0]?.id).toBe('first')
      expect(elements?.[1]?.id).toBe('second')
      expect(elements?.[2]?.id).toBe('third')
    })

    it('should support complex attribute and pseudo-class selectors', () => {
      const indexedElements = domQuerySelectorAll('[data-index]')
      expect(indexedElements?.length).toBe(2)

      const inactiveElements = domQuerySelectorAll('[data-active="false"]')
      expect(inactiveElements?.length).toBe(1)
      expect(inactiveElements?.[0]?.id).toBe('first')
    })

    it('should support generic element type parameter NodeListOf<E>', () => {
      const firstButton = document.createElement('button')
      const secondButton = document.createElement('button')
      firstButton.className = 'button-test'
      secondButton.className = 'button-test'
      container.appendChild(firstButton)
      container.appendChild(secondButton)

      const buttons = domQuerySelectorAll<HTMLButtonElement>('.button-test')
      expect(buttons?.length).toBe(2)
      expect(buttons?.[0]).toBeInstanceOf(HTMLButtonElement)
      expect(buttons?.[1]).toBeInstanceOf(HTMLButtonElement)
    })
  })

  describe('Boundary values and collection semantics', () => {
    it('should return an empty NodeList (length 0) when no elements match in DOM runtime', () => {
      const nonExistentClass = domQuerySelectorAll('.non-existent-class')
      expect(nonExistentClass).toBeDefined()
      expect(nonExistentClass?.length).toBe(0)

      const nonExistentTag = domQuerySelectorAll('non-existent-tag')
      expect(nonExistentTag).toBeDefined()
      expect(nonExistentTag?.length).toBe(0)
    })

    it('should return a single-item NodeList when exactly one element matches', () => {
      const singleMatch = domQuerySelectorAll('#first')
      expect(singleMatch?.length).toBe(1)
      expect(singleMatch?.[0]?.id).toBe('first')
    })

    it('should return a static NodeList snapshot that does not mutate after subsequent DOM changes', () => {
      const snapshot = domQuerySelectorAll('.test-class')
      expect(snapshot?.length).toBe(2)

      const extraDiv = document.createElement('div')
      extraDiv.className = 'test-class'
      container.appendChild(extraDiv)

      expect(snapshot?.length).toBe(2)
      expect(domQuerySelectorAll('.test-class')?.length).toBe(3)
    })
  })

  describe('Invalid selectors', () => {
    it('should throw a SyntaxError / DOMException when given an empty or malformed CSS selector', () => {
      expect(() => domQuerySelectorAll('')).toThrow()
      expect(() => domQuerySelectorAll('[[invalid')).toThrow()
    })
  })

  describe('Multilingual and Unicode attribute selectors', () => {
    it('should select all elements matching Cyrillic, Vietnamese, and CJK attributes and Emoji content', () => {
      const firstItem = document.createElement('div')
      firstItem.setAttribute('data-tag', 'Привет / Tiếng Việt / 你好')
      firstItem.textContent = '🚀'
      const secondItem = document.createElement('div')
      secondItem.setAttribute('data-tag', 'Привет / Tiếng Việt / 你好')
      secondItem.textContent = '🔥'
      container.appendChild(firstItem)
      container.appendChild(secondItem)

      const matched = domQuerySelectorAll('[data-tag="Привет / Tiếng Việt / 你好"]')
      expect(matched?.length).toBe(2)
      expect(matched?.[0]).toBe(firstItem)
      expect(matched?.[0]?.textContent).toBe('🚀')
      expect(matched?.[1]).toBe(secondItem)
      expect(matched?.[1]?.textContent).toBe('🔥')
    })
  })

  describe('SSR and non-DOM environment safety', () => {
    it('should return undefined when isDomRuntime() returns false without calling document.querySelectorAll', () => {
      vi.spyOn(domRuntime, 'isDomRuntime').mockReturnValue(false)
      const querySelectorAllSpy = vi.spyOn(document, 'querySelectorAll')

      const result = domQuerySelectorAll('.test-class')

      expect(result).toBeUndefined()
      expect(querySelectorAllSpy).not.toHaveBeenCalled()
    })
  })
})
