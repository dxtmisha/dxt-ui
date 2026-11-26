// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { Section } from '../Section'
import { defaultsSection, type SectionProps } from '../props'
import type { SectionComponents, SectionSlots } from '../types'

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

function createSection(
  props: SectionProps = { ...defaultsSection },
  slots?: SectionSlots,
  withHeaderComponent: boolean = true,
  constructors?: ConstructorParameters<typeof Section>[6]
): Section {
  let instance!: Section
  const components = withHeaderComponent
    ? new DesignComponents<SectionComponents, SectionProps>({ header: MockHeader })
    : undefined

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.section')
      instance = new Section(props, element, naming, components, slots, undefined, constructors)
      return () => h('section')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Section (isolated class)', () => {
  describe('Standard functional requirements and defaults', () => {
    it('should default tag to section, area to section, and tagHeader to h2 via defaultsSection', () => {
      expect(defaultsSection).toEqual({
        area: 'section',
        tag: 'section',
        tagHeader: 'h2'
      })

      const props = reactive<SectionProps>({ ...defaultsSection })
      const instance = createSection(props)

      expect(instance.tag).toBe('section')

      props.tag = 'article'
      expect(instance.tag).toBe('article')

      props.tag = ''
      expect(instance.tag).toBe('div')
    })

    it('should encapsulate aria-labelledby and aria-describedby and propagate area context', async () => {
      const state = reactive<SectionProps>({
        ...defaultsSection,
        label: 'Billing Section',
        description: 'Manage invoices and cards'
      })
      const seenArea = ref<string | undefined>()

      const AreaProbe = defineComponent({
        setup() {
          return () => {
            seenArea.value = getAreaValue()
            return h('span', seenArea.value ?? '')
          }
        }
      })

      let instance!: Section
      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>()
          const naming = new DesignName('d1.section')
          const components = new DesignComponents<SectionComponents, SectionProps>({ header: MockHeader })
          instance = new Section(state, element, naming, components)
          return () => h('section', [h(AreaProbe)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(instance.hasInstance('area')).toBe(true)
      expect(seenArea.value).toBe('section')
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.binds).toEqual(instance.aria)

      state.area = 'compact-section'
      state.labelId = 'custom-sec-label'
      state.descriptionId = 'custom-sec-desc'
      await nextTick()

      expect(seenArea.value).toBe('compact-section')
      expect(instance.aria['aria-labelledby']).toBe('custom-sec-label')
      expect(instance.aria['aria-describedby']).toBe('custom-sec-desc')
    })
  })

  describe('Lazy instantiation, numeric 0, and DI overrides', () => {
    it('should keep header and description uninstantiated until content or slots exist', () => {
      const props = reactive<SectionProps>({ ...defaultsSection })
      const instance = createSection(props)

      expect(instance.hasInstance('area')).toBe(true)
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.binds).toEqual({})

      props.headline = 0
      props.label = 0
      props.description = 0

      expect(instance.isHeadline()).toBe(true)
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.hasInstance('description')).toBe(true)
    })

    it('should support DI constructor overrides', () => {
      const spy = vi.fn()
      class CustomArea extends AreaInclude {
        constructor(props: Readonly<SectionProps>) {
          super(props)
          spy(props.area)
        }
      }

      createSection({ ...defaultsSection, area: 'custom-section' }, undefined, true, { area: CustomArea })
      expect(spy).toHaveBeenCalledWith('custom-section')
    })
  })
})
