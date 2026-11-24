// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { nextTick, reactive } from 'vue'
import type { ConstrEmit } from '@dxtmisha/functional'

import { ModelInclude } from '../../../classes/ModelInclude'
import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'
import type { CarouselPaginationEmits } from '../types'

describe('CarouselPaginationSelected', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const createInstance = (
    customProps: Partial<CarouselPaginationProps> = {},
    withModel: boolean = true
  ) => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      ...customProps
    })
    const emits = vi.fn()
    const model = new ModelInclude<number>('selected', emits)
    const modelGetter = withModel ? vi.fn(() => model) : undefined
    const selected = new CarouselPaginationSelected(
      props,
      modelGetter,
      emits as unknown as ConstrEmit<CarouselPaginationEmits>
    )

    return { selected, props, emits, model, modelGetter }
  }

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should compute total count from numeric and string props', () => {
      const { selected, props } = createInstance({ count: 5 })

      expect(selected.total.value).toBe(5)

      props.count = '12'
      expect(selected.total.value).toBe(12)

      props.count = 3.9
      expect(selected.total.value).toBe(3)
    })

    it('should initialize active slide synchronously from selected or modelSelected without invoking model eagerly', () => {
      const { selected, modelGetter } = createInstance({ count: 5, selected: 3 })

      expect(selected.get()).toBe(3)
      expect(selected.item.value).toBe(3)
      expect(modelGetter).not.toHaveBeenCalled()

      const { selected: fromModel } = createInstance({ count: 5, modelSelected: 4 })
      expect(fromModel.get()).toBe(4)
    })

    it('should update item, emit change, and emit model updates on set', () => {
      const { selected, emits, modelGetter } = createInstance({ count: 5, selected: 1 })

      selected.set(3)
      expect(selected.get()).toBe(3)
      expect(modelGetter).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('change', 3)
      expect(emits).toHaveBeenCalledWith('update:selected', 3)
      expect(emits).toHaveBeenCalledWith('update:modelSelected', 3)

      // Setting the same index should be a no-op
      emits.mockClear()
      selected.set(3)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should handle next and previous transitions within bounds', () => {
      const { selected, emits } = createInstance({ count: 3, selected: 2 })

      selected.next()
      expect(selected.get()).toBe(3)
      expect(emits).toHaveBeenCalledWith('change', 3)

      emits.mockClear()
      selected.next()
      expect(selected.get()).toBe(3)
      expect(emits).not.toHaveBeenCalled()

      selected.previous()
      expect(selected.get()).toBe(2)

      selected.previous()
      expect(selected.get()).toBe(1)

      emits.mockClear()
      selected.previous()
      expect(selected.get()).toBe(1)
      expect(emits).not.toHaveBeenCalled()
    })

    it('should maintain uncontrolled state and preserve or clamp active slide when count changes', async () => {
      const { selected, props } = createInstance({ count: 5 })
      selected.onMounted()

      expect(selected.get()).toBe(1)

      selected.set(4)
      expect(selected.get()).toBe(4)

      // Increasing count in uncontrolled mode must preserve current active slide
      props.count = 8
      await nextTick()
      expect(selected.get()).toBe(4)

      // Shrinking count below current slide must clamp active slide to new total
      props.count = 2
      await nextTick()
      expect(selected.get()).toBe(2)

      selected.onUnmounted()
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should safely handle 0, negative, NaN, and Infinity for count and index', () => {
      const { selected, props } = createInstance({ count: -3, selected: 2 })

      expect(selected.total.value).toBe(0)
      expect(selected.get()).toBe(1)

      props.count = Number.NaN
      expect(selected.total.value).toBe(0)

      props.count = Number.POSITIVE_INFINITY
      expect(selected.total.value).toBe(0)

      props.count = 4
      selected.set(10)
      expect(selected.get()).toBe(4)

      selected.set(0)
      expect(selected.get()).toBe(1)

      selected.set(-5)
      expect(selected.get()).toBe(1)

      selected.set(Number.POSITIVE_INFINITY)
      expect(selected.get()).toBe(1)

      selected.set(Number.NEGATIVE_INFINITY)
      expect(selected.get()).toBe(1)

      selected.set(Number.NaN)
      expect(selected.get()).toBe(1)
    })

    it('should treat selected = 0 as an explicit prop value clamped to 1 rather than falling back to modelSelected', async () => {
      const { selected, props } = createInstance({
        count: 5,
        selected: 0,
        modelSelected: 4
      })
      selected.onMounted()

      expect(selected.get()).toBe(1)

      props.selected = undefined
      await nextTick()
      expect(selected.get()).toBe(4)

      selected.onUnmounted()
    })

    it('should clamp floating point and string indices correctly', () => {
      const { selected } = createInstance({ count: 5, selected: '3' })
      expect(selected.get()).toBe(3)

      selected.set(2.9)
      expect(selected.get()).toBe(2)
    })
  })

  describe('Lifecycle, reactivity, and resource cleanup', () => {
    it('should synchronize props reactively only after onMounted and stop watching on onUnmounted', async () => {
      const { selected, props } = createInstance({ count: 5, selected: 2 }, false)

      // Before onMounted, no watcher is active yet
      props.selected = 4
      await nextTick()
      expect(selected.get()).toBe(2)

      // Mounting syncs immediately and activates reactive watcher
      selected.onMounted()
      expect(selected.get()).toBe(4)

      props.selected = 5
      await nextTick()
      expect(selected.get()).toBe(5)

      props.selected = 10
      await nextTick()
      expect(selected.get()).toBe(5)

      props.count = 3
      await nextTick()
      expect(selected.get()).toBe(3)

      // Unmounting stops watcher cleanly
      selected.onUnmounted()

      props.selected = 1
      await nextTick()
      expect(selected.get()).toBe(3)
    })

    it('should isolate state between separate instances', () => {
      const first = createInstance({ count: 5, selected: 2 })
      const second = createInstance({ count: 5, selected: 4 })

      first.selected.set(5)
      expect(first.selected.get()).toBe(5)
      expect(second.selected.get()).toBe(4)
    })
  })
})
