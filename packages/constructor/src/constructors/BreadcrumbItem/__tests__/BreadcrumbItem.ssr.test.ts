// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { BreadcrumbItemDesign } from '../BreadcrumbItemDesign'
import { defaultsBreadcrumbItem, type BreadcrumbItemProps, type BreadcrumbItemPropsBasic } from '../props'
import type {
  BreadcrumbItemClasses,
  BreadcrumbItemComponents,
  BreadcrumbItemExpose,
  BreadcrumbItemSlots
} from '../types'

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
  props: {
    icon: String,
    isSkeleton: Boolean
  },
  setup(props, { attrs }) {
    return () => h('span', {
      'class': ['mock-icon', attrs.class],
      'aria-hidden': attrs['aria-hidden'],
      'data-skeleton': String(Boolean(props.isSkeleton))
    }, props.icon)
  }
})

function createSsrBreadcrumbItemApp(props: BreadcrumbItemProps, slots?: BreadcrumbItemSlots) {
  const SsrBreadcrumbItem = defineComponent({
    setup() {
      const mergedProps = { ...defaultsBreadcrumbItem, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-breadcrumbItem': true,
          'd1-breadcrumbItem--disabled': Boolean(mergedProps.disabled),
          'd1-breadcrumbItem--readonly': Boolean(mergedProps.readonly),
          'd1-breadcrumbItem--back': Boolean(mergedProps.back)
        }
      }))
      const design = new BreadcrumbItemDesign<
        BreadcrumbItemComponents,
        BreadcrumbItemExpose,
        BreadcrumbItemClasses,
        BreadcrumbItemPropsBasic
      >(
        'd1.breadcrumbItem',
        mergedProps,
        {
          classes,
          components: { icon: MockIconSsr }
        }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrBreadcrumbItem, null, slots as Record<string, () => unknown>)
  })
}

describe('BreadcrumbItem (SSR)', () => {
  it('should render interactive link with href, icon, label, and aria-hidden separator deterministically in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrBreadcrumbItemApp({
      label: 'Documentation',
      labelId: 'ssr-crumb-lbl',
      href: '/docs',
      icon: 'book',
      iconArrowRight: 'chevron_right',
      value: 'docs'
    }))

    expect(html).toContain('<a ')
    expect(html).toContain('href="/docs"')
    expect(html).toContain('data-value="docs"')
    expect(html).toContain('id="ssr-crumb-lbl"')
    expect(html).toContain('>Documentation<')
    expect(html).toContain('>book<')
    expect(html).toContain('d1-breadcrumbItem__iconArrow')
    expect(html).toContain('aria-hidden="true"')
  })

  it('should render current-page readonly span and disabled link cleanly across concurrent SSR requests', async () => {
    const [readonlyHtml, disabledHtml] = await Promise.all([
      renderToString(createSsrBreadcrumbItemApp({
        label: 'Current Step',
        labelId: 'ssr-readonly',
        readonly: true,
        iconArrowRight: 'chevron_right'
      })),
      renderToString(createSsrBreadcrumbItemApp({
        label: 'Locked Step',
        labelId: 'ssr-disabled',
        disabled: true,
        isSkeleton: true,
        icon: 'lock'
      }))
    ])

    expect(readonlyHtml).toContain('<span ')
    expect(readonlyHtml).toContain('aria-current="page"')
    expect(readonlyHtml).not.toContain('d1-breadcrumbItem__iconArrow')

    expect(disabledHtml).toContain('<a ')
    expect(disabledHtml).toContain('aria-disabled="true"')
    expect(disabledHtml).toContain('d1-skeleton__textVariant')
    expect(disabledHtml).toContain('data-skeleton="true"')
  })
})
