// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses, ConstrEmit, ConstrExpose } from '@dxtmisha/functional'

import { CarouselItem } from '../CarouselItem'
import { CarouselItemDesign } from '../CarouselItemDesign'
import type { CarouselItemProps } from '../props'
import type {
  CarouselItemClasses,
  CarouselItemComponents,
  CarouselItemEmits,
  CarouselItemExpose
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

describe('CarouselItemDesign', () => {
  it('should render root element, bind ref to elementHtml, and expose slide and event methods', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let exposedResult!: ConstrExpose<HTMLDivElement, CarouselItemExpose>
    let elementHtmlRef!: Ref<HTMLDivElement | undefined>

    const Component = defineComponent({
      setup() {
        const props = reactive<CarouselItemProps>({
          selected: true,
          slide: 2,
          total: 5,
          value: 'slide-2',
          detail: { id: 2 }
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-carouselItem': true,
            'd1-carouselItem--selected': Boolean(props.selected)
          }
        }))

        const design = new CarouselItemDesign<
          CarouselItemComponents,
          CarouselItemExpose,
          CarouselItemClasses,
          CarouselItemProps
        >('d1.carouselItem', props, {
          classes: classesToken
        })

        exposedResult = design.expose()
        elementHtmlRef = exposedResult.elementHtml as Ref<HTMLDivElement | undefined>

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const rootElement = container.querySelector('.d1-carouselItem')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('div')
    expect(rootElement?.getAttribute('data-value')).toBe('slide-2')
    expect(rootElement?.getAttribute('role')).toBe('group')
    expect(rootElement?.getAttribute('aria-roledescription')).toBe('slide')
    expect(rootElement?.getAttribute('aria-label')).toBe('2 / 5')
    expect(rootElement?.getAttribute('aria-hidden')).toBe('false')
    expect(rootElement?.hasAttribute('tabindex')).toBe(false)
    expect(elementHtmlRef.value).toBe(rootElement)

    expect(exposedResult.isSelected()).toBe(true)
    expect(exposedResult.getSlide()).toBe(2)
    expect(exposedResult.getValue?.()).toBe('slide-2')
    expect(exposedResult.getDetail?.()).toEqual({ id: 2 })
  })

  it('should provide design classes including generated subclasses body and image', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<CarouselItemClasses>
    let designStyles!: unknown

    const Component = defineComponent({
      setup() {
        const props = reactive<CarouselItemProps>({})

        const design = new CarouselItemDesign<
          CarouselItemComponents,
          CarouselItemExpose,
          CarouselItemClasses,
          CarouselItemProps
        >('d1.carouselItem', props)

        const inspectableDesign = design as unknown as {
          initClasses(): Partial<CarouselItemClasses>
          initStyles(): unknown
        }

        designClasses = inspectableDesign.initClasses()
        designStyles = inspectableDesign.initStyles()

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(designClasses.body).toBe('d1-carouselItem__body')
    expect(designClasses.image).toBe('d1-carouselItem__image')
    expect(designStyles).toEqual({})
  })

  it('should merge external attrs, class, style, and onClick handlers with internal binds', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()
    const emitClick = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<CarouselItemProps>({
          selected: true,
          value: 'merge-slide'
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-carouselItem': true
          }
        }))

        const design = new CarouselItemDesign<
          CarouselItemComponents,
          CarouselItemExpose,
          CarouselItemClasses,
          CarouselItemProps
        >('d1.carouselItem', props, {
          classes: classesToken,
          emits: emitClick as unknown as ConstrEmit<CarouselItemEmits>
        })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          'id': 'hero-slide-1',
          'data-testid': 'carousel-slide',
          'class': 'custom-slide-class',
          'style': 'opacity: 0.9',
          'tabindex': '0',
          'onClick': externalClick
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const rootElement = container.querySelector('.d1-carouselItem') as HTMLDivElement
    expect(rootElement).not.toBeNull()
    expect(rootElement.id).toBe('hero-slide-1')
    expect(rootElement.getAttribute('data-testid')).toBe('carousel-slide')
    expect(rootElement.classList.contains('custom-slide-class')).toBe(true)
    expect(rootElement.getAttribute('style')).toContain('opacity: 0.9')
    expect(rootElement.getAttribute('tabindex')).toBe('0')

    rootElement.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
    expect(emitClick).toHaveBeenCalledWith('click', expect.any(Object), expect.objectContaining({
      type: 'click',
      value: 'merge-slide'
    }))
    expect(emitClick).toHaveBeenCalledWith('clickLite', expect.objectContaining({
      type: 'click',
      value: 'merge-slide'
    }))
  })

  it('should support injecting a custom ItemConstructor', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomCarouselItem extends CarouselItem {
      override get tag(): string {
        return 'section'
      }
    }

    const Component = defineComponent({
      setup() {
        const props = reactive<CarouselItemProps>({})

        const design = new CarouselItemDesign<
          CarouselItemComponents,
          CarouselItemExpose,
          CarouselItemClasses,
          CarouselItemProps
        >('d1.carouselItem', props, undefined, CustomCarouselItem)

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(container.querySelector('section')).not.toBeNull()
  })
})
