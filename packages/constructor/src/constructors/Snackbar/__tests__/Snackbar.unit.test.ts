// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, effectScope, h, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Snackbar, type SnackbarConstructors } from '../Snackbar'
import { SnackbarData } from '../SnackbarData'
import { SnackbarEvent } from '../SnackbarEvent'
import type { SnackbarProps } from '../props'
import { TeleportInclude } from '../../../classes/TeleportInclude'
import { TextInclude } from '../../../classes/TextInclude'

/** Active cleanup callbacks / Активные колбэки очистки */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/** Creates a Snackbar instance inside a tracked effectScope / Создаёт экземпляр Snackbar внутри отслеживаемого effectScope */
function createSnackbar(
  props: SnackbarProps = {},
  emits = vi.fn(),
  constructors?: Partial<SnackbarConstructors>
) {
  const scope = effectScope()
  cleanups.push(() => scope.stop())

  const element = ref<HTMLDivElement | undefined>()
  const naming = new DesignName('d1.snackbar')
  let instance!: Snackbar

  scope.run(() => {
    instance = new Snackbar(
      reactive(props),
      element,
      naming,
      undefined,
      undefined,
      emits,
      constructors
    )
  })

  return { instance, element, emits, scope }
}

describe('Snackbar (Unit)', () => {
  describe('Lazy instantiation & Dependency Injection', () => {
    it('should eagerly initialize teleport during setup while keeping data, event, and text lazy', () => {
      const { instance } = createSnackbar()

      expect(instance.hasInstance('teleport')).toBe(true)
      expect(instance.hasInstance('data')).toBe(false)
      expect(instance.hasInstance('event')).toBe(false)
      expect(instance.hasInstance('text')).toBe(false)
    })

    it('should lazily instantiate data, event, teleport, and text on first access', () => {
      const { instance } = createSnackbar()

      expect(instance.i('data')).toBeInstanceOf(SnackbarData)
      expect(instance.hasInstance('data')).toBe(true)
      // event stays lazy until SnackbarData actually invokes its event getter
      expect(instance.hasInstance('event')).toBe(false)

      expect(instance.i('event')).toBeInstanceOf(SnackbarEvent)
      expect(instance.i('teleport')).toBeInstanceOf(TeleportInclude)
      expect(instance.i('text')).toBeInstanceOf(TextInclude)
    })

    it('should support dependency injection overrides via constructors parameter', () => {
      class CustomData extends SnackbarData {}
      class CustomEvent extends SnackbarEvent {}
      class CustomTeleport extends TeleportInclude {}
      class CustomText extends TextInclude {}

      const { instance } = createSnackbar({}, vi.fn(), {
        data: CustomData,
        event: CustomEvent,
        teleport: CustomTeleport,
        text: CustomText
      })

      expect(instance.i('data')).toBeInstanceOf(CustomData)
      expect(instance.i('event')).toBeInstanceOf(CustomEvent)
      expect(instance.i('teleport')).toBeInstanceOf(CustomTeleport)
      expect(instance.i('text')).toBeInstanceOf(CustomText)
    })
  })

  describe('ARIA, binds, and event delegation', () => {
    it('should compute aria with role="region" and textNotifications label', () => {
      const { instance } = createSnackbar({
        textNotifications: 'System alerts'
      })

      expect(instance.aria).toEqual({
        'role': 'region',
        'aria-label': 'System alerts'
      })
      expect(instance.hasInstance('text')).toBe(true)
      expect(instance.hasInstance('data')).toBe(false)
    })

    it('should compute binds with pause/resume mouse handlers and ARIA attributes', () => {
      const { instance } = createSnackbar({
        textNotifications: 'Notifications'
      })

      const binds = instance.binds
      const data = instance.i('data')

      expect(binds.onMouseenter).toBe(data.pause)
      expect(binds.onMouseleave).toBe(data.resume)
      expect(binds.role).toBe('region')
      expect(binds['aria-label']).toBe('Notifications')
    })

    it('should delegate onClose(value) to data.remove(value) and emit hide', () => {
      const emits = vi.fn()
      const { instance } = createSnackbar({}, emits)

      instance.i('data').add({ value: 'toast-1', delay: -1 })
      expect(instance.i('data').isItem()).toBe(true)

      instance.onClose('toast-1')
      expect(instance.i('data').isItem()).toBe(false)
      expect(emits).toHaveBeenCalledWith('hide', 'toast-1', expect.objectContaining({ value: 'toast-1' }))
    })
  })

  describe('Coordinated lifecycle propagation', () => {
    it('should invoke SnackbarData onMounted and onUnmounted through DesignLogicAbstract', async () => {
      const container = document.createElement('div')
      document.body.appendChild(container)
      cleanups.push(() => container.remove())

      const mountedSpy = vi.fn()
      const unmountedSpy = vi.fn()

      class TrackedSnackbarData extends SnackbarData {
        override readonly onMounted = (): void => {
          mountedSpy()
        }

        override readonly onUnmounted = (): void => {
          unmountedSpy()
        }
      }

      let snackbarInstance!: Snackbar

      const Host = defineComponent({
        setup() {
          snackbarInstance = new Snackbar(
            reactive<SnackbarProps>({}),
            ref<HTMLDivElement | undefined>(),
            new DesignName('d1.snackbar'),
            undefined,
            undefined,
            undefined,
            { data: TrackedSnackbarData }
          )
          // Access data before mount
          snackbarInstance.i('data')
          return () => h('div')
        }
      })

      const app = createApp(Host)
      app.mount(container)
      await nextTick()

      expect(mountedSpy).toHaveBeenCalledTimes(1)
      expect(unmountedSpy).not.toHaveBeenCalled()

      app.unmount()
      expect(unmountedSpy).toHaveBeenCalledTimes(1)
    })
  })
})
