// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { CarouselPaginationDesign } from '../CarouselPaginationDesign'
import { defaultsCarouselPagination, type CarouselPaginationProps } from '../props'
import type {
  CarouselPaginationClasses,
  CarouselPaginationComponents,
  CarouselPaginationEmits,
  CarouselPaginationExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
  document.body.innerHTML = ''
})

describe('CarouselPagination (integrated component)', () => {
  const mountComponent = (initialProps: Partial<CarouselPaginationProps> = {}) => {
    const emits = vi.fn()
    const state = reactive<CarouselPaginationProps>({
      ...(defaultsCarouselPagination as Partial<CarouselPaginationProps>),
      count: 5,
      selected: 1,
      ...initialProps
    })

    let exposed!: CarouselPaginationExpose

    const IntegratedCarouselPagination = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-carouselPagination': true,
            [`d1-carouselPagination--type--${state.type}`]: Boolean(state.type),
            'd1-carouselPagination--vertical': Boolean(state.vertical),
            'd1-carouselPagination--dynamic': Boolean(state.dynamic)
          }
        }))
        const design = new CarouselPaginationDesign<
          CarouselPaginationComponents,
          CarouselPaginationExpose,
          CarouselPaginationClasses,
          CarouselPaginationProps
        >(
          'd1.carouselPagination',
          state,
          {
            emits: emits as unknown as ConstrEmit<CarouselPaginationEmits>,
            classes
          }
        )
        exposed = design.expose()
        return design.render()
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(IntegratedCarouselPagination)
    app.mount(container)
    cleanups.push(() => app.unmount())

    return { container, state, emits, exposed, unmount: () => app.unmount() }
  }

  it('should coordinate click interactions, DOM selected state, CSS percent variable, and emits', async () => {
    const { container, emits, exposed } = mountComponent({ count: 4, selected: 1 })

    const root = container.querySelector('.d1-carouselPagination') as HTMLElement
    const buttons = root.querySelectorAll<HTMLButtonElement>('button.d1-carouselPagination__item')

    expect(buttons).toHaveLength(4)
    expect(buttons[0]?.getAttribute('aria-selected')).toBe('true')
    expect(root.style.getPropertyValue('--d1-carouselPagination-sys-percent')).toBe('25%')

    buttons[2]?.click()
    await nextTick()

    expect(exposed.getSelected()).toBe(3)
    expect(buttons[2]?.getAttribute('aria-selected')).toBe('true')
    expect(buttons[2]?.classList.contains('d1-carouselPagination__item--selected')).toBe(true)
    expect(buttons[2]?.getAttribute('tabindex')).toBe('0')
    expect(buttons[0]?.getAttribute('tabindex')).toBe('-1')
    expect(root.style.getPropertyValue('--d1-carouselPagination-sys-percent')).toBe('75%')

    expect(emits).toHaveBeenCalledWith('change', 3)
    expect(emits).toHaveBeenCalledWith('update:selected', 3)
    expect(emits).toHaveBeenCalledWith('update:modelSelected', 3)
    expect(emits).toHaveBeenCalledWith('click', expect.any(MouseEvent), 3)
    expect(emits).toHaveBeenCalledWith('clickLite', 3)
  })

  it('should navigate slides via keyboard arrows, Home, and End with DOM focus delegation', async () => {
    vi.useFakeTimers()
    const { container, exposed } = mountComponent({ count: 5, selected: 2 })

    const root = container.querySelector('.d1-carouselPagination') as HTMLElement
    const buttons = root.querySelectorAll<HTMLButtonElement>('button.d1-carouselPagination__item')
    const focusSlide3 = vi.spyOn(buttons[2]!, 'focus')
    const focusSlide5 = vi.spyOn(buttons[4]!, 'focus')
    const focusSlide1 = vi.spyOn(buttons[0]!, 'focus')

    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    expect(exposed.getSelected()).toBe(3)
    expect(focusSlide3).toHaveBeenCalledTimes(1)

    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'End', bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    expect(exposed.getSelected()).toBe(5)
    expect(focusSlide5).toHaveBeenCalledTimes(1)

    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Home', bubbles: true }))
    vi.runAllTimers()
    await nextTick()

    expect(exposed.getSelected()).toBe(1)
    expect(focusSlide1).toHaveBeenCalledTimes(1)
  })

  it('should reactively synchronize props across dynamic bullets, fraction, progressbar, and hideIfOne', async () => {
    const { container, state, exposed } = mountComponent({
      count: 10,
      selected: 5,
      dynamic: true,
      visible: 5
    })

    let buttons = container.querySelectorAll<HTMLButtonElement>('button.d1-carouselPagination__item')
    expect(buttons).toHaveLength(5)
    expect(buttons[0]?.getAttribute('data-index')).toBe('3')
    expect(buttons[0]?.style.transform).toBe('scale(0.5)')
    expect(buttons[2]?.getAttribute('data-index')).toBe('5')
    expect(buttons[2]?.style.transform).toBe('')

    state.selected = 8
    await nextTick()
    expect(exposed.getSelected()).toBe(8)
    buttons = container.querySelectorAll<HTMLButtonElement>('button.d1-carouselPagination__item')
    expect(buttons[0]?.getAttribute('data-index')).toBe('6')

    state.type = 'fraction'
    await nextTick()
    expect(container.querySelector('.d1-carouselPagination__fraction')?.textContent).toBe('8 / 10')

    state.type = 'progressbar'
    await nextTick()
    const progress = container.querySelector('.d1-carouselPagination__progress')
    expect(progress?.getAttribute('aria-valuenow')).toBe('8')
    expect(progress?.getAttribute('aria-valuemax')).toBe('10')

    state.count = 1
    await nextTick()
    expect(container.querySelector('.d1-carouselPagination')).toBeNull()
  })

  it('should ignore clicks and keyboard events when control is false', async () => {
    const { container, emits, exposed } = mountComponent({
      count: 4,
      selected: 2,
      control: false
    })

    const root = container.querySelector('.d1-carouselPagination') as HTMLElement
    const buttons = root.querySelectorAll<HTMLButtonElement>('button.d1-carouselPagination__item')

    expect(buttons[1]?.getAttribute('tabindex')).toBe('-1')

    buttons[0]?.click()
    root.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }))
    await nextTick()

    expect(exposed.getSelected()).toBe(2)
    expect(emits).not.toHaveBeenCalled()
  })

  it('should stop reactive prop watchers cleanly after unmount', async () => {
    const { state, exposed, unmount } = mountComponent({ count: 5, selected: 2 })

    state.selected = 4
    await nextTick()
    expect(exposed.getSelected()).toBe(4)

    unmount()

    state.selected = 1
    await nextTick()
    expect(exposed.getSelected()).toBe(4)
  })
})
