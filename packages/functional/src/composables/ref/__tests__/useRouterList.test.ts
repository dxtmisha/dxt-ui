import { describe, expect, it, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

import { useRouterList } from '../useRouterList'
import { RouterItemRef } from '../../../classes/ref/RouterItemRef'
import type { ListDataBasic } from '../../../types/listTypes'

const push = vi.spyOn(RouterItemRef, 'push').mockImplementation(() => undefined)

describe('useRouterList', () => {
  beforeEach(() => {
    push.mockClear()
  })

  const items = [
    { value: 'home', label: 'Home' },
    { value: 'about', label: 'About' }
  ]

  describe('Initialization and selection state', () => {
    it('should initialize with the first item when selected is omitted', () => {
      const list = ref(items)
      const { selected, item, label } = useRouterList(list)

      expect(selected.value).toBe('home')
      expect(item.value).toEqual(items[0])
      expect(label.value).toBe('Home')
    })

    it('should initialize with an explicit selected string', () => {
      const list = ref(items)
      const { selected, item, label } = useRouterList(list, 'about')

      expect(selected.value).toBe('about')
      expect(item.value).toEqual(items[1])
      expect(label.value).toBe('About')
    })

    it('should reuse an external Ref<string> when passed as selected', () => {
      const list = ref(items)
      const externalSelected = ref('about')
      const { selected, item } = useRouterList(list, externalSelected)

      expect(selected).toBe(externalSelected)
      expect(item.value).toEqual(items[1])

      externalSelected.value = 'home'
      expect(item.value).toEqual(items[0])
    })

    it('should handle numeric label 0 without falling back to empty string', () => {
      const list = ref<ListDataBasic[]>([
        { value: 'zero', label: 0 }
      ])
      const { label } = useRouterList(list)

      expect(label.value).toBe(0)
    })

    it('should handle empty or undefined list gracefully', () => {
      const emptyList = ref<ListDataBasic[] | undefined>(undefined)
      const { selected, item, label, list, toMain } = useRouterList(emptyList)

      expect(selected.value).toBe('')
      expect(item.value).toBeUndefined()
      expect(label.value).toBe('')
      expect(list.value).toEqual([])

      toMain()
      expect(push).not.toHaveBeenCalled()
    })
  })

  describe('Navigation via to() and toMain()', () => {
    it('should change selected item and call RouterItemRef.push via to()', () => {
      const list = ref(items)
      const { selected, to } = useRouterList(list)

      to('about')

      expect(selected.value).toBe('about')
      expect(push).toHaveBeenCalledExactlyOnceWith({ name: 'about' })
    })

    it('should not navigate when calling to() with current, unknown, or empty name', () => {
      const list = ref(items)
      const { selected, to } = useRouterList(list, 'home')

      to('home')
      to('unknown-route')
      to('')
      to(undefined)

      expect(selected.value).toBe('home')
      expect(push).not.toHaveBeenCalled()
    })

    it('should navigate to the first item via toMain()', () => {
      const list = ref(items)
      const { selected, toMain } = useRouterList(list, 'about')

      toMain()

      expect(selected.value).toBe('home')
      expect(push).toHaveBeenCalledExactlyOnceWith({ name: 'home' })
    })
  })

  describe('Computed list and hasTo transformation', () => {
    it('should automatically inject "to" property when hasTo is true', () => {
      const list = ref(items)
      const { list: computedList } = useRouterList(list, undefined, true)

      expect(computedList.value[0]).toHaveProperty('to')
      expect(computedList.value[0]?.to).toEqual({ name: 'home' })
    })

    it('should preserve existing "to" property on items when hasTo is true', () => {
      const customTo = { path: '/custom-home' }
      const list = ref([
        { value: 'home', label: 'Home', to: customTo }
      ])
      const { list: computedList } = useRouterList(list, undefined, true)

      expect(computedList.value[0]?.to).toEqual(customTo)
    })

    it('should not inject "to" property when hasTo is false', () => {
      const list = ref(items)
      const { list: computedList } = useRouterList(list, undefined, false)

      expect(computedList.value[0]).not.toHaveProperty('to')
    })
  })
})
