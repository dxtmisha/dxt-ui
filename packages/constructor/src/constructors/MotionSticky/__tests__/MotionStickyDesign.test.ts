// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, ref } from 'vue'
import { MotionSticky } from '../MotionSticky'
import { MotionStickyDesign } from '../MotionStickyDesign'
import type { MotionStickyPropsBasic } from '../props'
import type {
  MotionStickyClasses,
  MotionStickyComponents,
  MotionStickyExpose
} from '../types'

const createComponent = (ItemConstructor: typeof MotionSticky = MotionSticky) => {
  return defineComponent({
    props: {
      elementScroll: [String, Object] as unknown as () => MotionStickyPropsBasic['elementScroll'],
      classActivity: String,
      tag: String
    },
    emits: ['sticky'],
    setup(props, { emit, expose }) {
      const design = new MotionStickyDesign<
        MotionStickyComponents,
        MotionStickyExpose,
        MotionStickyClasses,
        MotionStickyPropsBasic
      >(
        'd1.motion-sticky',
        props,
        {
          emits: emit as never,
          classes: ref({ main: 'd1-motion-sticky' })
        },
        ItemConstructor
      )

      expose(design.expose())

      return design.render()
    }
  })
}

describe('MotionStickyDesign', () => {
  let activeApp: ReturnType<typeof createApp> | undefined
  let activeHost: HTMLElement | undefined

  afterEach(() => {
    activeApp?.unmount()
    activeApp = undefined
    activeHost?.remove()
    activeHost = undefined
    vi.restoreAllMocks()
  })

  it('should render root element with default tag, BEM class, and default slot', () => {
    const Comp = createComponent()
    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp({
      render: () => h(Comp, null, { default: () => h('span', 'Sticky content') })
    })
    activeApp.mount(activeHost)

    const root = activeHost.firstElementChild as HTMLElement
    expect(root.tagName).toBe('DIV')
    expect(root.classList.contains('d1-motion-sticky')).toBe(true)
    expect(root.textContent).toBe('Sticky content')
  })

  it('should render custom tag prop and expose elementHtml', () => {
    const Comp = createComponent()
    let vmInstance: { elementHtml?: HTMLElement } | undefined

    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp({
      render: () => h(Comp, {
        tag: 'header',
        ref: (el: unknown) => {
          vmInstance = el as { elementHtml?: HTMLElement }
        }
      })
    })
    activeApp.mount(activeHost)

    const root = activeHost.firstElementChild as HTMLElement
    expect(root.tagName).toBe('HEADER')
    expect(vmInstance?.elementHtml).toBe(root)
  })

  it('should merge external class, style, attributes, and event listeners via mergeProps', () => {
    const Comp = createComponent()
    const clickHandler = vi.fn()

    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp({
      render: () => h(Comp, {
        'class': 'custom-class',
        'style': 'color: red;',
        'data-test': 'sticky-box',
        'onClick': clickHandler
      })
    })
    activeApp.mount(activeHost)

    const root = activeHost.firstElementChild as HTMLElement
    expect(root.classList.contains('d1-motion-sticky')).toBe(true)
    expect(root.classList.contains('custom-class')).toBe(true)
    expect(root.getAttribute('style')).toContain('color: red')
    expect(root.getAttribute('data-test')).toBe('sticky-box')

    root.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(clickHandler).toHaveBeenCalledTimes(1)
  })

  it('should accept custom ItemConstructor in constructor', () => {
    const customSpy = vi.fn()

    class CustomMotionSticky extends MotionSticky {
      constructor(...args: ConstructorParameters<typeof MotionSticky>) {
        super(...args)
        customSpy()
      }
    }

    const Comp = createComponent(CustomMotionSticky)
    activeHost = document.createElement('div')
    document.body.appendChild(activeHost)
    activeApp = createApp({
      render: () => h(Comp)
    })
    activeApp.mount(activeHost)

    expect(customSpy).toHaveBeenCalledTimes(1)
  })
})
