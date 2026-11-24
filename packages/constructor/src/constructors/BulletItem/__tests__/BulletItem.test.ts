// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { BulletItemDesign } from '../BulletItemDesign'
import { defaultsBulletItem, type BulletItemProps, type BulletItemPropsBasic } from '../props'
import type { BulletItemClasses, BulletItemComponents, BulletItemExpose, BulletItemSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('BulletItem (integrated component)', () => {
  it('should integrate BulletItemDesign, BulletItem, DescriptionInclude, and SkeletonInclude with XSS safety', async () => {
    const state = reactive<BulletItemProps>({
      ...defaultsBulletItem,
      description: 'Маркированный пункт — Mục danh sách',
      descriptionId: 'integrated-bullet-id'
    })

    const IntegratedBulletItem = defineComponent({
      setup() {
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
          state,
          { classes }
        )
        return design.render()
      }
    })

    const slots: BulletItemSlots = {
      description: () => [h('em', { class: 'desc-slot' }, ' + slot')]
    }

    const container = document.createElement('ul')
    const app = createApp({
      render: () => h(IntegratedBulletItem, null, slots as Record<string, () => unknown>)
    })
    app.mount(container)
    cleanups.push(() => app.unmount())

    const li = container.querySelector('li.d1-bulletItem')!
    expect(li.querySelector('#integrated-bullet-id')?.textContent).toBe('Маркированный пункт — Mục danh sách + slot')

    state.description = '<img src=x onerror=alert(1)>'
    state.isSkeleton = true
    await nextTick()

    expect(li.querySelector('img')).toBeNull()
    expect(li.querySelector('#integrated-bullet-id')?.classList.contains('d1-skeleton__textVariant')).toBe(true)
  })
})
