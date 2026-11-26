// @vitest-environment jsdom
import './testWarnings'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Snackbar } from '../Snackbar'
import { SnackbarDesign } from '../SnackbarDesign'
import type { SnackbarProps } from '../props'
import type { SnackbarClasses, SnackbarComponents, SnackbarExpose } from '../types'

/** Mocked visibility state for integration tests / Мок состояния видимости для интеграционных тестов */
let mockElementVisible = true

vi.mock('@dxtmisha/functional-basic', async () => {
  const actual = await vi.importActual<typeof import('@dxtmisha/functional-basic')>('@dxtmisha/functional-basic')
  return {
    ...actual,
    isElementVisible: () => mockElementVisible
  }
})

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

beforeEach(() => {
  mockElementVisible = true
  vi.useFakeTimers()
  let frameId = 0
  vi.stubGlobal('requestAnimationFrame', vi.fn((callback: FrameRequestCallback) => {
    const id = ++frameId
    setTimeout(() => callback(0), 0)
    return id
  }))
  vi.stubGlobal('cancelAnimationFrame', vi.fn())
})

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.unstubAllGlobals()
  vi.useRealTimers()
  vi.restoreAllMocks()
})

const SnackbarItemMock = defineComponent({
  name: 'SnackbarItemMock',
  props: {
    label: String,
    description: String,
    value: String
  },
  emits: ['close'],
  setup(props, { emit }) {
    return () => h(
      'div',
      {
        'class': 'mock-snackbar-item',
        'data-value': props.value
      },
      [
        h('span', { class: 'mock-snackbar-label' }, props.label ?? ''),
        props.description ? h('span', { class: 'mock-snackbar-desc' }, props.description) : null,
        h(
          'button',
          {
            class: 'mock-snackbar-close',
            type: 'button',
            onClick: () => emit('close', props.value)
          },
          'Close'
        )
      ]
    )
  }
})

/** Mounts a full Snackbar integration harness / Монтирует полный интеграционный стенд Snackbar */
function mountSnackbar(initialProps: SnackbarProps = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  cleanups.push(() => container.remove())

  const props = reactive<SnackbarProps>({ ...initialProps })
  const emits = vi.fn()
  let exposed!: SnackbarExpose
  let logicInstance!: Snackbar

  const Host = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-snackbar': true,
          'd1-snackbar--full': Boolean(props.full),
          'd1-snackbar--all': Boolean(props.all)
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--d1-snackbar-padding': '16px'
      }))

      const design = new SnackbarDesign<
        SnackbarComponents,
        SnackbarExpose,
        SnackbarClasses,
        SnackbarProps
      >('d1.snackbar', props, {
        emits,
        classes: classesToken,
        styles: stylesToken,
        components: {
          snackbarItem: SnackbarItemMock
        }
      })

      exposed = design.expose()
      logicInstance = (design as unknown as { item: Snackbar }).item
      return design.render()
    }
  })

  const app = createApp(Host)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return { app, container, props, emits, exposed, logicInstance }
}

describe('Snackbar (Integration)', () => {
  describe('Initial empty state and lazy dependency allocation', () => {
    it('should render nothing when empty and keep event and text uninstantiated', async () => {
      const { exposed, logicInstance } = mountSnackbar()
      await nextTick()

      expect(exposed.isItem()).toBe(false)
      expect(document.body.querySelector('.d1-snackbar')).toBeNull()
      expect(logicInstance.hasInstance('teleport')).toBe(true)
      expect(logicInstance.hasInstance('event')).toBe(false)
      expect(logicInstance.hasInstance('text')).toBe(false)
    })
  })

  describe('Queue rendering, priority separation, and ARIA region', () => {
    it('should teleport notifications to document.body with ARIA region, priority <aside>, and space separator', async () => {
      const { exposed, props } = mountSnackbar({
        full: true,
        textNotifications: 'App Notifications'
      })

      exposed.add({
        value: 'normal-1',
        delay: -1,
        data: { label: 'Saved draft', description: 'All changes synced' }
      })
      await nextTick()

      const root = document.body.querySelector('.d1-snackbar') as HTMLDivElement
      expect(root).not.toBeNull()
      expect(root.classList.contains('d1-snackbar--full')).toBe(true)
      expect(root.getAttribute('role')).toBe('region')
      expect(root.getAttribute('aria-label')).toBe('App Notifications')
      expect(root.querySelector('.d1-snackbar__space')).toBeNull()

      const normalWrapper = root.querySelector('div.d1-snackbar__item[data-snackbar-item="normal-1"]')
      expect(normalWrapper).not.toBeNull()
      expect(normalWrapper?.textContent).toContain('Saved draft')
      expect(normalWrapper?.textContent).toContain('All changes synced')

      // Add high-priority item -> renders <aside> with priority class and separator space
      exposed.add({
        value: 'urgent-1',
        highPriority: true,
        delay: -1,
        data: { label: 'Connection lost' }
      })
      await nextTick()

      const priorityWrapper = root.querySelector('aside.d1-snackbar__item.d1-snackbar__priority[data-snackbar-item="urgent-1"]')
      expect(priorityWrapper).not.toBeNull()
      expect(priorityWrapper?.textContent).toContain('Connection lost')
      expect(root.querySelector('.d1-snackbar__space')).not.toBeNull()

      // Reactive prop updates reflect on root
      props.all = true
      await nextTick()
      expect(root.classList.contains('d1-snackbar--all')).toBe(true)
    })
  })

  describe('User interactions, hover pause/resume, auto-close, and composed onClose', () => {
    it('should emit show, pause on mouseenter, resume on mouseleave, and emit hide on close', async () => {
      const { emits, exposed } = mountSnackbar({ delay: 2000 })

      exposed.add({ value: 'interactive-1', data: { label: 'Uploaded' } })
      await nextTick()

      // Flush rAF to trigger visibility check and show event
      vi.advanceTimersByTime(0)
      expect(emits).toHaveBeenCalledWith('show', 'interactive-1', expect.objectContaining({ value: 'interactive-1' }))

      const root = document.body.querySelector('.d1-snackbar') as HTMLDivElement
      const itemWrapper = root.querySelector('[data-snackbar-item="interactive-1"]') as HTMLDivElement

      // Hover pauses auto-close timer
      vi.advanceTimersByTime(1000)
      root.dispatchEvent(new MouseEvent('mouseenter'))
      vi.advanceTimersByTime(10_000)
      expect(itemWrapper.classList.contains('d1-snackbar--hide')).toBe(false)

      // Mouse leave resumes remaining ~1256ms
      root.dispatchEvent(new MouseEvent('mouseleave'))
      vi.advanceTimersByTime(1256)
      expect(itemWrapper.classList.contains('d1-snackbar--hide')).toBe(true)

      // Transition ends -> element removed and hide emitted
      itemWrapper.dispatchEvent(new Event('transitionend'))
      await nextTick()

      expect(exposed.isItem()).toBe(false)
      expect(document.body.querySelector('.d1-snackbar')).toBeNull()
      expect(emits).toHaveBeenCalledWith('hide', 'interactive-1', expect.objectContaining({ value: 'interactive-1' }))
    })

    it('should compose caller item.data.onClose with internal close handler via mergeProps', async () => {
      const callerOnClose = vi.fn()
      const { emits, exposed } = mountSnackbar()

      exposed.add({
        value: 'closable-1',
        delay: -1,
        data: {
          label: 'Dismiss me',
          onClose: callerOnClose
        }
      })
      await nextTick()

      const closeButton = document.body.querySelector('.mock-snackbar-close') as HTMLButtonElement
      closeButton.click()

      const itemWrapper = document.body.querySelector('[data-snackbar-item="closable-1"]') as HTMLDivElement
      expect(itemWrapper.classList.contains('d1-snackbar--hide')).toBe(true)
      expect(callerOnClose).toHaveBeenCalledWith('closable-1')

      vi.advanceTimersByTime(512)
      await nextTick()

      expect(exposed.isItem()).toBe(false)
      expect(emits).toHaveBeenCalledWith('hide', 'closable-1', expect.objectContaining({ value: 'closable-1' }))
    })
  })

  describe('Custom component stability, Unicode, XSS escaping, and unmount cleanup', () => {
    it('should preserve stateful custom component identity across sibling updates and render functional components', async () => {
      const mountCount = vi.fn()
      const StatefulToast = defineComponent({
        props: { label: String },
        setup(props) {
          mountCount()
          const counter = ref(0)
          return () => h(
            'button',
            {
              class: 'stateful-toast',
              onClick: () => { counter.value++ }
            },
            `${props.label}:${counter.value}`
          )
        }
      })
      const FunctionalToast = (props: { label?: string }) => h('span', { class: 'fn-toast' }, props.label)

      const { exposed } = mountSnackbar()

      exposed.add({ value: 'stateful', delay: -1, component: StatefulToast, data: { label: 'Count' } })
      await nextTick()

      const button = document.body.querySelector('.stateful-toast') as HTMLButtonElement
      button.click()
      await nextTick()
      expect(button.textContent).toBe('Count:1')
      expect(mountCount).toHaveBeenCalledTimes(1)

      // Adding a sibling snackbar must NOT remount StatefulToast
      exposed.add({ value: 'fn', delay: -1, component: FunctionalToast, data: { label: 'Fn Works' } })
      // String component tag is also supported
      exposed.add({ value: 'tag', delay: -1, component: 'output', data: { 'data-tag-toast': 'yes' } })
      await nextTick()

      expect(mountCount).toHaveBeenCalledTimes(1)
      expect(document.body.querySelector('.stateful-toast')?.textContent).toBe('Count:1')
      expect(document.body.querySelector('.fn-toast')?.textContent).toBe('Fn Works')
      expect(document.body.querySelector('output[data-tag-toast="yes"]')).not.toBeNull()

      // Re-adding with an existing value updates the entry in place without duplicate DOM nodes
      exposed.add({ value: 'fn', delay: -1, component: FunctionalToast, data: { label: 'Fn Updated' } })
      await nextTick()

      expect(document.body.querySelectorAll('[data-snackbar-item="fn"]')).toHaveLength(1)
      expect(document.body.querySelector('.fn-toast')?.textContent).toBe('Fn Updated')
    })

    it('should handle Unicode, special characters in value, and XSS payloads safely', async () => {
      const { exposed } = mountSnackbar()
      const xssPayload = '<script>alert("xss")</script>'
      const unicodeValue = 'id-"tiếng Việt"-[0]'

      exposed.add({
        value: unicodeValue,
        delay: -1,
        data: {
          label: xssPayload,
          description: 'Học tiếng Việt • Уведомление 🚀'
        }
      })
      await nextTick()

      const root = document.body.querySelector('.d1-snackbar') as HTMLDivElement
      expect(root.querySelector('script')).toBeNull()
      expect(root.querySelector('.mock-snackbar-label')?.textContent).toBe(xssPayload)
      expect(root.querySelector('.mock-snackbar-desc')?.textContent).toBe('Học tiếng Việt • Уведомление 🚀')

      exposed.remove(unicodeValue)
      vi.advanceTimersByTime(512)
      await nextTick()
      expect(exposed.isItem()).toBe(false)
    })

    it('should clean up all timers and listeners when component unmounts mid-flight', async () => {
      mockElementVisible = false
      const { app, emits, exposed } = mountSnackbar({ delay: 1000 })

      exposed.add({ value: 'pending-1', data: { label: 'Pending' } })
      await nextTick()
      vi.advanceTimersByTime(0) // starts 128ms retry polling

      app.unmount()
      emits.mockClear()

      vi.advanceTimersByTime(30_000)
      expect(emits).not.toHaveBeenCalled()
    })
  })
})
