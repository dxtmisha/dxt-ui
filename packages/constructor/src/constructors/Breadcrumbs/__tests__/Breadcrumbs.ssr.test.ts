// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { TextInclude } from '../../../classes/TextInclude'
import { BreadcrumbItemDesign } from '../../BreadcrumbItem/BreadcrumbItemDesign'
import type { BreadcrumbItemProps, BreadcrumbItemPropsBasic } from '../../BreadcrumbItem/props'
import type { BreadcrumbItemClasses, BreadcrumbItemComponents, BreadcrumbItemExpose } from '../../BreadcrumbItem/types'
import { BreadcrumbsDesign } from '../BreadcrumbsDesign'
import { defaultsBreadcrumbs, type BreadcrumbsProps, type BreadcrumbsPropsBasic } from '../props'
import type { BreadcrumbsClasses, BreadcrumbsComponents, BreadcrumbsExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const MockIconSsr = defineComponent({
  name: 'MockIconSsr',
  props: { icon: String },
  setup(props, { attrs }) {
    return () => h('span', { class: ['mock-icon', attrs.class] }, props.icon)
  }
})

const SsrBreadcrumbItem = defineComponent({
  name: 'SsrBreadcrumbItem',
  props: {
    index: Number,
    label: [String, Number],
    href: String,
    readonly: Boolean,
    disabled: Boolean,
    isSkeleton: Boolean,
    iconArrowRight: { type: String, default: 'chevron_right' }
  },
  setup(props) {
    const classes = computed<ConstrClasses>(() => ({
      main: { 'd1-breadcrumbItem': true }
    }))
    const design = new BreadcrumbItemDesign<
      BreadcrumbItemComponents,
      BreadcrumbItemExpose,
      BreadcrumbItemClasses,
      BreadcrumbItemPropsBasic
    >(
      'd1.breadcrumbItem',
      props as BreadcrumbItemProps,
      {
        classes,
        components: { icon: MockIconSsr }
      }
    )
    return design.render()
  }
})

function createSsrBreadcrumbsApp(props: BreadcrumbsProps) {
  const SsrBreadcrumbs = defineComponent({
    setup() {
      const mergedProps = { ...defaultsBreadcrumbs, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-breadcrumbs': true }
      }))
      const design = new BreadcrumbsDesign<
        BreadcrumbsComponents,
        BreadcrumbsExpose,
        BreadcrumbsClasses,
        BreadcrumbsPropsBasic
      >(
        'd1.breadcrumbs',
        mergedProps,
        {
          classes,
          components: { breadcrumbItem: SsrBreadcrumbItem }
        }
      )
      return design.render()
    }
  })

  return createSSRApp(SsrBreadcrumbs)
}

describe('Breadcrumbs (SSR)', () => {
  it('should render semantic nav landmark and current-page final item in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrBreadcrumbsApp({
      list: [
        { label: 'Docs', href: '/docs' },
        { label: 'Breadcrumbs' }
      ]
    }))

    expect(html).toContain('<nav ')
    expect(html).toContain('aria-label="Breadcrumb"')
    expect(html).toContain('class="d1-breadcrumbs"')
    expect(html).toContain('href="/docs"')
    expect(html).toContain('aria-current="page"')
    expect(html).toContain('>Breadcrumbs<')
  })

  it('should isolate TextInclude localization across separate SSR request contexts', async () => {
    const reqA: Record<string, unknown> = {}
    const reqB: Record<string, unknown> = {}

    ServerStorage.reset()
    ServerStorage.init(() => reqA)
    TextInclude.initText({ breadcrumb: 'Навигация SSR' })
    const htmlA = await renderToString(createSsrBreadcrumbsApp({
      list: [{ label: 'Главная' }]
    }))

    ServerStorage.reset()
    ServerStorage.init(() => reqB)
    const htmlB = await renderToString(createSsrBreadcrumbsApp({
      list: [{ label: 'Home' }]
    }))

    expect(htmlA).toContain('aria-label="Навигация SSR"')
    expect(htmlB).toContain('aria-label="Breadcrumb"')
  })
})
