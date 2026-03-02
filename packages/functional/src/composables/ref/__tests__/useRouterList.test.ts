import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

import { useRouterList } from '../useRouterList'

const push = vi.fn(() => Promise.resolve())

vi.mock('vue-router', () => ({
  useRouter: () => ({
    push
  })
}))

describe('useRouterList', () => {
  const items = [
    { value: 'home', label: 'Home' },
    { value: 'about', label: 'About' }
  ]

  it('should initialize correctly', () => {
    const list = ref(items)
    const { selected, item, label } = useRouterList(list)

    expect(selected.value).toBe('home')
    expect(item.value).toEqual(items[0])
    expect(label.value).toBe('Home')
  })

  it('should initialize with the selected item', () => {
    const list = ref(items)
    const { selected, item } = useRouterList(list, 'about')

    expect(selected.value).toBe('about')
    expect(item.value).toEqual(items[1])
  })

  it('should change selected item via to()', () => {
    const list = ref(items)
    const { selected, to } = useRouterList(list)

    to('about')

    expect(selected.value).toBe('about')
    expect(push).toHaveBeenCalledWith({ name: 'about' })
  })

  it('should navigate to current item via toMain()', () => {
    const list = ref(items)
    const { toMain } = useRouterList(list, 'about')

    toMain()

    expect(push).toHaveBeenCalledWith({ name: 'home' })
  })

  it('should return a list with "to" property', () => {
    const list = ref(items)
    const { list: computedList } = useRouterList(list)

    expect(computedList.value[0]).toHaveProperty('to')
    expect(computedList.value[0]?.to).toEqual({ name: 'home' })
  })
})
