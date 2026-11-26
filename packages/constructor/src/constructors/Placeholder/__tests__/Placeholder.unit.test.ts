// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { ActionsInclude } from '../../Actions'
import { ImageInclude } from '../../Image'
import { Placeholder, type PlaceholderConstructors } from '../Placeholder'
import type { PlaceholderProps } from '../props'
import type { PlaceholderComponents, PlaceholderSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockChild = defineComponent({
  name: 'MockChild',
  setup() {
    return () => h('div')
  }
})

function createPlaceholder(
  props: PlaceholderProps = {},
  slots?: PlaceholderSlots,
  constructors?: Partial<PlaceholderConstructors>
): Placeholder {
  let instance!: Placeholder
  const components = new DesignComponents<PlaceholderComponents, PlaceholderProps>({
    image: MockChild,
    actions: MockChild
  })

  const Host = defineComponent({
    setup() {
      const element = ref<HTMLDivElement | undefined>()
      const naming = new DesignName('d1.placeholder')
      instance = new Placeholder(props, element, naming, components, slots, undefined, constructors)
      return () => h('div')
    }
  })

  const container = document.createElement('div')
  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return instance
}

describe('Placeholder (isolated class)', () => {
  describe('Lazy instantiation and canCreate guards', () => {
    it('keeps actions, description, image, and label uninstantiated when inactive', () => {
      const props = reactive<PlaceholderProps>({})
      const instance = createPlaceholder(props)

      expect(instance.hasInstance('actions')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('image')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.aria).toEqual({})
      expect(instance.binds).toEqual({})

      expect(instance.callInstanceArray('image', item => item.render())).toEqual([])
      expect(instance.callInstanceArray('label', item => item.render())).toEqual([])
      expect(instance.callInstanceArray('description', item => item.render())).toEqual([])
      expect(instance.callInstanceArray('actions', item => item.render())).toEqual([])

      expect(instance.hasInstance('actions')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('image')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
    })

    it('instantiates helpers on demand when matching props or slots become active', () => {
      const props = reactive<PlaceholderProps>({})
      const instance = createPlaceholder(props)

      props.label = 'No results'
      props.description = 'Try another query'
      expect(instance.aria['aria-labelledby']).toBe(instance.i('label').id)
      expect(instance.aria['aria-describedby']).toBe(instance.i('description').id)
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.hasInstance('description')).toBe(true)
      expect(instance.hasInstance('image')).toBe(false)
      expect(instance.hasInstance('actions')).toBe(false)

      props.image = 'search_off'
      expect(instance.callInstanceArray('image', item => item.render())).toHaveLength(1)
      expect(instance.hasInstance('image')).toBe(true)

      props.actionsList = [{ label: 'Reset' }]
      expect(instance.callInstanceArray('actions', item => item.render())).toHaveLength(1)
      expect(instance.hasInstance('actions')).toBe(true)

      props.actionsHide = true
      expect(instance.callInstanceArray('actions', item => item.render())).toEqual([])
    })
  })

  describe('Boundary values, ARIA, and DI overrides', () => {
    it('supports numeric 0 in label and description and ignores whitespace-only strings', () => {
      const props = reactive<PlaceholderProps>({
        label: '   ',
        description: '   '
      })
      const instance = createPlaceholder(props)

      expect(instance.aria).toEqual({})

      props.label = 0
      props.description = 0
      expect(instance.aria['aria-labelledby']).toBeTruthy()
      expect(instance.aria['aria-describedby']).toBeTruthy()
    })

    it('supports DI overrides for all PlaceholderConstructors', () => {
      const spies = {
        actions: vi.fn(),
        description: vi.fn(),
        image: vi.fn(),
        label: vi.fn()
      }

      class CustomActions extends ActionsInclude {
        override readonly render = () => {
          spies.actions()
          return []
        }
      }
      class CustomDescription extends DescriptionInclude {
        override render() {
          spies.description()
          return []
        }
      }
      class CustomImage extends ImageInclude {
        override readonly render = () => {
          spies.image()
          return []
        }
      }
      class CustomLabel extends LabelInclude {
        override render() {
          spies.label()
          return []
        }
      }

      const instance = createPlaceholder(
        {
          image: 'info',
          label: 'Title',
          description: 'Body',
          actionsList: [{ label: 'Action' }]
        },
        undefined,
        {
          actions: CustomActions,
          description: CustomDescription,
          image: CustomImage,
          label: CustomLabel
        }
      )

      instance.callInstanceArray('image', item => item.render())
      instance.callInstanceArray('label', item => item.render())
      instance.callInstanceArray('description', item => item.render())
      instance.callInstanceArray('actions', item => item.render())

      expect(spies.image).toHaveBeenCalledTimes(1)
      expect(spies.label).toHaveBeenCalledTimes(1)
      expect(spies.description).toHaveBeenCalledTimes(1)
      expect(spies.actions).toHaveBeenCalledTimes(1)
    })
  })
})
