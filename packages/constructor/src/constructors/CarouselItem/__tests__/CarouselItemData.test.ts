import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'

import { CarouselItemData } from '../CarouselItemData'
import type { CarouselItemProps } from '../props'

describe('CarouselItemData', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe('Standard functional requirements (Happy path & WAI-ARIA Carousel Pattern)', () => {
    it('should determine selected state reactively', () => {
      const props = reactive<CarouselItemProps>({
        selected: false
      })
      const data = new CarouselItemData(props)

      expect(data.isSelected()).toBe(false)

      props.selected = true
      expect(data.isSelected()).toBe(true)

      props.selected = undefined
      expect(data.isSelected()).toBe(false)
    })

    it('should return current slide identifier for numbers and strings', () => {
      const props = reactive<CarouselItemProps>({
        slide: 3
      })
      const data = new CarouselItemData(props)

      expect(data.slide).toBe(3)

      props.slide = 'intro-slide'
      expect(data.slide).toBe('intro-slide')

      props.slide = undefined
      expect(data.slide).toBeUndefined()
    })

    it('should resolve ARIA role with default "group" fallback', () => {
      const props = reactive<CarouselItemProps>({})
      const data = new CarouselItemData(props)

      expect(data.role).toBe('group')

      props.role = 'tabpanel'
      expect(data.role).toBe('tabpanel')

      props.role = 'listitem'
      expect(data.role).toBe('listitem')
    })

    it('should compute accessible label in priority order: ariaLabel -> slide / total -> slide -> undefined', () => {
      const props = reactive<CarouselItemProps>({
        slide: 2,
        total: 5
      })
      const data = new CarouselItemData(props)

      expect(data.label).toBe('2 / 5')

      props.total = undefined
      expect(data.label).toBe('2')

      props.ariaLabel = 'Custom Slide Title'
      expect(data.label).toBe('Custom Slide Title')

      props.ariaLabel = undefined
      props.slide = undefined
      expect(data.label).toBeUndefined()
    })

    it('should return complete WAI-ARIA Carousel attributes dictionary', () => {
      const props = reactive<CarouselItemProps>({
        slide: 1,
        total: 3,
        selected: true
      })
      const data = new CarouselItemData(props)

      expect(data.aria).toEqual({
        'role': 'group',
        'aria-roledescription': 'slide',
        'aria-label': '1 / 3',
        'aria-hidden': 'false'
      })

      props.selected = false
      expect(data.aria).toEqual({
        'role': 'group',
        'aria-roledescription': 'slide',
        'aria-label': '1 / 3',
        'aria-hidden': 'true'
      })

      props.role = 'tabpanel'
      expect(data.aria.role).toBe('tabpanel')
    })
  })

  describe('Boundary values, zero/falsy traps, and empty inputs', () => {
    it('should treat numeric 0 for slide and total as valid values', () => {
      const props = reactive<CarouselItemProps>({
        slide: 0,
        total: 5,
        selected: true
      })
      const data = new CarouselItemData(props)

      expect(data.slide).toBe(0)
      expect(data.label).toBe('0 / 5')
      expect(data.aria['aria-label']).toBe('0 / 5')

      props.total = 0
      expect(data.label).toBe('0 / 0')

      props.total = undefined
      expect(data.label).toBe('0')
      expect(data.aria['aria-label']).toBe('0')
    })

    it('should handle empty strings without producing malformed labels or empty role', () => {
      const props = reactive<CarouselItemProps>({
        ariaLabel: '',
        role: '',
        slide: '',
        total: 5
      })
      const data = new CarouselItemData(props)

      expect(data.role).toBe('group')
      expect(data.label).toBeUndefined()
      expect(data.aria['aria-label']).toBeUndefined()

      props.slide = 2
      props.total = ''
      expect(data.label).toBe('2')
      expect(data.aria['aria-label']).toBe('2')
    })

    it('should omit aria-label from aria dictionary when neither ariaLabel nor slide is provided', () => {
      const props = reactive<CarouselItemProps>({
        total: 10
      })
      const data = new CarouselItemData(props)

      expect(data.label).toBeUndefined()
      expect(data.aria).toEqual({
        'role': 'group',
        'aria-roledescription': 'slide',
        'aria-hidden': 'true'
      })
      expect('aria-label' in data.aria).toBe(false)
    })

    it('should resolve defaults on minimal plain object with omitted optional keys', () => {
      const data = new CarouselItemData({})

      expect(data.isSelected()).toBe(false)
      expect(data.slide).toBeUndefined()
      expect(data.role).toBe('group')
      expect(data.label).toBeUndefined()
      expect(data.aria).toEqual({
        'role': 'group',
        'aria-roledescription': 'slide',
        'aria-hidden': 'true'
      })
    })
  })

  describe('Multilingual, Unicode, and instance isolation', () => {
    it('should preserve Cyrillic, Vietnamese diacritics, CJK, and multi-byte Emoji in ariaLabel and slide', () => {
      const props = reactive<CarouselItemProps>({
        ariaLabel: 'Слайд 1 — Học tiếng Việt 🚀 你好'
      })
      const data = new CarouselItemData(props)

      expect(data.label).toBe('Слайд 1 — Học tiếng Việt 🚀 你好')
      expect(data.aria['aria-label']).toBe('Слайд 1 — Học tiếng Việt 🚀 你好')

      props.ariaLabel = undefined
      props.slide = 'Phần 1'
      props.total = 'Tổng 3'
      expect(data.label).toBe('Phần 1 / Tổng 3')
    })

    it('should maintain strict isolation between separate instances', () => {
      const first = new CarouselItemData({ slide: 1, total: 3, selected: true })
      const second = new CarouselItemData({ slide: 2, total: 3, selected: false, role: 'tabpanel' })

      expect(first.isSelected()).toBe(true)
      expect(second.isSelected()).toBe(false)
      expect(first.label).toBe('1 / 3')
      expect(second.label).toBe('2 / 3')
      expect(first.role).toBe('group')
      expect(second.role).toBe('tabpanel')
    })
  })
})
