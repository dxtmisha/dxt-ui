// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ActionsInclude } from '../../Actions'
import { ButtonInclude } from '../../Button'
import { IconTrailingInclude } from '../../Icon'
import { AreaInclude } from '../../../classes/AreaInclude'
import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { SnackbarItem, type SnackbarItemConstructors } from '../SnackbarItem'
import type { SnackbarItemProps } from '../props'
import type { SnackbarItemSlots } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Inspectable subclass of SnackbarItem exposing internal instances map.
 *
 * Проверяемый подкласс SnackbarItem, предоставляющий доступ к карте экземпляров.
 */
class InspectableSnackbarItem extends SnackbarItem {
  /** Internal instances map / Карта созданных экземпляров */
  get instantiatedItems(): Partial<Record<keyof SnackbarItemConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Mounts SnackbarItem orchestrator inside a Vue setup scope.
 *
 * Монтирует оркестратор SnackbarItem внутри setup-контекста Vue.
 */
function createMountedSnackbarItem(
  initialProps: SnackbarItemProps = {},
  slots?: SnackbarItemSlots,
  emits?: (...args: any[]) => void,
  constructors?: Partial<SnackbarItemConstructors>
): { item: InspectableSnackbarItem, props: SnackbarItemProps } {
  const naming = new DesignName('d1.snackbarItem')
  const props = reactive<SnackbarItemProps>({ area: 'snackbar', ...initialProps })
  let item!: InspectableSnackbarItem

  const TestComponent = defineComponent({
    setup() {
      const element = ref<HTMLDivElement>()
      item = new InspectableSnackbarItem(
        props,
        element,
        naming,
        undefined,
        slots,
        emits,
        constructors
      )

      return () => h('div')
    }
  })

  const host = document.createElement('div')
  document.body.appendChild(host)
  const app = createApp(TestComponent)
  app.mount(host)

  cleanups.push(() => {
    app.unmount()
    host.remove()
  })

  return { item, props }
}

describe('SnackbarItem (Unit)', () => {
  describe('Lazy instantiation, setup-time AreaInclude, and canCreate guards', () => {
    it('should initialize AreaInclude eagerly during setup and keep all other dependencies lazy', () => {
      const { item } = createMountedSnackbarItem({ closeButton: false })

      expect(item.hasInstance('area')).toBe(true)
      expect(item.hasInstance('actions')).toBe(false)
      expect(item.hasInstance('button')).toBe(false)
      expect(item.hasInstance('buttonClose')).toBe(false)
      expect(item.hasInstance('description')).toBe(false)
      expect(item.hasInstance('event')).toBe(false)
      expect(item.hasInstance('icon')).toBe(false)
      expect(item.hasInstance('label')).toBe(false)
      expect(item.hasInstance('text')).toBe(false)
    })

    it('should gate actions, button, buttonClose, description, icon, and label via canCreate', async () => {
      const { item, props } = createMountedSnackbarItem({
        actionsHide: true,
        actionsList: [{ label: 'Hidden' }],
        closeButton: true
      })

      // closeButton without iconClose must stay lazy because buttonClose has no icon to render
      expect(item.callInstance('actions', instance => instance.is, false)).toBe(false)
      expect(item.hasInstance('actions')).toBe(false)
      expect(item.callInstance('button', instance => instance.is, false)).toBe(false)
      expect(item.hasInstance('button')).toBe(false)
      expect(item.callInstance('buttonClose', instance => instance.is, false)).toBe(false)
      expect(item.hasInstance('buttonClose')).toBe(false)
      expect(item.callInstance('description', instance => instance.is, false)).toBe(false)
      expect(item.hasInstance('description')).toBe(false)
      expect(item.callInstance('icon', instance => instance.hasAtLeastOneIcon(), false)).toBe(false)
      expect(item.hasInstance('icon')).toBe(false)
      expect(item.callInstance('label', instance => instance.is, false)).toBe(false)
      expect(item.hasInstance('label')).toBe(false)

      // Enable all optional features reactively
      props.actionsHide = false
      props.button = 0
      props.iconClose = 'close'
      props.description = 'Details'
      props.icon = 'info'
      props.label = 'Notice'
      await nextTick()

      expect(item.callInstance('actions', instance => instance.is, false)).toBe(true)
      expect(item.callInstance('button', instance => instance.is, false)).toBe(true)
      expect(item.callInstance('buttonClose', instance => instance.is, false)).toBe(true)
      expect(item.callInstance('description', instance => instance.is, false)).toBe(true)
      expect(item.callInstance('icon', instance => instance.hasAtLeastOneIcon(), false)).toBe(true)
      expect(item.callInstance('label', instance => instance.is, false)).toBe(true)
    })

    it('should allow actions creation from actionsAttrs.list or actionsAttrs.listSecondary', () => {
      const { item } = createMountedSnackbarItem({
        actionsAttrs: {
          listSecondary: [{ label: 'Secondary' }]
        }
      })

      expect(item.callInstance('actions', instance => instance.is, false)).toBe(true)
      expect(item.i('actions').binds.value.align).toBe('left')
    })

    it('should instantiate label and description from slots when text props are absent', () => {
      const { item } = createMountedSnackbarItem(
        {},
        {
          default: () => [h('span', 'Slot label')],
          description: () => [h('span', 'Slot description')]
        }
      )

      expect(item.callInstance('label', instance => instance.is, false)).toBe(true)
      expect(item.callInstance('description', instance => instance.is, false)).toBe(true)
    })
  })

  describe('ARIA live region computation', () => {
    it('should return atomic=true without role by default', () => {
      const { item } = createMountedSnackbarItem()

      expect(item.aria).toEqual({
        'aria-atomic': 'true'
      })
    })

    it('should return status/polite for success and alert/assertive for error (error takes precedence)', async () => {
      const { item, props } = createMountedSnackbarItem({ success: true })

      expect(item.aria).toEqual({
        'aria-atomic': 'true',
        'role': 'status',
        'aria-live': 'polite'
      })

      props.error = true
      await nextTick()

      expect(item.aria).toEqual({
        'aria-atomic': 'true',
        'role': 'alert',
        'aria-live': 'assertive'
      })
    })

    it('should respect explicit props.role and props.ariaLive overrides even when success or error is true', () => {
      const { item } = createMountedSnackbarItem({
        error: true,
        role: 'status',
        ariaLive: 'off'
      })

      expect(item.aria).toEqual({
        'aria-atomic': 'true',
        'role': 'status',
        'aria-live': 'off'
      })
    })
  })

  describe('Button, close button, and event delegation', () => {
    it('should support string, numeric 0, object with custom onClick, and reactive hiding for props.button', async () => {
      const emits = vi.fn()
      const customClick = vi.fn()
      const { item, props } = createMountedSnackbarItem(
        { button: { icon: 'refresh', onClick: customClick } },
        undefined,
        emits
      )

      const buttonInclude = item.i('button')
      expect(buttonInclude.is).toBe(true)
      expect(buttonInclude.binds.value.icon).toBe('refresh')

      const mouseEvent = new MouseEvent('click')
      const payload = { type: 'click', value: 'refresh-id', detail: undefined }
      const handlers = buttonInclude.binds.value.onClick as Array<(event: MouseEvent, value: typeof payload) => void>

      expect(Array.isArray(handlers)).toBe(true)
      handlers.forEach(handler => handler(mouseEvent, payload))
      expect(customClick).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('click', mouseEvent, payload)
      expect(emits).toHaveBeenCalledWith('clickLite', payload)

      props.button = 'Undo'
      await nextTick()
      expect(buttonInclude.is).toBe(true)
      expect(buttonInclude.binds.value.label).toBe('Undo')

      props.button = ''
      await nextTick()
      expect(buttonInclude.is).toBe(false)

      props.button = undefined
      await nextTick()
      expect(buttonInclude.is).toBe(false)
    })

    it('should configure buttonClose with close class, aria-label, onClose handler, and reactive hiding', async () => {
      const emits = vi.fn()
      const { item, props } = createMountedSnackbarItem(
        {
          value: 'item-1',
          closeButton: true,
          iconClose: 'close',
          textClose: 'Close toast'
        },
        undefined,
        emits
      )

      const closeInclude = item.i('buttonClose')
      expect(closeInclude.is).toBe(true)
      expect(closeInclude.binds.value.icon).toBe('close')
      expect(closeInclude.binds.value['aria-label']).toBe('Close toast')
      expect(closeInclude.binds.value.class).toContain('d1-snackbarItem__close')

      const onClick = closeInclude.binds.value.onClick as () => void
      onClick()
      expect(emits).toHaveBeenCalledWith('close', 'item-1')

      props.closeButton = false
      await nextTick()
      expect(closeInclude.is).toBe(false)
    })

    it('should emit close with undefined when props.value is omitted', () => {
      const emits = vi.fn()
      const { item } = createMountedSnackbarItem({}, undefined, emits)

      item.onClose()
      expect(emits).toHaveBeenCalledWith('close', undefined)
    })
  })

  describe('Dependency Injection overrides', () => {
    it('should allow overriding all constructors via SnackbarItemConstructors', () => {
      class CustomActions extends ActionsInclude {}
      class CustomArea extends AreaInclude {}
      class CustomButton extends ButtonInclude {}
      class CustomDescription extends DescriptionInclude {}
      class CustomEvent extends EventClickInclude {}
      class CustomIcon extends IconTrailingInclude {}
      class CustomLabel extends LabelInclude {}
      class CustomText extends TextInclude {}

      const { item } = createMountedSnackbarItem(
        {
          label: 'DI',
          description: 'Desc',
          closeButton: true,
          iconClose: 'close'
        },
        undefined,
        undefined,
        {
          actions: CustomActions,
          area: CustomArea,
          button: CustomButton,
          buttonClose: CustomButton,
          description: CustomDescription,
          event: CustomEvent,
          icon: CustomIcon as unknown as typeof IconTrailingInclude,
          label: CustomLabel,
          text: CustomText
        }
      )

      expect(item.i('actions')).toBeInstanceOf(CustomActions)
      expect(item.i('area')).toBeInstanceOf(CustomArea)
      expect(item.i('button')).toBeInstanceOf(CustomButton)
      expect(item.i('buttonClose')).toBeInstanceOf(CustomButton)
      expect(item.i('description')).toBeInstanceOf(CustomDescription)
      expect(item.i('event')).toBeInstanceOf(CustomEvent)
      expect(item.i('icon')).toBeInstanceOf(CustomIcon)
      expect(item.i('label')).toBeInstanceOf(CustomLabel)
      expect(item.i('text')).toBeInstanceOf(CustomText)
    })
  })
})
