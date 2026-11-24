// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { type ConstrEmit, DesignComponents, DesignName } from '@dxtmisha/functional'

import { EnabledInclude } from '../../../classes/EnabledInclude'
import { BreadcrumbItem } from '../BreadcrumbItem'
import type { BreadcrumbItemProps } from '../props'
import type { BreadcrumbItemComponents, BreadcrumbItemEmits, BreadcrumbItemSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function createBreadcrumbItem(
  props: BreadcrumbItemProps = {},
  slots?: BreadcrumbItemSlots,
  emits?: ConstrEmit<BreadcrumbItemEmits>,
  components?: DesignComponents<BreadcrumbItemComponents, BreadcrumbItemProps>,
  constructors?: ConstructorParameters<typeof BreadcrumbItem>[6]
): BreadcrumbItem {
  let instance!: BreadcrumbItem
  const Host = defineComponent({
    setup() {
      const element = ref<HTMLAnchorElement | HTMLSpanElement | undefined>(undefined)
      const naming = new DesignName('d1.breadcrumbItem')
      instance = new BreadcrumbItem(props, element, naming, components, slots, emits, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('BreadcrumbItem (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should resolve tag, aria, and binds across link, action, disabled, and readonly states', () => {
      const props = reactive<BreadcrumbItemProps>({
        label: 'Products',
        href: '/products',
        value: 'products'
      })
      const instance = createBreadcrumbItem(props)

      expect(instance.tag).toBe('a')
      expect(instance.isReadonly()).toBe(false)
      expect(instance.aria).toEqual({})
      expect(instance.binds).toMatchObject({
        'href': '/products',
        'data-value': 'products'
      })
      expect(instance.classes).toEqual({
        'd1-a--static': true
      })

      props.href = undefined
      expect(instance.aria).toEqual({
        tabindex: '0',
        role: 'link'
      })

      props.disabled = true
      expect(instance.tag).toBe('a')
      expect(instance.aria).toEqual({
        'aria-disabled': 'true'
      })
      expect(instance.binds['href']).toBeUndefined()
      expect(instance.binds['data-value']).toBeUndefined()
      expect(typeof instance.binds.onClick).toBe('function')

      props.disabled = false
      props.readonly = true
      expect(instance.tag).toBe('span')
      expect(instance.isReadonly()).toBe(true)
      expect(instance.aria).toEqual({
        'aria-current': 'page'
      })
      expect(instance.binds).toEqual({
        'aria-current': 'page'
      })
    })

    it('should resolve directional iconArrow based on back mode', () => {
      const props = reactive<BreadcrumbItemProps>({
        iconArrowLeft: 'chevron_left',
        iconArrowRight: 'chevron_right'
      })
      const instance = createBreadcrumbItem(props)

      expect(instance.iconArrow).toBe('chevron_right')

      props.back = true
      expect(instance.iconArrow).toBe('chevron_left')
    })
  })

  describe('Lazy instantiation, skeleton propagation, and zero/falsy guards', () => {
    it('should keep icon, label, and skeleton unallocated until configured and forward isSkeleton to icon and label', () => {
      const props = reactive<BreadcrumbItemProps>({})
      const instance = createBreadcrumbItem(props)

      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)

      props.label = 0
      props.index = 0
      expect(instance.binds['data-value']).toBe(0)
      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain(0)
      expect(instance.hasInstance('label')).toBe(true)

      props.icon = 'home'
      expect(instance.callInstance('icon', item => item.iconBind)).toMatchObject({
        icon: 'home'
      })
      expect(instance.callInstance('icon', item => item.iconBind)?.isSkeleton).toBeUndefined()

      props.isSkeleton = true
      expect(instance.callInstance('icon', item => item.iconBind)).toMatchObject({
        icon: 'home',
        isSkeleton: true
      })
      const labelNode = instance.callInstance('label', item => item.render(), [])[0]
      expect(JSON.stringify(labelNode?.props?.class)).toContain('d1-skeleton__textVariant')
      expect(instance.hasInstance('skeleton')).toBe(true)
    })

    it('should support dependency injection constructor overrides', () => {
      const enabledSpy = vi.fn()
      class CustomEnabledInclude extends EnabledInclude {
        constructor(props: Readonly<BreadcrumbItemProps>) {
          super(props)
          enabledSpy(props.readonly)
        }
      }

      const instance = createBreadcrumbItem(
        { readonly: true },
        undefined,
        undefined,
        undefined,
        { enabled: CustomEnabledInclude }
      )

      expect(instance.isReadonly()).toBe(true)
      expect(enabledSpy).toHaveBeenCalledWith(true)
      expect(instance.i('enabled')).toBeInstanceOf(CustomEnabledInclude)
    })
  })
})
