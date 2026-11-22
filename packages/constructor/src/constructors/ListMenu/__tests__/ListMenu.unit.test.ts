// @vitest-environment jsdom
import './testWarnings'
import { describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ListGroupOpen } from '../../ListGroup'
import { WindowInclude, type WindowEmitOptions, type WindowProps, type WindowPropsInclude } from '../../Window'
import { ListMenu, type ListMenuConstructors } from '../ListMenu'
import type { ListMenuProps } from '../props'

class InspectableListMenu extends ListMenu {
  get instantiatedItems(): Partial<Record<keyof ListMenuConstructors, unknown>> {
    return this.instances
  }
}

describe('ListMenu (Logic Orchestrator)', () => {
  const naming = new DesignName('d1.listMenu')

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should not instantiate open or window helpers until accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListMenuProps>({})

      scope.run(() => {
        const menu = new InspectableListMenu(props, element, naming)

        expect(menu.hasInstance('open')).toBe(false)
        expect(menu.hasInstance('window')).toBe(false)
        expect(menu.instantiatedItems.open).toBeUndefined()
        expect(menu.instantiatedItems.window).toBeUndefined()

        expect(menu.isOpen()).toBe(false)
        expect(menu.hasInstance('open')).toBe(true)
        expect(menu.hasInstance('window')).toBe(false)

        expect(menu.i('window')).toBeInstanceOf(WindowInclude)
        expect(menu.hasInstance('window')).toBe(true)
      })

      scope.stop()
    })

    it('should keep open lazy until binds/isOpen or onWindow is triggered when window is accessed', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListMenuProps>({ axis: 'x' })

      scope.run(() => {
        const menu = new InspectableListMenu(props, element, naming)

        const windowInstance = menu.i('window')
        expect(menu.hasInstance('window')).toBe(true)
        expect(menu.hasInstance('open')).toBe(false)

        const windowBinds = windowInstance.binds.value
        expect(windowBinds.adaptive).toBe('menu')
        expect(windowBinds.axis).toBe('x')
        expect(windowBinds.role).toBe('menu')
        expect(windowBinds.ariaHaspopup).toBe('menu')
        expect(menu.hasInstance('open')).toBe(false)
      })

      scope.stop()
    })

    it('should support overriding ListGroupOpen and WindowInclude via constructors DI', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListMenuProps>({})

      class CustomListGroupOpen extends ListGroupOpen<ListMenuProps> {
        override readonly is = (): boolean => true
      }

      class CustomWindowInclude<
        Props extends WindowPropsInclude = WindowPropsInclude,
        PropsExtra extends WindowProps = WindowProps
      > extends WindowInclude<Props, PropsExtra> {}

      scope.run(() => {
        const menu = new ListMenu(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            open: CustomListGroupOpen,
            window: CustomWindowInclude
          }
        )

        expect(menu.i('open')).toBeInstanceOf(CustomListGroupOpen)
        expect(menu.i('window')).toBeInstanceOf(CustomWindowInclude)
        expect(menu.isOpen()).toBe(true)
        expect(menu.binds.open).toBe(true)
      })

      scope.stop()
    })
  })

  describe('Bindings, window configuration, and state transitions', () => {
    it('should compute default binds and reflect reactive props.open and props.axis', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListMenuProps>({
        open: false,
        axis: 'x',
        disabled: false,
        autoClose: true,
        disableFocusReturn: false
      })

      scope.run(() => {
        const menu = new ListMenu(props, element, naming)

        expect(menu.isOpen()).toBe(false)
        expect(menu.binds).toEqual({
          open: false,
          inert: false,
          autoTabIndex: false,
          closeOnEsc: false
        })

        expect(menu.i('window').binds.value).toMatchObject({
          adaptive: 'menu',
          axis: 'x',
          role: 'menu',
          ariaHaspopup: 'menu',
          disabled: false,
          autoClose: true,
          disableFocusReturn: false
        })

        props.open = true
        props.axis = 'y'
        props.disabled = true
        props.autoClose = false
        props.disableFocusReturn = true

        expect(menu.isOpen()).toBe(true)
        expect(menu.binds.open).toBe(true)
        expect(menu.i('window').binds.value).toMatchObject({
          axis: 'y',
          disabled: true,
          autoClose: false,
          disableFocusReturn: true
        })

        props.open = false
        expect(menu.isOpen()).toBe(false)
        expect(menu.binds.open).toBe(false)
      })

      scope.stop()
    })

    it('should update open state and forward window emit when window triggers onWindow', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props = reactive<ListMenuProps>({})
      const emits = vi.fn()

      scope.run(() => {
        const menu = new ListMenu(
          props,
          element,
          naming,
          undefined,
          undefined,
          emits
        )

        const windowBinds = menu.i('window').binds.value
        const onWindow = windowBinds.onWindow as ((options: WindowEmitOptions) => void) | Array<(options: WindowEmitOptions) => void>
        const triggerWindow = (open: boolean) => {
          const payload: WindowEmitOptions = {
            id: 'menu-1',
            element: document.createElement('div'),
            control: document.createElement('button'),
            open
          }

          if (Array.isArray(onWindow)) {
            onWindow.forEach(handler => handler(payload))
          } else {
            onWindow?.(payload)
          }
        }

        expect(menu.isOpen()).toBe(false)

        triggerWindow(true)
        expect(menu.isOpen()).toBe(true)
        expect(menu.binds.open).toBe(true)
        expect(emits).toHaveBeenCalledWith('window', expect.objectContaining({ id: 'menu-1', open: true }))

        triggerWindow(false)
        expect(menu.isOpen()).toBe(false)
        expect(menu.binds.open).toBe(false)
        expect(emits).toHaveBeenCalledWith('window', expect.objectContaining({ id: 'menu-1', open: false }))
      })

      scope.stop()
    })
  })
})
