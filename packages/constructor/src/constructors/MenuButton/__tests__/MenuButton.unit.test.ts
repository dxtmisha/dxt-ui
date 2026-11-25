// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it } from 'vitest'
import { createApp, defineComponent, effectScope, h, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ButtonInclude } from '../../Button'
import { MenuButton, type MenuButtonConstructors } from '../MenuButton'
import type { MenuButtonProps } from '../props'

describe('MenuButton (Unit)', () => {
  const naming = new DesignName('d1.menuButton')

  describe('Lazy Instantiation and DI Overrides', () => {
    it('should lazily skip FieldFormInclude when name is omitted and create it when name is defined', () => {
      const container = document.createElement('div')
      let withoutNameInstance: MenuButton | undefined
      let withNameInstance: MenuButton | undefined

      const app = createApp(defineComponent({
        setup() {
          withoutNameInstance = new MenuButton(
            reactive<MenuButtonProps>({ label: 'Actions' }),
            ref<HTMLElement | undefined>(),
            naming
          )
          withNameInstance = new MenuButton(
            reactive<MenuButtonProps>({ name: 'statusFilter', label: 'Status' }),
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
      expect(withoutNameInstance?.hasInstance('button')).toBe(false)
      expect(withNameInstance?.hasInstance('form')).toBe(true)

      app.unmount()
    })

    it('should support overriding ButtonInclude through constructors parameter', () => {
      const scope = effectScope()
      scope.run(() => {
        class CustomButtonInclude extends ButtonInclude {}
        const constructors: Partial<MenuButtonConstructors> = {
          button: CustomButtonInclude
        }

        const menuButton = new MenuButton(
          reactive<MenuButtonProps>({ label: 'Menu' }),
          ref<HTMLElement | undefined>(),
          naming,
          undefined,
          undefined,
          undefined,
          constructors
        )

        expect(menuButton.i('button')).toBeInstanceOf(CustomButtonInclude)
      })
      scope.stop()
    })
  })

  describe('Button Bindings and Value Boundaries', () => {
    it('should forward icon, disabled, readonly, and resolved iconTrailing into ButtonInclude without label hack', () => {
      const scope = effectScope()
      scope.run(() => {
        const props = reactive<MenuButtonProps>({
          label: 'Filter',
          icon: 'filter_list',
          iconArrowDown: 'keyboard_arrow_down',
          disabled: false,
          readonly: true
        })

        const menuButton = new MenuButton(
          props,
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(menuButton.i('button').binds.value.icon).toBe('filter_list')
        expect(menuButton.i('button').binds.value.iconTrailing).toBe('keyboard_arrow_down')
        expect(menuButton.i('button').binds.value.readonly).toBe(true)
        expect('label' in menuButton.i('button').binds.value).toBe(false)

        props.disabled = true
        expect(menuButton.i('button').binds.value.disabled).toBe(true)
        expect(menuButton.i('button').binds.value.iconTrailing).toBeUndefined()
      })
      scope.stop()
    })

    it('should treat numeric 0 value as filled via isZeroTrue', () => {
      const scope = effectScope()
      scope.run(() => {
        const menuButton = new MenuButton(
          reactive<MenuButtonProps>({ value: 0 }),
          ref<HTMLElement | undefined>(),
          naming
        )

        expect(menuButton.i('value').get()).toBe(0)
        expect(menuButton.i('value').boolean).toBe(true)
      })
      scope.stop()
    })
  })
})
