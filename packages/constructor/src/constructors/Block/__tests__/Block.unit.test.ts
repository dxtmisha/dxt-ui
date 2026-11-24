// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { AreaInclude } from '../../../classes/AreaInclude'
import { getAreaValue } from '../../../functions/getAreaValue'
import { Block } from '../Block'
import type { BlockProps } from '../props'
import type { BlockComponents, BlockSlots } from '../types'

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

function createBlock(
  props: BlockProps = {},
  slots?: BlockSlots,
  withHeaderComponent: boolean = true,
  constructors?: ConstructorParameters<typeof Block>[6]
): Block {
  let instance!: Block
  const components = withHeaderComponent
    ? new DesignComponents<BlockComponents, BlockProps>({ header: MockHeader })
    : undefined

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>(undefined)
      const naming = new DesignName('d1.block')
      instance = new Block(props, element, naming, components, slots, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Block (isolated class)', () => {
  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should resolve tag to div by default or fallback on empty string, and track props.tag reactively', () => {
      const props = reactive<BlockProps>({})
      const instance = createBlock(props)

      expect(instance.tag).toBe('div')

      props.tag = ''
      expect(instance.tag).toBe('div')

      props.tag = 'section'
      expect(instance.tag).toBe('section')

      props.tag = 'article'
      expect(instance.tag).toBe('article')
    })

    it('should encapsulate aria-labelledby and aria-describedby in aria and binds getters', () => {
      const props = reactive<BlockProps>({
        label: 'Profile Settings',
        description: 'Manage personal details'
      })
      const instance = createBlock(props)

      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.binds).toEqual(instance.aria)

      props.labelId = 'explicit-label-id'
      expect(instance.aria['aria-labelledby']).toBe('explicit-label-id')

      props.labelId = undefined
      props.headerAttrs = { labelId: 'attrs-label-id' }
      expect(instance.aria['aria-labelledby']).toBe('attrs-label-id')

      props.descriptionId = 'explicit-desc-id'
      expect(instance.aria['aria-describedby']).toBe('explicit-desc-id')
    })

    it('should omit aria-labelledby when header component is not connected to avoid dangling ARIA IDs', () => {
      const instance = createBlock({ label: 'Orphan Label' }, undefined, false)

      expect(instance.aria['aria-labelledby']).toBeUndefined()
    })

    it('should propagate reactive area context via AreaInclude immediately during setup', async () => {
      const state = reactive<BlockProps>({ area: 'block' })
      const seenArea = ref<string | undefined>()

      const AreaReader = defineComponent({
        setup() {
          return () => {
            seenArea.value = getAreaValue()
            return h('span', seenArea.value ?? '')
          }
        }
      })

      let blockInstance!: Block
      const Host = defineComponent({
        setup() {
          const element = ref<HTMLDivElement | undefined>()
          const naming = new DesignName('d1.block')
          blockInstance = new Block(state, element, naming)
          return () => h('div', [h(AreaReader)])
        }
      })

      const container = document.createElement('div')
      const app = createApp(Host)
      app.mount(container)
      cleanups.push(() => app.unmount())

      expect(blockInstance.hasInstance('area')).toBe(true)
      expect(seenArea.value).toBe('block')

      state.area = 'card-body'
      await nextTick()
      expect(seenArea.value).toBe('card-body')
    })
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should not allocate header or description helpers until content or slots exist', () => {
      const props = reactive<BlockProps>({})
      const instance = createBlock(props)

      expect(instance.hasInstance('area')).toBe(true)
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)

      expect(instance.binds).toEqual({})
      expect(instance.callInstance('header', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
      expect(instance.hasInstance('header')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)

      props.label = 'Activated Header'
      expect(instance.callInstance('header', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('header')).toBe(true)

      props.description = 'Activated Description'
      expect(instance.aria['aria-describedby']).toBeTruthy()
      expect(instance.hasInstance('description')).toBe(true)
    })
  })

  describe('Boundary values, numeric zero, slots, and DI overrides', () => {
    it('should support numeric 0 in headline, label, and description and ignore whitespace-only strings', () => {
      const props = reactive<BlockProps>({
        headline: '   ',
        label: '   ',
        description: '   '
      })
      const instance = createBlock(props)

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
        constructor(props: Readonly<BlockProps>) {
          super(props)
          spy(props.area)
        }
      }

      const instance = createBlock(
        { area: 'custom-di' },
        {
          headline: () => [h('span', 'Slot Headline')],
          label: () => [h('span', 'Slot Label')]
        },
        true,
        { area: CustomArea }
      )

      expect(instance.isHeadline()).toBe(true)
      expect(instance.aria['aria-labelledby']).toBe(instance.labelId)
      expect(spy).toHaveBeenCalledWith('custom-di')
    })
  })
})
