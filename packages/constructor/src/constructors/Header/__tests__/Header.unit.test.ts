// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { Header } from '../Header'
import type { HeaderProps } from '../props'
import type { HeaderComponents, HeaderSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

function createHeader(
  props: HeaderProps = {},
  slots?: HeaderSlots,
  components?: DesignComponents<HeaderComponents, HeaderProps>,
  constructors?: ConstructorParameters<typeof Header>[6]
): Header {
  let instance!: Header
  const TestHost = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.header')
      instance = new Header(props, element, naming, components, slots, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(TestHost)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Header (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should resolve tag to h3 by default and update reactively across h1-h6', () => {
      const props = reactive<HeaderProps>({})
      const instance = createHeader(props)

      expect(instance.tag).toBe('h3')

      const tags: Array<NonNullable<HeaderProps['tag']>> = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      for (const tag of tags) {
        props.tag = tag
        expect(instance.tag).toBe(tag)
      }
    })

    it('should instantiate area immediately on setup and propagate reactive area context to descendants', async () => {
      const state = reactive<HeaderProps>({
        area: 'header',
        label: 'Section Heading'
      })
      const observedArea = ref<string | undefined>()

      const ChildConsumer = defineComponent({
        setup() {
          const areaRef = ref<string | undefined>()
          return () => {
            observedArea.value = getAreaValue()
            areaRef.value = observedArea.value
            return h('span', areaRef.value ?? '')
          }
        }
      })

      let headerInstance: Header | undefined
      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>()
          const naming = new DesignName('d1.header')
          headerInstance = new Header(state, element, naming)
          return () => h('div', [h(ChildConsumer)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(headerInstance?.hasInstance('area')).toBe(true)
      expect(observedArea.value).toBe('header')

      state.area = 'custom-header-area'
      await nextTick()
      expect(observedArea.value).toBe('custom-header-area')
    })

    it('should pass reactive tag getter to LabelInclude so rendered heading tag tracks props.tag', () => {
      const props = reactive<HeaderProps>({
        label: 'Dynamic Heading'
      })
      const instance = createHeader(props)

      const defaultNodes = instance.callInstance('label', item => item.render(), [])
      expect(defaultNodes).toHaveLength(1)
      expect(defaultNodes[0]?.type).toBe('h3')

      props.tag = 'h1'
      const h1Nodes = instance.callInstance('label', item => item.render(), [])
      expect(h1Nodes[0]?.type).toBe('h1')
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should keep caption, icon, and label unallocated until enabled', () => {
      const props = reactive<HeaderProps>({ area: 'header' })
      const instance = createHeader(props)

      expect(instance.hasInstance('area')).toBe(true)
      expect(instance.hasInstance('caption')).toBe(false)
      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)

      expect(instance.callInstance('caption', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('icon', item => item.renderIcon(), [])).toEqual([])
      expect(instance.callInstance('label', item => item.render(), [])).toEqual([])

      expect(instance.hasInstance('caption')).toBe(false)
      expect(instance.hasInstance('icon')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)

      props.label = 'Title'
      expect(instance.callInstance('label', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('label')).toBe(true)

      props.caption = 'Subtitle'
      expect(instance.callInstance('caption', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('caption')).toBe(true)

      props.icon = 'home'
      expect(instance.callInstance('icon', item => item.isIcon(), false)).toBe(true)
      expect(instance.hasInstance('icon')).toBe(true)
    })
  })

  describe('Boundary values, numeric zero, Unicode, and DI overrides', () => {
    it('should treat numeric 0 as valid label and caption while ignoring whitespace-only strings', () => {
      const props = reactive<HeaderProps>({
        label: '   ',
        caption: '   '
      })
      const instance = createHeader(props)

      expect(instance.callInstance('label', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('caption', item => item.render(), [])).toEqual([])
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('caption')).toBe(false)

      props.label = 0
      props.caption = 0
      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain(0)
      expect(instance.callInstance('caption', item => item.render(), [])[0]?.children).toContain(0)

      props.label = 'Заголовок — Tiếng Việt 🚀'
      expect(instance.callInstance('label', item => item.render(), [])[0]?.children).toContain('Заголовок — Tiếng Việt 🚀')
    })

    it('should support dependency injection constructor overrides', () => {
      const customAreaSpy = vi.fn()
      class CustomAreaInclude extends AreaInclude {
        constructor(props: Readonly<HeaderProps>) {
          super(props)
          customAreaSpy(props.area)
        }
      }

      const instance = createHeader(
        { area: 'injected-area' },
        undefined,
        undefined,
        { area: CustomAreaInclude }
      )

      expect(customAreaSpy).toHaveBeenCalledWith('injected-area')
      expect(instance.i('area')).toBeInstanceOf(CustomAreaInclude)
    })
  })
})
