// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { nextTick, reactive, ref, toRefs } from 'vue'

import { CarouselPaginationFocus } from '../CarouselPaginationFocus'
import { CarouselPaginationSelected } from '../CarouselPaginationSelected'
import type { CarouselPaginationProps } from '../props'

describe('CarouselPaginationFocus', () => {
  const createInstance = (customProps: Partial<CarouselPaginationProps> = {}) => {
    const props = reactive<CarouselPaginationProps>({
      count: 5,
      selected: 1,
      ...customProps
    })
    const refs = toRefs(props)
    const selected = new CarouselPaginationSelected(props, refs)
    const element = ref<HTMLDivElement>()

    const instance = new CarouselPaginationFocus(
      props,
      element,
      'test-carouselPagination',
      selected
    )

    return { instance, props, selected, element }
  }

  it('should be focusable by default when clickable and bullets/lines', () => {
    const { instance } = createInstance()

    expect(instance['isFocusable']()).toBe(true)
    expect(instance.binds).toHaveProperty('onKeydown')
    expect(instance.binds).not.toHaveProperty('tabindex')
    expect(instance.binds).not.toHaveProperty('onFocus')
    expect(instance.binds).not.toHaveProperty('onBlur')
  })

  it('should not be focusable when control is false', () => {
    const { instance } = createInstance({ control: false })

    expect(instance['isFocusable']()).toBe(false)
    expect(instance.binds).toEqual({})
  })

  it('should not be focusable when clickable is false even if control is true', () => {
    const { instance } = createInstance({ control: true, clickable: false })

    expect(instance['isFocusable']()).toBe(false)
    expect(instance.binds).toEqual({})
  })

  it('should not be focusable when type is fraction or progressbar even if control is true', () => {
    const { instance: fractionInstance } = createInstance({ control: true, type: 'fraction' })
    expect(fractionInstance['isFocusable']()).toBe(false)
    expect(fractionInstance.binds).toEqual({})

    const { instance: progressInstance } = createInstance({ control: true, type: 'progressbar' })
    expect(progressInstance['isFocusable']()).toBe(false)
    expect(progressInstance.binds).toEqual({})
  })

  it('should navigate next on ArrowRight and ArrowDown keydown', () => {
    const { instance, selected } = createInstance({ control: true, selected: 1, count: 5 })

    const eventRight = new KeyboardEvent('keydown', { key: 'ArrowRight' })
    const preventDefaultRight = vi.spyOn(eventRight, 'preventDefault')
    instance['onKeydown'](eventRight)

    expect(preventDefaultRight).toHaveBeenCalled()
    expect(selected.get()).toBe(2)

    const eventDown = new KeyboardEvent('keydown', { key: 'ArrowDown' })
    const preventDefaultDown = vi.spyOn(eventDown, 'preventDefault')
    instance['onKeydown'](eventDown)

    expect(preventDefaultDown).toHaveBeenCalled()
    expect(selected.get()).toBe(3)
  })

  it('should navigate previous on ArrowLeft and ArrowUp keydown', () => {
    const { instance, selected } = createInstance({ control: true, selected: 3, count: 5 })

    const eventLeft = new KeyboardEvent('keydown', { key: 'ArrowLeft' })
    const preventDefaultLeft = vi.spyOn(eventLeft, 'preventDefault')
    instance['onKeydown'](eventLeft)

    expect(preventDefaultLeft).toHaveBeenCalled()
    expect(selected.get()).toBe(2)

    const eventUp = new KeyboardEvent('keydown', { key: 'ArrowUp' })
    const preventDefaultUp = vi.spyOn(eventUp, 'preventDefault')
    instance['onKeydown'](eventUp)

    expect(preventDefaultUp).toHaveBeenCalled()
    expect(selected.get()).toBe(1)
  })

  it('should navigate to first slide on Home and last slide on End', () => {
    const { instance, selected } = createInstance({ control: true, selected: 3, count: 5 })

    const eventHome = new KeyboardEvent('keydown', { key: 'Home' })
    const preventDefaultHome = vi.spyOn(eventHome, 'preventDefault')
    instance['onKeydown'](eventHome)

    expect(preventDefaultHome).toHaveBeenCalled()
    expect(selected.get()).toBe(1)

    const eventEnd = new KeyboardEvent('keydown', { key: 'End' })
    const preventDefaultEnd = vi.spyOn(eventEnd, 'preventDefault')
    instance['onKeydown'](eventEnd)

    expect(preventDefaultEnd).toHaveBeenCalled()
    expect(selected.get()).toBe(5)
  })

  it('should ignore other keys', () => {
    const { instance, selected } = createInstance({ control: true, selected: 2, count: 5 })

    const eventTab = new KeyboardEvent('keydown', { key: 'Tab' })
    const preventDefaultTab = vi.spyOn(eventTab, 'preventDefault')
    instance['onKeydown'](eventTab)

    expect(preventDefaultTab).not.toHaveBeenCalled()
    expect(selected.get()).toBe(2)
  })

  it('should focus target element in DOM', async () => {
    const { instance, element } = createInstance({ control: true, selected: 1, count: 3 })

    const container = document.createElement('div')
    const button1 = document.createElement('button')
    button1.setAttribute('data-index', '1')
    const button2 = document.createElement('button')
    button2.setAttribute('data-index', '2')
    container.appendChild(button1)
    container.appendChild(button2)
    document.body.appendChild(container)

    element.value = container

    const focusSpy = vi.spyOn(button2, 'focus')
    instance['focus'](2)

    await nextTick()
    expect(focusSpy).toHaveBeenCalled()

    document.body.removeChild(container)
  })
})
