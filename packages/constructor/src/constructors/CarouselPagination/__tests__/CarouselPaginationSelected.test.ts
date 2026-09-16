// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { nextTick, reactive, toRefs } from 'vue'

import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationSelected', () => {
  it('should compute total count correctly', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)

    expect(selected.total.value).toBe(5)

    props.count = '12'
    expect(selected.total.value).toBe(12)

    props.count = -3
    expect(selected.total.value).toBe(0)
  })

  it('should compute and clamp active index correctly', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 3
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)

    expect(selected.get()).toBe(3)
    expect(selected.item.value).toBe(3)

    // Clamps to max total count
    props.selected = 10
    expect(selected.item.value).toBe(5)

    // Clamps to min index 1
    props.selected = 0
    expect(selected.item.value).toBe(1)

    // Respects modelSelected
    props.selected = undefined
    props.modelSelected = 4
    expect(selected.item.value).toBe(4)
  })

  it('should synchronize item with active on prop changes', async () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 2
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)

    props.selected = 4
    await nextTick()

    expect(selected.get()).toBe(4)
    expect(selected.item.value).toBe(4)
  })

  it('should update item and emit events on set', () => {
    const emits = vi.fn()
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 1
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs, emits)

    selected.set(3)
    expect(selected.get()).toBe(3)
    expect(emits).toHaveBeenCalledWith('change', 3)

    // Clamps to total
    selected.set(10)
    expect(selected.get()).toBe(5)

    // Clamps to min 1
    selected.set(0)
    expect(selected.get()).toBe(1)
  })

  it('should handle next and previous navigation', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 3,
      selected: 2
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)

    selected.next()
    expect(selected.get()).toBe(3)

    // Does not advance beyond count
    selected.next()
    expect(selected.get()).toBe(3)

    selected.previous()
    expect(selected.get()).toBe(2)

    selected.previous()
    expect(selected.get()).toBe(1)

    // Does not decrement below 1
    selected.previous()
    expect(selected.get()).toBe(1)
  })

  it('should maintain state in uncontrolled mode when set is called', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 5
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)

    expect(selected.get()).toBe(1)
    expect(selected.item.value).toBe(1)

    selected.set(3)
    expect(selected.get()).toBe(3)
    expect(selected.item.value).toBe(3)
  })

  it('should normalize and clamp index via toIndex', () => {
    const props = reactive<CarouselPaginationProps>({
      count: 4
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)

    expect((selected as any).toIndex(2)).toBe(2)
    expect((selected as any).toIndex('3')).toBe(3)
    expect((selected as any).toIndex(10)).toBe(4)
    expect((selected as any).toIndex(0)).toBe(1)
    expect((selected as any).toIndex(-5)).toBe(1)
    expect((selected as any).toIndex()).toBe(1)

    props.count = 0
    expect((selected as any).toIndex(2)).toBe(1)
  })
})
