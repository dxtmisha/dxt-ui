// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { reactive } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { CarouselPaginationItems } from '../CarouselPaginationItems'
import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'
import type { CarouselPaginationEmits } from '../types'

describe('CarouselPaginationItems', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createInstance = (customProps: Partial<CarouselPaginationProps> = {}) => {
    const props = reactive<CarouselPaginationProps>({
      ...customProps
    })
    const emits = vi.fn()
    const selected = new CarouselPaginationSelected(
      props,
      undefined,
      emits as unknown as ConstrEmit<CarouselPaginationEmits>
    )
    const selectedGetter = vi.fn(() => selected)
    const items = new CarouselPaginationItems(
      props,
      selectedGetter,
      emits as unknown as ConstrEmit<CarouselPaginationEmits>
    )

    return { items, selected, selectedGetter, props, emits }
  }

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should not invoke selected getter eagerly in constructor', () => {
      const { selectedGetter } = createInstance({ count: 5 })
      expect(selectedGetter).not.toHaveBeenCalled()
    })

    it('should handle isHide with hideIfOne and count thresholds', () => {
      const { items, props } = createInstance({ count: 1, hideIfOne: true })

      expect(items.isHide()).toBe(true)

      props.count = 0
      expect(items.isHide()).toBe(true)

      props.count = 2
      expect(items.isHide()).toBe(false)

      props.count = 1
      props.hideIfOne = false
      expect(items.isHide()).toBe(false)
    })

    it('should compute fractionText across all template placeholders and percent accurately', () => {
      const { items, props, selected } = createInstance({ count: 4, selected: 2 })
      selected.onMounted()

      expect(items.fractionText).toBe('2 / 4')
      expect(items.percent).toBe(50)

      selected.set(4)
      expect(items.fractionText).toBe('4 / 4')
      expect(items.percent).toBe(100)

      props.template = '[active] of [total]'
      expect(items.fractionText).toBe('4 of 4')

      props.template = '[current] / [count]'
      expect(items.fractionText).toBe('4 / 4')

      props.template = 'Слайд [item] ([index], [selected]) из [total]'
      expect(items.fractionText).toBe('Слайд 4 (4, 4) из 4')

      props.template = 'Trang [active] / [total] 🚀'
      expect(items.fractionText).toBe('Trang 4 / 4 🚀')

      selected.onUnmounted()
    })

    it('should generate full standard list of bullets with ARIA and binds', () => {
      const { items } = createInstance({ count: 3, selected: 2, control: true })

      const list = items.list.value
      expect(list).toHaveLength(3)
      expect(list[0]).toEqual({
        index: 1,
        selected: false,
        scale: 1,
        style: undefined,
        tabindex: -1,
        aria: {
          'role': 'tab',
          'aria-selected': 'false',
          'aria-label': 'Slide 1',
          'tabindex': -1
        },
        binds: {
          'key': 1,
          'type': 'button',
          'data-index': 1,
          'style': undefined,
          'tabindex': -1,
          'role': 'tab',
          'aria-selected': 'false',
          'aria-label': 'Slide 1',
          'onClick': expect.any(Function)
        }
      })
      expect(list[1]).toMatchObject({
        index: 2,
        selected: true,
        scale: 1,
        style: undefined,
        tabindex: 0,
        aria: {
          'role': 'tab',
          'aria-selected': 'true',
          'aria-label': 'Slide 2',
          'tabindex': 0
        }
      })
      expect(list[2]).toMatchObject({
        index: 3,
        selected: false,
        scale: 1,
        tabindex: -1
      })
    })

    it('should handle onClick and emit change, click, and clickLite when control is enabled', () => {
      const { items, selected, props, emits } = createInstance({ count: 5, control: true })
      const event = new MouseEvent('click')

      items.onClick(event, 3)

      expect(selected.get()).toBe(3)
      expect(emits).toHaveBeenCalledWith('change', 3)
      expect(emits).toHaveBeenCalledWith('click', event, 3)
      expect(emits).toHaveBeenCalledWith('clickLite', 3)

      emits.mockClear()
      props.control = false
      items.onClick(event, 1)

      expect(selected.get()).toBe(3)
      expect(emits).not.toHaveBeenCalled()
    })
  })

  describe('Dynamic bullet windowing and scaling', () => {
    it('should scale bullets properly in dynamic mode at middle, start, and end positions', () => {
      const { items, selected } = createInstance({
        count: 10,
        selected: 5,
        dynamic: true,
        visible: 5,
        control: true
      })

      const middleList = items.list.value
      expect(middleList.map(item => item.index)).toEqual([3, 4, 5, 6, 7])
      expect(middleList.map(item => item.scale)).toEqual([0.5, 0.75, 1, 0.75, 0.5])
      expect(middleList[0]?.style).toEqual({ transform: 'scale(0.5)' })
      expect(middleList[1]?.style).toEqual({ transform: 'scale(0.75)' })
      expect(middleList[2]?.style).toBeUndefined()
      expect(middleList[2]?.tabindex).toBe(0)

      // Start boundary: no scaling on leading side
      selected.set(1)
      const startList = items.list.value
      expect(startList.map(item => item.index)).toEqual([1, 2, 3, 4, 5])
      expect(startList.map(item => item.scale)).toEqual([1, 1, 1, 0.75, 0.5])

      // End boundary: no scaling on trailing side
      selected.set(10)
      const endList = items.list.value
      expect(endList.map(item => item.index)).toEqual([6, 7, 8, 9, 10])
      expect(endList.map(item => item.scale)).toEqual([0.5, 0.75, 1, 1, 1])
    })

    it('should preserve exact visible count for even visible values in dynamic mode', () => {
      const { items, selected } = createInstance({
        count: 10,
        selected: 5,
        dynamic: true,
        visible: 4
      })

      expect(items.list.value).toHaveLength(4)
      expect(items.list.value.map(item => item.index)).toEqual([3, 4, 5, 6])

      selected.set(1)
      expect(items.list.value).toHaveLength(4)
      expect(items.list.value.map(item => item.index)).toEqual([1, 2, 3, 4])

      selected.set(10)
      expect(items.list.value).toHaveLength(4)
      expect(items.list.value.map(item => item.index)).toEqual([7, 8, 9, 10])
    })

    it('should clamp visible to minimum 3 and default to 5 on 0, NaN, or Infinity', () => {
      const { items, props } = createInstance({
        count: 10,
        selected: 5,
        dynamic: true,
        visible: 1
      })

      expect(items.list.value).toHaveLength(3)

      props.visible = 0
      expect(items.list.value).toHaveLength(5)

      props.visible = Number.NaN
      expect(items.list.value).toHaveLength(5)

      props.visible = Number.POSITIVE_INFINITY
      expect(items.list.value).toHaveLength(5)

      props.visible = 4.9
      expect(items.list.value).toHaveLength(4)
    })

    it('should show all bullets unscaled when count <= visible in dynamic mode', () => {
      const { items } = createInstance({
        count: 4,
        selected: 2,
        dynamic: true,
        visible: 5
      })

      expect(items.list.value.map(item => item.index)).toEqual([1, 2, 3, 4])
      expect(items.list.value.map(item => item.scale)).toEqual([1, 1, 1, 1])
    })
  })

  describe('Boundary values, empty inputs, and helpers', () => {
    it('should return empty list and 0 percent when count is 0', () => {
      const { items } = createInstance({ count: 0 })

      expect(items.list.value).toEqual([])
      expect(items.percent).toBe(0)
      expect(items.fractionText).toBe('1 / 0')
    })

    it('should return style, tabindex, aria, and binds helpers accurately', () => {
      const { items, props } = createInstance({ control: true })

      expect(items.getStyle(1)).toBeUndefined()
      expect(items.getStyle(undefined)).toBeUndefined()
      expect(items.getStyle(0.5)).toEqual({ transform: 'scale(0.5)' })

      expect(items.getTabindex(true)).toBe(0)
      expect(items.getTabindex(false)).toBe(-1)
      expect(items.getAria(1, true)).toEqual({
        'role': 'tab',
        'aria-selected': 'true',
        'aria-label': 'Slide 1',
        'tabindex': 0
      })

      const binds = items.getBinds(2, true, 0.5)
      expect(binds).toEqual({
        'key': 2,
        'type': 'button',
        'data-index': 2,
        'style': { transform: 'scale(0.5)' },
        'tabindex': 0,
        'role': 'tab',
        'aria-selected': 'true',
        'aria-label': 'Slide 2',
        'onClick': expect.any(Function)
      })

      props.control = false
      expect(items.getTabindex(true)).toBe(-1)
      expect(items.getTabindex(false)).toBe(-1)
      expect(items.getAria(1, true).tabindex).toBe(-1)
    })
  })
})
