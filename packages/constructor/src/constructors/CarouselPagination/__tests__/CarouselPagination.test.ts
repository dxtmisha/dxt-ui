// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { reactive, ref, toRefs } from 'vue'

import { CarouselPagination } from '../CarouselPagination'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPagination', () => {
  const createInstance = (customProps: Partial<CarouselPaginationProps> = {}) => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 1,
      ...customProps
    })
    const refs = toRefs(props)
    const element = ref<HTMLDivElement>()
    const emits = vi.fn()

    const instance = new CarouselPagination(
      props,
      refs,
      element,
      'test-design',
      'test-pagination',
      undefined,
      undefined,
      emits
    )

    return { instance, props, refs, element, emits }
  }

  it('should be focusable by default when clickable and bullets/lines', () => {
    const { instance } = createInstance()

    expect(instance.focus.isFocusable()).toBe(true)
    expect(instance.focus.binds).toHaveProperty('tabindex', 0)
    expect(instance.focus.binds).toHaveProperty('onFocus')
    expect(instance.focus.binds).toHaveProperty('onBlur')
  })

  it('should not be focusable when clickable is false', () => {
    const { instance } = createInstance({ clickable: false })

    expect(instance.focus.isFocusable()).toBe(false)
    expect(instance.focus.binds).toEqual({})
  })

  it('should not be focusable when type is fraction or progressbar', () => {
    const { instance: fractionInstance } = createInstance({ type: 'fraction' })
    expect(fractionInstance.focus.isFocusable()).toBe(false)
    expect(fractionInstance.focus.binds).toEqual({})

    const { instance: progressInstance } = createInstance({ type: 'progressbar' })
    expect(progressInstance.focus.isFocusable()).toBe(false)
    expect(progressInstance.focus.binds).toEqual({})
  })

  it('should configure ARIA attributes with tablist and orientation', () => {
    const { instance: horizontalInstance } = createInstance({ vertical: false })
    expect(horizontalInstance.aria).toMatchObject({
      role: 'tablist',
      'aria-orientation': 'horizontal'
    })

    const { instance: verticalInstance } = createInstance({ vertical: true })
    expect(verticalInstance.aria).toMatchObject({
      role: 'tablist',
      'aria-orientation': 'vertical'
    })
  })

  it('should initialize focus helper with appropriate selectors', () => {
    const { instance } = createInstance()

    expect(instance.focus).toBeDefined()
    expect(instance.focus.focusDirection).toBeDefined()
  })
})
