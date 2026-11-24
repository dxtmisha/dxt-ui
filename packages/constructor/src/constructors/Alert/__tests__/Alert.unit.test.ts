// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { ActionsInclude } from '../../Actions'
import { AlertLinkInclude } from '../../AlertLink'
import { ButtonInclude } from '../../Button'
import { IconTrailingInclude } from '../../Icon'
import { DescriptionInclude } from '../../../classes/DescriptionInclude'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import { TextInclude } from '../../../classes/TextInclude'
import { Alert, type AlertConstructors } from '../Alert'
import { AlertEvent } from '../AlertEvent'
import { AlertHide } from '../AlertHide'
import type { AlertProps } from '../props'
import type { AlertSlots } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Inspectable subclass of Alert exposing internal instances map.
 *
 * Проверяемый подкласс Alert, предоставляющий доступ к карте экземпляров.
 */
class InspectableAlert extends Alert {
  /** Internal instances map / Карта созданных экземпляров */
  get instantiatedItems(): Partial<Record<keyof AlertConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Mounts Alert orchestrator inside a Vue setup scope.
 *
 * Монтирует оркестратор Alert внутри setup-контекста Vue.
 */
function createMountedAlert(
  initialProps: AlertProps = {},
  slots?: AlertSlots,
  emits?: (...args: any[]) => void,
  constructors?: Partial<AlertConstructors>
): { alert: InspectableAlert, props: AlertProps } {
  const naming = new DesignName('d1.alert')
  const props = reactive<AlertProps>({ role: 'alert', ...initialProps })
  let alert!: InspectableAlert

  const TestComponent = defineComponent({
    setup() {
      const element = ref<HTMLDivElement>()
      alert = new InspectableAlert(
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

  return { alert, props }
}

describe('Alert (Unit)', () => {
  describe('Lazy instantiation and canCreate guards', () => {
    it('should keep all optional dependencies uninstantiated for a minimal alert', () => {
      const { alert } = createMountedAlert()

      expect(alert.aria).toEqual({ role: 'alert' })
      expect(alert.classes).toEqual({})
      expect(alert.isDestroy()).toBe(false)
      expect(typeof alert.binds.onTransitionend).toBe('function')

      // Transitionend on non-closable alert must not instantiate hide or alertEvent
      alert.onTransition(new TransitionEvent('transitionend', { propertyName: 'opacity' }))

      expect(alert.hasInstance('actions')).toBe(false)
      expect(alert.hasInstance('alertEvent')).toBe(false)
      expect(alert.hasInstance('button')).toBe(false)
      expect(alert.hasInstance('buttonClose')).toBe(false)
      expect(alert.hasInstance('description')).toBe(false)
      expect(alert.hasInstance('event')).toBe(false)
      expect(alert.hasInstance('hide')).toBe(false)
      expect(alert.hasInstance('icon')).toBe(false)
      expect(alert.hasInstance('label')).toBe(false)
      expect(alert.hasInstance('link')).toBe(false)
      expect(alert.hasInstance('text')).toBe(false)
    })

    it('should instantiate label and description lazily when props or slots are present and wire ARIA ids', () => {
      const { alert } = createMountedAlert({
        label: 'Alert Heading',
        labelId: 'heading-id',
        description: 'Alert Details',
        descriptionId: 'details-id',
        ariaLive: 'assertive'
      })

      expect(alert.aria).toEqual({
        'role': 'alert',
        'aria-live': 'assertive',
        'aria-labelledby': 'heading-id',
        'aria-describedby': 'details-id'
      })
      expect(alert.hasInstance('label')).toBe(true)
      expect(alert.hasInstance('description')).toBe(true)
    })

    it('should gate actions, link, icon, button, and buttonClose via canCreate', async () => {
      const { alert, props } = createMountedAlert({
        actionsHide: true,
        actionsList: [{ label: 'Hidden' }],
        links: []
      })

      expect(alert.callInstance('actions', item => item.is, false)).toBe(false)
      expect(alert.hasInstance('actions')).toBe(false)
      expect(alert.callInstance('link', item => item.is, false)).toBe(false)
      expect(alert.hasInstance('link')).toBe(false)
      expect(alert.callInstance('button', item => item.is, false)).toBe(false)
      expect(alert.hasInstance('button')).toBe(false)
      expect(alert.callInstance('buttonClose', item => item.is, false)).toBe(false)
      expect(alert.hasInstance('buttonClose')).toBe(false)

      // Enable actions, link, icon, numeric 0 button, and closeButton
      props.actionsHide = false
      props.links = [{ label: 'Docs' }]
      props.icon = 'info'
      props.button = 0
      props.closeButton = true
      props.iconClose = 'close'
      await nextTick()

      expect(alert.callInstance('actions', item => item.is, false)).toBe(true)
      expect(alert.callInstance('link', item => item.is, false)).toBe(true)
      expect(alert.callInstance('icon', item => item.hasAtLeastOneIcon(), false)).toBe(true)
      expect(alert.callInstance('button', item => item.is, false)).toBe(true)
      expect(alert.callInstance('buttonClose', item => item.is, false)).toBe(true)
    })
  })

  describe('Trailing button bindings and close lifecycle', () => {
    it('should support string, numeric 0, icon-only object, and custom onClick in props.button', async () => {
      const emits = vi.fn()
      const customClick = vi.fn()
      const { alert, props } = createMountedAlert(
        { button: { icon: 'refresh', onClick: customClick } },
        undefined,
        emits
      )

      const buttonInclude = alert.i('button')
      expect(buttonInclude.is).toBe(true)
      expect(buttonInclude.binds.value.icon).toBe('refresh')

      const mouseEvent = new MouseEvent('click')
      const payload = { type: 'click', value: 'refresh-val', detail: undefined }
      const handlers = buttonInclude.binds.value.onClick as Array<(event: MouseEvent, value: typeof payload) => void>

      expect(Array.isArray(handlers)).toBe(true)
      handlers.forEach(handler => handler(mouseEvent, payload))
      expect(customClick).toHaveBeenCalledTimes(1)
      expect(emits).toHaveBeenCalledWith('click', mouseEvent, payload)
      expect(emits).toHaveBeenCalledWith('clickLite', payload)

      // Clearing props.button to empty string or undefined after creation must hide the button cleanly
      props.button = ''
      await nextTick()
      expect(buttonInclude.is).toBe(false)

      props.button = undefined
      await nextTick()
      expect(buttonInclude.is).toBe(false)
    })

    it('should reactively hide buttonClose when closeButton flips from true to false', async () => {
      const { alert, props } = createMountedAlert({
        closeButton: true,
        iconClose: 'close',
        textClose: 'Dismiss alert'
      })

      const closeInclude = alert.i('buttonClose')
      expect(closeInclude.is).toBe(true)
      expect(closeInclude.binds.value['aria-label']).toBe('Dismiss alert')

      props.closeButton = false
      await nextTick()
      expect(closeInclude.is).toBe(false)
    })

    it('should transition hide -> destroy and emit close on opacity transitionend', () => {
      const emits = vi.fn()
      const { alert } = createMountedAlert({ closeButton: true }, undefined, emits)

      alert.i('alertEvent').onClose()
      expect(alert.classes).toEqual({ 'd1-alert--hide': true })
      expect(alert.isDestroy()).toBe(false)

      alert.onTransition(new TransitionEvent('transitionend', { propertyName: 'opacity' }))
      expect(alert.isDestroy()).toBe(true)
      expect(emits).toHaveBeenCalledWith('close')
    })
  })

  describe('Dependency Injection overrides', () => {
    it('should allow overriding all constructors via AlertConstructors', () => {
      class CustomActions extends ActionsInclude {}
      class CustomAlertEvent extends AlertEvent {}
      class CustomButton extends ButtonInclude {}
      class CustomDescription extends DescriptionInclude {}
      class CustomEvent extends EventClickInclude {}
      class CustomHide extends AlertHide {}
      class CustomIcon extends IconTrailingInclude {}
      class CustomLabel extends LabelInclude {}
      class CustomLink extends AlertLinkInclude {}
      class CustomText extends TextInclude {}

      const { alert } = createMountedAlert(
        { label: 'DI', description: 'Desc', closeButton: true },
        undefined,
        undefined,
        {
          actions: CustomActions,
          alertEvent: CustomAlertEvent,
          button: CustomButton,
          buttonClose: CustomButton,
          description: CustomDescription,
          event: CustomEvent,
          hide: CustomHide,
          icon: CustomIcon as unknown as typeof IconTrailingInclude,
          label: CustomLabel,
          link: CustomLink as unknown as typeof AlertLinkInclude,
          text: CustomText
        }
      )

      expect(alert.i('actions')).toBeInstanceOf(CustomActions)
      expect(alert.i('alertEvent')).toBeInstanceOf(CustomAlertEvent)
      expect(alert.i('button')).toBeInstanceOf(CustomButton)
      expect(alert.i('buttonClose')).toBeInstanceOf(CustomButton)
      expect(alert.i('description')).toBeInstanceOf(CustomDescription)
      expect(alert.i('event')).toBeInstanceOf(CustomEvent)
      expect(alert.i('hide')).toBeInstanceOf(CustomHide)
      expect(alert.i('icon')).toBeInstanceOf(CustomIcon)
      expect(alert.i('label')).toBeInstanceOf(CustomLabel)
      expect(alert.i('link')).toBeInstanceOf(CustomLink)
      expect(alert.i('text')).toBeInstanceOf(CustomText)
    })
  })
})
