// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { Block } from '../../Block/Block'
import { Group } from '../Group'
import { defaultsGroup, type GroupProps } from '../props'
import type { GroupComponents, GroupSlots } from '../types'

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

function createGroup(
  props: GroupProps = {},
  slots?: GroupSlots,
  withHeaderComponent: boolean = true,
  constructors?: ConstructorParameters<typeof Group>[6]
): Group {
  let instance!: Group
  const components = withHeaderComponent
    ? new DesignComponents<GroupComponents, GroupProps>({ header: MockHeader })
    : undefined

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.group')
      instance = new Group(props, element, naming, components, slots, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Group (isolated class)', () => {
  describe('Inheritance & defaults', () => {
    it('should inherit from Block and expose expected defaultsGroup values', () => {
      const instance = createGroup({ ...defaultsGroup })

      expect(instance).toBeInstanceOf(Group)
      expect(instance).toBeInstanceOf(Block)
      expect(defaultsGroup.area).toBe('group')
      expect(defaultsGroup.tag).toBe('div')
      expect(defaultsGroup.tagHeader).toBe('h4')
      expect(instance.tag).toBe('div')
    })

    it('should resolve tag to div by default or fallback on empty string, and track props.tag reactively', () => {
      const props = reactive<GroupProps>({ ...defaultsGroup })
      const instance = createGroup(props)

      expect(instance.tag).toBe('div')

      props.tag = ''
      expect(instance.tag).toBe('div')

      props.tag = 'section'
      expect(instance.tag).toBe('section')

      props.tag = 'fieldset'
      expect(instance.tag).toBe('fieldset')
    })
  })

  describe('ARIA & area propagation', () => {
    it('should encapsulate aria-labelledby and aria-describedby in aria and binds getters', () => {
      const props = reactive<GroupProps>({
        ...defaultsGroup,
        label: 'Notification Preferences',
        description: 'Choose how alerts are delivered'
      })
      const instance = createGroup(props)

      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.binds).toEqual(instance.aria)

      props.labelId = 'group-explicit-label-id'
      expect(instance.aria['aria-labelledby']).toBe('group-explicit-label-id')

      props.labelId = undefined
      props.headerAttrs = { labelId: 'group-attrs-label-id' }
      expect(instance.aria['aria-labelledby']).toBe('group-attrs-label-id')

      props.descriptionId = 'group-explicit-desc-id'
      expect(instance.aria['aria-describedby']).toBe('group-explicit-desc-id')
    })

    it('should omit aria-labelledby when header component is not connected to avoid dangling ARIA IDs', () => {
      const instance = createGroup({ ...defaultsGroup, label: 'Orphan Group Label' }, undefined, false)

      expect(instance.aria['aria-labelledby']).toBeUndefined()
    })

    it('should propagate default group area context and react to props.area updates', async () => {
      const state = reactive<GroupProps>({ ...defaultsGroup })
      const seenArea = ref<string | undefined>()

      const AreaReader = defineComponent({
        setup() {
          return () => {
            seenArea.value = getAreaValue()
            return h('span', seenArea.value ?? '')
          }
        }
      })

      let groupInstance!: Group
      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>()
          const naming = new DesignName('d1.group')
          groupInstance = new Group(state, element, naming)
          return () => h('div', [h(AreaReader)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(groupInstance.hasInstance('area')).toBe(true)
      expect(seenArea.value).toBe('group')

      state.area = 'compact'
      await nextTick()
      expect(seenArea.value).toBe('compact')
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should not allocate header or description helpers until content or slots exist', () => {
      const props = reactive<GroupProps>({ ...defaultsGroup })
      const instance = createGroup(props)

      expect(instance.hasInstance('area')).toBe(true)
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)

      expect(instance.binds).toEqual({})
      expect(instance.callInstance('header', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)

      props.label = 'Activated Group Header'
      expect(instance.callInstance('header', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('header')).toBe(true)

      props.description = 'Activated Group Description'
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.hasInstance('description')).toBe(true)
    })
  })

  describe('Boundary values, numeric zero, slots, and DI overrides', () => {
    it('should support numeric 0 in headline, label, and description and ignore whitespace-only strings', () => {
      const props = reactive<GroupProps>({
        ...defaultsGroup,
        headline: '   ',
        label: '   ',
        description: '   '
      })
      const instance = createGroup(props)

      expect(instance.isHeadline()).toBe(false)
      expect(instance.aria).toEqual({})

      props.headline = 0
      props.label = 0
      props.description = 0

      expect(instance.isHeadline()).toBe(true)
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
    })

    it('should detect headline, header slots, and description slot, and support DI constructor overrides', () => {
      const spy = vi.fn()
      class CustomArea extends AreaInclude {
        constructor(props: Readonly<GroupProps>) {
          super(props)
          spy(props.area)
        }
      }

      const instance = createGroup(
        { area: 'custom-group-di' },
        {
          headline: () => [h('span', 'Slot Headline')],
          label: () => [h('span', 'Slot Label')],
          caption: () => [h('span', 'Slot Caption')],
          trailing: () => [h('span', 'Slot Trailing')],
          description: () => [h('span', 'Slot Description')]
        },
        true,
        { area: CustomArea }
      )

      expect(instance.isHeadline()).toBe(true)
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(spy).toHaveBeenCalledWith('custom-group-di')
    })
  })
})
