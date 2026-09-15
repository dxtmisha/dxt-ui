// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { reactive, toRefs } from 'vue'

import { CarouselPaginationItems } from '../CarouselPaginationItems'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationItems', () => {
  it('should compute total count correctly', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5
    })
    const refs = toRefs(props)
    const items = new CarouselPaginationItems(props, refs)

    expect(items.total.value).toBe(5)

    props.count = '12'
    expect(items.total.value).toBe(12)

    props.count = -3
    expect(items.total.value).toBe(0)
  })

  it('should compute and clamp active index correctly', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 3
    })
    const refs = toRefs(props)
    const items = new CarouselPaginationItems(props, refs)

    expect(items.active.value).toBe(3)

    // Clamps to max total count
    props.selected = 10
    expect(items.active.value).toBe(5)

    // Clamps to min index 1
    props.selected = 0
    expect(items.active.value).toBe(1)

    // Respects modelSelected
    props.modelSelected = 4
    expect(items.active.value).toBe(4)
  })

  it('should handle isHide property with hideIfOne', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 1,
      hideIfOne: true
    })
    const refs = toRefs(props)
    const items = new CarouselPaginationItems(props, refs)

    expect(items.isHide).toBe(true)

    props.count = 2
    expect(items.isHide).toBe(false)

    props.count = 1
    props.hideIfOne = false
    expect(items.isHide).toBe(false)
  })

  it('should compute fraction text and percent', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 4,
      selected: 2
    })
    const refs = toRefs(props)
    const items = new CarouselPaginationItems(props, refs)

    expect(items.fractionText).toBe('2 / 4')
    expect(items.percent).toBe(50)

    props.selected = 4
    expect(items.fractionText).toBe('4 / 4')
    expect(items.percent).toBe(100)
  })

  it('should generate standard list of bullets', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 3,
      selected: 2
    })
    const refs = toRefs(props)
    const items = new CarouselPaginationItems(props, refs)

    const list = items.list.value
    expect(list.length).toBe(3)
    expect(list[0]).toEqual({ index: 1, selected: false, scale: 1 })
    expect(list[1]).toEqual({ index: 2, selected: true, scale: 1 })
    expect(list[2]).toEqual({ index: 3, selected: false, scale: 1 })
  })

  it('should scale bullets in dynamic mode', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 10,
      selected: 5,
      dynamic: true,
      visible: 5
    })
    const refs = toRefs(props)
    const items = new CarouselPaginationItems(props, refs)

    const list = items.list.value
    expect(list.length).toBe(5)

    const activeItem = list.find((item) => item.index === 5)
    expect(activeItem).toBeDefined()
    expect(activeItem?.selected).toBe(true)
    expect(activeItem?.scale).toBe(1)
  })
})
