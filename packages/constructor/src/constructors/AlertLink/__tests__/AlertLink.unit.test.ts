// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { AlertLink, type AlertLinkConstructors } from '../AlertLink'
import { EventClickInclude } from '../../../classes/EventClickInclude'
import { LabelInclude } from '../../../classes/LabelInclude'
import type { AlertLinkProps } from '../props'
import type { AlertLinkSlots } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/**
 * Inspectable subclass of AlertLink exposing internal instances for testing.
 *
 * Проверяемый подкласс AlertLink, предоставляющий доступ к внутренним экземплярам.
 */
class InspectableAlertLink extends AlertLink {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof AlertLinkConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Mounts AlertLink inside a Vue setup scope so DesignLogicAbstract lifecycle and effect scope are active.
 *
 * Монтирует AlertLink внутри setup-контекста Vue для активации области эффектов DesignLogicAbstract.
 * @param initialProps initial props / начальные свойства
 * @param slots optional slots / опциональные слоты
 * @param emits optional emit spy / опциональный шпион событий
 * @param constructors optional constructor overrides / опциональные переопределения конструкторов
 * @returns mounted orchestrator instance and reactive props / смонтированный оркестратор и реактивные свойства
 */
function createMountedAlertLink(
  initialProps: AlertLinkProps = {},
  slots?: AlertLinkSlots,
  emits?: (...args: any[]) => void,
  constructors?: Partial<AlertLinkConstructors>
): { alertLink: InspectableAlertLink, props: AlertLinkProps } {
  const naming = new DesignName('d1.alertLink')
  const props = reactive<AlertLinkProps>({ ...initialProps })
  let alertLink!: InspectableAlertLink

  const TestComponent = defineComponent({
    setup() {
      const element = ref<HTMLAnchorElement>()
      alertLink = new InspectableAlertLink(
        props,
        element,
        naming,
        undefined,
        slots,
        emits,
        constructors
      )

      return () => h('a')
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

  return { alertLink, props }
}

describe('AlertLink (Unit)', () => {
  describe('Classes and binds resolution', () => {
    it('should return static link design class in classes getter', () => {
      const { alertLink } = createMountedAlertLink()

      expect(alertLink.classes).toEqual({
        'd1-a--static': true
      })
    })

    it('should return href, onClick, onKeydown, and keyboard ARIA attributes in binds getter', () => {
      const { alertLink, props } = createMountedAlertLink()

      expect(alertLink.aria).toEqual({
        tabindex: '0',
        role: 'button'
      })
      expect(alertLink.binds.tabindex).toBe('0')
      expect(alertLink.binds.role).toBe('button')
      expect(typeof alertLink.binds.onClick).toBe('function')
      expect(typeof alertLink.binds.onKeydown).toBe('function')

      props.href = 'https://example.com'
      expect(alertLink.aria).toEqual({})
      expect(alertLink.binds.href).toBe('https://example.com')
      expect(alertLink.binds.tabindex).toBeUndefined()
      expect(alertLink.binds.role).toBeUndefined()

      props.href = undefined
      props.to = { name: 'home' } as any
      expect(alertLink.aria).toEqual({})
    })

    it('should emit click and clickLite when event handler is invoked', () => {
      const emits = vi.fn()
      const { alertLink } = createMountedAlertLink(
        {
          value: 'alert-link-val',
          detail: { id: 42 }
        },
        undefined,
        emits
      )

      const mouseEvent = new MouseEvent('click')
      ;(alertLink.binds.onClick as (event: MouseEvent) => void)(mouseEvent)

      expect(emits).toHaveBeenCalledTimes(2)
      expect(emits).toHaveBeenNthCalledWith(1, 'click', mouseEvent, {
        type: 'click',
        value: 'alert-link-val',
        detail: { id: 42 }
      })
      expect(emits).toHaveBeenNthCalledWith(2, 'clickLite', {
        type: 'click',
        value: 'alert-link-val',
        detail: { id: 42 }
      })
    })
  })

  describe('Lazy instantiation and Dependency Injection', () => {
    it('should keep event and label uninstantiated until accessed and respect canCreate on label', async () => {
      const { alertLink, props } = createMountedAlertLink()

      expect(alertLink.instantiatedItems.event).toBeUndefined()
      expect(alertLink.instantiatedItems.label).toBeUndefined()
      expect(alertLink.hasInstance('event')).toBe(false)
      expect(alertLink.hasInstance('label')).toBe(false)

      // callInstance should not instantiate label when neither label nor default slot is present
      const renderedEmpty = alertLink.callInstance('label', item => item.render(), [])
      expect(renderedEmpty).toEqual([])
      expect(alertLink.hasInstance('label')).toBe(false)

      // Numeric 0 is a valid label and should allow label instantiation
      props.label = 0
      await nextTick()
      const renderedZero = alertLink.callInstance('label', item => item.render(), [])
      expect(renderedZero).toHaveLength(1)
      expect(alertLink.hasInstance('label')).toBe(true)
    })

    it('should allow label creation via default slot even without label prop', () => {
      const { alertLink } = createMountedAlertLink(
        {},
        { default: () => ['Slot Content'] }
      )

      expect(alertLink.hasInstance('label')).toBe(false)
      const rendered = alertLink.callInstance('label', item => item.render(), [])
      expect(rendered).toHaveLength(1)
      expect(alertLink.hasInstance('label')).toBe(true)
    })

    it('should allow overriding event and label constructors via Dependency Injection', () => {
      class CustomEvent extends EventClickInclude {}
      class CustomLabel extends LabelInclude {}

      const { alertLink } = createMountedAlertLink(
        { label: 'Custom' },
        undefined,
        undefined,
        {
          event: CustomEvent,
          label: CustomLabel
        }
      )

      expect(alertLink.i('event')).toBeInstanceOf(CustomEvent)
      expect(alertLink.i('label')).toBeInstanceOf(CustomLabel)
    })
  })
})
