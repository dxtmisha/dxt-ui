// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { type ConstrEmit, DesignName } from '@dxtmisha/functional'

import { ChipGroup } from '../ChipGroup'
import type { ChipGroupProps } from '../props'
import type { ChipGroupEmits } from '../types'

describe('ChipGroup (unit)', () => {
  const scopes: Array<ReturnType<typeof effectScope>> = []

  afterEach(() => {
    scopes.splice(0).forEach(scope => scope.stop())
    vi.restoreAllMocks()
  })

  const createChipGroup = (initialProps: ChipGroupProps = {}) => {
    const scope = effectScope()
    scopes.push(scope)
    const props = reactive<ChipGroupProps>(initialProps)
    const element = ref<HTMLDivElement>()
    const naming = new DesignName('d1.chipGroup')
    const emits = vi.fn()

    let instance!: ChipGroup

    scope.run(() => {
      instance = new ChipGroup(
        props,
        element,
        naming,
        undefined,
        undefined,
        emits as unknown as ConstrEmit<ChipGroupEmits>
      )
    })

    return { instance, props, emits }
  }

  it('should instantiate dependencies lazily until accessed', () => {
    const { instance } = createChipGroup({
      list: [{ label: 'Alpha', value: 'a' }]
    })

    expect(instance.hasInstance('data')).toBe(false)
    expect(instance.hasInstance('event')).toBe(false)
    expect(instance.hasInstance('model')).toBe(false)

    const items = instance.getList()
    expect(items).toHaveLength(1)
    expect(instance.hasInstance('data')).toBe(true)
    expect(instance.hasInstance('model')).toBe(true)
    expect(instance.hasInstance('event')).toBe(false)
  })

  it('should compute selected state from both selected and modelSelected including numeric zero', async () => {
    const { instance, props } = createChipGroup({
      list: [
        { label: 'Zero', value: 0 },
        { label: 'One', value: 1 }
      ],
      selected: 0
    })

    expect(instance.getList()[0]?.selected).toBe(true)
    expect(instance.getList()[1]?.selected).toBe(false)

    props.modelSelected = 1
    await nextTick()
    expect(instance.getList()[0]?.selected).toBe(false)
    expect(instance.getList()[1]?.selected).toBe(true)
  })

  it('should support custom keyLabel and keyValue mappings', () => {
    const { instance } = createChipGroup({
      list: [
        { title: 'First', code: 'k1' },
        { title: 'Second', code: 'k2' }
      ],
      keyLabel: 'title',
      keyValue: 'code',
      selected: 'k2'
    })

    const items = instance.getList()
    expect(items[0]?.label).toBe('First')
    expect(items[0]?.value).toBe('k1')
    expect(items[0]?.selected).toBe(false)
    expect(items[1]?.label).toBe('Second')
    expect(items[1]?.value).toBe('k2')
    expect(items[1]?.selected).toBe(true)
  })

  it('should handle single and multiple selection clicks and emit click + update events', async () => {
    const { instance, props, emits } = createChipGroup({
      list: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' }
      ],
      selected: 'a',
      readonly: false,
      multiple: false
    })

    const mouseEvent = new MouseEvent('click')
    const clickPayload = { type: 'click', value: 'b', detail: undefined }
    instance.onClick(mouseEvent, clickPayload)

    expect(instance.i('model').value.value).toBe('b')
    expect(emits).toHaveBeenCalledWith('click', mouseEvent, clickPayload)
    expect(emits).toHaveBeenCalledWith('clickLite', clickPayload)

    props.multiple = true
    props.selected = ['a']
    await nextTick()
    instance.onClick(mouseEvent, clickPayload)
    expect(instance.i('model').value.value).toEqual(['a', 'b'])
  })

  it('should not mutate selection when readonly is true while still emitting click', () => {
    const { instance, emits } = createChipGroup({
      list: [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' }
      ],
      selected: 'a',
      readonly: true
    })

    const mouseEvent = new MouseEvent('click')
    const clickPayload = { type: 'click', value: 'b', detail: undefined }
    instance.onClick(mouseEvent, clickPayload)

    expect(instance.i('model').value.value).toBe('a')
    expect(emits).toHaveBeenCalledWith('click', mouseEvent, clickPayload)
  })

  it('should handle empty or undefined list safely', () => {
    const { instance } = createChipGroup({})
    expect(instance.getList()).toEqual([])
  })
})
