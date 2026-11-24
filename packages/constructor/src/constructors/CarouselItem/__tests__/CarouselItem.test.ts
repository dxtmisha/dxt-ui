// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  mergeProps,
  nextTick,
  reactive
} from 'vue'
import type { ConstrClasses, ConstrExpose } from '@dxtmisha/functional'

import { CarouselItemDesign } from '../CarouselItemDesign'
import type { CarouselItemSlotDefault } from '../basicTypes'
import type { CarouselItemProps } from '../props'
import type {
  CarouselItemClasses,
  CarouselItemComponents,
  CarouselItemEmits,
  CarouselItemExpose,
  CarouselItemSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockImage = defineComponent({
  name: 'MockImage',
  props: {
    value: [String, Object]
  },
  emits: ['load'],
  setup(componentProps, { attrs, emit }) {
    return () => h(
      'img',
      mergeProps({
        class: 'mock-image',
        src: typeof componentProps.value === 'string' ? componentProps.value : '',
        onClick: () => emit('load', { image: undefined, status: 'image' })
      }, attrs)
    )
  }
})

/**
 * Mounts full CarouselItem component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента CarouselItem в jsdom.
 * @param initialProps initial carousel item properties / начальные свойства элемента карусели
 * @param customSlots slot renderers / функции рендеринга слотов
 * @param extraAttrs external attributes / внешние атрибуты
 * @returns container, reactive props, emitted events, and exposed API / контейнер, реактивные свойства, события и экспонируемый API
 */
async function mountCarouselItem(
  initialProps: CarouselItemProps = {},
  customSlots: CarouselItemSlots = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  mountedCleanups.push(() => container.remove())

  const props = reactive<CarouselItemProps>({ ...initialProps })
  const emitted: Array<{ event: keyof CarouselItemEmits, args: unknown[] }> = []
  let exposed!: ConstrExpose<HTMLDivElement, CarouselItemExpose>

  const Host = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-carouselItem': true,
          'd1-carouselItem--selected': Boolean(props.selected),
          [`d1-carouselItem--snap--${props.snap}`]: Boolean(props.snap)
        }
      }))

      const design = new CarouselItemDesign<
        CarouselItemComponents,
        CarouselItemExpose,
        CarouselItemClasses,
        CarouselItemProps
      >(
        'd1.carouselItem',
        props,
        {
          classes: classesToken,
          components: {
            image: MockImage
          },
          emits: ((event: keyof CarouselItemEmits, ...args: unknown[]) => {
            emitted.push({ event, args })
          }) as never
        }
      )

      exposed = design.expose()
      return design.render()
    }
  })

  const app = createApp({
    render() {
      return h(Host, extraAttrs, customSlots as Record<string, (slotProps: CarouselItemSlotDefault) => unknown>)
    }
  })
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return {
    container,
    props,
    emitted,
    exposed
  }
}

describe('CarouselItem (integration)', () => {
  describe('Full rendering, image integration, and scoped default slot', () => {
    it('should render image and default slot with reactive selected and slide slot props', async () => {
      const { container, props, exposed } = await mountCarouselItem(
        {
          image: '/slide-1.jpg',
          selected: true,
          slide: 1,
          total: 3,
          snap: 'center',
          value: 'hero-1',
          detail: { index: 0 }
        },
        {
          default: slotProps => [
            h('div', { class: 'slide-caption' }, `${slotProps.slide}:${slotProps.selected}`)
          ]
        }
      )

      const root = container.querySelector('.d1-carouselItem')
      expect(root).not.toBeNull()
      expect(root?.classList.contains('d1-carouselItem--selected')).toBe(true)
      expect(root?.classList.contains('d1-carouselItem--snap--center')).toBe(true)
      expect(root?.getAttribute('role')).toBe('group')
      expect(root?.getAttribute('aria-roledescription')).toBe('slide')
      expect(root?.getAttribute('aria-label')).toBe('1 / 3')
      expect(root?.getAttribute('aria-hidden')).toBe('false')
      expect(root?.hasAttribute('tabindex')).toBe(false)
      expect(root?.getAttribute('data-value')).toBe('hero-1')

      const image = container.querySelector('img.mock-image.d1-carouselItem__image')
      expect(image).not.toBeNull()
      expect(image?.getAttribute('src')).toBe('/slide-1.jpg')

      expect(container.querySelector('.slide-caption')?.textContent).toBe('1:true')
      expect(exposed.isSelected()).toBe(true)
      expect(exposed.getSlide()).toBe(1)
      expect(exposed.getValue?.()).toBe('hero-1')
      expect(exposed.getDetail?.()).toEqual({ index: 0 })

      props.selected = false
      props.slide = 2
      await nextTick()

      expect(root?.getAttribute('aria-hidden')).toBe('true')
      expect(root?.getAttribute('tabindex')).toBe('-1')
      expect(root?.getAttribute('aria-label')).toBe('2 / 3')
      expect(container.querySelector('.slide-caption')?.textContent).toBe('2:false')
      expect(exposed.isSelected()).toBe(false)
      expect(exposed.getSlide()).toBe(2)
    })

    it('should omit image element when image prop is not provided and toggle it reactively', async () => {
      const { container, props } = await mountCarouselItem({
        selected: true
      })

      expect(container.querySelector('.mock-image')).toBeNull()

      props.image = '/dynamic.webp'
      await nextTick()

      expect(container.querySelector('img.mock-image.d1-carouselItem__image')?.getAttribute('src')).toBe('/dynamic.webp')

      props.image = undefined
      await nextTick()

      expect(container.querySelector('.mock-image')).toBeNull()
    })

    it('should propagate image load events through emits', async () => {
      const { container, emitted } = await mountCarouselItem({
        image: '/photo.png',
        selected: true
      })

      const image = container.querySelector('img.mock-image') as HTMLImageElement
      image.click()

      expect(emitted.some(item => item.event === 'load')).toBe(true)
    })

    it('should preserve numeric 0 for slide, total, and value', async () => {
      const { container, exposed } = await mountCarouselItem(
        {
          slide: 0,
          total: 0,
          value: 0,
          selected: true
        },
        {
          default: slotProps => [h('span', { class: 'zero-slide' }, String(slotProps.slide))]
        }
      )

      const root = container.querySelector('.d1-carouselItem')
      expect(root?.getAttribute('data-value')).toBe('0')
      expect(root?.getAttribute('aria-label')).toBe('0 / 0')
      expect(container.querySelector('.zero-slide')?.textContent).toBe('0')
      expect(exposed.getSlide()).toBe(0)
      expect(exposed.getValue?.()).toBe(0)
    })
  })

  describe('Skeleton loading state', () => {
    it('should apply and remove skeleton background class reactively without duplicating markup', async () => {
      const { container, props } = await mountCarouselItem(
        {
          isSkeleton: true
        },
        {
          default: () => [h('div', { class: 'content' }, 'Slide Content')]
        }
      )

      const root = container.querySelector('.d1-carouselItem')
      expect(root?.classList.contains('d1-skeleton__background')).toBe(true)
      expect(container.querySelectorAll('.content')).toHaveLength(1)

      props.isSkeleton = false
      await nextTick()

      expect(root?.classList.contains('d1-skeleton__background')).toBe(false)
    })
  })

  describe('Polymorphic tags, links, interactions, and external attributes', () => {
    it('should render anchor element for href/to and custom tag when explicitly specified', async () => {
      const { container, props } = await mountCarouselItem({
        href: 'https://example.com/offer',
        selected: true
      })

      const anchor = container.querySelector('a.d1-carouselItem')
      expect(anchor).not.toBeNull()
      expect(anchor?.getAttribute('href')).toBe('https://example.com/offer')

      props.href = undefined
      props.to = '/catalog'
      await nextTick()

      expect(container.querySelector('a.d1-carouselItem')).not.toBeNull()

      props.tag = 'article'
      await nextTick()

      expect(container.querySelector('article.d1-carouselItem')).not.toBeNull()
    })

    it('should emit click events on click and Enter keydown while guarding IME composition', async () => {
      const { container, emitted } = await mountCarouselItem({
        selected: true,
        value: 'slide-interactive'
      })

      const root = container.querySelector('.d1-carouselItem') as HTMLDivElement
      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', isComposing: true }))
      expect(emitted).toHaveLength(0)

      root.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }))
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])

      root.click()
      expect(emitted).toHaveLength(4)
    })

    it('should merge external attrs, class, style, and click handlers without clobbering binds', async () => {
      const externalClick = vi.fn()
      const { container, emitted } = await mountCarouselItem(
        {
          selected: true,
          value: 'slide-merged'
        },
        {},
        {
          'data-testid': 'promo-slide',
          'class': 'external-slide',
          'style': 'margin-inline: 8px',
          'onClick': externalClick
        }
      )

      const root = container.querySelector('.d1-carouselItem') as HTMLDivElement
      expect(root.getAttribute('data-testid')).toBe('promo-slide')
      expect(root.classList.contains('external-slide')).toBe(true)
      expect(root.getAttribute('style')).toContain('margin-inline: 8px')

      root.click()
      expect(externalClick).toHaveBeenCalledTimes(1)
      expect(emitted.map(item => item.event)).toEqual(['click', 'clickLite'])
    })
  })
})
