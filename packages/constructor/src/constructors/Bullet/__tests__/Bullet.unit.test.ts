// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { type ConstrEmit, DesignComponents, DesignName } from '@dxtmisha/functional'

import { BulletItemInclude, type BulletItemPropsBasic, type BulletItemPropsInclude } from '../../BulletItem'
import type { SkeletonPropsInclude } from '../../Skeleton'
import { Bullet } from '../Bullet'
import type { BulletProps } from '../props'
import type { BulletComponents, BulletEmits, BulletSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function createBullet(
  props: BulletProps = {},
  slots?: BulletSlots,
  emits?: ConstrEmit<BulletEmits>,
  components?: DesignComponents<BulletComponents, BulletProps>,
  constructors?: ConstructorParameters<typeof Bullet>[6]
): Bullet {
  let instance!: Bullet
  const Host = defineComponent({
    setup() {
      const element = ref<HTMLUListElement | undefined>(undefined)
      const naming = new DesignName('d1.bullet')
      instance = new Bullet(props, element, naming, components, slots, emits, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Bullet (isolated class)', () => {
  describe('getHtml transformation and XSS sanitization', () => {
    it('should return undefined when html is omitted or empty', () => {
      expect(createBullet({}).getHtml()).toBeUndefined()
      expect(createBullet({ html: '' }).getHtml()).toBeUndefined()
    })

    it('should inject BulletItem BEM classes into bare and existing-class <li> elements', () => {
      const instance = createBullet({
        html: '<li>First</li><li class="custom-highlight">Second</li><li class=\'single-quoted\'>Third</li><li class="">EmptyClass</li>'
      })

      const result = instance.getHtml()
      expect(result).toBe(
        '<li class="d1-bulletItem d1-bullet__item">First</li>'
        + '<li class="d1-bulletItem d1-bullet__item custom-highlight">Second</li>'
        + '<li class="d1-bulletItem d1-bullet__item single-quoted">Third</li>'
        + '<li class="d1-bulletItem d1-bullet__item">EmptyClass</li>'
      )
    })

    it('should strip executable tags, inline event handlers, and dangerous URI schemes while keeping safe markup', () => {
      const instance = createBullet({
        html: '<li>Safe <strong>bold</strong> and <a href="https://example.com" target="_blank" rel="noopener noreferrer">link</a></li>'
          + '<script>alert("xss")</script>'
          + '<iframe src="https://evil.example"></iframe>'
          + '<li onclick="alert(1)" onmouseover=\'steal()\'><img src="x" onerror=alert(2)><a href="javascript:alert(3)">Bad</a><a href="data:text/html,<svg onload=alert(4)>">Data</a></li>'
      })

      const result = instance.getHtml() ?? ''
      expect(result).toContain('<li class="d1-bulletItem d1-bullet__item">Safe <strong>bold</strong>')
      expect(result).toContain('href="https://example.com"')
      expect(result).not.toContain('<script')
      expect(result).not.toContain('alert("xss")')
      expect(result).not.toContain('<iframe')
      expect(result).not.toContain('onclick')
      expect(result).not.toContain('onmouseover')
      expect(result).not.toContain('onerror')
      expect(result).not.toContain('javascript:')
      expect(result).not.toContain('data:text/html')
    })
  })

  describe('Lazy list helper instantiation and Dependency Injection', () => {
    it('should keep BulletItemInclude unallocated until list or html is filled and support DI overrides', () => {
      const ctorSpy = vi.fn()
      class CustomBulletItemInclude<
        Props extends BulletItemPropsInclude & SkeletonPropsInclude = BulletItemPropsInclude & SkeletonPropsInclude,
        PropsExtra extends BulletItemPropsBasic = BulletItemPropsBasic
      > extends BulletItemInclude<Props, PropsExtra> {
        constructor(
          ...args: ConstructorParameters<typeof BulletItemInclude<Props, PropsExtra>>
        ) {
          super(...args)
          ctorSpy()
        }
      }

      const props = reactive<BulletProps>({
        list: []
      })
      const instance = createBullet(
        props,
        undefined,
        undefined,
        undefined,
        { list: CustomBulletItemInclude }
      )

      expect(instance.hasInstance('list')).toBe(false)
      expect(instance.callInstance('list', item => item.render(), [])).toEqual([])
      expect(instance.hasInstance('list')).toBe(false)

      props.list = ['Item A']
      expect(instance.callInstance('list', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('list')).toBe(true)
      expect(instance.i('list')).toBeInstanceOf(CustomBulletItemInclude)
      expect(ctorSpy).toHaveBeenCalledTimes(1)
    })
  })
})
