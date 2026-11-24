// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { type ConstrEmit, DesignComponents, DesignName } from '@dxtmisha/functional'

import { TextInclude } from '../../../classes/TextInclude'
import { Breadcrumbs } from '../Breadcrumbs'
import type { BreadcrumbsProps } from '../props'
import type { BreadcrumbsComponents, BreadcrumbsEmits, BreadcrumbsSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function createBreadcrumbs(
  props: BreadcrumbsProps = {},
  slots?: BreadcrumbsSlots,
  emits?: ConstrEmit<BreadcrumbsEmits>,
  components?: DesignComponents<BreadcrumbsComponents, BreadcrumbsProps>,
  constructors?: ConstructorParameters<typeof Breadcrumbs>[6]
): Breadcrumbs {
  let instance!: Breadcrumbs
  const Host = defineComponent({
    setup() {
      const element = ref<HTMLElement | undefined>(undefined)
      const naming = new DesignName('d1.breadcrumbs')
      instance = new Breadcrumbs(props, element, naming, components, slots, emits, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Breadcrumbs (isolated class)', () => {
  it('should resolve default localized aria-label and update reactively when textBreadcrumb changes', () => {
    const props = reactive<BreadcrumbsProps>({})
    const instance = createBreadcrumbs(props)

    expect(instance.aria).toEqual({
      'aria-label': 'Breadcrumb'
    })
    expect(instance.binds).toEqual({
      'aria-label': 'Breadcrumb'
    })

    props.textBreadcrumb = 'Навигационная цепочка — Đường dẫn'
    expect(instance.aria).toEqual({
      'aria-label': 'Навигационная цепочка — Đường dẫn'
    })
  })

  it('should keep breadcrumbItem unallocated until list is non-empty and support DI overrides', () => {
    const textSpy = vi.fn()
    class CustomTextInclude extends TextInclude {
      constructor(inputProps?: BreadcrumbsProps) {
        super(inputProps)
        textSpy(inputProps?.textBreadcrumb)
      }
    }

    const props = reactive<BreadcrumbsProps>({
      list: [],
      textBreadcrumb: 'Custom Trail'
    })
    const instance = createBreadcrumbs(
      props,
      undefined,
      undefined,
      undefined,
      { text: CustomTextInclude }
    )

    expect(instance.hasInstance('text')).toBe(false)
    expect(instance.i('text')).toBeInstanceOf(CustomTextInclude)
    expect(textSpy).toHaveBeenCalledWith('Custom Trail')
    expect(instance.hasInstance('breadcrumbItem')).toBe(false)
    expect(instance.callInstance('breadcrumbItem', item => item.render(), [])).toEqual([])
    expect(instance.hasInstance('breadcrumbItem')).toBe(false)

    props.list = [{ label: 'Home', href: '/' }]
    expect(instance.callInstance('breadcrumbItem', item => item.is, false)).toBe(true)
    expect(instance.hasInstance('breadcrumbItem')).toBe(true)
  })
})
