// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { BulletItemInclude } from '../BulletItemInclude'
import type { BulletItemPropsInclude } from '../basicTypes'
import type { SkeletonPropsInclude } from '../../Skeleton'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockBulletItem = defineComponent({
  name: 'MockBulletItem',
  props: {
    description: [String, Number],
    isSkeleton: Boolean,
    size: String
  },
  setup(props, { attrs }) {
    return () => h('li', {
      'class': attrs.class,
      'data-size': props.size ?? '',
      'data-skeleton': String(Boolean(props.isSkeleton))
    }, String(props.description ?? ''))
  }
})

describe('BulletItemInclude (isolated class)', () => {
  it('should accurately detect non-empty lists and generate canonical BEM class names', () => {
    expect(BulletItemInclude.is()).toBe(false)
    expect(BulletItemInclude.is({})).toBe(false)
    expect(BulletItemInclude.is({ list: [] })).toBe(false)

    const frozen = Object.freeze(['Alpha', 0] as const)
    expect(BulletItemInclude.is({ list: frozen })).toBe(true)

    const naming = new DesignName('d1.bullet')
    const include = new BulletItemInclude({ list: frozen }, naming)
    expect(include.is).toBe(true)
    expect(include.getName()).toBe('d1-bullet')
    expect(include.getItemClass()).toBe('d1-bulletItem')
    expect(include.getBulletItemClass()).toBe('d1-bullet__item')
    expect(include.getClasses()).toBe('d1-bulletItem d1-bullet__item')
    expect(frozen).toHaveLength(2)
  })

  it('should render BulletItem list merging itemAttrs, isSkeleton, and numeric 0 without shared ref collisions', async () => {
    const state = reactive<BulletItemPropsInclude & SkeletonPropsInclude>({
      isSkeleton: false,
      itemAttrs: {
        size: 'lg',
        class: 'shared-item-class'
      } as Record<string, unknown>,
      list: ['Point One', 0, 'Пункт — Điểm 🚀']
    })

    const naming = new DesignName('d1.bullet')
    const components = new DesignComponents({ bulletItem: MockBulletItem })

    const Host = defineComponent({
      setup() {
        const include = new BulletItemInclude(state, naming, components)
        return () => h('ul', include.render())
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    const items = container.querySelectorAll('li.d1-bullet__item')
    expect(items).toHaveLength(3)
    expect(items[0]?.classList.contains('shared-item-class')).toBe(true)
    expect(items[0]?.getAttribute('data-size')).toBe('lg')
    expect(items[0]?.textContent).toBe('Point One')
    expect(items[1]?.textContent).toBe('0')
    expect(items[2]?.textContent).toBe('Пункт — Điểm 🚀')

    state.isSkeleton = true
    await nextTick()
    expect(items[0]?.getAttribute('data-skeleton')).toBe('true')
  })
})
