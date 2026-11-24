// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { defineComponent, effectScope, h, reactive, ref } from 'vue'
import {
  type ConstrEmit,
  DesignComponents,
  DesignName
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { ButtonInclude } from '../../Button'

import { CollageBar, type CollageBarConstructors } from '../CollageBar'
import type { CollageBarProps } from '../props'
import type { CollageBarComponents, CollageBarEmits, CollageBarSlots } from '../types'

/** Active effect scopes tracked for cleanup / Активные области эффектов для очистки */
const scopes: Array<ReturnType<typeof effectScope>> = []

/**
 * Creates a CollageBar instance inside a managed Vue effectScope.
 *
 * Создаёт экземпляр CollageBar внутри управляемой области эффектов Vue.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param options optional slots, emits, components, and constructor overrides / необязательные слоты, события, компоненты и переопределения конструкторов
 * @returns CollageBar instance and reactive props / экземпляр CollageBar и реактивные свойства
 */
function createCollageBar(
  initialProps: CollageBarProps = {},
  options: {
    components?: DesignComponents<CollageBarComponents, CollageBarProps>
    slots?: CollageBarSlots
    emits?: ConstrEmit<CollageBarEmits>
    constructors?: Partial<CollageBarConstructors>
  } = {}
) {
  const scope = effectScope()
  scopes.push(scope)

  const props = reactive<CollageBarProps>({ ...initialProps })
  const element = ref<HTMLElement | undefined>()
  const naming = new DesignName('d1.collageBar')

  let instance!: CollageBar

  scope.run(() => {
    instance = new CollageBar(
      props,
      element,
      naming,
      options.components,
      options.slots,
      options.emits,
      options.constructors,
      false
    )
  })

  return {
    instance,
    props,
    element,
    naming
  }
}

afterEach(() => {
  scopes.splice(0).reverse().forEach(scope => scope.stop())
  vi.restoreAllMocks()
})

describe('CollageBar (unit)', () => {
  describe('Lazy instantiation and canCreate guards', () => {
    it('should not instantiate any subordinate helpers on construction when props are empty', () => {
      const { instance } = createCollageBar({})

      expect(instance.hasInstance('button')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)

      expect(instance.callInstance('button', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('description', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('label', item => item.render(), [])).toEqual([])

      expect(instance.hasInstance('button')).toBe(false)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
    })

    it('should instantiate label, description, and button strictly on demand when their props or slots are present', () => {
      const { instance, props } = createCollageBar({})

      props.label = 'Caption title'
      expect(instance.callInstance('label', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.hasInstance('description')).toBe(false)
      expect(instance.hasInstance('button')).toBe(false)

      props.description = 'Detailed text'
      expect(instance.callInstance('description', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('description')).toBe(true)
      expect(instance.hasInstance('button')).toBe(false)

      props.button = 'Open'
      expect(instance.callInstance('button', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('button')).toBe(true)
      expect(instance.hasInstance('event')).toBe(true)
    })

    it('should instantiate label and description when corresponding slots are provided without props', () => {
      const { instance } = createCollageBar(
        {},
        {
          slots: {
            default: () => [h('span', 'Slot label')],
            description: () => [h('span', 'Slot description')]
          }
        }
      )

      expect(instance.callInstance('label', item => item.is, false)).toBe(true)
      expect(instance.callInstance('description', item => item.is, false)).toBe(true)
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.hasInstance('description')).toBe(true)
      expect(instance.hasInstance('button')).toBe(false)
    })

    it('should treat numeric 0 and string "0" as valid button values in canCreate', () => {
      const { instance: zeroNum } = createCollageBar({ button: 0 })
      expect(zeroNum.callInstance('button', item => item.is, false)).toBe(true)
      expect(zeroNum.i('button').binds.value.label).toBe(0)

      const { instance: zeroStr } = createCollageBar({ button: '0' })
      expect(zeroStr.callInstance('button', item => item.is, false)).toBe(true)
      expect(zeroStr.i('button').binds.value.label).toBe('0')

      const { instance: emptyStr } = createCollageBar({ button: '' })
      expect(emptyStr.callInstance('button', item => item.is, false)).toBe(false)
      expect(emptyStr.hasInstance('button')).toBe(false)
    })

    it('should create button via icon or buttonAttrs even when button prop is absent', () => {
      const { instance: withIcon } = createCollageBar({ icon: 'more_vert' })
      expect(withIcon.callInstance('button', item => item.is, false)).toBe(true)
      expect(withIcon.i('button').binds.value.icon).toBe('more_vert')

      const { instance: withAttrs } = createCollageBar({
        buttonAttrs: { iconTrailing: 'chevron_right' }
      })
      expect(withAttrs.callInstance('button', item => item.is, false)).toBe(true)
      expect(withAttrs.i('button').binds.value.iconTrailing).toBe('chevron_right')

      const { instance: emptyAttrs } = createCollageBar({ buttonAttrs: {} })
      expect(emptyAttrs.callInstance('button', item => item.is, false)).toBe(false)
      expect(emptyAttrs.hasInstance('button')).toBe(false)
    })
  })

  describe('Container tag resolution', () => {
    it('should return figcaption by default and fall back to figcaption on empty string', () => {
      const { instance, props } = createCollageBar({})

      expect(instance.tag).toBe('figcaption')

      props.tag = 'div'
      expect(instance.tag).toBe('div')

      props.tag = 'header'
      expect(instance.tag).toBe('header')

      props.tag = ''
      expect(instance.tag).toBe('figcaption')
    })
  })

  describe('Button extra binds, non-destructive merging, and event composition', () => {
    it('should forward icon, detail, numeric value 0, href, and button object without label key', () => {
      const { instance } = createCollageBar({
        button: { icon: 'open_in_new', disabled: true },
        detail: { source: 'gallery' },
        value: 0,
        href: 'https://example.com'
      })

      const binds = instance.i('button').binds.value

      expect(binds.label).toBeUndefined()
      expect(binds.icon).toBe('open_in_new')
      expect(binds.disabled).toBe(true)
      expect(binds.detail).toEqual({ source: 'gallery' })
      expect(binds.value).toBe(0)
      expect(binds.href).toBe('https://example.com')
      expect(typeof binds.onClick).toBe('function')
      expect(typeof binds.onKeydown).toBe('function')
    })

    it('should not overwrite button object icon or href when parent icon/href are undefined', () => {
      const { instance } = createCollageBar({
        button: {
          label: 'Inspect',
          icon: 'visibility',
          href: 'https://example.com/item'
        }
      })

      const binds = instance.i('button').binds.value

      expect(binds.label).toBe('Inspect')
      expect(binds.icon).toBe('visibility')
      expect(binds.href).toBe('https://example.com/item')
    })

    it('should preserve parent icon when button object contains explicit undefined icon', () => {
      const { instance } = createCollageBar({
        icon: 'fallback_icon',
        button: {
          label: 'Inspect',
          icon: undefined
        }
      })

      const binds = instance.i('button').binds.value

      expect(binds.label).toBe('Inspect')
      expect(binds.icon).toBe('fallback_icon')
    })

    it('should compose event onClick with custom button onClick via mergeProps', () => {
      const emitSpy = vi.fn()
      const customClick = vi.fn()

      const { instance } = createCollageBar(
        {
          value: 'item-42',
          button: {
            label: 'Details',
            onClick: customClick
          }
        },
        {
          emits: emitSpy as unknown as ConstrEmit<CollageBarEmits>
        }
      )

      const onClick = instance.i('button').binds.value.onClick
      expect(Array.isArray(onClick)).toBe(true)

      const clickEvent = new MouseEvent('click')
      if (Array.isArray(onClick)) {
        onClick.forEach(handler => handler(clickEvent))
      }

      expect(customClick).toHaveBeenCalledTimes(1)
      expect(customClick).toHaveBeenCalledWith(clickEvent)
      expect(emitSpy).toHaveBeenCalledWith('click', clickEvent, {
        type: 'click',
        value: 'item-42',
        detail: undefined
      })
      expect(emitSpy).toHaveBeenCalledWith('clickLite', {
        type: 'click',
        value: 'item-42',
        detail: undefined
      })
    })

    it('should clear button label bind reactively when button transitions from filled to empty string', () => {
      const { instance, props } = createCollageBar({ button: 'Edit' })

      expect(instance.i('button').is).toBe(true)
      expect(instance.i('button').binds.value.label).toBe('Edit')

      props.button = ''
      expect(instance.i('button').binds.value.label).toBeUndefined()
      expect(instance.i('button').is).toBe(false)
    })
  })

  describe('Dependency injection overrides', () => {
    it('should support overriding all subordinate constructors via constructors map', () => {
      class CustomButtonInclude extends ButtonInclude {}
      class CustomDescriptionInclude extends DescriptionInclude {}
      class CustomEventClickInclude extends EventClickInclude {}
      class CustomLabelInclude extends LabelInclude {}

      const components = new DesignComponents<CollageBarComponents, CollageBarProps>({
        button: defineComponent({
          name: 'StubButton',
          setup() {
            return () => h('button')
          }
        })
      })

      const { instance } = createCollageBar(
        {
          label: 'L',
          description: 'D',
          button: 'B'
        },
        {
          components,
          constructors: {
            button: CustomButtonInclude,
            description: CustomDescriptionInclude,
            event: CustomEventClickInclude,
            label: CustomLabelInclude
          }
        }
      )

      expect(instance.i('button')).toBeInstanceOf(CustomButtonInclude)
      expect(instance.i('description')).toBeInstanceOf(CustomDescriptionInclude)
      expect(instance.i('event')).toBeInstanceOf(CustomEventClickInclude)
      expect(instance.i('label')).toBeInstanceOf(CustomLabelInclude)
    })
  })
})
