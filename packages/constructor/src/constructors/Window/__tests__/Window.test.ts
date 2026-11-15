// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'

import { WindowDesign } from '../WindowDesign'
import { defaultsWindow, type WindowPropsBasic } from '../props'
import type {
  WindowClasses,
  WindowComponents,
  WindowExpose,
  WindowSlots
} from '../types'
import type { WindowControlItem, WindowEmitOptions } from '../basicTypes'

const cleanups: Array<() => void> = []

beforeEach(() => {
  vi.useFakeTimers({
    toFake: [
      'setTimeout',
      'clearTimeout',
      'setInterval',
      'clearInterval',
      'requestAnimationFrame',
      'cancelAnimationFrame'
    ]
  })
})

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
  vi.useRealTimers()
  document.body.innerHTML = ''
})

/**
 * Mounts the full WindowDesign component (design layer, orchestrator, and helpers) into jsdom.
 *
 * Монтирует полный компонент WindowDesign (слой дизайна, оркестратор и помощники) в jsdom.
 * @param initialProps initial component properties / начальные свойства компонента
 * @returns props, emits spy, and expose API / свойства, шпион событий и expose API
 */
function mountWindow(initialProps: WindowPropsBasic = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)

  const emits = vi.fn()
  const props = reactive<WindowPropsBasic>({
    ...defaultsWindow,
    ...initialProps
  } as WindowPropsBasic)

  let exposed!: WindowExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

  const slots: WindowSlots = {
    control: (control: WindowControlItem) => h('button', {
      ...control.binds,
      'type': 'button',
      'data-test': 'control'
    }, 'Open'),
    title: () => h('h2', { 'data-test': 'title' }, 'Title'),
    default: () => h('button', { 'type': 'button', 'data-test': 'content' }, 'Content'),
    footer: () => h('div', { 'data-test': 'footer' }, 'Footer')
  }

  const Component = defineComponent({
    inheritAttrs: false,
    setup() {
      const design = new WindowDesign<
        WindowComponents,
        WindowExpose,
        WindowClasses,
        WindowPropsBasic
      >('d1.window', props, {
        emits: emits as never
      })

      exposed = design.expose() as WindowExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(
        Component,
        { 'data-attr': 'external' },
        slots as Record<string, unknown>
      )
    }
  })

  const app = createApp(Root)
  app.mount(container)

  cleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return {
    container,
    emits,
    props,
    get exposed() {
      return exposed
    }
  }
}

/**
 * Flushes pending animation frames, timers, and promises of the opening/closing sequence.
 *
 * Сбрасывает ожидающие кадры анимации, таймеры и промисы последовательности открытия/закрытия.
 * @param duration time to advance in milliseconds / время продвижения в миллисекундах
 */
async function flush(duration: number = 200): Promise<void> {
  await vi.advanceTimersByTimeAsync(duration)
  await nextTick()
}

/**
 * Returns the control button rendered by the control slot.
 *
 * Возвращает кнопку управления, отрисованную слотом control.
 * @returns control button element / элемент кнопки управления
 */
function getControl(): HTMLButtonElement {
  return document.querySelector<HTMLButtonElement>('[data-test="control"]')!
}

/**
 * Returns the main window element.
 *
 * Возвращает главный элемент окна.
 * @returns main window element or null / главный элемент окна или null
 */
function getMain(): HTMLDivElement | null {
  return document.querySelector<HTMLDivElement>('[data-window]')
}

/**
 * Returns emitted window event payloads.
 *
 * Возвращает данные вызванных событий window.
 * @param emits emits spy / шпион событий
 * @returns list of window event options / список опций событий window
 */
function getWindowEvents(emits: ReturnType<typeof vi.fn>): WindowEmitOptions[] {
  return emits.mock.calls
    .filter(([name]) => name === 'window')
    .map(([, options]) => options as WindowEmitOptions)
}

/**
 * Completes the closing transition by dispatching transitionend on the main element.
 *
 * Завершает переход закрытия, отправляя transitionend на главный элемент.
 */
async function finishClosing(): Promise<void> {
  await flush(32)
  getMain()?.dispatchEvent(new Event('transitionend'))
  await flush(200)
}

describe('Window (integration)', () => {
  describe('Closed state and control slot', () => {
    it('should render only the control with ARIA attributes while the window is closed', async () => {
      mountWindow()
      await flush()

      const control = getControl()

      expect(control).not.toBeNull()
      expect(control.getAttribute('aria-haspopup')).toBe('dialog')
      expect(control.getAttribute('aria-expanded')).toBe('false')
      expect(control.getAttribute('aria-controls')).toBeNull()
      expect(control.id).toContain('control')
      expect(getMain()).toBeNull()
    })
  })

  describe('Opening, rendering, and slots', () => {
    it('should open on control click and teleport the window with modal ARIA, classes, and slots', async () => {
      const { emits } = mountWindow({ ariaLabelledby: 'title-id' })
      await flush()

      getControl().click()
      await flush()

      const main = getMain()!
      const control = getControl()

      expect(main).not.toBeNull()
      expect(main.parentElement?.getAttribute('data-window-teleport')).toBe(main.dataset.window)
      expect(main.getAttribute('role')).toBe('dialog')
      expect(main.getAttribute('aria-modal')).toBe('true')
      expect(main.getAttribute('aria-labelledby')).toBe('title-id')
      expect(main.classList.contains(main.dataset.window!)).toBe(true)

      const body = main.querySelector('.d1-window__body')!

      expect(body).not.toBeNull()
      expect(body.getAttribute('data-attr')).toBe('external')
      expect(body.querySelector('.d1-window__body__group [data-test="title"]')).not.toBeNull()
      expect(body.querySelector('[data-window-body="1"] [data-test="content"]')).not.toBeNull()
      expect(body.querySelector('[data-test="footer"]')).not.toBeNull()

      expect(control.getAttribute('aria-expanded')).toBe('true')
      expect(control.getAttribute('aria-controls')).toBe(main.dataset.window)

      const openEvents = getWindowEvents(emits)

      expect(openEvents.at(-1)?.open).toBe(true)
      expect(openEvents.at(-1)?.id).toBe(main.dataset.window)
      expect(emits).toHaveBeenCalledWith('update:open', true)
    })

    it('should render in place without teleport in embedded mode', async () => {
      const { container } = mountWindow({ embedded: true, open: true })
      await flush()

      const main = getMain()!

      expect(main).not.toBeNull()
      expect(container.contains(main)).toBe(true)
      expect(document.querySelector('[data-window-teleport]')).toBeNull()
      expect(main.classList.contains('d1-window--embedded')).toBe(true)
    })

    it('should render the close button only when closeButton is enabled', async () => {
      mountWindow({ open: true, embedded: true })
      await flush()

      expect(getMain()?.querySelector('.d1-window__close')).toBeNull()
    })
  })

  describe('Closing and focus return', () => {
    it('should close via expose API, emit closed state, and return focus to the control by default', async () => {
      const { emits, exposed } = mountWindow()
      await flush()

      const control = getControl()

      control.focus()
      control.click()
      await flush()

      expect(exposed.getOpen()).toBe(true)

      document.querySelector<HTMLButtonElement>('[data-test="content"]')!.focus()
      expect(document.activeElement).not.toBe(control)

      await exposed.toClose()
      await finishClosing()

      expect(exposed.getOpen()).toBe(false)
      expect(getMain()).toBeNull()
      expect(getWindowEvents(emits).at(-1)?.open).toBe(false)
      expect(document.activeElement).toBe(control)
    })

    it('should not return focus to the control when disableFocusReturn is enabled', async () => {
      const { exposed } = mountWindow({ disableFocusReturn: true })
      await flush()

      const control = getControl()

      control.focus()
      control.click()
      await flush()

      expect(exposed.getOpen()).toBe(true)

      document.querySelector<HTMLButtonElement>('[data-test="content"]')!.focus()
      expect(document.activeElement).not.toBe(control)

      await exposed.toClose()
      await finishClosing()

      expect(exposed.getOpen()).toBe(false)
      expect(document.activeElement).not.toBe(control)
    })
  })

  describe('Keyboard interactions', () => {
    it('should close the open window on Escape and ignore Escape for persistent windows', async () => {
      const { exposed, props } = mountWindow()
      await flush()

      getControl().click()
      await flush()

      expect(exposed.getOpen()).toBe(true)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }))
      await finishClosing()

      expect(exposed.getOpen()).toBe(false)

      props.persistent = true
      await exposed.toOpen()
      await flush()

      expect(exposed.getOpen()).toBe(true)

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }))
      await flush()

      expect(exposed.getOpen()).toBe(true)
    })

    it('should ignore Enter on the control while IME composition is active', async () => {
      const { exposed } = mountWindow()
      await flush()

      getControl().dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', isComposing: true, bubbles: true }))
      await flush()

      expect(exposed.getOpen()).toBe(false)
    })
  })

  describe('Lifecycle cleanup', () => {
    it('should cancel the opening sequence on unmount and leave no self-rescheduling timers', async () => {
      const cancelSpy = vi.spyOn(globalThis, 'cancelAnimationFrame')
      const { emits } = mountWindow()
      await flush()

      getControl().click()
      await flush(8)

      const callsBeforeUnmount = emits.mock.calls.length

      cleanups.splice(0).reverse().forEach(unmount => unmount())

      expect(cancelSpy).toHaveBeenCalled()

      await flush(1000)

      expect(vi.getTimerCount()).toBe(0)
      expect(emits.mock.calls.length).toBe(callsBeforeUnmount)
    })
  })
})
