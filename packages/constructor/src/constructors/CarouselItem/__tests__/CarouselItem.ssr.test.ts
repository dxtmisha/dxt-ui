// @vitest-environment node
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createSSRApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { DesignName, ServerStorage } from '@dxtmisha/functional'

import { CarouselItem } from '../CarouselItem'
import { CarouselItemDesign } from '../CarouselItemDesign'
import type { CarouselItemSlotDefault } from '../basicTypes'
import type { CarouselItemProps } from '../props'

const MockSsrImage = defineComponent({
  name: 'MockSsrImage',
  props: {
    value: [String, Object]
  },
  setup(componentProps, { attrs }) {
    return () => h('img', {
      ...attrs,
      src: typeof componentProps.value === 'string' ? componentProps.value : ''
    })
  }
})

describe('CarouselItem (SSR)', () => {
  const naming = new DesignName('d1.carouselItem')

  it('should initialize and compute bindings in Node without DOM globals', () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props = reactive<CarouselItemProps>({
      selected: true,
      slide: 1,
      total: 4,
      value: 'ssr-slide'
    })

    scope.run(() => {
      const item = new CarouselItem(props, element, naming)

      expect(item.tag).toBe('div')
      expect(item.binds['data-value']).toBe('ssr-slide')
      expect(item.binds['aria-label']).toBe('1 / 4')
      expect(item.binds['aria-hidden']).toBe('false')
      expect(item.binds['aria-roledescription']).toBe('slide')
      expect(item.binds.role).toBe('group')
      expect(item.binds.tabindex).toBeUndefined()
      expect(item.classes).toEqual({})
    })

    scope.stop()
  })

  it('should render full CarouselItemDesign with image and scoped slot to HTML string in SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const props: CarouselItemProps = {
      image: '/ssr-hero.jpg',
      selected: true,
      slide: 2,
      total: 5,
      value: 'hero-ssr'
    }

    const TestComponent = defineComponent({
      setup() {
        const design = new CarouselItemDesign(
          'd1.carouselItem',
          props,
          {
            components: {
              image: MockSsrImage
            }
          }
        )
        const render = design.render()
        return () => h(render)
      }
    })

    const storage: Record<string, unknown> = {}
    ServerStorage.init(() => storage)

    const app = createSSRApp({
      render() {
        return h(TestComponent, { 'data-testid': 'ssr-root' }, {
          default: (slotProps: CarouselItemSlotDefault) => [
            h('p', `Slide ${slotProps.slide} (${slotProps.selected})`)
          ]
        })
      }
    })
    const html = await renderToString(app)

    expect(html).toContain('<div')
    expect(html).toContain('data-testid="ssr-root"')
    expect(html).toContain('data-value="hero-ssr"')
    expect(html).toContain('role="group"')
    expect(html).toContain('aria-roledescription="slide"')
    expect(html).toContain('aria-label="2 / 5"')
    expect(html).toContain('aria-hidden="false"')
    expect(html).toContain('<img')
    expect(html).toContain('src="/ssr-hero.jpg"')
    expect(html).toContain('d1-carouselItem__image')
    expect(html).toContain('Slide 2 (true)')
  })

  it('should render link, unselected, skeleton, zero-indexed, and multilingual variants deterministically across SSR renders', async () => {
    const variants: Array<{ props: CarouselItemProps, expectedTag: string, expectedFragment: string }> = [
      {
        props: { selected: false, slide: 1, total: 3 },
        expectedTag: '<div',
        expectedFragment: 'tabindex="-1"'
      },
      {
        props: { href: 'https://example.com', selected: true },
        expectedTag: '<a',
        expectedFragment: 'href="https://example.com"'
      },
      {
        props: { to: '/slides/3', selected: true },
        expectedTag: '<a',
        expectedFragment: 'aria-hidden="false"'
      },
      {
        props: { tag: 'article', isSkeleton: true },
        expectedTag: '<article',
        expectedFragment: 'd1-skeleton__background'
      },
      {
        props: { slide: 0, total: 0, value: 0, selected: true },
        expectedTag: '<div',
        expectedFragment: 'aria-label="0 / 0"'
      },
      {
        props: { ariaLabel: 'Слайд — Tiếng Việt 🚀', selected: true },
        expectedTag: '<div',
        expectedFragment: 'aria-label="Слайд — Tiếng Việt 🚀"'
      }
    ]

    for (const variant of variants) {
      const TestComponent = defineComponent({
        setup() {
          const design = new CarouselItemDesign('d1.carouselItem', variant.props)
          const render = design.render()
          return () => h(render)
        }
      })

      const storage: Record<string, unknown> = {}
      ServerStorage.init(() => storage)

      const app = createSSRApp(TestComponent)
      const html = await renderToString(app)

      expect(html).toContain(variant.expectedTag)
      expect(html).toContain(variant.expectedFragment)
    }
  })
})
