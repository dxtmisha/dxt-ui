// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ChipInclude } from '../../Chip'
import { MenuChip, type MenuChipConstructors } from '../MenuChip'
import type { MenuChipProps } from '../props'

describe('MenuChip (Unit)', () => {
  const naming = new DesignName('d1.menuChip')

  describe('Lazy Instantiation and DI Overrides', () => {
    it('should lazily skip FieldFormInclude when name is omitted and create it when name is defined', () => {
      const container = document.createElement('div')
      let withoutNameInstance: MenuChip | undefined
      let withNameInstance: MenuChip | undefined

      const app = createApp(defineComponent({
        setup() {
          withoutNameInstance = new MenuChip(
            reactive<MenuChipProps>({ label: 'Category' }),
            ref<HTMLElement | undefined>(),
            naming
          )
          withNameInstance = new MenuChip(
            reactive<MenuChipProps>({ name: 'categoryFilter', label: 'Category' }),
            ref<HTMLElement | undefined>(),
            naming
          )
          return () => h('div')
        }
      }))

      app.mount(container)

      expect(withoutNameInstance?.hasInstance('event')).toBe(true)
      expect(withoutNameInstance?.hasInstance('validation')).toBe(true)
      expect(withoutNameInstance?.hasInstance('form')).toBe(false)
      expect(withoutNameInstance?.hasInstance('chip')).toBe(false)
      expect(withNameInstance?.hasInstance('form')).toBe(true)

      app.unmount()
    })

    it('should support overriding ChipInclude through constructors parameter', () => {
      const scope = effectScope()
      scope.run(() => {
        class CustomChipInclude extends ChipInclude {}
        const constructors: Partial<MenuChipConstructors> = {
          chip: CustomChipInclude
        }

        const menuChip = new MenuChip(
          reactive<MenuChipProps>({ label: 'Filter' }),
          ref<HTMLElement | undefined>(),
          naming,
          undefined,
          undefined,
          undefined,
          constructors
        )

        expect(menuChip.i('chip')).toBeInstanceOf(CustomChipInclude)
      })
      scope.stop()
    })
  })

  describe('Chip Bindings and Value Boundaries', () => {
    it('should forward icon, disabled, readonly, and resolved iconTrailing into ChipInclude without label hack', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<MenuChipProps>({
          label: 'Tags',
          icon: 'label',
          iconArrowDown: 'keyboard_arrow_down',
          disabled: false,
          readonly: true
        })

        const menuChip = new MenuChip(
          props,
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(menuChip.i('chip').binds.value.icon).toBe('label')
        expect(menuChip.i('chip').binds.value.iconTrailing).toBe('keyboard_arrow_down')
        expect(menuChip.i('chip').binds.value.readonly).toBe(true)
        expect('label' in menuChip.i('chip').binds.value).toBe(false)

        props.disabled = true
        expect(menuChip.i('chip').binds.value.disabled).toBe(true)
        expect(menuChip.i('chip').binds.value.iconTrailing).toBeUndefined()
      })
      scope.stop()
    })

    it('should treat numeric 0 value as filled via isZeroTrue', () => {
      const scope = effectScope()
      scope.run(() => {
        const menuChip = new MenuChip(
          reactive<MenuChipProps>({ value: 0 }),
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(menuChip.i('value').get()).toBe(0)
        expect(menuChip.i('value').boolean).toBe(true)
      })
      scope.stop()
    })
  })
})
