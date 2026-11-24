// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { type Component, computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { TextInclude } from '../../../classes/TextInclude'
import { CarouselPaginationDesign } from '../CarouselPaginationDesign'
import { defaultsCarouselPagination, type CarouselPaginationProps } from '../props'
import type {
  CarouselPaginationClasses,
  CarouselPaginationComponents,
  CarouselPaginationExpose,
  CarouselPaginationSlots
} from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

function createSsrApp(
  props: Partial<CarouselPaginationProps>,
  slots?: CarouselPaginationSlots
) {
  const SsrCarouselPagination = defineComponent({
    setup() {
      const mergedProps: CarouselPaginationProps = {
        ...(defaultsCarouselPagination as Partial<CarouselPaginationProps>),
        ...props
      }
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-carouselPagination': true,
          [`d1-carouselPagination--type--${mergedProps.type}`]: Boolean(mergedProps.type),
          'd1-carouselPagination--vertical': Boolean(mergedProps.vertical),
          'd1-carouselPagination--dynamic': Boolean(mergedProps.dynamic)
        }
      }))
      const design = new CarouselPaginationDesign<
        CarouselPaginationComponents,
        CarouselPaginationExpose,
        CarouselPaginationClasses,
        CarouselPaginationProps
      >(
        'd1.carouselPagination',
        mergedProps,
        {
          classes
        }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrCarouselPagination as Component, null, slots ? { ...slots } : undefined)
  })
}

describe('CarouselPagination (SSR)', () => {
  it('should render bullets mode with accurate initial selected state and ARIA in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrApp({
      count: 4,
      selected: 3,
      type: 'bullets'
    }))

    expect(html).toContain('role="tablist"')
    expect(html).toContain('aria-orientation="horizontal"')
    expect(html).toContain('aria-label="Pagination"')
    expect(html).toContain('--d1-carouselPagination-sys-percent:75%')
    expect(html).toContain('data-index="3"')
    expect(html).toContain('aria-selected="true"')
    expect(html).toContain('d1-carouselPagination__item--selected')
    expect(html).toContain('tabindex="0"')
  })

  it('should render fraction, progressbar, dynamic, vertical, and hideIfOne modes cleanly in SSR', async () => {
    const fractionHtml = await renderToString(createSsrApp({
      count: 5,
      modelSelected: 2,
      type: 'fraction',
      template: '[active] / [total]',
      vertical: true
    }))
    expect(fractionHtml).toContain('aria-orientation="vertical"')
    expect(fractionHtml).toContain('aria-live="polite"')
    expect(fractionHtml).toContain('2 / 5')

    const progressHtml = await renderToString(createSsrApp({
      count: 5,
      selected: 4,
      type: 'progressbar'
    }))
    expect(progressHtml).toContain('role="progressbar"')
    expect(progressHtml).toContain('aria-valuenow="4"')
    expect(progressHtml).toContain('aria-valuemin="1"')
    expect(progressHtml).toContain('aria-valuemax="5"')
    expect(progressHtml).toContain('--d1-carouselPagination-sys-percent:80%')

    const dynamicHtml = await renderToString(createSsrApp({
      count: 10,
      selected: 5,
      dynamic: true,
      visible: 5
    }))
    expect(dynamicHtml).toContain('data-index="3"')
    expect(dynamicHtml).toContain('transform:scale(0.5)')
    expect(dynamicHtml).not.toContain('data-index="1"')
    expect(dynamicHtml).not.toContain('data-index="10"')

    const hiddenHtml = await renderToString(createSsrApp({
      count: 1,
      hideIfOne: true
    }))
    expect(hiddenHtml).toBe('<!---->')
  })

  it('should render custom slots and custom container tag in SSR', async () => {
    const html = await renderToString(createSsrApp(
      {
        count: 2,
        selected: 1,
        tag: 'nav',
        type: 'fraction'
      },
      {
        fraction: ({ binds, text }) => [
          h('span', binds, `Custom: ${text}`)
        ]
      }
    ))

    expect(html).toContain('<nav ')
    expect(html).toContain('Custom: 1 / 2')
  })

  it('should isolate TextInclude localization across separate SSR request contexts', async () => {
    const requestA: Record<string, unknown> = {}
    const requestB: Record<string, unknown> = {}

    ServerStorage.reset()
    ServerStorage.init(() => requestA)
    TextInclude.initText({ pagination: 'Пагинация SSR' })
    const htmlA = await renderToString(createSsrApp({ count: 3, selected: 1 }))

    ServerStorage.reset()
    ServerStorage.init(() => requestB)
    const htmlB = await renderToString(createSsrApp({ count: 3, selected: 1 }))

    expect(htmlA).toContain('aria-label="Пагинация SSR"')
    expect(htmlB).toContain('aria-label="Pagination"')
  })
})
