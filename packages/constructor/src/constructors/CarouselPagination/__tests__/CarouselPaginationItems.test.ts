// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, toRefs } from 'vue'

import { CarouselPaginationItems } from '../CarouselPaginationItems'
import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationItems', () => {
  it('should handle isHide method with hideIfOne', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 1,
      hideIfOne: true
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    expect(items.isHide()).toBe(true)

    props.count = 2
    expect(items.isHide()).toBe(false)

    props.count = 1
    props.hideIfOne = false
    expect(items.isHide()).toBe(false)
  })

  it('should compute fraction text and percent', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 4,
      selected: 2
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    expect(items.fractionText).toBe('2 / 4')
    expect(items.percent).toBe(50)

    props.selected = 4
    expect(items.fractionText).toBe('4 / 4')
    expect(items.percent).toBe(100)

    props.template = '[active] of [total]'
    expect(items.fractionText).toBe('4 of 4')

    props.template = '[current] / [count]'
    expect(items.fractionText).toBe('4 / 4')
  })

  it('should generate standard list of bullets', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 3,
      selected: 2,
      control: true
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    const list = items.list.value
    expect(list.length).toBe(3)
    expect(list[0]).toEqual({
      index: 1,
      selected: false,
      scale: 1,
      style: undefined,
      tabindex: -1,
      aria: {
        role: 'tab',
        'aria-selected': 'false',
        'aria-label': 'Slide 1',
        tabindex: -1
      },
      binds: {
        key: 1,
        type: 'button',
        'data-index': 1,
        style: undefined,
        tabindex: -1,
        role: 'tab',
        'aria-selected': 'false',
        'aria-label': 'Slide 1',
        onClick: expect.any(Function)
      }
    })
    expect(list[1]).toEqual({
      index: 2,
      selected: true,
      scale: 1,
      style: undefined,
      tabindex: 0,
      aria: {
        role: 'tab',
        'aria-selected': 'true',
        'aria-label': 'Slide 2',
        tabindex: 0
      },
      binds: {
        key: 2,
        type: 'button',
        'data-index': 2,
        style: undefined,
        tabindex: 0,
        role: 'tab',
        'aria-selected': 'true',
        'aria-label': 'Slide 2',
        onClick: expect.any(Function)
      }
    })
    expect(list[2]).toEqual({
      index: 3,
      selected: false,
      scale: 1,
      style: undefined,
      tabindex: -1,
      aria: {
        role: 'tab',
        'aria-selected': 'false',
        'aria-label': 'Slide 3',
        tabindex: -1
      },
      binds: {
        key: 3,
        type: 'button',
        'data-index': 3,
        style: undefined,
        tabindex: -1,
        role: 'tab',
        'aria-selected': 'false',
        'aria-label': 'Slide 3',
        onClick: expect.any(Function)
      }
    })
  })

  it('should scale bullets in dynamic mode', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 10,
      selected: 5,
      dynamic: true,
      visible: 5,
      control: true
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    const list = items.list.value
    expect(list.length).toBe(5)

    const activeItem = list.find((item) => item.index === 5)
    expect(activeItem).toBeDefined()
    expect(activeItem?.selected).toBe(true)
    expect(activeItem?.scale).toBe(1)
    expect(activeItem?.style).toBeUndefined()
    expect(activeItem?.tabindex).toBe(0)

    const edgeItem = list.find((item) => item.scale === 0.5)
    expect(edgeItem?.style).toEqual({ transform: 'scale(0.5)' })
    expect(edgeItem?.tabindex).toBe(-1)
    expect(edgeItem?.binds?.style).toEqual({ transform: 'scale(0.5)' })
    expect(edgeItem?.binds?.tabindex).toBe(-1)
  })

  it('should return item binds', () => {
    const props = reactive<CarouselPaginationProps>({
      control: true
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    const binds = items.getBinds(2, true, 0.5)
    expect(binds).toEqual({
      key: 2,
      type: 'button',
      'data-index': 2,
      style: { transform: 'scale(0.5)' },
      tabindex: 0,
      role: 'tab',
      'aria-selected': 'true',
      'aria-label': 'Slide 2',
      onClick: expect.any(Function)
    })
  })

  it('should return item style based on scale', () => {
    const props = reactive<CarouselPaginationProps>({})
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    expect(items.getStyle(1)).toBeUndefined()
    expect(items.getStyle(undefined)).toBeUndefined()
    expect(items.getStyle(0.5)).toEqual({
      transform: 'scale(0.5)'
    })
  })

  it('should return tabindex and aria attributes', () => {
    const props = reactive<CarouselPaginationProps>({})
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const items = new CarouselPaginationItems(props, refs, selected)

    expect(items.getTabindex(true)).toBe(0)
    expect(items.getTabindex(false)).toBe(-1)
    expect(items.getAria(1, true)).toEqual({
      role: 'tab',
      'aria-selected': 'true',
      'aria-label': 'Slide 1',
      tabindex: 0
    })

    props.control = false
    expect(items.getTabindex(true)).toBe(-1)
    expect(items.getTabindex(false)).toBe(-1)
    expect(items.getAria(1, true)).toEqual({
      role: 'tab',
      'aria-selected': 'true',
      'aria-label': 'Slide 1',
      tabindex: -1
    })
    expect(items.getAria(2, false)).toEqual({
      role: 'tab',
      'aria-selected': 'false',
      'aria-label': 'Slide 2',
      tabindex: -1
    })
  })

  it('should handle onClick and emit events', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      clickable: true
    })
    const refs = toRefs(props)
    const emits = vi.fn()
    const selected = new CarouselPaginationSelected(props, refs, emits)
    const items = new CarouselPaginationItems(props, refs, selected, emits)

    const event = new MouseEvent('click')
    items.onClick(event, 3)

    expect(selected.get()).toBe(3)
    expect(emits).toHaveBeenCalledWith('click', event, 3)
    expect(emits).toHaveBeenCalledWith('clickLite', 3)

    props.clickable = false
    items.onClick(event, 1)
    expect(selected.get()).toBe(3)
  })
})
