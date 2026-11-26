/**
 * @vitest-environment node
 */

import { describe, it, expect } from 'vitest'
import { createSSRApp, defineComponent, h, type FunctionalComponent } from 'vue'
import { renderToString } from '@vue/server-renderer'

import { SkeletonItemDesign } from '../SkeletonItemDesign'
import { defaultsSkeletonItem, type SkeletonItemProps } from '../props'
import type { SkeletonItemClasses, SkeletonItemComponents, SkeletonItemExpose } from '../types'

const createSsrSkeletonItem = () => defineComponent({
  name: 'SsrSkeletonItem',
  props: {
    tag: { type: [String, Object, Function] as unknown as () => SkeletonItemProps['tag'], default: undefined },
    label: { type: [String, Number] as unknown as () => SkeletonItemProps['label'], default: undefined },
    length: { type: [String, Number, Array] as unknown as () => SkeletonItemProps['length'], default: defaultsSkeletonItem.length },
    itemAttrs: { type: Object as () => SkeletonItemProps['itemAttrs'], default: undefined },
    text: Boolean,
    textVariant: Boolean,
    background: Boolean,
    backgroundVariant: Boolean,
    border: Boolean,
    borderVariant: Boolean
  },
  setup(props, { expose }) {
    const design = new SkeletonItemDesign<
      SkeletonItemComponents,
      SkeletonItemExpose,
      SkeletonItemClasses,
      SkeletonItemProps
    >(
      'd1.skeletonItem',
      props as Readonly<SkeletonItemProps>
    )

    expose(design.expose())
    return design.render()
  }
})

describe('SkeletonItem (SSR)', () => {
  it('should render deterministically in Node SSR without browser globals or hydration drift', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const SsrSkeletonItem = createSsrSkeletonItem()
    const renderOnce = () => renderToString(createSSRApp({
      render: () => h('div', [
        h(SsrSkeletonItem, { text: true, length: 3 }),
        h(SsrSkeletonItem, { textVariant: true, length: [2, 5] }),
        h(SsrSkeletonItem, { background: true, label: 0 }),
        h(SsrSkeletonItem, { border: true, label: 'Привет · Học tiếng Việt · 🚀' })
      ])
    }))

    const firstHtml = await renderOnce()
    const secondHtml = await renderOnce()

    expect(firstHtml).toBe(secondHtml)
    expect(firstHtml).toContain('d1-skeleton__text')
    expect(firstHtml).toContain('aria-hidden="true"')
    expect(firstHtml).toContain('>0<')
    expect(firstHtml).toContain('Привет · Học tiếng Việt · 🚀')
  })

  it('should escape XSS payloads in SSR output for both label and string length', async () => {
    const SsrSkeletonItem = createSsrSkeletonItem()
    const payload = '<img src=x onerror=alert(1)>'

    const html = await renderToString(createSSRApp({
      render: () => h('div', [
        h(SsrSkeletonItem, { text: true, label: payload }),
        h(SsrSkeletonItem, { text: true, length: payload })
      ])
    }))

    expect(html).not.toContain('<img src=x')
    expect(html).toContain('&lt;img src=x onerror=alert(1)&gt;')
  })

  it('should render component tags (object and functional) cleanly during SSR without empty slot injection', async () => {
    const SsrSkeletonItem = createSsrSkeletonItem()
    const FunctionalTag: FunctionalComponent = (props, { slots }) => h(
      'article',
      { ...props, 'data-has-slot': String(Boolean(slots.default)) },
      slots.default ? slots.default() : 'SSR Functional'
    )

    const html = await renderToString(createSSRApp({
      render: () => h('div', [
        h(SsrSkeletonItem, { tag: FunctionalTag, backgroundVariant: true }),
        h(SsrSkeletonItem, { tag: FunctionalTag, borderVariant: true }, { default: () => h('span', 'SSR Slot') })
      ])
    }))

    expect(html).toContain('data-has-slot="false"')
    expect(html).toContain('SSR Functional')
    expect(html).toContain('data-has-slot="true"')
    expect(html).toContain('<span>SSR Slot</span>')
    expect(html).not.toContain('innerHTML')
  })
})
