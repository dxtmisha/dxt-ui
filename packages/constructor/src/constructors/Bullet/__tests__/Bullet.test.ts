// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { BulletItemDesign } from '../../BulletItem/BulletItemDesign'
import type { BulletItemProps, BulletItemPropsBasic } from '../../BulletItem/props'
import type { BulletItemClasses, BulletItemComponents, BulletItemExpose } from '../../BulletItem/types'
import { BulletDesign } from '../BulletDesign'
import type { BulletProps, BulletPropsBasic } from '../props'
import type { BulletClasses, BulletComponents, BulletExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const ReactiveBulletItem = defineComponent({
  name: 'ReactiveBulletItem',
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

describe('Bullet integration & reactivity', () => {
  it('should reactively transition between list, skeleton state, and html mode without mutating caller arrays', async () => {
    const readonlySource = ['Alpha', 0, 'Omega'] as const
    const state = reactive<BulletProps>({
      list: readonlySource,
      isSkeleton: false
    })

    const Host = defineComponent({
      setup() {
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
          state,
          {
            classes,
            components: { bulletItem: ReactiveBulletItem }
          }
        )
        return design.render()
      }
    })

    const container = document.createElement('div')
    const app = createApp(Host)
    app.mount(container)
    cleanups.push(() => app.unmount())

    expect(container.querySelectorAll('li')).toHaveLength(3)
    expect(container.querySelector('.d1-skeleton__textVariant')).toBeNull()

    state.isSkeleton = true
    await nextTick()
    expect(container.querySelectorAll('.d1-skeleton__textVariant')).toHaveLength(3)

    state.html = '<li>HTML Override</li>'
    await nextTick()
    const htmlItems = container.querySelectorAll('li')
    expect(htmlItems).toHaveLength(1)
    expect(htmlItems[0]?.textContent).toBe('HTML Override')
    expect(htmlItems[0]?.className).toBe('d1-bulletItem d1-bullet__item')

    expect(readonlySource).toEqual(['Alpha', 0, 'Omega'])
  })
})
