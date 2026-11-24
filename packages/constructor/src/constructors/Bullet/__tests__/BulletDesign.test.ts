// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { BulletItemDesign } from '../../BulletItem/BulletItemDesign'
import type { BulletItemProps, BulletItemPropsBasic } from '../../BulletItem/props'
import type { BulletItemClasses, BulletItemComponents, BulletItemExpose } from '../../BulletItem/types'
import { Bullet } from '../Bullet'
import { BulletDesign } from '../BulletDesign'
import type { BulletProps, BulletPropsBasic } from '../props'
import type { BulletClasses, BulletComponents, BulletExpose, BulletSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

const MockBulletItem = defineComponent({
  name: 'MockBulletItem',
  props: {
    description: [String, Number],
    descriptionId: String,
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
      {
        classes
      }
    )
    return design.render()
  }
})

function mountBulletDesign(
  props: BulletProps = {},
  slots?: BulletSlots,
  attrs: Record<string, unknown> = {},
  ItemConstructor: typeof Bullet = Bullet
) {
  let designInstance!: BulletDesign<
    BulletComponents,
    BulletExpose,
    BulletClasses,
    BulletPropsBasic
  >

  const Inner = defineComponent({
    setup() {
      const classes = computed<ConstrClasses>(() => ({
        main: { 'd1-bullet': true }
      }))
      designInstance = new BulletDesign(
        'd1.bullet',
        props,
        {
          classes,
          components: {
            bulletItem: MockBulletItem
          }
        },
        ItemConstructor
      )
      return designInstance.render()
    }
  })

  const Host = defineComponent({
    setup() {
      return () => h(Inner, attrs, slots as Record<string, () => unknown>)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(Host)
  app.mount(container)

  cleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return {
    container,
    getDesign: () => designInstance
  }
}

describe('BulletDesign', () => {
  it('should render semantic <ul> with BulletItem children, numeric 0, itemAttrs, and skeleton classes', () => {
    const { container } = mountBulletDesign(
      {
        list: ['First point', 0, 'Привет — Tiếng Việt 🚀'],
        isSkeleton: true,
        itemAttrs: {
          class: 'shared-item-class'
        }
      },
      {
        default: () => [h('li', { class: 'slot-bullet-item' }, 'Custom slot item')]
      },
      {
        id: 'feature-bullets',
        class: 'custom-bullet-root'
      }
    )

    const ul = container.querySelector('ul#feature-bullets')
    expect(ul).not.toBeNull()
    expect(ul?.classList.contains('d1-bullet')).toBe(true)
    expect(ul?.classList.contains('custom-bullet-root')).toBe(true)

    const items = container.querySelectorAll('li')
    expect(items).toHaveLength(4)
    expect(items[0]?.textContent).toBe('First point')
    expect(items[0]?.classList.contains('d1-bulletItem')).toBe(true)
    expect(items[0]?.classList.contains('d1-bullet__item')).toBe(true)
    expect(items[0]?.classList.contains('shared-item-class')).toBe(true)
    expect(items[0]?.querySelector('.d1-skeleton__textVariant')).not.toBeNull()

    expect(items[1]?.textContent).toBe('0')
    expect(items[2]?.textContent).toBe('Привет — Tiếng Việt 🚀')
    expect(items[3]?.classList.contains('slot-bullet-item')).toBe(true)
  })

  it('should render sanitized html markup with injected BulletItem classes and support ItemConstructor DI', () => {
    const diSpy = vi.fn()
    class CustomBullet extends Bullet {
      constructor(...args: ConstructorParameters<typeof Bullet>) {
        super(...args)
        diSpy()
      }
    }

    const { container } = mountBulletDesign(
      {
        html: '<li>First <em>HTML</em> item</li><li class="accent">Second item</li><script>window.__xss = true</script>'
      },
      undefined,
      {},
      CustomBullet
    )

    expect(diSpy).toHaveBeenCalledTimes(1)
    const items = container.querySelectorAll('ul.d1-bullet > li')
    expect(items).toHaveLength(2)
    expect(items[0]?.className).toBe('d1-bulletItem d1-bullet__item')
    expect(items[0]?.querySelector('em')?.textContent).toBe('HTML')
    expect(items[1]?.className).toBe('d1-bulletItem d1-bullet__item accent')
    expect(container.querySelector('script')).toBeNull()
  })
})
