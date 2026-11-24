// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { computed, createSSRApp, defineComponent } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { type ConstrClasses, ServerStorage } from '@dxtmisha/functional'

import { BulletItemDesign } from '../../BulletItem/BulletItemDesign'
import type { BulletItemProps, BulletItemPropsBasic } from '../../BulletItem/props'
import type { BulletItemClasses, BulletItemComponents, BulletItemExpose } from '../../BulletItem/types'
import { BulletDesign } from '../BulletDesign'
import { defaultsBullet, type BulletProps, type BulletPropsBasic } from '../props'
import type { BulletClasses, BulletComponents, BulletExpose } from '../types'

beforeEach(() => {
  ServerStorage.reset()
  const request: Record<string, unknown> = {}
  ServerStorage.init(() => request)
})

afterEach(() => {
  ServerStorage.reset()
})

const SsrBulletItem = defineComponent({
  name: 'SsrBulletItem',
  props: {
    description: [String, Number],
    isSkeleton: Boolean
  },
  setup(props) {
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
      props as BulletItemProps,
      { classes }
    )
    return design.render()
  }
})

function createSsrBulletApp(props: BulletProps) {
  const SsrBullet = defineComponent({
    setup() {
      const mergedProps = { ...defaultsBullet, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-bullet': true }
      }))
      const design = new BulletDesign<
        BulletComponents,
        BulletExpose,
        BulletClasses,
        BulletPropsBasic
      >(
        'd1.bullet',
        mergedProps,
        {
          classes,
          components: { bulletItem: SsrBulletItem }
        }
      )
      return design.render()
    }
  })

  return createSSRApp(SsrBullet)
}

describe('Bullet (SSR)', () => {
  it('should render list items and skeleton wrappers deterministically in Node SSR without browser globals', async () => {
    expect(typeof window).toBe('undefined')
    expect(typeof document).toBe('undefined')

    const html = await renderToString(createSsrBulletApp({
      list: ['SSR First', 0],
      isSkeleton: true
    }))

    expect(html).toContain('<ul class="d1-bullet"')
    expect(html).toContain('d1-bulletItem')
    expect(html).toContain('d1-bullet__item')
    expect(html).toContain('d1-skeleton__textVariant')
    expect(html).toContain('>SSR First<')
    expect(html).toContain('>0<')
  })

  it('should sanitize raw html and inject BulletItem classes in Node SSR', async () => {
    const html = await renderToString(createSsrBulletApp({
      html: '<li>SSR HTML</li><script>alert(1)</script><li onclick="evil()">Clean</li>'
    }))

    expect(html).toContain('<li class="d1-bulletItem d1-bullet__item">SSR HTML</li>')
    expect(html).toContain('<li class="d1-bulletItem d1-bullet__item">Clean</li>')
    expect(html).not.toContain('<script')
    expect(html).not.toContain('onclick')
  })
})
