// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'
import { ListDataRef } from '@dxtmisha/functional'

import { TabsNavigationIds } from '../TabsNavigationIds'

describe('TabsNavigationIds', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should lazily read data and generate deterministic unique DOM IDs', () => {
    const list = ref([
      { value: 'tab-1', label: 'Tab 1' },
      { value: 'tab-2', label: 'Tab 2' }
    ])
    const data = new ListDataRef(list)
    const getData = vi.fn(() => data)

    const idManager = new TabsNavigationIds(getData)

    expect(getData).not.toHaveBeenCalled()
    expect(idManager.idDefault).toBeTypeOf('string')

    const mappedIds = idManager.ids.value
    expect(getData).toHaveBeenCalledTimes(1)
    expect(mappedIds['tab-1']).toBe(`${idManager.idDefault}-1-tab-1`)
    expect(mappedIds['tab-2']).toBe(`${idManager.idDefault}-2-tab-2`)

    expect(idManager.getIdByValue('tab-1')).toBe(`${idManager.idDefault}-1-tab-1`)
    expect(idManager.getIdByValue('non-existent')).toBe('non-existent')
  })

  it('should keep ids computed reference stable when focus or selected changes', () => {
    const list = ref([
      { value: 'a', label: 'A' },
      { value: 'b', label: 'B' }
    ])
    const focus = ref<string | undefined>('a')
    const selected = ref<string | undefined>('a')
    const data = new ListDataRef(list, focus, undefined, undefined, undefined, selected)
    const idManager = new TabsNavigationIds(() => data)

    const firstSnapshot = idManager.ids.value
    focus.value = 'b'
    selected.value = 'b'
    const secondSnapshot = idManager.ids.value

    expect(secondSnapshot).toBe(firstSnapshot)
  })

  it('should handle numeric 0, undefined, Unicode values, and ignore prototype pollution keys', () => {
    const list = ref([
      { value: 0, label: 'Zero' },
      { value: 'tiếng-Việt-🚀', label: 'Vietnamese' },
      { value: '__proto__', label: 'Proto' },
      { value: 'constructor', label: 'Constructor' },
      { value: 'prototype', label: 'Prototype' }
    ])
    const data = new ListDataRef(list)
    const idManager = new TabsNavigationIds(() => data)

    expect(idManager.getIdByValue(0)).toBe(`${idManager.idDefault}-1-0`)
    expect(idManager.getIdByValue('tiếng-Việt-🚀')).toBe(`${idManager.idDefault}-2-tiếng-Việt-🚀`)
    expect(idManager.getIdByValue(undefined)).toBe('')
    expect(idManager.getIdByValue('toString')).toBe('toString')
    expect(idManager.getIdByValue('__proto__')).toBe('__proto__')
    expect(Object.prototype.hasOwnProperty.call(idManager.ids.value, 'constructor')).toBe(false)
    expect(Object.prototype.hasOwnProperty.call(idManager.ids.value, 'prototype')).toBe(false)
  })
})
