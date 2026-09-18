// @vitest-environment jsdom
import { describe, it, expect } from 'vitest'
import { reactive, ref } from 'vue'

import { CarouselPaginationFocus } from '../CarouselPaginationFocus'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationFocus', () => {
  const createInstance = (customProps: Partial<CarouselPaginationProps> = {}) => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 1,
      ...customProps
    })
    const element = ref<HTMLDivElement>()

    const instance = new CarouselPaginationFocus(
      props,
      element,
      'test-carouselPagination'
    )

    return { instance, props, element }
  }

  it('should be focusable by default when clickable and bullets/lines', () => {
    const { instance } = createInstance()

    expect(instance.isFocusable()).toBe(true)
    expect(instance.binds).toHaveProperty('tabindex', 0)
    expect(instance.binds).toHaveProperty('onFocus')
    expect(instance.binds).toHaveProperty('onBlur')
  })

  it('should not be focusable when clickable is false', () => {
    const { instance } = createInstance({ clickable: false })

    expect(instance.isFocusable()).toBe(false)
    expect(instance.binds).toEqual({})
  })

  it('should not be focusable when type is fraction or progressbar', () => {
    const { instance: fractionInstance } = createInstance({ type: 'fraction' })
    expect(fractionInstance.isFocusable()).toBe(false)
    expect(fractionInstance.binds).toEqual({})

    const { instance: progressInstance } = createInstance({ type: 'progressbar' })
    expect(progressInstance.isFocusable()).toBe(false)
    expect(progressInstance.binds).toEqual({})
  })

  it('should initialize focusDirection instance', () => {
    const { instance } = createInstance()

    expect(instance.focusDirection).toBeDefined()
  })
})
