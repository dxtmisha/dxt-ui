// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { MotionTransformDesign } from '../MotionTransformDesign'
import { __MOTION_TRANSFORM_TYPE_BODY_NAME } from '../basicTypes'
import { defaultsMotionTransform, type MotionTransformPropsBasic } from '../props'
import type {
  MotionTransformClasses,
  MotionTransformComponents,
  MotionTransformExpose,
  MotionTransformSlots
} from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
  vi.useRealTimers()
})

/**
 * Mounts the full MotionTransformDesign component with orchestrator and helpers into jsdom.
 *
 * Монтирует полный компонент MotionTransformDesign с оркестратором и помощниками в jsdom.
 * @param options mount configuration / конфигурация монтирования
 * @returns mounted helpers, props, emits spy, and expose API / смонтированные хелперы, свойства, шпион событий и expose API
 */
function mountMotionTransform(options: {
  initialProps?: MotionTransformPropsBasic
  attrs?: Record<string, unknown>
  slots?: MotionTransformSlots
} = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  cleanups.push(() => container.remove())

  const emits = vi.fn()
  const props = reactive<MotionTransformPropsBasic>({
    ...defaultsMotionTransform,
    ...options.initialProps
  })

  let exposed!: MotionTransformExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

  const Component = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-motionTransform': true
        }
      }))

      const design = new MotionTransformDesign<
        MotionTransformComponents,
        MotionTransformExpose,
        MotionTransformClasses,
        MotionTransformPropsBasic
      >('d1.motionTransform', props, {
        emits: emits as never,
        classes: classesToken
      })

      exposed = design.expose() as MotionTransformExpose & { elementHtml: Ref<HTMLDivElement | undefined> }
      return design.render()
    }
  })

  const Root = defineComponent({
    setup() {
      return () => h(
        Component,
        options.attrs ?? null,
        options.slots as Record<string, unknown> | undefined
      )
    }
  })

  const app = createApp(Root)
  app.mount(container)
  cleanups.push(() => app.unmount())

  return {
    container,
    props,
    emits,
    exposed
  }
}

describe('MotionTransform (Integration)', () => {
  it('should render full DOM structure, support click and Enter/IME keyboard interactions, and sync emits', async () => {
    const { container, emits, exposed } = mountMotionTransform({
      initialProps: {
        animationShow: false,
        open: false,
        inDom: false
      },
      slots: {
        head: slotProps => h('span', { class: 'head-inner' }, slotProps?.isOpen ? 'Open' : 'Closed'),
        body: () => h('div', { class: 'body-inner' }, 'Panel Content')
      }
    })

    await nextTick()

    const contextElement = container.querySelector('.d1-motionTransform__context') as HTMLElement
    const mainElement = container.querySelector('.d1-motionTransform') as HTMLElement
    const headElement = container.querySelector('.d1-motionTransform__head') as HTMLElement

    expect(contextElement).not.toBeNull()
    expect(mainElement).not.toBeNull()
    expect(headElement).not.toBeNull()
    expect(mainElement.dataset.open).toBe('none')
    expect(mainElement.dataset.show).toBe('none')
    expect(container.querySelector('.d1-motionTransform__body')).toBeNull()

    // Click head opens panel
    headElement.click()
    await nextTick()

    expect(exposed.getOpen()).toBe(true)
    expect(exposed.isShow()).toBe(true)
    expect(mainElement.dataset.open).toBe('open')
    expect(container.querySelector('.d1-motionTransform__body')).not.toBeNull()
    expect(container.querySelector('.head-inner')?.textContent).toBe('Open')
    expect(emits).toHaveBeenCalledWith('transform', expect.any(MouseEvent), { type: 'head', open: true })
    expect(emits).toHaveBeenCalledWith('transformLite', { type: 'head', open: true })
    expect(emits).toHaveBeenCalledWith('update:open', true)
    expect(emits).toHaveBeenCalledWith('update:modelOpen', true)

    // IME composition Enter must be ignored
    const composingEvent = new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true })
    Object.defineProperty(composingEvent, 'isComposing', { value: true })
    headElement.dispatchEvent(composingEvent)
    await nextTick()
    expect(exposed.getOpen()).toBe(true)

    // Regular Enter closes panel
    headElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', bubbles: true }))
    await nextTick()
    expect(exposed.getOpen()).toBe(false)
    expect(mainElement.dataset.open).toBe('none')
  })

  it('should support Escape closing via WindowEsc, outside auto-close, ignore elements, and close triggers', async () => {
    const ignoredElement = document.createElement('button')
    ignoredElement.id = 'ignored-trigger'
    document.body.appendChild(ignoredElement)
    cleanups.push(() => ignoredElement.remove())

    const { container, exposed } = mountMotionTransform({
      initialProps: {
        animationShow: false,
        clickOpen: true,
        autoClose: true,
        ignore: ignoredElement
      },
      slots: {
        head: () => h('span', 'Trigger'),
        body: () => h('button', { class: 'd1-motionTransform--close' }, 'Close')
      }
    })

    await nextTick()

    // Open via expose API
    exposed.toOpen()
    await nextTick()
    expect(exposed.getOpen()).toBe(true)

    // Clicking ignored element keeps it open
    ignoredElement.click()
    await nextTick()
    expect(exposed.getOpen()).toBe(true)

    // Clicking inside close trigger closes it
    const closeButton = container.querySelector('.d1-motionTransform--close') as HTMLButtonElement
    expect(closeButton).not.toBeNull()
    closeButton.click()
    await nextTick()
    expect(exposed.getOpen()).toBe(false)

    // Reopen and close via Escape key
    exposed.toOpen()
    await nextTick()
    expect(exposed.getOpen()).toBe(true)

    document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', bubbles: true }))
    await nextTick()
    expect(exposed.getOpen()).toBe(false)

    // Reopen and close via outside click
    exposed.toOpen()
    await nextTick()
    expect(exposed.getOpen()).toBe(true)

    const outsideButton = document.createElement('button')
    document.body.appendChild(outsideButton)
    cleanups.push(() => outsideButton.remove())
    outsideButton.click()
    await nextTick()
    expect(exposed.getOpen()).toBe(false)
  })

  it('should handle animated transitions, teleport window mode, scrim rendering, and clean up timers on unmount', async () => {
    vi.useFakeTimers()
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1000)
    vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(800)

    const originalGetComputedStyle = window.getComputedStyle.bind(window)
    vi.spyOn(window, 'getComputedStyle').mockImplementation((element) => {
      const style = originalGetComputedStyle(element)
      return {
        ...style,
        getPropertyValue: (property: string) => (
          property === __MOTION_TRANSFORM_TYPE_BODY_NAME
            ? '"--WINDOW--"'
            : style.getPropertyValue(property)
        )
      } as CSSStyleDeclaration
    })

    const { container, exposed } = mountMotionTransform({
      initialProps: {
        animationShow: true,
        open: false
      },
      slots: {
        head: () => h('div', 'Header'),
        body: () => h('div', 'Window Body')
      }
    })

    await nextTick()

    const contextElement = container.querySelector('.d1-motionTransform__context') as HTMLElement
    const mainElement = container.querySelector('.d1-motionTransform') as HTMLElement
    vi.spyOn(contextElement, 'getBoundingClientRect').mockReturnValue({
      top: 20,
      left: 10,
      width: 200,
      height: 50,
      right: 210,
      bottom: 70,
      x: 10,
      y: 20,
      toJSON: () => ({})
    })

    // Open with animation
    exposed.toOpen()
    await nextTick()
    expect(exposed.isShow()).toBe(true)
    expect(mainElement.dataset.show).toBe('show')

    // First frame computes sizes and enables teleport; second frame opens
    vi.advanceTimersToNextFrame()
    await nextTick()
    expect(document.body.querySelector('.d1-motionTransform__scrim')).not.toBeNull()

    vi.advanceTimersToNextFrame()
    await nextTick()
    expect(exposed.getOpen()).toBe(true)
    expect(mainElement.dataset.open).toBe('open')
    expect(mainElement.dataset.teleport).toBe('teleport')

    // Fallback timeout resets temporary show state
    vi.runAllTimers()
    await nextTick()
    expect(mainElement.dataset.show).toBe('none')
    expect(exposed.getOpen()).toBe(true)

    // Close and finish via fallback timer
    exposed.toClose()
    vi.advanceTimersToNextFrame()
    vi.advanceTimersToNextFrame()
    vi.runAllTimers()
    await nextTick()
    expect(exposed.getOpen()).toBe(false)
    expect(exposed.isShow()).toBe(false)
    expect(document.body.querySelector('.d1-motionTransform__scrim')).toBeNull()
  })

  it('should react to props.open changes and avoid opening when clickOpen is false', async () => {
    const { container, props, exposed } = mountMotionTransform({
      initialProps: {
        animationShow: false,
        clickOpen: false,
        open: false
      }
    })

    await nextTick()
    const headElement = container.querySelector('.d1-motionTransform__head') as HTMLElement

    headElement.click()
    await nextTick()
    expect(exposed.getOpen()).toBe(false)

    props.open = true
    await nextTick()
    expect(exposed.getOpen()).toBe(true)

    props.open = false
    await nextTick()
    expect(exposed.getOpen()).toBe(false)
  })
})
