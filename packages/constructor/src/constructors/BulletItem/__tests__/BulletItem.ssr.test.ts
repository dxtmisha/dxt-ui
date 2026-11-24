// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { BulletItemDesign } from '../BulletItemDesign'
import { defaultsBulletItem, type BulletItemProps, type BulletItemPropsBasic } from '../props'
import type { BulletItemClasses, BulletItemComponents, BulletItemExpose, BulletItemSlots } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

function createSsrBulletItemApp(props: BulletItemProps, slots?: BulletItemSlots) {
  const SsrBulletItem = defineComponent({
    setup() {
      const mergedProps = { ...defaultsBulletItem, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-bulletItem': true }
      }))
      const design = new BulletItemDesign<
        BulletItemComponents,
        BulletItemExpose,
        BulletItemClasses,
        BulletItemPropsBasic
      >(
        'd1.bulletItem',
        mergedProps,
        { classes }
      )
      return design.render()
    }
  })

  return createSSRApp({
    render: () => h(SsrBulletItem, null, slots as Record<string, () => unknown>)
  })
}

describe('BulletItem (SSR)', () => {
  it('should render semantic li with descriptionId, skeleton classes, and default slot in Node SSR', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const [htmlNormal, htmlSkeleton] = await Promise.all([
      renderToString(createSsrBulletItemApp(
        { description: 'SSR Bullet', descriptionId: 'ssr-bi-1' },
        { default: () => [h('strong', 'Extra')] }
      )),
      renderToString(createSsrBulletItemApp({
        description: 0,
        descriptionId: 'ssr-bi-2',
        isSkeleton: true
      }))
    ])

    expect(htmlNormal).toContain('<li ')
    expect(htmlNormal).toContain('id="ssr-bi-1"')
    expect(htmlNormal).toContain('>SSR Bullet</span>')
    expect(htmlNormal).toContain('<strong>Extra</strong>')

    expect(htmlSkeleton).toContain('id="ssr-bi-2"')
    expect(htmlSkeleton).toContain('d1-skeleton__textVariant')
    expect(htmlSkeleton).toContain('>0</span>')
  })
})
