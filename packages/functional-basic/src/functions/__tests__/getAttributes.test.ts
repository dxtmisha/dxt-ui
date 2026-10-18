/**
 * @vitest-environment jsdom
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getAttributes } from '../getAttributes'

describe('getAttributes', () => {
  let element: HTMLElement

  beforeEach(() => {
    element = document.createElement('div')
    element.setAttribute('id', 'test-id')
    element.setAttribute('data-value', 'custom-value')
    element.setAttribute('class', 'test-class')
    element.setAttribute('disabled', '')
    document.body.appendChild(element)
  })

  afterEach(() => {
    if (element.parentNode) {
      element.parentNode.removeChild(element)
    }
  })

  describe('обратная совместимость и базовые контракты', () => {
    it('должен возвращать все атрибуты переданного элемента', () => {
      const attributes = getAttributes(element)

      expect(attributes).toEqual({
        'id': 'test-id',
        'data-value': 'custom-value',
        'class': 'test-class',
        'disabled': ''
      })
    })

    it('должен извлекать атрибуты по CSS-селектору', () => {
      const attributes = getAttributes('#test-id')

      expect(attributes).toEqual({
        'id': 'test-id',
        'data-value': 'custom-value',
        'class': 'test-class',
        'disabled': ''
      })
    })

    it('должен возвращать пустой объект, если элемент не найден по селектору', () => {
      const attributes = getAttributes('.non-existent-element')
      expect(attributes).toEqual({})
    })

    it('должен возвращать пустой объект, если аргумент не передан вовсе', () => {
      expect(getAttributes()).toEqual({})
    })

    it('должен возвращать пустой объект, если передан undefined', () => {
      const attributes = getAttributes(undefined)
      expect(attributes).toEqual({})
    })

    it('должен возвращать пустой объект, если передан null', () => {
      const attributes = getAttributes(null as unknown as undefined)
      expect(attributes).toEqual({})
    })

    it('должен возвращать пустой объект для элемента без единого атрибута', () => {
      const emptyElement = document.createElement('span')
      expect(getAttributes(emptyElement)).toEqual({})
    })

    it('должен работать с изолированным элементом, не прикрепленным к DOM', () => {
      const detached = document.createElement('article')
      detached.setAttribute('role', 'article')
      detached.setAttribute('aria-hidden', 'false')

      expect(getAttributes(detached)).toEqual({
        'role': 'article',
        'aria-hidden': 'false'
      })
    })
  })

  describe('устойчивость к невалидному вводу и не-элементным узлам', () => {
    it('не должен выбрасывать исключение и возвращать пустой объект для document', () => {
      expect(() => getAttributes(document as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(document as unknown as HTMLElement)).toEqual({})
    })

    it('не должен выбрасывать исключение и возвращать пустой объект для текстового узла (TextNode)', () => {
      const textNode = document.createTextNode('sample text')
      expect(() => getAttributes(textNode as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(textNode as unknown as HTMLElement)).toEqual({})
    })

    it('не должен падать при передаче DocumentFragment', () => {
      const fragment = document.createDocumentFragment()
      expect(() => getAttributes(fragment as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(fragment as unknown as HTMLElement)).toEqual({})
    })

    it('не должен выбрасывать исключение для объекта window', () => {
      expect(() => getAttributes(window)).not.toThrow()
      expect(typeof getAttributes(window)).toBe('object')
    })

    it('должен безопасно обрабатывать сторонний объект без getAttributeNames', () => {
      const plainObject = { someKey: 'someValue' }
      expect(() => getAttributes(plainObject as unknown as HTMLElement)).not.toThrow()
      expect(getAttributes(plainObject as unknown as HTMLElement)).toEqual({})
    })
  })

  describe('различные типы и форматы значений атрибутов', () => {
    it('должен сохранять булевы и пустые атрибуты как пустые строки', () => {
      const button = document.createElement('button')
      button.setAttribute('disabled', '')
      button.setAttribute('hidden', '')
      button.setAttribute('required', '')

      expect(getAttributes(button)).toEqual({
        disabled: '',
        hidden: '',
        required: ''
      })
    })

    it('должен корректно сохранять числовые атрибуты, включая ноль ("0")', () => {
      const input = document.createElement('input')
      input.setAttribute('tabindex', '0')
      input.setAttribute('value', '0')
      input.setAttribute('maxlength', '100')

      expect(getAttributes(input)).toEqual({
        tabindex: '0',
        value: '0',
        maxlength: '100'
      })
    })

    it('должен сохранять кириллические и юникод-значения', () => {
      const link = document.createElement('a')
      link.setAttribute('title', 'Главная страница')
      link.setAttribute('aria-label', 'Trang chủ')

      expect(getAttributes(link)).toEqual({
        'title': 'Главная страница',
        'aria-label': 'Trang chủ'
      })
    })

    it('должен корректно сохранять атрибуты со спецсимволами и URL', () => {
      const link = document.createElement('a')
      const url = 'https://example.com/api?user=1&name=test#hash'
      link.setAttribute('href', url)

      expect(getAttributes(link)).toEqual({
        href: url
      })
    })

    it('должен сохранять JSON-строки в data-атрибутах', () => {
      const container = document.createElement('div')
      const jsonString = JSON.stringify({ items: [1, 2, 3], active: true })
      container.setAttribute('data-state', jsonString)

      expect(getAttributes(container)).toEqual({
        'data-state': jsonString
      })
    })
  })

  describe('поддержка SVG и специализированных элементов', () => {
    it('должен извлекать атрибуты из SVG-элементов', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.setAttribute('viewBox', '0 0 24 24')
      svg.setAttribute('width', '24')
      svg.setAttribute('height', '24')
      svg.setAttribute('fill', 'currentColor')

      expect(getAttributes(svg as unknown as HTMLElement)).toEqual({
        viewBox: '0 0 24 24',
        width: '24',
        height: '24',
        fill: 'currentColor'
      })
    })

    it('должен отражать динамическое добавление и удаление атрибутов', () => {
      const dynamicElement = document.createElement('div')
      dynamicElement.setAttribute('data-temp', 'value1')
      expect(getAttributes(dynamicElement)).toEqual({ 'data-temp': 'value1' })

      dynamicElement.removeAttribute('data-temp')
      dynamicElement.setAttribute('data-new', 'value2')
      expect(getAttributes(dynamicElement)).toEqual({ 'data-new': 'value2' })
    })
  })
})
