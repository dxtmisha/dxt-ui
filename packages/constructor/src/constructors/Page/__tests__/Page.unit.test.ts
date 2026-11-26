// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { Block } from '../../Block'
import { Page } from '../Page'
import { defaultsPage, type PageProps } from '../props'
import type { PageComponents, PageSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockHeader = defineComponent({
  name: 'MockHeader',
  setup() {
    return () => h('div')
  }
})

function createPage(
  props: PageProps = {},
  slots?: PageSlots,
  withHeaderComponent: boolean = true,
  constructors?: ConstructorParameters<typeof Page>[6]
): Page {
  let instance!: Page
  const components = withHeaderComponent
    ? new DesignComponents<PageComponents, PageProps>({ header: MockHeader })
    : undefined

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.page')
      instance = new Page(props, element, naming, components, slots, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Page (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should extend Block and expose expected defaultsPage values', () => {
      const instance = createPage({ ...defaultsPage })

      expect(instance).toBeInstanceOf(Page)
      expect(instance).toBeInstanceOf(Block)
      expect(defaultsPage.area).toBe('page')
      expect(defaultsPage.tag).toBe('main')
      expect(defaultsPage.tagHeader).toBe('h1')
      expect(instance.tag).toBe('main')
    })

    it('should resolve tag reactively and fall back to div when props.tag is omitted or empty', () => {
      const props = reactive<PageProps>({})
      const instance = createPage(props)

      expect(instance.tag).toBe('div')

      props.tag = ''
      expect(instance.tag).toBe('div')

      props.tag = 'main'
      expect(instance.tag).toBe('main')

      props.tag = 'section'
      expect(instance.tag).toBe('section')
    })

    it('should encapsulate aria-labelledby and aria-describedby in aria and binds getters', () => {
      const props = reactive<PageProps>({
        label: 'Account Dashboard',
        description: 'Overview of your workspace activity'
      })
      const instance = createPage(props)

      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.binds).toEqual(instance.aria)

      props.labelId = 'explicit-page-label-id'
      expect(instance.aria['aria-labelledby']).toBe('explicit-page-label-id')

      props.labelId = undefined
      props.headerAttrs = { labelId: 'attrs-page-label-id' }
      expect(instance.aria['aria-labelledby']).toBe('attrs-page-label-id')

      props.descriptionId = 'explicit-page-desc-id'
      expect(instance.aria['aria-describedby']).toBe('explicit-page-desc-id')
    })

    it('should omit aria-labelledby when header component is not connected to avoid dangling ARIA IDs', () => {
      const instance = createPage({ label: 'Orphan Page Label' }, undefined, false)

      expect(instance.aria['aria-labelledby']).toBeUndefined()
    })

    it('should propagate reactive area context via AreaInclude immediately during setup', async () => {
      const state = reactive<PageProps>({ ...defaultsPage })
      const seenArea = ref<string | undefined>()

      const AreaReader = defineComponent({
        setup() {
          return () => {
            seenArea.value = getAreaValue()
            return h('span', seenArea.value ?? '')
          }
        }
      })

      let pageInstance!: Page
      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>()
          const naming = new DesignName('d1.page')
          pageInstance = new Page(state, element, naming)
          return () => h('div', [h(AreaReader)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(pageInstance.hasInstance('area')).toBe(true)
      expect(seenArea.value).toBe('page')

      state.area = 'page-narrow'
      await nextTick()
      expect(seenArea.value).toBe('page-narrow')
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should not allocate header or description helpers until content or slots exist', () => {
      const props = reactive<PageProps>({})
      const instance = createPage(props)

      expect(instance.hasInstance('area')).toBe(true)
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)

      expect(instance.binds).toEqual({})
      expect(instance.callInstance('header', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)

      props.label = 'Activated Page Header'
      expect(instance.callInstance('header', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('header')).toBe(true)

      props.description = 'Activated Page Description'
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.hasInstance('description')).toBe(true)
    })
  })

  describe('Boundary values, numeric zero, slots, and DI overrides', () => {
    it('should support numeric 0 in headline, label, and description and ignore whitespace-only strings', () => {
      const props = reactive<PageProps>({
        headline: '   ',
        label: '\t\n',
        description: '   '
      })
      const instance = createPage(props)

      expect(instance.isHeadline()).toBe(false)
      expect(instance.aria).toEqual({})

      props.headline = 0
      props.label = 0
      props.description = 0

      expect(instance.isHeadline()).toBe(true)
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
    })

    it('should detect headline and label from slots and support DI constructor overrides', () => {
      const spy = vi.fn()
      class CustomArea extends AreaInclude {
        constructor(props: Readonly<PageProps>) {
          super(props)
          spy(props.area)
        }
      }

      const instance = createPage(
        { area: 'custom-page-di' },
        {
          headline: () => [h('span', 'Slot Headline')],
          label: () => [h('span', 'Slot Label')]
        },
        true,
        { area: CustomArea }
      )

      expect(instance.isHeadline()).toBe(true)
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(spy).toHaveBeenCalledWith('custom-page-di')
    })
  })
})
