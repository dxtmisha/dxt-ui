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

  it('should be focusable by default when bullets/lines', () => {
    const { instance } = createInstance()

    expect(instance.focus['isFocusable']()).toBe(true)
    expect(instance.focus.binds).toHaveProperty('onKeydown')
    expect(instance.focus.binds).not.toHaveProperty('tabindex')
    expect(instance.focus.binds).not.toHaveProperty('onFocus')
    expect(instance.focus.binds).not.toHaveProperty('onBlur')
  })

  it('should not be focusable when control is false', () => {
    const { instance } = createInstance({ control: false })

    expect(instance.focus['isFocusable']()).toBe(false)
    expect(instance.focus.binds).toEqual({})
  })

  it('should not be focusable when type is fraction or progressbar even if control is true', () => {
    const { instance: fractionInstance } = createInstance({ control: true, type: 'fraction' })
    expect(fractionInstance.focus['isFocusable']()).toBe(false)
    expect(fractionInstance.focus.binds).toEqual({})

    const { instance: progressInstance } = createInstance({ control: true, type: 'progressbar' })
    expect(progressInstance.focus['isFocusable']()).toBe(false)
    expect(progressInstance.focus.binds).toEqual({})
  })

  it('should configure ARIA attributes with tablist and orientation', () => {
    const { instance: horizontalInstance } = createInstance({ vertical: false })
    expect(horizontalInstance.aria).toMatchObject({
      'role': 'tablist',
      'aria-orientation': 'horizontal'
    })

    const { instance: verticalInstance } = createInstance({ vertical: true })
    expect(verticalInstance.aria).toMatchObject({
      'role': 'tablist',
      'aria-orientation': 'vertical'
    })
  })

  it('should initialize focus helper', () => {
    const { instance } = createInstance()

    expect(instance.focus).toBeDefined()
  })
})
