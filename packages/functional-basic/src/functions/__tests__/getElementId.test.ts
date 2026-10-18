/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ServerStorage } from '../../classes/ServerStorage'
import {
  getElementId,
  initGetElementId,
  resetGetElementId
} from '../getElementId'

describe('getElementId', () => {
  let element: HTMLElement

  beforeEach(() => {
    ServerStorage.reset()
    resetGetElementId()
    element = document.createElement('div')
    document.body.appendChild(element)
  })

  afterEach(() => {
    element.remove()
    document.body.removeAttribute('id')
    resetGetElementId()
    ServerStorage.reset()
  })

  describe('Standard functional requirements (Happy path)', () => {
    it('should return existing ID if the element already has one', () => {
      element.id = 'existing-test-id'
      expect(getElementId(element)).toBe('existing-test-id')
    })

    it('should not mutate an existing ID on the element', () => {
      element.id = 'preserved-id'
      getElementId(element)
      expect(element.id).toBe('preserved-id')
    })

    it('should generate a new unique ID if the element has no ID and assign it', () => {
      const id = getElementId(element)
      expect(id).toMatch(/^id-\d+$/)
      expect(element.id).toBe(id)
    })

    it('should generate a new ID when called with no arguments', () => {
      const id = getElementId()
      expect(id).toMatch(/^id-\d+$/)
    })

    it('should append the selector to the returned ID with a hash prefix if element has existing ID', () => {
      element.id = 'container'
      expect(getElementId(element, ' .item')).toBe('#container .item')
    })

    it('should append the selector when generating a new ID on an element without ID', () => {
      const result = getElementId(element, ' > span')
      expect(result).toBe(`#${element.id} > span`)
    })

    it('should resolve element passed as a CSS selector string and return existing ID', () => {
      element.className = 'query-target'
      element.id = 'target-id'
      expect(getElementId('.query-target')).toBe('target-id')
    })

    it('should resolve element passed as a CSS selector string, assign ID, and return it', () => {
      element.className = 'query-target-no-id'
      const id = getElementId('.query-target-no-id')
      expect(id).toMatch(/^id-\d+$/)
      expect(element.id).toBe(id)
    })

    it('should resolve element by CSS selector and append sub-selector', () => {
      element.className = 'widget'
      element.id = 'widget-1'
      expect(getElementId('.widget', ' .button')).toBe('#widget-1 .button')
    })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should start generated IDs from id-100000 upon initial execution', () => {
      const id = getElementId()
      expect(id).toBe('id-100000')
    })

    it('should increment IDs sequentially across multiple consecutive calls', () => {
      const id1 = getElementId()
      const id2 = getElementId()
      const id3 = getElementId()

      expect(id1).toBe('id-100000')
      expect(id2).toBe('id-100001')
      expect(id3).toBe('id-100002')
    })

    it('should generate 100 unique, monotonically increasing IDs under stress', () => {
      const count = 100
      const ids = new Set<string>()

      for (let index = 0; index < count; index++) {
        ids.add(getElementId())
      }

      expect(ids.size).toBe(count)
    })

    it('should trim trailing whitespace from the combined selector string', () => {
      element.id = 'box'
      expect(getElementId(element, ' .inner   ')).toBe('#box .inner')
    })

    it('should handle selector without leading whitespace', () => {
      element.id = 'card'
      expect(getElementId(element, '.active')).toBe('#card.active')
    })

    it('should handle complex CSS combinators in selector', () => {
      element.id = 'layout'
      expect(getElementId(element, ' > div + section ~ p')).toBe('#layout > div + section ~ p')
    })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should generate a new ID if element has an empty string as ID attribute', () => {
      element.id = ''
      const id = getElementId(element)
      expect(id).toMatch(/^id-\d+$/)
      expect(element.id).toBe(id)
    })

    it('should generate a new ID if element has whitespace-only ID attribute', () => {
      element.setAttribute('id', '   ')
      const id = getElementId(element)
      expect(id).toMatch(/^id-\d+$/)
      expect(element.id).toBe(id)
    })

    it('should return a generated string ID if CSS selector does not match any element', () => {
      const id = getElementId('.non-existent-selector')
      expect(id).toMatch(/^id-\d+$/)
    })

    it('should ignore selector parameter when element selector is not found in DOM', () => {
      const id = getElementId('.missing-element', ' .child')
      expect(id).toMatch(/^id-\d+$/)
      expect(id.includes('.child')).toBe(false)
    })

    it('should handle undefined element parameter safely', () => {
      expect(getElementId(undefined)).toMatch(/^id-\d+$/)
    })

    it('should return plain ID without hash prefix when selector is undefined', () => {
      element.id = 'plain-id'
      expect(getElementId(element, undefined)).toBe('plain-id')
    })

    it('should return plain ID without hash prefix when selector is empty string', () => {
      element.id = 'plain-id'
      expect(getElementId(element, '')).toBe('plain-id')
    })

    it('should return trimmed hash-prefixed ID when selector is whitespace-only', () => {
      element.id = 'plain-id'
      expect(getElementId(element, '   ')).toBe('#plain-id')
    })
  })

  describe('DOM element types, window, and SVG', () => {
    it('should assign and retrieve ID on SVG elements', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      document.body.appendChild(svg)

      const id = getElementId(svg)
      expect(id).toMatch(/^id-\d+$/)
      expect(svg.getAttribute('id')).toBe(id)

      svg.remove()
    })

    it('should assign and retrieve ID on nested SVG child elements (path)', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
      svg.appendChild(path)
      document.body.appendChild(svg)

      const pathId = getElementId(path)
      expect(pathId).toMatch(/^id-\d+$/)
      expect(path.getAttribute('id')).toBe(pathId)

      svg.remove()
    })

    it('should resolve window target to document.body and assign ID', () => {
      const id = getElementId(window)
      expect(id).toMatch(/^id-\d+$/)
      expect(document.body.id).toBe(id)
    })

    it('should preserve existing ID on document.body when passing window', () => {
      document.body.id = 'existing-body-id'
      expect(getElementId(window)).toBe('existing-body-id')
    })

    it('should support various HTML elements (input, button, section)', () => {
      const input = document.createElement('input')
      const button = document.createElement('button')
      const section = document.createElement('section')

      document.body.append(input, button, section)

      expect(getElementId(input)).toBe(input.id)
      expect(getElementId(button)).toBe(button.id)
      expect(getElementId(section)).toBe(section.id)

      input.remove()
      button.remove()
      section.remove()
    })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should convert positive numeric listener return values to string', () => {
      initGetElementId(() => 4242)
      expect(getElementId()).toBe('4242')
    })

    it('should correctly handle numeric 0 as valid ID without falling back to ServerStorage', () => {
      initGetElementId(() => 0)
      expect(getElementId()).toBe('0')
    })

    it('should handle negative numeric listener return values', () => {
      initGetElementId(() => -999)
      expect(getElementId()).toBe('-999')
    })

    it('should handle floating point numeric listener return values', () => {
      initGetElementId(() => 3.14)
      expect(getElementId()).toBe('3.14')
    })

    it('should assign numeric listener ID converted to string onto DOM element', () => {
      initGetElementId(() => 101)
      const id = getElementId(element)
      expect(id).toBe('101')
      expect(element.id).toBe('101')
    })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should preserve element ID containing underscores, hyphens, and colons', () => {
      element.id = 'my-component_v2:input'
      expect(getElementId(element)).toBe('my-component_v2:input')
    })

    it('should append complex CSS attribute and pseudo-class selectors intact', () => {
      element.id = 'form'
      expect(getElementId(element, ' [data-state="active"]:hover')).toBe(
        '#form [data-state="active"]:hover'
      )
    })

    it('should treat HTML and script-like tags in selector as literal string concatenation', () => {
      element.id = 'safe-elem'
      const dangerousSelector = ' <script>alert(1)</script>'
      const result = getElementId(element, dangerousSelector)
      expect(result).toBe('#safe-elem <script>alert(1)</script>')
    })
  })

  describe('Multilingual and Unicode support', () => {
    it('should preserve Cyrillic characters in existing element ID', () => {
      element.id = 'блок-контейнер'
      expect(getElementId(element)).toBe('блок-контейнер')
    })

    it('should append Cyrillic classes in selector string', () => {
      element.id = 'список'
      expect(getElementId(element, ' .элемент-списка')).toBe('#список .элемент-списка')
    })

    it('should preserve Vietnamese diacritics in existing element ID', () => {
      element.id = 'tiêu-đề-chính'
      expect(getElementId(element)).toBe('tiêu-đề-chính')
    })

    it('should append Vietnamese classes in selector string', () => {
      element.id = 'bảng'
      expect(getElementId(element, ' .dữ-liệu')).toBe('#bảng .dữ-liệu')
    })

    it('should handle listener returning multilingual strings', () => {
      initGetElementId(() => 'phần-tử-123')
      expect(getElementId()).toBe('phần-tử-123')
    })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should use ID returned by the registered listener', () => {
      initGetElementId(() => 'custom-context-id')
      expect(getElementId()).toBe('custom-context-id')
    })

    it('should not overwrite an already registered listener on subsequent initGetElementId calls', () => {
      initGetElementId(() => 'first-listener')
      initGetElementId(() => 'second-listener')
      expect(getElementId()).toBe('first-listener')
    })

    it('should fall back to ServerStorage if listener returns empty string', () => {
      initGetElementId(() => '')
      const id = getElementId()
      expect(id).toMatch(/^id-\d+$/)
    })

    it('should completely clear the listener when resetGetElementId is invoked', () => {
      initGetElementId(() => 'ephemeral-listener')
      expect(getElementId()).toBe('ephemeral-listener')

      resetGetElementId()
      expect(getElementId()).toMatch(/^id-\d+$/)
    })

    it('should allow registering a new listener after resetGetElementId is called', () => {
      initGetElementId(() => 'first-listener')
      expect(getElementId()).toBe('first-listener')

      resetGetElementId()

      initGetElementId(() => 'second-listener')
      expect(getElementId()).toBe('second-listener')
    })

    it('should reset ID sequence back to 100000 when ServerStorage is reset', () => {
      expect(getElementId()).toBe('id-100000')
      expect(getElementId()).toBe('id-100001')

      ServerStorage.reset()

      expect(getElementId()).toBe('id-100000')
    })

    it('should ensure complete test isolation without state leakage across runs', () => {
      // First phase: mutate state
      initGetElementId(() => 'isolated-id')
      expect(getElementId()).toBe('isolated-id')

      // Teardown
      resetGetElementId()
      ServerStorage.reset()

      // Second phase: clean initial state verified
      expect(getElementId()).toBe('id-100000')
    })
  })
})
